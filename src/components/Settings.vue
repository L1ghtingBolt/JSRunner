<script setup>
  import { ref } from 'vue';
  let miniMap = ref(localStorage.getItem('minimap') || false);
  let linenums = ref(localStorage.getItem('linenums') || true);
  
</script>

<template>
  <div class="settings">
    <h1>Settings</h1>
    <div class="checkbox">
      <label for="minienabled">Minimap</label>
      <input type="checkbox" id="minienabled" :checked="miniMap">
    </div>
    <div class="checkbox">
      <label for="linenums">Line numbers</label>
      <input type="checkbox" id="linenums" :checked="linenums">
    </div>
  </div>
</template>

<style>
  body {
    font-family: system-ui;
  }
  .settings {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
</style>