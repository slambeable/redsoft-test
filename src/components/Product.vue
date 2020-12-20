<template>
  <div :class="['product', !product.isSale ? 'product_sold' : '']">
    <img class="product__img"
        :src="require(`../assets/images/paintings/${product.img}.png`)"
        :alt="product.title">
    <h2 class="product__title">{{ product.title }}</h2>
    <div v-if="product.isSale" class="product-wrapper">
      <div class="product-wrapper-price">
        <p v-if="product.discount.length !== 0"
          class="product-wrapper-price__discount">
          {{ `${product.discount} $` | getThreeSpace }}
        </p>
        <p :class="['product-wrapper-price__price',
                    product.discount.length === 0 ?
                    'product-wrapper-price__price_middle' : '']">
          {{ `${product.price} $` | getThreeSpace }}
        </p>
      </div>
      <button :class="['button', 'product-button',
                      product.button === 'cart' ? 'product-button_in_cart' : '',
                      product.button === 'load' ? 'product-button_disabled' : '']"
              @click="buttonHandler(index)">
        <span v-if="product.button === 'cart'" class="icon"></span>
        <span v-if="product.button === 'active'" class="product-button__text">
          Купить
        </span>
        <span v-if="product.button === 'cart'" class="product-button__text">
          {{ 'В корзине' }}
        </span>
          <div v-if="product.button === 'load'" class="ispinner">
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
            <div class="ispinner-blade"></div>
          </div>
      </button>
    </div>
    <div v-if="!product.isSale" class="product-wrapper">
      <p calss="product-wrapper__sale">Продана на аукционе</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object,
    index: Number,
  },
  methods: {
    async buttonHandler(i) {
      const buttonType = this.product.button;

      this.product.button = 'load';
      await this.$api.product.getProduct();

      if (buttonType === 'cart') {
        this.product.button = 'active';
        sessionStorage.setItem(`product${i}`, 'active');
      } else {
        this.product.button = 'cart';
        sessionStorage.setItem(`product${i}`, 'cart');
      }
    },
  },
  filters: {
    getThreeSpace(value) {
      return value.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
    },
  },
};
</script>

<style scoped lang="scss">
@import '../style/colors.scss';

.product {
  height: 328px;
  width: 280px;

  border: 1px solid $border;
  box-sizing: border-box;

  &__img{
    margin-top: -1px;
    margin-left: -1px;
  }

  &__title {
    margin-top: 20px;
    white-space: pre;
  }

  &_sold {
    opacity: 0.5;
  }

  &-button_in_cart {
    background: $button-cart;

    .icon {
      background:url('../assets/images/check.svg') no-repeat left center;
      width: 16px;
      height: 16px;
      display: inline-block;
      vertical-align: sub;
    }
  }

  &-button_disabled {
    pointer-events: none;
    background: $button-disabled;
  }
}

.product-wrapper {
  display: flex;
  justify-content: space-around;

  font-weight: bold;
  font-size: 16px;

  color: $main;

  &-price__discount {
    margin: 0;
    font-weight: 300;
    font-size: 14px;

    text-decoration: line-through;

    color: $discount;
  }

  &-price__price {
    margin: 10px 0 0;
    font-weight: bold;
    font-size: 16px;

    &_middle {
      margin-top: 16px;
    }
  }
}
</style>
