<script setup>
import GoodsItem from '../Home/components/GoodsItem.vue';
import { useBanner } from './composables/useBanner';
import { useCategory } from './composables/useCategory';

const { bannerList } = useBanner();
const { categoryData } = useCategory();

</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 分类列表 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in categoryData.children" :key="i.id">
            <RouterLink :to="`/category/sub/${i.id}`">
              <img :src="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }} -</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :good="good" :key="good.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/var.scss';

.top-category {
  h3 {
    font-size: 28px;
    color: $textPrimary;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: $bgCard;
    border-radius: 12px;
    padding: 20px;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;
          color: $textPrimary;
          transition: all 0.3s ease;

          img {
            width: 100px;
            height: 100px;
            border-radius: 8px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
            transform: translateY(-3px);
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: $bgCard;
    margin-top: 20px;
    position: relative;
    border-radius: 12px;
    padding: 20px;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: $textMuted;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}

.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
