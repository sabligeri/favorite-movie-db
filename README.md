## PROJECT: MY FAVORITE MOVIES DB

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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

My Favorite Movies DB is a web application that allows users to search for movies, add them to their favorites list, and manage their favorite movies. The frontend is built using JavaScript and React, and the backend uses Node.js and MongoDB.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![JavaScript][JavaScript]][JavaScript-url]
* [![React][React]][React-url]
* [![Vite][Vite]][Vite-url]
* [![Node.js][Node.js]][Node.js-url]
* [![MongoDB][MongoDB]][MongoDB-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

* Node.js
* MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/favorite-movie-db.git
    cd favorite-movie-db
    ```

2. Install NPM packages:
    ```bash
    cd .\client\movie-poster-db\
    npm install
    ```

3. Add database connection:
    *  Navigate to the server folder (like in the previous step)
    * Create a .env file based on the .env.sample file
    * Insert your MongoDB connection URL

5. Set environment variables for your database in the `.env` file:
    ```env
    MOVIE_DB=yourmoviedbconnectionstring
    ```

6. Start the application:
    ```bash
    cd .\client\movie-poster-db\
    npm run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SCREENSHOTS -->
## Screenshots

### Main Page
![Login Page](https://github.com/sabligeri/favorite-movie-db/blob/main/images/main.png)

### Searchbar in progress
![Main Page](https://github.com/sabligeri/favorite-movie-db/blob/main/images/search.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Gergely Sábli - [LinkedIn](https://www.linkedin.com/in/gergely-s%C3%A1bli-357110293/) - sabligergo@gmail.com

Project Link: [https://github.com/your-username/my-favorite-movies-db](https://github.com/your-username/my-favorite-movies-db)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

### Contributors
* [B-Apolka](https://github.com/B-Apolka)**: For significant contributions to the development and coding of the project.
* [Igirb](https://github.com/igirb)**: For valuable input in design and functionality improvements.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://www.javascript.com/
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node.js-url]: https://nodejs.org/
[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
