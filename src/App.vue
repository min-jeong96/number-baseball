<template>
  <MainPage />
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style>
/* CSS RESET */
html,
body,
#app {
  height: 100%;
  height: -webkit-fill-available;
  width: 100%;
  margin: 0;
  font-family: Pretendard, sans-serif;
  font-size: 16px;
}
#app {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
input,
textarea,
select {
  font-size: 16px;
}

/* WEB FONT */
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css");

/* COMMON CSS */
:root {
  --primary-color: #0f4c81;
  --secondary-color: #a3cef4;
}
</style>
