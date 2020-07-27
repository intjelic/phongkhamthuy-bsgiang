<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link id="logo" class="navbar-brand ml-0 ml-lg-4" to="/">
      <img
        src="@/assets/logo.svg"
        height="120px"
      />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#menu"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link px-4 text-uppercase" to="/">{{ $t("navigationBar.home") }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link px-4 text-uppercase" to="/services">{{ $t("navigationBar.services") }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link px-4 text-uppercase" to="/questions">{{ $t("navigationBar.questions") }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link px-4 text-uppercase" to="/news">{{ $t("navigationBar.news") }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link px-4 text-uppercase" to="/shop">{{ $t("navigationBar.shop") }}</router-link>
        </li>
        <li class="nav-item">
          <a
            class="nav-link facebook-nav-link bg-primary text-white"
            href="https://www.facebook.com/thuygianghiahealthpet"
          ><img src="@/assets/facebook.svg" width="40px"></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style style="scss" scoped>
/*
   The implementation of the navigation bar is complex because it has to display the 'burger' button
   to open and close the menu. The strategy is to start from a default Bootstrap navigation bar
   which does the heavy lifting, and instead tweak the CSS on normal screens.
*/
@media (min-width: 992px) {
  nav {
    height: 80px;
    margin: 0;
    padding: 0;

    align-items: stretch;
    justify-content: flex-end;
  }

  #logo {
    position: absolute;
    left: 30px;
    top: 30px;
    z-index: 3;
  }

  #menu {
    flex-grow: 0;
  }

  .nav-item {
    height: 80px;
    display: flex;
  }

  .nav-link {
    padding-top: 35px;
  }

  .facebook-nav-link {
    padding-top: 25px;
  }
}

.nav-link {
    font-family: "Acme";
}

.nav-item > a:hover,
.nav-item > a:focus {
  background-color: rgb(21, 105, 142);
}

.navbar-nav > .active > a,
.navbar-nav > .active > a:hover,
.navbar-nav > .active > a:focus {
  background-color: rgb(21, 105, 142);
}
</style>
