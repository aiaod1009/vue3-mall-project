<script setup>
import { getLikeListAPI } from '@/apis/user'
import { useUserStore } from '@/stores/userStore';
import { onMounted, ref } from 'vue';
import GoodsItem from '@/views/Home/components/GoodsItem.vue';
const userStore = useUserStore()
const likeList = ref([])
const getLikeList = async () => {
  const res = await getLikeListAPI({ limit: 4 })
  likeList.value = res.result
}
onMounted(() => getLikeList())
</script>

<template>
  <div class="home-overview">
    <!-- 用户信息 -->
    <div class="user-meta">
      <div class="avatar">
        <img :src="userStore.userInfo?.avatar" />
      </div>
      <h4>{{ userStore.userInfo?.account }}</h4>
    </div>
    <div class="item">
      <a href="javascript:;">
        <span class="iconfont icon-hy"></span>
        <p>会员中心</p>
      </a>
      <a href="javascript:;">
        <span class="iconfont icon-aq"></span>
        <p>安全设置</p>
      </a>
      <a href="javascript:;">
        <span class="iconfont icon-dw"></span>
        <p>地址管理</p>
      </a>
    </div>
  </div>
  <div class="like-container">
    <div class="home-panel">
      <div class="header">
        <h4 data-v-bcb266e0="">猜你喜欢</h4>
      </div>
      <div class="goods-list">
        <GoodsItem v-for="good in likeList" :key="good.id" :good="good" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/var.scss';

.home-overview {
  height: 132px;
  background: linear-gradient(135deg, $xtxColor 0%, $helpColor 100%);
  display: flex;
  border-radius: 12px 12px 0 0;

  .user-meta {
    flex: 1;
    display: flex;
    align-items: center;

    .avatar {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 60px;
      border: 3px solid rgba(255, 255, 255, 0.3);

      img {
        width: 100%;
        height: 100%;
      }
    }

    h4 {
      padding-left: 26px;
      font-size: 18px;
      font-weight: normal;
      color: white;
    }
  }

  .item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:first-child {
      border-right: 1px solid rgba(255, 255, 255, 0.2);
    }

    a {
      color: white;
      font-size: 16px;
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-3px);
      }

      .iconfont {
        font-size: 32px;
      }

      p {
        line-height: 32px;
      }
    }
  }
}

.like-container {
  margin-top: 20px;
  border-radius: 4px;
  background-color: $bgCard;
}

.home-panel {
  background-color: $bgCard;
  padding: 0 20px;
  margin-top: 20px;
  height: 400px;
  border-radius: 12px;

  .header {
    height: 66px;
    border-bottom: 1px solid $borderColor;
    padding: 18px 0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    h4 {
      font-size: 22px;
      font-weight: 400;
      color: $textPrimary;
    }

  }

  .goods-list {
    display: flex;
    justify-content: space-around;
  }
}
</style>
