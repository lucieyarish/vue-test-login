<template>
    <div>
        <h1>Welcome to the users page</h1>
        <h2>{{ msg }}</h2>
    </div>

    <div>
        <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Authenticated Users'
        }
    },
    //compute the authentication state of the user + dispatch a logout action to the Vuex store when a user clicks the logout button
    computed: {
      isLoggedIn: function() { return this.$store.getters.isLoggedIn }
    },
    methods: {
      logout: function() {
        this.$store.dispatch('logout')
        .then(() => {
        //send user to login page after they log out
          this.$router.push('/login')
        })
      }
    },
}
</script>
