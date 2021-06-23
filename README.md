<!--
*** Readme template used: Best-README-Template
*** https://github.com/othneildrew/Best-README-Template
-->
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="#">
    <img src="readme-assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Covid-19 Live Map</h3>

  <p align="center">
    An covid-19 map made at the beginning of the pandemic
    <br />
    <a href="#about-the-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://yrodrigo2219.github.io/covid-19-map/">View Live</a>
    ·
    <a href="https://github.com/yRodrigo2219/covid-19-map/issues">Report Bug</a>
    ·
    <a href="https://github.com/yRodrigo2219/covid-19-map/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Covid-19 Map Screenshot][product-screenshot]](https://yrodrigo2219.github.io/covid-19-map/)

At the time I made this project, there weren't as many covid-19 maps and I wanted a reason to learn how to start using maps/maps overlays in my projects (basic notions that came in handy later at my university course where we had to make a full application that relied on maps to show its results).


### Built With

This project is built with vanilla JavaScript and HTML, using:
* [Deck.gl](https://deck.gl/)
* [Google Maps API](https://developers.google.com/maps)



<!-- GETTING STARTED -->
## Getting Started

This project is not meant to be installed locally, but you can check the [Live version](https://yrodrigo2219.github.io/covid-19-map/).


<!-- USAGE EXAMPLES -->
## Usage

The usage is straight forward, you can drag to pan the map, hover to show the exact numbers for the local and scroll to change the zoom.



<!-- ROADMAP -->
## Roadmap

Only one thing is meant to change, and it is how the circle expands.
At the moment its expanding at a power of two until it hits a threshold. With the current state of the pandemic, it needs some adjustments to make it proportional with how many cases are there and precisely reflect how affected some parts of the world are.



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Rodrigo - [@y2219_](https://twitter.com/y2219_) - [Discord](https://discordapp.com/users/308349999719251988)


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/yRodrigo2219/covid-19-map.svg?style=for-the-badge
[contributors-url]: https://github.com/yRodrigo2219/covid-19-map/contributors
[issues-shield]: https://img.shields.io/github/issues/yRodrigo2219/covid-19-map.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/yRodrigo2219/covid-19-map/issues
[license-shield]: https://img.shields.io/github/license/yRodrigo2219/covid-19-map.svg?style=for-the-badge
[license-url]: https://github.com/yRodrigo2219/covid-19-map/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/y2219
[product-screenshot]: readme-assets/screenshot.png
