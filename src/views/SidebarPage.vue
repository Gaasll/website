<template>
  <div class="sidebar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/portfolio">Portfolio</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  background-color: #f1f1f1;
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar li a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}
</style>