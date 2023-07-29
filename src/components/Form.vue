<template>
  <form :class="$style.wrapper" @submit.prevent="addComment(content)">
    <img
      class="wrapper-img"
      :src="currentUser.image.webp"
      alt="current user avatar"
    />
    <textarea
      placeholder="Add a comment..."
      rows="4"
      :class="$style['comment-box']"
      v-model="content"
    ></textarea>
    <button :class="$style['send-btn']" :disabled="content.length <= 0">
      Send
    </button>
  </form>
</template>

<script>
import { useCommentStore } from '../store';
import { mapState, mapActions } from 'pinia';

export default {
  data() {
    return {
      content: '',
    };
  },
  computed: {
    ...mapState(useCommentStore, ['currentUser']),
  },
  methods: {
    ...mapActions(useCommentStore, ['addComment']),
  },
  // mounted() {
  //     console.log(this.currentUser)
  //     console.log('component')
  //     console.log(this.addComment)

  // }
};
</script>

<style module>
.wrapper {
  /* height: 11.813rem; */
  background-color: var(--White);
  border-radius: 0.5rem;
  padding-inline: 1rem;
  padding-block: 1rem;
  margin-block-start: 1rem;

  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1.5rem;
}

.comment-box {
  grid-column: 1 / 3;
  grid-row: 1 / 2;

  border: 1px solid var(--Light-Gray);
  border-radius: 0.5rem;
  padding-block: 0.75rem;
  padding-inline: 1.5rem;
}

.send-btn {
  width: max-content;
  background-color: var(--Moderate-blue);
  border: none;
  text-transform: uppercase;
  color: var(--White);
  font-weight: var(--fw-500);
  padding-inline: 1.938rem;
  padding-block: 0.75rem;
  border-radius: 0.5rem;

  justify-self: end;
}

@media screen and (min-width: 45.625em) {
  .wrapper {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;

    align-items: start;
  }

  .comment-box {
    grid-column: auto;
    grid-row: auto;
  }
}
</style>
