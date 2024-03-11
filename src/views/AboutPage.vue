<template>
  <div class="about">
  		<h1>My name is Garabet Aslo, but you can call me Garo. <br />
  								</h1>
  						<h2>
  							<div  >
  								I am a social person that likes to take initiatives. I have a big passion for traveling, but usually all i do is spend my time staring at a computer screen.</div>
<br>
                  In the projects section you will find my experience in Computer Science - and it is forever growing! Below each preject, I have links to all of my research and code.
  <br>
                  <h3> Relevant coursework: </h3>
                  Engineering skills, Functional Programming, Digital Design, Calculus, Computer Hardware Engineering, Object Oriented Design, Data structures, Interaction Programming, Data Storage, Network & Communication and Project Methods. 
                  </h2>


   

     <img src="../assets/code.svg" >
     
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