<script setup>
defineProps({
  good: {
    type: Object,
    default: () => { }
  }
})
</script>

<template>

  <RouterLink to="/" class="goods-item">
    <img v-img-lazy="good.picture" alt="" />
    <p class="name ellipsis">{{ good.name }}</p>
    <p class="desc ellipsis">{{ good.desc }}</p>
    <p class="price">&yen;{{ good.price }}</p>
  </RouterLink>
</template>

<style lang='scss'>
@import '@/styles/var.scss';

.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all .5s;
  background: $bgCard;
  border-radius: 12px;
  border: 1px solid $borderColor;

  &:hover {
    transform: translate3d(0, -5px, 0);
    box-shadow: $shadowGlow;
    border-color: $xtxColor;
  }

  img {
    width: 160px;
    height: 160px;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
    color: $textPrimary;
  }

  .desc {
    color: $textMuted;
    height: 29px;
  }

  .price {
    color: $priceColor;
    font-size: 20px;
  }
}
</style>
