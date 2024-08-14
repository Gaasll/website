<template>
  <div class="about">
    <div class="intro-section">
      <h1>My name is Garabet Aslo, but you can call me Garo.</h1>
      <p>
        I am a social person who likes to take initiatives. I have a big passion for traveling, but usually, all I do is
        spend my time staring at a computer screen.
      </p>
      <p>
        In the <a href="https://garabet.netlify.app/work" style="color: white;">projects section</a>, you will
        find my
        experience in Computer Science
        - and it is forever growing! Below each
        project, I have links to all of my research and code.
      </p>
    </div>

    <div class="cards-container">
      <div class="card" @click="toggleDetails('education')">
        <h3>Education</h3>
        <p>KTH Royal Institute of Technology</p>
        <div class="icon-container">
          <img src="../assets/education.jpg" alt="Education Icon" />

        </div>
      </div>
      <div v-if="showDetails.education" class="details">
        <p>Bachelor of Science in Computer Engineering</p>
        <ul>
          <li>Engineering Skills</li>
          <li>Digital Design</li>
          <li>Computer Hardware Engineering</li>
          <li>Algorithms & Data Structures</li>
          <li>Network & Communication</li>
          <li>Networking Architectures</li>
          <li>Data Storage</li>
        </ul>
      </div>

      <div class="card" @click="toggleDetails('skills')">
        <h3>Skills</h3>
        <p>Programming, DevOps, UI/UX, and more...</p>
        <div class="icon-container">
          <img src="../assets/skills.jpg" alt="Skills Icon" />

        </div>
      </div>
      <div v-if="showDetails.skills" class="details">
        <ul>
          <li>Programming: C, Java, JavaScript, Node.js</li>
          <li>DevOps, AWS, Azure, GCP</li>
          <li>SQL</li>
          <li>UI/UX Design and Communication</li>
          <li>Functional Programming </li>
          <li>Scrum & Project Methods </li>
        </ul>
      </div>

      <div class="card" @click="toggleDetails('experience')">
        <h3>Experience</h3>
        <p>Shift Leader, Case Officer, Thesis...</p>
        <div class="icon-container">
          <img src="../assets/work.jpg" alt="Experience Icon" />

        </div>
      </div>
      <div v-if="showDetails.experience" class="details">
        <div class="experience">
          <strong>Shift Leader at ICA Maxi Lindhagen, Stockholm</strong>
          <p> (August 2019 - Present)</p>
        </div>
        <div class="experience">
          <strong>Case Officer at Försäkringskassan, Stockholm</strong>
          <p>(September 2019 - December 2021)</p>
        </div>
        <div class="experience">
          <strong>Bachelor Thesis at Northab</strong>
          <p>(March 2024 - June 2024)</p>
        </div>
      </div>

      <div class="card" @click="toggleDetails('certifications')">
        <h3>Certifications</h3>
        <p>Global Competence Certificate</p>
        <div class="icon-container">
          <img src="../assets/cert.jpg" alt="Certifications Icon" />

        </div>
      </div>
      <div v-if="showDetails.certifications" class="details">
        <p>Certificate of Global Competence from KTH</p>
      </div>

      <div class="card" @click="toggleDetails('languages')">
        <h3>Languages</h3>
        <p>English, Swedish, Armenian</p>
        <div class="icon-container">
          <img src="../assets/languages.png" alt="Languages Icon" />

        </div>
      </div>
      <div v-if="showDetails.languages" class="details">
        <ul>
          <li>English - Fluent</li>
          <li>Swedish - Fluent</li>
          <li>Armenian - Fluent</li>
        </ul>
      </div>

      <div class="card" @click="toggleDetails('goals')">
        <h3>Goals</h3>
        <p>Continuous learning and innovation...</p>
        <div class="icon-container">
          <img src="../assets/goal.jpg" alt="Goals Icon" />

        </div>
      </div>
      <div v-if="showDetails.goals" class="details">
        <p>I'm eager to join a dynamic team, apply my skills to drive innovation, and contribute to digital
          transformation projects.</p>
        <p>Explore my <a href="https://www.linkedin.com/in/garabetaslo/">LinkedIn</a> and <a
            href="https://github.com/Gaasll">Github</a>.</p>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      showDetails: {
        education: false,
        skills: false,
        experience: false,
        certifications: false,
        languages: false,
        goals: false
      }
    };
  },
  methods: {
    toggleDetails(section) {
      this.showDetails[section] = !this.showDetails[section];
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist&display=swap');

* {
  font-family: 'Urbanist', sans-serif;
}

.about {
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
}

.intro-section {
  background-color: #201e23;
  color: #ecf0f1;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
}

h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin-bottom: 15px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  background-color: #fff;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.icon-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.icon-container img {
  width: 40px;
  height: 40px;
  margin: 0 5px;
}

.details {
  padding: 20px;
  margin: 10px;
  background-color: #ecf0f1;
  border-radius: 8px;
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

  p {
    font-size: 16px;
  }

  .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 80%;
  }
}

@media screen and (min-width: 768px) {
  .about {
    padding: 40px 100px;
  }

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 18px;
  }
}
</style>
