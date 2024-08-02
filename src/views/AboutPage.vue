<template>
  <div class="about">
    <h1>My name is Garabet Aslo, but you can call me Garo.</h1>
    <h2>
      <div>
        I am a social person who likes to take initiatives. I have a big passion for traveling, but usually, all I do is spend my time staring at a computer screen.
      </div>
      <br />
      In the projects section, you will find my experience in Computer Science - and it is forever growing! Below each project, I have links to all of my research and code.
      <br />
      <h3>Education:</h3>
      I earned my Bachelor of Science in Computer Engineering from KTH, where I studied a wide range of subjects including processors, programming, computer networks, databases, and security. My education also included a focus on cloud services and IoT, enhanced by diverse coursework such as:
      <ul>
        <li>Engineering Skills</li>
        <li>Digital Design</li>
        <li>Computer Hardware Engineering</li>
        <li>Algorithms & Data Structures</li>
        <li>Network & Communication</li>
        <li>Networking Architectures (during my exchange semester at Universitat Politècnica de València)</li>
      </ul>
      <h3>Skills:</h3>
      <ul>
        <li>Programming: C, Java, JavaScript, Node.js, HTML/CSS</li>
        <li>Data Analysis and Algorithms</li>
        <li>DevOps and SQL</li>
        <li>Functional Programming and Project Methods</li>
        <li>UI/UX Design and Communication</li>
      </ul>
      <h3>Professional Experience:</h3>
      <strong>Shift Leader at ICA Maxi Stormarknad Lindhagen, Stockholm (August 2019 - Present)</strong>
      <p>
        In this role, I lead a team of 8-10 staff, ensuring efficient store operations and delivering exceptional customer service. My responsibilities include personnel management, scheduling, and training, as well as maintaining inventory control and store standards.
      </p>
      <strong>Case Officer at Försäkringskassan, Stockholm (September 2019 - December 2021)</strong>
      <p>
        I managed and processed a diverse range of cases, providing comprehensive assistance to clients and collaborating with various departments and external partners. This role honed my communication and problem-solving skills, contributing to a responsible and efficient work environment.
      </p>
      <strong>Bachelor Thesis at Northab (March 2024 - June 2024)</strong>
      <p>
        For my thesis, I investigated the cost-effectiveness of Infrastructure as a Service (IaaS) and Platform as a Service (PaaS) by analyzing various factors and conducting a case study deploying a recruiting system on multiple cloud platforms. My findings offer insights into optimizing cloud deployment strategies for businesses.
      </p>
      <h3>Certifications:</h3>
      <p>Certificate of Global Competence from KTH Royal Institute of Technology, recognized for proficiency in navigating diverse cultural environments and international settings.</p>
      <h3>Languages:</h3>
      <ul>
        <li>English</li>
        <li>Swedish</li>
        <li>Armenian</li>
      </ul>
      <h3>Goals:</h3>
      <p>
        I am eager to join a dynamic team where I can apply my technical and professional skills to develop innovative solutions and drive progress in the field of technology. Committed to continuous learning, I aspire to contribute to projects that advance digital transformation.
      </p>
      <p>
        Feel free to explore my <a href="#">LinkedIn</a> and <a href="#">Portfolio</a> for more information. Thank you for visiting my page, and I look forward to connecting with you.
      </p>
    </h2>
    <img src="../assets/code.svg" alt="Coding illustration" />
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist&display=swap');

.about {
  padding: 20px;
  background-color: #FFFFFF;
}


h1 {
  font-size: 20px;
  color:#201e23;
   font-family: 'Urbanist', sans-serif;
   margin: 2%;
}


h2 {
  font-size: 10px;
  color: #201e23;
   font-family: 'Urbanist', sans-serif;
   margin: 2%;
   font-weight: lighter;
}
h3 {
  font-size: 10px;
  color: #201e23;
   font-family: 'Urbanist', sans-serif;
  
   
}
.header-text p {
  font-size: 10px;
  color: #201e23;
}

.about-img {
  max-width: 100%;
  height: auto;
}



.social-icons a:hover {
  transform: scale(1.2);
}


.container {
  position: relative;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
}

.word {
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  transition: all 0.3s ease;
  font-family: 'Urbanist', sans-serif;
}

.java {
  top: 50%;
  left: 10%;
}

.html {
  top: 10%;
  left: 30%;
}

.csharp {
  top: 70%;
  left: 60%;
}

.software {
  top: 30%;
  left: 80%;
}

.data {
  top: 50%;
  left: 40%;
}

.java:hover {
  transform: translateX(20px) translateY(-20px) rotate(-10deg);
}

.html:hover {
  transform: translateX(-20px) translateY(20px) rotate(10deg);
}

.csharp:hover {
  transform: translateX(30px) translateY(30px) rotate(-20deg);
}

.software:hover {
  transform: translateX(-30px) translateY(-30px) rotate(20deg);
}

.data:hover {
  transform: translateX(10px) translateY(-10px) rotate(-5deg);
}

img{
  margin-left: 13%;
}

@media screen and (max-width: 767px) {
  .header-container {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }

  .header-text {
    text-align: center;
  }

  .header-image {
    justify-self: center;
  }
}

  .container {
    width: 100%;
    height: 300px;
  }
  
  .word {
    font-size: 10px;
  }

  img {
  height: 80%;
  width: 80%;
}

@media screen and (min-width: 767px) {
.header-text {
  margin-left: 50px;
}

h1{
  font-size: 25px;
}
h2{
  font-size: 15px;
}
h3{
  font-size: 15px;
}


}



</style>
