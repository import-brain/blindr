<template>
  <div id="wrapper">
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item"><strong>Blindr</strong></router-link>
      
      <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" id="navbar-menu">
      <div class="navbar-end">
        <router-link to="/blinds" class="navbar-item">Blinds</router-link>
        <router-link to="/shades" class="navbar-item">Shades</router-link>

        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/log-in" class="button is-light">Log In</router-link>

            <router-link to="/cart" class="button is-success">
              <span class="icon"><i class="fas fa-shopping-cart"></i></span>
              <span>Cart</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <section class="section">
    <router-view/>
  </section>

  <footer class="footer">
    <p class="has-text-centered">Copyright (c) 2021</p>
  </footer>
  </div>
</template>

<style lang="scss">
@import '../node_modules/bulma';
</style>
