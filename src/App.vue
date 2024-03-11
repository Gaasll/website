<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
import router from './router';
import ColorGrid from "./components/firstPage.vue"
import SmokeCursor from "../src/components/SmokeCursor.vue";

const activeLinkClass = ref("");

const setActiveLinkClass = (linkClass) => {
  activeLinkClass.value = linkClass;
};


</script>

<template>


 
  

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <div class="main-container">
 

  <main>
    <div v-if="$route.path === '/'">
      <ColorGrid />
    </div>
    <div v-else>
      <header>
   <nav :class="{ 'home-nav': $route.path === '/', 'about-nav': $route.path === '/about', 'work-nav': $route.path === '/work', 'contact-nav': $route.path === '/contact' }">
    <RouterLink to="/home" :class="activeLinkClass === 'home' ? 'active' : ''" @click="setActiveLinkClass('home')" >
      Home 
    </RouterLink>
    <RouterLink to="/about" :class="activeLinkClass === 'about' ? 'active' : ''" @mouseover="circleSizeUp" @click="setActiveLinkClass('about')" >
      About
    </RouterLink>
    <RouterLink to="/work" :class="activeLinkClass === 'projects' ? 'active' : ''" @click="setActiveLinkClass('projects')">
      Projects
    </RouterLink>
    <RouterLink to="/contact" :class="activeLinkClass === 'contact' ? 'active' : ''" @click="setActiveLinkClass('contact')">
      Contact
    </RouterLink>
  </nav>
      </header>
      <RouterView />
    </div>
  </main>
  <footer>
 
      <p> &copy; 2023 Garabet </p>
  
  </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist&display=swap');

.home-nav {
  background-color: #201e23;

}

.circle {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: aquamarine;
}


.home-nav a {
  color: #f8f5f5; 
}

.home-nav a.active {
  color: #f8f5f5;
  font-weight: bold; 
 

}






.about-nav {
  background-color: #FFFFFF;
  
  
}

.about-nav a {
  color: #201e23; 
}

.about-nav a.active {
  color: #201e23;
  font-weight: bold; 
}


.work-nav {
  background-color: #FFFFFF;
}

.work-nav a {
  color: #201e23; 
}

.work-nav a.active {
  color: #201e23;
  font-weight: bold; 
}


.contact-nav {
  background-color: #201e23;
}

.contact-nav a {
  color: rgb(235, 231, 231);; 
}

.contact-nav a.active {
 color:rgb(235, 231, 231);
  font-weight: bold; 
}

body,
html {
  margin: 0;
  padding: 0;
 background-color: #201e23;

}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* set the minimum height of the container to 100% of the viewport height */
}

main {
  flex: 1; /* make the main content area take up all available space */
}

footer {
  background-color: #201e23;
  color: #d6d0d0;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
   font-family: 'Urbanist', sans-serif;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  
  margin-top: 0;
 
  font-family: 'Urbanist', sans-serif;
  

}



nav a {
  color: rgb(194, 191, 191);
  text-decoration: none;
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
}

nav a.active {
  color: rgb(194, 191, 191);
   font-weight: bold;

}

.social-icons {
  margin-bottom: 10px;
}

.social-icons a {
  display: inline-block;
  margin: 0 10px;
  color: #d6d0d0;
  font-size: 24px;
}

.material-icons {
  font-size: inherit;
  vertical-align: middle;
}

 .social-icons i {
    font-size: 10px;
  }


@media only screen and (max-width: 768px) {
  nav {
    height: 20px;
  }

  nav a {
    font-size: 10px;
    padding: 5px;
    margin: 0 5px;
  }

  footer {
font-size: 10px;
}
}
</style>


