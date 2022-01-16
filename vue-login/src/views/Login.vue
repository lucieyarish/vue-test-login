<template>
<div>
    <router-link to="/">Home</router-link>
</div>

<router-view/>

<section class="signup-view">
  <form class="ui form">
    <div class="field">
      <label for="username">Username:</label>
      <div ui left icon input>
        <i class="user icon"></i>
        <input type="text" id="username" v-model="username" name="username" placeholder="Username">
      </div>
    </div>
    <div class="field">
          <label>Password:</label>
          <div ui left icon input>
            <i class="key icon"></i>
            <input type="password" id="password" v-model="password" name="password" placeholder="Password">
          </div>
      </div>
    <button class="ui button" type="submit" @click="login">Submit</button>
  </form> 
</section>
</template>

<script>

export default {
    name: 'Login',
    data () {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        login: function() {
        let email = this.email
        let password = this.password

        //$store.dispatch('action name') triggers actions in store
        //Vuex action 'login' in store handles the authentication
        this.$store.dispatch('login', { email, password })
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
      }
    }
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