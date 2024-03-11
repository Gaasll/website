<template>
  <div class="home">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <div class="header-container">
    <div class="header-text">
      <h1>Hi, I'm <strong>Garabet</strong>, CS-student at KTH in Kista.<br /></h1>
      <p>My ambitions are within technology and engineering.<br />
        I am fascinated about programming and exploring new CS fields.</p>
     <a href="https://www.linkedin.com/in/garabetaslo/" target="_blank">
            <img class="icon" src="../assets/in.svg" > </a> &nbsp;
              <a href="https://github.com/Gaasll" target="_blank">
              <img class="icon" src="../assets/git.svg" > </a>&nbsp;&nbsp;
                <a href="mailto: garabet.aslo7@gmail.com" class="icon solid alt fa-envelope" target="_blank">
              <img class="icon" src="../assets/mail.svg" > </a>
    </div>
    <div class="header-image">
      <img src="../assets/hemm.jpg" alt="Portfolio Image">
    </div>
  </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Urbanist&display=swap');

.home {
  margin-top: 20px;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.header-container {
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  column-gap: 20px;
}

.header-text {
  font-family: 'Urbanist', sans-serif;
}

.header-text h1 {
  font-size: 20px;
  color: rgb(194, 191, 191);
}

.header-text p {
  font-size: 10px;
  color: rgb(194, 191, 191);
}

.header-image img {
  max-width: 100%;
  height: auto;
 
}

.icon{
  height: 18px;
  width: 18px;
}



.social-icons a:hover {
  transform: scale(1.2);
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

@media screen and (min-width: 767px) {
.header-text {
  margin-left: 50px;
}

.header-image{
  margin-left: 0px;
}

h1{
   margin-left: -2px;
}



}
</style>