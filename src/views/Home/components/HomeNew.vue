<script setup>
import HomePanel from './HomePanel.vue'
import { findNewAPI } from '@/apis/home';
import { onMounted, ref } from 'vue';

const newList = ref([]);

const getNew = async () => {
  const res = await findNewAPI();
  newList.value = res.result;
}
onMounted(() => getNew())
</script>

<template>
  <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
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
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: $textPrimary;
    }

    .price {
      color: $priceColor;
      font-weight: 600;
    }
  }
}
</style>
