<template>
  <div class="portfolio">
    <img class="logo" src="../assets/G.svg" alt="Logo" />
  </div>
</template>

<script>
import router from '../router/index.js'; // Assuming you have a Vue Router instance defined

export default {
  mounted() {
    const logo = document.querySelector('.logo');
    logo.classList.add('float-animation');

    setTimeout(() => {
      logo.style.display = 'none';
      router.push('/home');
    }, 2000);
  }
}
</script>

<style>
.portfolio {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* Adjust as needed */
}

.float-animation {
  animation-name: float;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@media (max-width: 768px) {
  .logo {
    width: 50%;
  }
}

@keyframes float {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>