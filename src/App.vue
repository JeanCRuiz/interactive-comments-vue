<template>
  <main class="main">
    <header>
      <h1 class="visually-hidden">Interactive Comments</h1>
    </header>
    <Comment />
    <Form />
  </main>
</template>

<script>
import Comment from './components/Comment.vue';
import Form from './components/Form.vue';

export default {
  name: 'App',
  components: {
    Comment,
    Form,
  },
};
</script>

<style scoped>
.main {
  width: calc(100% - 2rem);
  max-width: 45.625rem;
  /* height: 100vh; */
  margin-inline: auto;
  /* margin-block: 2rem; */
  padding-block-start: 4rem;
  /* position: relative; */
  /* background-color: red; */
  /* just testing ⬇️ */
  /* min-height: 100vh; */
}
</style>
