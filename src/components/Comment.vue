<template>
  <section id="comments" :class="$style.comments">
    <div
      :class="$style['grid-layout']"
      v-for="comment in comments"
      :key="comment.id"
    >
      <article class="container" :class="$style.container">
        <header class="container-header">
          <div class="header-wrapper">
            <img class="wrapper-img" :src="comment.user.image.webp" alt="" />
            <h2 class="wrapper-username">
              {{ comment.user.username }}
              <span
                class="you"
                v-if="comment.user.username === currentUser.username"
                >you</span
              >
            </h2>
            <span class="wrapper-createdAt">{{ comment.createdAt }}</span>
          </div>
        </header>
        <main class="comment">
          <p>
            {{ comment.content }}
          </p>
        </main>
        <Score :score="comment.score" :id="comment" />
        <ButtonAction />
      </article>
      <Reply v-if="comment.replies.length > 0" :replies="comment.replies" />
      <div v-if="comment.replies.length > 0" :class="$style.line"></div>
    </div>
  </section>
</template>

<script>
import Score from './Score.vue';
import ButtonAction from './ButtonAction.vue';
import Reply from './Reply.vue';

import { mapState } from 'pinia';
import { useCommentStore } from '../store';

export default {
  name: 'Comment',
  components: {
    Score,
    ButtonAction,
    Reply,
  },
  computed: {
    ...mapState(useCommentStore, ['currentUser', 'comments', 'calculateDate']),
  },
};
</script>

<style module>
.grid-layout {
  display: grid;

  grid-template-columns: 5% auto;

  row-gap: 1.25rem;
}

.container {
  grid-column: 1 / 3;
}

.line {
  width: 2px;
  justify-self: start;
  background-color: var(--Light-Gray);
}

.comments {
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  height: 70vh;
  overflow-y: auto;
}

.comments p {
  word-break: break-all;
}

@media screen and (min-width: 45.625em) {
  .line {
    justify-self: center;
  }
}
</style>
