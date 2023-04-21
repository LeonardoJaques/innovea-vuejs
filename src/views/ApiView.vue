<template>
  <div class="center">
    <h1>Articles</h1>
    <ul class="left">
      <li v-for="article in articles" :key="article.title">
        <a :href="article.url">{{ article.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import api from '../services/api.js';


const articles = ref([]);
const fetchArticles = async () =>
  await api
    .get('/top-headlines?country=us')
    .then((response) => { articles.value = response.data.articles });


onMounted(fetchArticles);

</script>
<style scoped>
.center {
  text-align: center;
}

.left {
  text-align: left;
}
</style>