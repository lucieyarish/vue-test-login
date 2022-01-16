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
            <input type="text" id="username" name="username" placeholder="Username">
        </div>
    </div>
    <div class="field">
        <label>Password:</label>
        <div ui left icon input>
        <i class="key icon"></i>
        <input type="password" name="password" placeholder="Password">
        </div>
    </div>
    <div class="field">
        <label for="kingdomName">Kingdom Name:</label>
        <div ui left icon input>
            <i class="chess king icon"></i>
            <input type="text" id="kingdomName" name="kingdomName" placeholder="Kingdom name">
        </div>
    </div>
    <div class="two fields">
        <div class="field">
          <select class="ui fluid search dropdown" name="coordinateX">
            <option value="">Coordinate X</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
        </div>
        <div class="field">
          <select class="ui fluid search dropdown" name="coordinateY">
            <option value="">Coordinate Y</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
        </div>
    </div>
    <button class="ui button" type="submit">REGISTER KINGDOM</button>
  </form>
  </section>
</template>

<script>

export default {
    name: 'RegisterKingdom'
}
</script>

<style scoped>
.signup-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin-top: 30px;
  }
  .form {
    width: 300px;
  }
</style>