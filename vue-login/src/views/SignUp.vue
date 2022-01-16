<template>
<div>
    <router-link to="/">Home</router-link>
</div>

<router-view/>

<!-- TODO: add v-model to fields -->

<section class="signup-view">
  <form class="ui form">
    <div class="field">
        <label for="username">Username:</label>
        <div ui left icon input>
            <i class="user icon"></i>
            <input type="text" id="username" name="username" placeholder="Username">
        </div>
    </div>
    <div class="field">
        <label for="email">Email:</label>
        <div ui left icon input>
          <i class="at icon"></i>
          <input type="email" id="email" name="email" placeholder="email@example.com">
        </div>
    </div>
    <div class="field">
        <label>Password:</label>
        <div ui left icon input>
          <i class="key icon"></i>
          <input type="password" name="password" placeholder="Password">
        </div>
    </div>
    <button 
      class="ui button" 
      type="submit"
      @click="$router.push('registerkingdom')">SIGN UP</button>
  </form>
  </section>
</template>

<script>

//TODO: define the script handling registration

export default {
    name: 'SignUp'
}
</script>

<style scoped>
.signup-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  .form {
    width: 300px;
  }
</style>