<template>
  <div>
    <header class="header">
      <div class="header-wrapper">
        <img class="logo header-wrapper__logo"
             src="../assets/images/logo-museum.svg"
             alt="На главную">
        <nav class="navigation">
          <ul class="navigation__list">
            <li class="navigation__item"
                v-for="(item, index) in placeholder.navigation" :key="index">
              <a class="navigation__link"
                 href="#">
                 {{ item }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="search">
          <input class="search__input"
                 type="text"
                 placeholder="Поиск по названию картины">
          <button class="button search__button">Найти</button>
        </div>
      </div>
    </header>
    <main v-if="true" class="main">
      <div class="main-wrapper">
        <h1 class="main-wrapper__title">Картины эпохи Возрождения</h1>
          <template v-for="(product, index) in products">
            <product :product="product"
                     :index="index"
                     :key="index"/>
          </template>
      </div>
    </main>
    <footer class="footer">
      <div class="footer-wrapper">
        <img class="logo footer-wrapper__logo"
             src="../assets/images/logo-museum.svg"
             alt="На главную">
        <nav class="navigation">
          <ul class="navigation__list">
            <li class="navigation__item"
                v-for="(item, index) in placeholder.navigation" :key="index">
              <a class="navigation__link"
                 href="#">
                 {{ item }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="contact">
          <ul class="contact__list">
            <li v-for="(item, key) in placeholder.contact" :key="key"
                :class="['contact__item', `contact__item-${key}`]" >
              <span class="icon"></span>{{ item }}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import data from '../mixins/data';
import Product from './Product.vue';

export default {
  name: 'MainStoreDisplay',
  mixins: [data],
  components: {
    Product,
  },
  mounted() {
    Object.keys(sessionStorage).forEach((key) => {
      const value = sessionStorage.getItem(key);
      const index = key.slice(-1);

      this.products[index].button = value;
    });
  },
};
</script>

<style lang="scss">
@import '../style/ispinner.scss';
@import '../style/colors.scss';

@include isspiner;
* {
  font-family: Merriweather, arial;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;

  color: $main;
}

h2 {
  font-size: 18px;
  font-weight: normal;
  line-height: 27px;

  color: $main;
}

.button {
  padding: 0;
  border: none;

  height: 48px;
  width: 122px;

  font-family: Merriweather, arial;
  font-size: 14px;
  font-weight: bold;

  color: $buttons-text;
  background: $buttons-background;
  outline: none;

  &:hover {
    background: $button-hover;
  }
}

.header {
  box-sizing: border-box;
  height: 97px;
  border-bottom: 1px solid $border;
}

.header-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 24px;
}

.logo {
  height: 48px;
  width: 48px;
}

.navigation {
  margin-top: -5px;
  margin-left: 4%;

  &__item {
    display: inline;
    margin-right: 48px;
  }

  &__link {
    font-size: 14px;
    line-height: 150%;

    text-decoration: none;

    color: $main;
  }
}

.search {
  display: flex;

  margin-left: 5%;
  height: 48px;
  width: 416px;

  font-size: 14px;
}

.search__input {
  padding-left: 16px;
  border: 1px solid $border;
  border-right: 0;

  box-sizing: border-box;

  height: 48px;
  width: 294px;

  line-height: 150%;
  outline: none;

  color: #343030;

  &:focus {
    border: 1px solid $focus-inputs;
    border-right: 0;
  }
}

.main {
  padding-bottom: 120px;

  &-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    margin: auto;
    padding-top: 24px;
    min-width: 1200px;

    width: 75%;

    &__title {
      width: 100%;
      text-align: left;
    }
  }
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;

  height: 96px;

  background: $footer-background;
}

.footer-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 24px;
}

.contact {
  margin-top: -5px;
}

.contact .contact__item {
  display: inline;
  margin-right: 48px;

  font-size: 14px;
  line-height: 150%;

  color: $main;

  &-map  {
    .icon {
      background: url('../assets/images/contact/map.svg') no-repeat left center;
      margin-right: 5px;
      width: 16px;
      height: 16px;
      display: inline-block;
      vertical-align: middle;
    }
  }

  &-phone {
    .icon {
      background:url('../assets/images/contact/phone.svg') no-repeat left center;
      margin-right: 5px;
      width: 16px;
      height: 16px;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
