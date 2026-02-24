<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanle from './components/HomePanle.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- 测试面板组件 -->
  <HomePanle title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
    <div>
      我是新鲜好物的插槽
    </div>

  </HomePanle>
  <HomePanle title="人气推荐" subTitle="人气推荐  品质靠谱">
    <div>
      我是人气推荐的插槽
    </div>
  </HomePanle>
</template>