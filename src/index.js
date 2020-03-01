import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import { ScatterplotLayer } from '@deck.gl/layers';
import mapStyles from './map-styles';

const sourceURL = 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=OBJECTID%20ASC&resultOffset=0&resultRecordCount=999&cacheHint=true&quantizationParameters=%7B%22mode%22%3A%22edit%22%7D';
const sourceData = [];

const toolHover = ({object, x, y}) => {
    const el = document.getElementById('tooltip');
    if (object) {
      const country = object.attributes["Country_Region"];
      const state = object.attributes["Province_State"];
      const confirmed = object.attributes["Confirmed"];
      const deaths = object.attributes["Deaths"];
      const recovered = object.attributes["Recovered"];
    
      const rgbC = confirmed > 0 ? "(255,140,0)" : "(255,255,255)";
      const rgbD = deaths > 0 ? "(200,0,40)" : "(255,255,255)";
      const rgbR = recovered > 0 ? "(40,200,0)" : "(255,255,255)";

      el.innerHTML = `<div> 
                        <strong>Country: ${country}</strong><br>
                        <span>State: ${state || "Unknown"}</span>
                      </div>
                      <hr>
                      <span style="color: rgb${rgbC}">${confirmed}</span> Confirmed cases<br>
                      <span style="color: rgb${rgbD}">${deaths}</span> Deaths<br>
                      <span style="color: rgb${rgbR}">${recovered}</span> Recovered<br>`
      el.style.display = 'block';
      el.style.visibility = 'visible';
      el.style.opacity = 0.9;
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      el.style.bottom = 'auto';
    } else {
      el.style.visibility = 'hidden';
      el.style.opacity = 0;
    }
};

const toolClick = ({object}) => {
    const el = document.getElementById('tooltip');
    if (object) {
      const country = object.attributes["Country_Region"];
      const state = object.attributes["Province_State"];
      const confirmed = object.attributes["Confirmed"];
      const deaths = object.attributes["Deaths"];
      const recovered = object.attributes["Recovered"];
    
      const rgbC = confirmed > 0 ? "(255,140,0)" : "(255,255,255)";
      const rgbD = deaths > 0 ? "(200,0,40)" : "(255,255,255)";
      const rgbR = recovered > 0 ? "(40,200,0)" : "(255,255,255)";

      el.innerHTML = `<div> 
                        <strong>Country: ${country}</strong><br>
                        <span>State: ${state || "Unknown"}</span>
                      </div>
                      <hr>
                      <span style="color: rgb${rgbC}">${confirmed}</span> Confirmed cases<br>
                      <span style="color: rgb${rgbD}">${deaths}</span> Deaths<br>
                      <span style="color: rgb${rgbR}">${recovered}</span> Recovered<br>`
      el.style.display = 'block';
      el.style.visibility = 'visible';
      el.style.opacity = 0.9;
      el.style.left = '0px';
      el.style.top = 'auto';
      el.style.bottom = '0px';
    } else {
      el.style.visibility = 'hidden';
      el.style.opacity = 0;
    }
};

const scatterplot = () => new ScatterplotLayer({
    id: 'scatter',
    data: sourceData,
    opacity: 0.8,
    filled: true,
    radiusMinPixels: 10,
    radiusMaxPixels: 50,
    getPosition: d => [d.attributes["Long_"],d.attributes["Lat"]],
    getFillColor: d => d.attributes["Recovered"] == (d.attributes["Confirmed"] + d.attributes["Deaths"]) ? [40, 200, 0, 100] : d.attributes["Deaths"] > 0 ? [200, 0, 40, 150] : [255, 140, 0, 100],
    getRadius: d => d.attributes["Confirmed"]**2,

    pickable: true,
    onHover: toolHover,
    onClick: toolClick,
});

window.onload = () => {
    const stats = document.getElementById('stats');
    const conf = stats.getElementsByClassName('confirmed')[0].getElementsByTagName('span')[0];
    const dths = stats.getElementsByClassName('deaths')[0].getElementsByTagName('span')[0];
    const rec = stats.getElementsByClassName('recov')[0].getElementsByTagName('span')[0];
    const lastDate = stats.getElementsByClassName('time')[0];

    let cases = 0;
    let deaths = 0;
    let recov = 0;
    let last = 0;

    fetch(sourceURL).then( res => res.json() ).then( data => {
        data.features.forEach( obj => {
            cases += obj.attributes["Confirmed"];
            deaths += obj.attributes["Deaths"];
            recov += obj.attributes["Recovered"];
            last = last > obj.attributes["Last_Update"] ? last : obj.attributes["Last_Update"];

            sourceData.push( obj );
        });

        conf.innerHTML = cases;
        dths.innerHTML = deaths;
        rec.innerHTML = recov;
        let date = new Date( last );

        lastDate.innerHTML = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

        const tag = document.createElement('script');
        tag.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBns4UUCKIfb_3xOesTSezA9GbEyuIU7XA&callback=initMap";
        document.getElementsByTagName("head")[0].appendChild(tag);
    });
}

window.initMap = () => {

    const map = new google.maps.Map( document.getElementById( 'map' ), {
        center: {lat: 0, lng: 0},
        zoom: 3,
        minZoom: 3,
        maxZoom: 6,
        streetViewControl: false,
        disableDefaultUI: true,
        noClear: true,
        styles: mapStyles,
        restriction: {
            latLngBounds: {
                north: 85,
                south: -85,
                west: -180,
                east: 180
            },
            strictBounds: true
        }

    } );

    const overlay = new GoogleMapsOverlay({
        layers: [
            scatterplot(),
        ],
    });

    
    overlay.setMap(map);

}