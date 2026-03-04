<script setup>
defineProps({
  title: {
    type: String
  },
  subTitle: {
    type: String
  }
})
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang='scss'>
@import '@/styles/var.scss';

.home-panel {
  background-color: $bgDark;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
      color: $textPrimary;

      small {
        font-size: 16px;
        color: $textMuted;
        margin-left: 20px;
      }
    }
  }
}
</style>
