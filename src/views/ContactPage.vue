<template>
  <div class="contact">
    <div class="h10">Get in touch!</div>
    <a href="https://www.linkedin.com/in/garabetaslo/" target="_blank">
          <img class="icon" src="../assets/in.svg" > </a> &nbsp;
            <a href="https://github.com/Gaasll" target="_blank">
            <img class="icon" src="../assets/git.svg" > </a>&nbsp;&nbsp;
              <a href="mailto: garabet.aslo7@gmail.com" class="icon solid alt fa-envelope" target="_blank">
            <img class="icon" src="../assets/mail.svg" > </a>
    <form action="https://getform.io/f/14cdb666-953e-4a15-a81e-7ffc92d89eed" method="POST">
      <input type="text" name="Name" placeholder="Full name" required>
      <input type="email" name="Email" placeholder="Email" required>
      <textarea name="Message" placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
    
  </div>

 

  
</template>

<script>

</script>

<style>
.contact {
  padding: 20px;
  background-color: #201e23;
  font-family: 'Urbanist', sans-serif;
  text-align: center;
}

.h10 {
  font-size: 2rem;
  font-weight: 100;
  text-align: center;
  margin-bottom: 1rem;
  color: #ccc;
 
}
.icon{
  height: 18px;
  width: 18px;
}



form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  text-align: left;
  border-radius: 5px;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input, textarea {
 
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  font-family: 'Urbanist', sans-serif;
}

button {
  background-color: #4a4a4b;
  color: #fff;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  font-family: 'Urbanist', sans-serif;
  max-width: 100px ;
  
}

/* Media queries for responsive layout */
@media screen and (max-width: 600px) {
  form {
    max-width: 60%;
  }
  
  input, textarea {
    width: 100%;
  }
  
  button {
    width: 100%;
  }
  .cnt{
  height: 200px;
  width: 300px;
}
}


</style>

