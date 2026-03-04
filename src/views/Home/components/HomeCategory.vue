<script setup>
import { useCategoryStore } from '@/stores/categoryStore';

const categoryStore = useCategoryStore();
</script>

<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in categoryStore.categoryList" :key="item.id">
        <RouterLink to="/">{{ item.name }}</RouterLink>
        <RouterLink v-for="i in item.children.slice(0, 2)" :key="i" to="/">{{ i.name }}</RouterLink>
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul>
            <li v-for="i in item.goods" :key="i.id">
              <RouterLink to="/">
                <img :src="i.picture" alt="" />
                <div class="info">
                  <p class="name ellipsis-2">
                    {{ i.name }}
                  </p>
                  <p class="desc ellipsis">{{ i.desc }}</p>
                  <p class="price"><i>¥</i>{{ i.price }}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang='scss'>
@import '@/styles/var.scss';

.home-category {
  width: 250px;
  height: 500px;
  background: rgba(22, 27, 34, 0.95);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 99;

  .menu {
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;
      transition: all 0.3s ease;

      &:hover {
        background: linear-gradient(90deg, $xtxColor 0%, rgba(0, 217, 165, 0.7) 100%);
      }

      a {
        margin-right: 4px;
        color: $textPrimary;

        &:first-child {
          font-size: 16px;
        }
      }

      .layer {
        width: 990px;
        height: 500px;
        background: rgba(22, 27, 34, 0.98);
        backdrop-filter: blur(10px);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;
        border: 1px solid $borderColor;

        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;
          color: $textPrimary;

          small {
            font-size: 16px;
            color: $textMuted;
          }
        }

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            width: 310px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            border: 1px solid $borderColor;
            border-radius: 8px;
            background: $bgCard;
            transition: all 0.3s ease;

            &:nth-child(3n) {
              margin-right: 0;
            }

            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;

              &:hover {
                background: $bgHover;
              }

              img {
                width: 95px;
                height: 95px;
              }

              .info {
                padding-left: 10px;
                line-height: 24px;
                overflow: hidden;

                .name {
                  font-size: 16px;
                  color: $textPrimary;
                }

                .desc {
                  color: $textMuted;
                }

                .price {
                  font-size: 22px;
                  color: $priceColor;

                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }

      &:hover {
        .layer {
          display: block;
        }
      }
    }
  }
}
</style>
