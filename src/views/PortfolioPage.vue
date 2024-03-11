<template>
  <div class="work">
  <h2>Some things I've worked on</h2>
  <div class="projects-container">
    <div class="project" v-for="project in projects" :key="project.id">
      <img :src="project.image" :alt="project.title" class="project-image" />
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      
        <a :href="project.link" class="read-more-btn" target="_blank">READ  MORE</a>
    </div>
  </div>
  </div>
</template>

<script>
import swing from "../assets/Swing.jpg"
import short from "../assets/short.jpg"
import snake from "../assets/snake2.jpg"
import graph from "../assets/graph.png"
import illumi from "../assets/ILL.png"
import display from "../assets/display.jpg"
import recruiting from "../assets/recr.png"

export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          image: swing,
          title: "SwingMood",
          description: "A web application that suggests music using Vue, Firebase and two APIs.",
          link: "https://github.com/Gaasll/swing1",
        },
        {
          id: 2,
          image: illumi,
          title: "Illumi-Dance",
          description: "A lighting product with a web-app using Arduino Uno in Vue.",
          link: "https://github.com/Gaasll/Illumi-Dance",
        },

        {
          id: 3,
          image: recruiting,
          title: "Recruitment System",
          description: "A robust recruitment system using modern technologies such as Node.js, Express, Next.js, React, TypeScript, and PostgreSQL.",
          link: "https://github.com/danti58/Frontend_IV1201",
        },
     
        {
          id: 4,
          image: snake,
          title: "Snake Game",
          description: "A simple snake game for UNO32 with Basic I/O Shield.",
          link: "https://github.com/Gaasll/OperationsInt" ,
        },
        {
          id: 5,
          image: display,
          title: "Social Security Number",
          description: "Using Arduino Uno and a breadboard got my social security number on a 7-segment display.",
          //link: "images/display.jpg" ,
        },
        {
          id: 6,
          image: graph,
          title: "Soundgood Music School",
          description: "Planned and developed a database that handles a schools data using SQL and pgAdmin.",
          link: "https://github.com/Gaasll/Data_Storage_Project",
        },
        {
          id: 7,
          image: short,
          title: "The Shortest Path",
          description: "Created a memory-efficient algorithm that finds the shortest distance between X and Y.",
          link: "https://github.com/Gaasll/shortestWay/tree/main",
        },
      ],
    };
  },
};
</script>

<style scoped>

.work{
  background-color: #FFFFFF;
  padding: 20px; 
}
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 4%;
  text-align: center;
  
  
  
  
}

.project {
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
}

.project-image{
height: 260px;
width: 280px;
border-radius:4px;
margin-top: 5%;

 border-right: 2px solid rgb(185, 184, 184);
 border-right: 2px solid rgb(102, 101, 101);

}

h3 {
  font-size: 20px;
  color: #201e23;
  font-family: 'Urbanist', sans-serif;
  text-align: center;
  margin-top: 1%;
  font-weight: lighter;
}

h2 {
  font-size: 20px;
  color: #201e23;
  font-family: 'Urbanist', sans-serif;
  text-align: center;
  font-weight: lighter;

 
}


 p {
  font-size: 10px;
  color: #201e23;
  font-family: 'Urbanist', sans-serif;
  width: 180px ;
  margin: 0 auto;
  margin-bottom: 2%;
  
  
}

@media (max-width: 768px) {
  .project {
    width: calc(50% - 20px);
  }
}

.read-more-btn {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		background-color: transparent;
		border-radius: 4px;
		border: 0;
		box-shadow: inset 0 0 0 0.5px rgba(144, 144, 144, 0.5);
		color: #555 !important;
		cursor: pointer;
		display: inline-block;
		font-size: 8px;
		font-weight: 400;
		height: 2.75em;
		letter-spacing: 0.125em;
		line-height: 2.75em;
		padding: 0 2em;
		text-align: center;
		text-decoration: none;
		text-indent: 0.125em;
		text-transform: uppercase;
		white-space: nowrap;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
}


h3 {
  font-size: 15px;
  color: #201e23;
  font-family: 'Urbanist', sans-serif;
  text-align: center;
}

.read-more-btn:hover {
  background-color: #c4c5c5;
}

@media (max-width: 480px) {
  .project {
    width: 100%;
  }

  .project-image{
  height: 170px;
  width: 180px;
}
}
</style>