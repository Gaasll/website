<template>
  <div class="about">
    <h1>My name is Garabet Aslo, but you can call me Garo.</h1>
    <div>
      <p>
        I am a social person who likes to take initiatives. I have a big passion for traveling, but usually, all I do is spend my time staring at a computer screen.
      </p>
      <p>
        In the projects section, you will find my experience in Computer Science - and it is forever growing! Below each project, I have links to all of my research and code.
      </p>
      <h3>Education:</h3>
      <p>
        I earned my Bachelor of Science in Computer Engineering from KTH, where I studied a wide range of subjects including processors, programming, computer networks, databases, and security. My education also included a focus on cloud services and IoT, enhanced by diverse coursework such as:
      </p>
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
      <p>
        <strong>Shift Leader at ICA Maxi Stormarknad Lindhagen, Stockholm (August 2019 - Present)</strong>
      </p>
      <p>
        In this role, I lead a team of 8-10 staff, ensuring efficient store operations and delivering exceptional customer service. My responsibilities include personnel management, scheduling, and training, as well as maintaining inventory control and store standards.
      </p>
      <p>
        <strong>Case Officer at Försäkringskassan, Stockholm (September 2019 - December 2021)</strong>
      </p>
      <p>
        I managed and processed a diverse range of cases, providing comprehensive assistance to clients and collaborating with various departments and external partners. This role honed my communication and problem-solving skills, contributing to a responsible and efficient work environment.
      </p>
      <p>
        <strong>Bachelor Thesis at Northab (March 2024 - June 2024)</strong>
      </p>
      <p>
        For my thesis, I investigated the cost-effectiveness of Infrastructure as a Service (IaaS) and Platform as a Service (PaaS) by analyzing various factors and conducting a case study deploying a recruiting system on multiple cloud platforms. My findings offer insights into optimizing cloud deployment strategies for businesses.
      </p>
      <h3>Certifications:</h3>
      <p>
        Certificate of Global Competence from KTH Royal Institute of Technology, recognized for proficiency in navigating diverse cultural environments and international settings.
      </p>
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
    </div>
    <img src="../assets/code.svg" alt="Coding illustration" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist&display=swap');

* {
  font-family: 'Urbanist', sans-serif;
}

.about {
  padding: 20px;
  background-color: #FFFFFF;
}

h1 {
  font-size: 25px;
  color: #201e23;
  margin: 2%;
}

p {
  font-size: 15px;
  color: #201e23;
}

h3 {
  font-size: 15px;
  color: #201e23;
  margin-top: 20px;
}

ul {
  font-size: 15px;
  color: #201e23;
  margin-left: 20px;
}

img {
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

  h1 {
    font-size: 20px;
  }

  p,
  h3,
  ul {
    font-size: 13px;
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
}

@media screen and (min-width: 768px) {
  .header-text {
    margin-left: 50px;
  }
}
</style>
