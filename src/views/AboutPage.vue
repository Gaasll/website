<template>
  <div class="about">
    <div class="intro-section">
      <h1>My name is Garabet Aslo, but you can call me Garo.</h1>
      <p>
        I am a social person who likes to take initiatives. I have a big passion for traveling, but usually, all I do is spend my time staring at a computer screen.
      </p>
      <p>
        In the projects section, you will find my experience in Computer Science - and it is forever growing! Below each project, I have links to all of my research and code.
      </p>
    </div>
    <div class="details-section">
      <h3>Education:</h3>
      <p>
        Bachelor of Science in Computer Engineering from KTH, where I studied a wide range of subjects including processors, programming, computer networks, databases, and security. My education also included a focus on cloud services and IoT, enhanced by diverse coursework such as:
      </p>
      <ul>
        <li>Engineering Skills</li>
        <li>Digital Design</li>
        <li>Computer Hardware Engineering</li>
        <li>Algorithms & Data Structures</li>
        <li>Network & Communication</li>
        <li>Networking Architectures</li>
      </ul>
      <h3>Skills:</h3>
      <ul>
        <li>Programming: C, Java, JavaScript, Node.js, HTML/CSS</li>
        <li>Data Analysis and Algorithms</li>
        <li>DevOps and SQL</li>
        <li>Functional Programming </li>
        <li>Scrum & Project Methods </li>
        <li>UI/UX Design and Communication</li>
      </ul>
      <h3>Professional Experience:</h3>
      <div class="experience">
        <strong>Shift Leader at ICA Maxi Stormarknad Lindhagen, Stockholm (August 2019 - Present)</strong>
        <p>
          In this role, I lead a team of 8-10 staff, ensuring efficient store operations and delivering exceptional customer service. My responsibilities include personnel management, scheduling, and training, as well as maintaining inventory control and store standards.
        </p>
      </div>
      <div class="experience">
        <strong>Case Officer at Försäkringskassan, Stockholm (September 2019 - December 2021)</strong>
        <p>
          I managed and processed a diverse range of cases, providing comprehensive assistance to clients and collaborating with various departments and external partners. This role honed my communication and problem-solving skills, contributing to a responsible and efficient work environment.
        </p>
      </div>
      <div class="experience">
        <strong>Bachelor Thesis at Northab (March 2024 - June 2024)</strong>
        <p>
          For my thesis, I investigated the cost-effectiveness of Infrastructure as a Service (IaaS) and Platform as a Service (PaaS) by analyzing various factors and conducting a case study deploying a recruiting system on multiple cloud platforms. My findings offer insights into optimizing cloud deployment strategies for businesses.
        </p>
      </div>
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
    <img src="../assets/code.svg" alt="Coding illustration" class="about-img" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist&display=swap');

* {
  font-family: 'Urbanist', sans-serif;
}

.about {
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.6;
}

.intro-section {
  background-color: #f8f5f5;
  color: #ecf0f1;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin-bottom: 15px;
}

h3 {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #2980b9;
}

ul {
  font-size: 18px;
  margin-left: 20px;
  list-style: disc;
}

.experience {
  margin-bottom: 20px;
}

strong {
  font-size: 20px;
  color: #34495e;
}

a {
  color: #2980b9;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #3498db;
}

.about-img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 767px) {
  .intro-section {
    text-align: center;
  }

  h1 {
    font-size: 24px;
  }

  p,
  h3,
  ul,
  strong {
    font-size: 16px;
  }

  .about-img {
    height: 80%;
    width: 80%;
  }
}

@media screen and (min-width: 768px) {
  .about {
    padding: 40px 100px;
  }
  
  .intro-section {
    padding: 40px;
  }

  h1 {
    font-size: 36px;
  }

  p,
  h3,
  ul,
  strong {
    font-size: 18px;
  }
}
</style>
