<script setup>
import HomePanel from './HomePanel.vue'
import { getHotAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'


const hotList = ref([])

const getHotList = async () => {
  const res = await getHotAPI()
  hotList.value = res.result
}
onMounted(() => getHotList())
</script>

<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <img v-img-lazy="item.picture" alt="">
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang='scss'>
@import '@/styles/var.scss';

.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    transition: all .5s;
    border-radius: 12px;
    background: $bgCard;
    border: 1px solid $borderColor;

    &:hover {
      transform: translate3d(0, -8px, 0);
      box-shadow: $shadowGlow;
      border-color: $xtxColor;
    }

    img {
      width: 306px;
      height: 306px;
      border-radius: 12px 12px 0 0;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      color: $textPrimary;
    }

    .desc {
      color: $textMuted;
      font-size: 18px;
    }
  }
}
</style>
