<template>
  <div id="app">
    <div class="header">
      <router-link to="/pay">What's on</router-link>
      <router-link to="/pay">Contact</router-link>
      <router-link class="icon" to="/">
        <img class="icon_img" src="./assets/logo.jpg" />
      </router-link>
    </div>
    <router-view />
  </div>
</template>
