<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://everuse-fe-c2ebec288f10.herokuapp.com/">
    <img src="https://user-images.githubusercontent.com/118572701/265548814-8cc28897-0066-40a7-9f92-bb25de9c3247.png" alt="main page">
  </a>
  <h3 align="center">EverUse</h3>
  <p align="center">
    Welcome to the front end repository for EverUse!
    EverUse is a web application built for the Turing School of Software and Design's Mod 4 Capstone project. Read more about project requirements:https://mod4.turing.edu/projects/capstone/
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#Front End Repository">Front End Repository</a></li>
        <li><a href="#Back End Repository">Back End Repository</a></li>
      </ul>
    </li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#Technical Solutions">Technical Solutions</a></li>
    <li><a href="#Roadmap">Roadmap</a></li
    <li><a href="#Project Contributor Contact Info">Project Contributor Contact Info</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

EverUse is a living breathing company that upcycles and repurposes discarded materials into jewelry and accessories. We aim to enhance the company's exposure and functionality by providing them with a full-stack web application.

In order to meet the business needs of this small company, we created a front end application focused on streamlining the user experience by beautifully displaying products and allowing buyers to easily place orders. After an order is submitted, the customer receives a detailed confirmation email, and the sellers receive an emailed order form containing the customer's contact information and requested items. Payment is handled externally, in line with the businesses current practices. 

This application was built with scalability and longevity in mind, and we are proud to have created a website tailored to the company's specific needs.

[See it in action](https://everuse-fe-c2ebec288f10.herokuapp.com/)

Github repositories:
* Front End: [![Github][Github]][project-fe-gh-url]
* Back End:  [![Github][Github]][project-be-gh-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![JavaScript][JavaScript]
* [![React][React]][React-url]
* [![Sass][Sass]][Sass-url]
* [![Cypress][Cypress]][Cypress-url]
* [![Heroku][Heroku]][Heroku-url]
* [![Circleci][Circleci]][CircleCI-url]
* [![Graphql][GraphQL]][GraphQL-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To demo EverUse on your local machine, follow these steps:

### Front End Repository
1. Clone down this repository
1. `cd` into the directory
1. Run `npm i` to install dependencies
1. Run `npm  start` to view live in your browser

### Back End Repository
1. Clone the back end [here](https://github.com/EverUse/EverUse-BE)
1. Follow instuctions in the back end repo `README`

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Testing -->
# Testing
We utilized Cypress for all end-to-end user testing.
Run `npm run cypress open` to view and run the test suite. 
*All tests passing at time of writing.*

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Technical Solutions -->
## Technical Solutions:
As part of the Capstone project requirements, the EverUse front end team challenged ourselves to learn new technologies within the 14-day design and development process. We selected the following based on the challenges we anticipated facing while building out our MVP, and adjusted our choices to reflect our individual and team learning goals as well as blockers that came up during the course of working on the project.

### GraphQL
* Challenge: Flexiblity of network requests
* Solution: GraphQL allowed us to use queries to obtain the exact data we needed at every stage of the application, streamlining our network request process.

### React Swiper
* Challenge: Ease of navigation on mobile
* Solution: This application was designed with a mobile-first mindset. Because of the relatively small inventory size at this time, the design of the Products section was intentinoal, but the carousel feature limited navigability on mobile devices. We chose to use React Swiper to create a seamless scrolling experience, so all users can view inventory with ease.

### React Cookies
* Challenge: Data persistence without an assumed user
* Solution: Because of the small scale of our MVP, user data was not created on the back end of the application. We implemented cookies to allow the current user to preserve their cart on page refresh. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Roadmap -->
## Roadmap
Additional features, functionality, and potential refactors:
  * Refactor with TypeScript for type checking
  * Create a "Continue Shopping" button that appears on every page
  * Create a user profile with login that allows users to view their previous orders
  * Create an admin profile and login that allows business owners to edit inventory details, including adding new products
  * Add estimated shipping costs to Request Summary sections

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Project Contributor Contact Info
* Alec Livaditis: [![Linkedin][Linkedin-shield]][alec-li-url] [![Github][Github]][alec-gh-url]
* Taranveer Singh: [![Linkedin][Linkedin-shield]][taranveer-li-url] [![Github][Github]][taranveer-gh-url]
* Jamie Caudill: [![Linkedin][Linkedin-shield]][jamie-li-url] [![Github][Github]][jamie-gh-url]
* Rachel Prather: [![Linkedin][Linkedin-shield]][rachel-li-url] [![Github][Github]][rachel-gh-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* Special thanks to [EverUse UpCycled Products](https://www.instagram.com/everuseproducts/?hl=en)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/EverUse/EverUse-FE.svg?style=flat
[contributors-url]: https://github.com/EverUse/EverUse-FE/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/EverUse/EverUse-FE.svg?style=flat
[forks-url]: https://github.com/EverUse/EverUse-FE/forks
[stars-shield]: https://img.shields.io/github/stars/EverUse/EverUse-FE.svg?style=flat
[stars-url]: https://github.com/jcjurado3/civic_voice_plus_be/stargazers
[issues-shield]: https://img.shields.io/github/issues/EverUse/EverUse-FE.svg?style=flat
[issues-url]: https://github.com/EverUse/EverUse-FE/issues
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[circleci-badge]: https://circleci.com/gh/EverUse/EverUse-FE.svg?style=shield&circle-token=77487a9c4e7a05ab874ab41c0bb4690220dc2d3c
[alec-li-url]: https://www.linkedin.com/in/alec-livaditis/
[taranveer-li-url]: https://www.linkedin.com/in/taranveersingh93/
[jamie-li-url]: https://www.linkedin.com/in/jamie-caudill/
[rachel-li-url]: https://www.linkedin.com/in/rachel-soae-prather/
[Github]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[project-fe-gh-url]: https://github.com/EverUse/EverUse-FE
[project-be-gh-url]: https://github.com/EverUse/EverUse-BE
[alec-gh-url]: https://github.com/alivaditis
[taranveer-gh-url]: https://github.com/taranveersingh93
[jamie-gh-url]: https://github.com/JamieCaudill
[rachel-gh-url]: https://github.com/rachelsoae
[JavaScript]: https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[React]: https://img.shields.io/badge/React-%2361DAFB?style=for-the-badge&logo=react&logoColor=black
[React-url]: https://react.dev/
[Sass]: https://img.shields.io/badge/Sass-%23CC6699?style=for-the-badge&logo=sass&logoColor=white
[Sass-url]: https://sass-lang.com/
[Cypress]: https://img.shields.io/badge/Cypress-%2317202C?style=for-the-badge&logo=cypress&logoColor=white
[Cypress-url]: https://docs.cypress.io/guides/overview/why-cypress
[Heroku]: https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white
[Heroku-url]: https://devcenter.heroku.com/articles/getting-started-with-rails7
[CircleCI]: https://img.shields.io/badge/circleci-343434?style=for-the-badge&logo=circleci&logoColor=white
[CircleCI-url]: https://circleci.com/
[GraphQL]: https://img.shields.io/badge/Graphql-E10098?style=for-the-badge&logo=graphql&logoColor=white
[GraphQL-url]: https://graphql.org/