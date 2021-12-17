<template>
  <section class="top">
    <div class="header container">
      <div class="header__logo">
        <a href="цель-дракона.рф">
          <img src="../assets/logo.svg" alt="logo"
        /></a>
      </div>
      <nav class="header__nav">
        <ul class="header__nav__menu">
          <li
            class="header__nav__menu__item"
            v-for="(menu, index) in headerMenuList"
            :key="index"
          >
            <router-link :to="menu.path"> {{ menu.name }} </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      headerMenuList: [
        { name: "Description", path: "/" },
        { name: "Application", path: "/application" },
      ],
    };
  },
};
</script>


<style scoped lang="scss">
.top {
  border-bottom: 1px solid #e8e8e8;
}
.header {
  display: flex;
  justify-content: space-between;

  &__logo {
    //width: 70px;
    height: 70px;
    img {
      height: 70px;
    }
  }
  &__nav {
    margin-top: 25px;
    &__menu {
      display: flex;
      &__item {
        list-style: none;
        a {
          margin-left: 20px;
          font-size: 19px;
          font-weight: bold;
          color: #2c3e50;

          &.router-link-exact-active {
            color: #0c70e4;
          }
        }
      }
    }
  }
}
</style>
