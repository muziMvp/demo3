<template>
  <div class="about">
    <Menu></Menu>
    <main-content></main-content>
  </div>
</template>
<script setup>
import Menu from '@/components/Menu';
import mainContent from '@/components/mainContent';
</script>
<style scoped>
.about {
  display: flex;
  width: 100%;
  height: 700px;
}
</style>
