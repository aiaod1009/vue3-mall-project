// 封装分类数据业务相关代码
import { getCategoryAPI } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';

export function useCategory() {
  // 获取分类数据
  const categoryData = ref({})
  const route = useRoute();
  const getCategoryData = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  }

  onMounted(() => {
    getCategoryData();
  })

  // 目标:路由参数变化的时候 可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    // console.log('路由参数变化了');
    // 存在问题：使用最新的路由参数请求用最新的分类数据
    console.log(to);
    if (to.params.id) {
      getCategoryData(to.params.id);
    }
  })

  return {
    categoryData
  }
}