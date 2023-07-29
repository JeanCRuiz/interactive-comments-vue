<template>
  <div class="score-container">
    <button @click="upvote(id)">
      <span class="visually-hidden">icon plus</span>
      <img src="../assets/images/icon-plus.svg" alt="icon plus" />
    </button>
    <span class="score">{{ score }}</span>
    <button :disabled="score <= 0" @click="downvote(id)">
      <span class="visually-hidden">icon minus</span>
      <img src="../assets/images/icon-minus.svg" alt="icon plus" />
    </button>
  </div>
</template>

<script>
import { useCommentStore } from '../store';
import { mapActions } from 'pinia'

export default {
  name: 'Score',
  props: {
    score: {
      type: Number,
      required: true
    },
    id: {
      required: true
    }
  },
  methods: {
    ...mapActions(useCommentStore, ['upvote', 'downvote'])
  },

}
</script>

<style scoped>
.score-container {
  width: fit-content;
  display: flex;
  align-items: center;

  gap: 0.7rem;
  background-color: var(--Very-Light-Gray);
  border-radius: 10px;

  grid-area: score;
}

button {

  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding-inline: 0.7rem;
  padding-block: 0.7rem;

}

.score {
  font-size: 1rem;
  font-weight: 500;
  color: var(--Moderate-blue);
}

@media screen and (min-width: 45.625em) {
  .score-container {
    flex-direction: column;
    /* padding-inline: 0.938rem;
    padding-block: 0.75rem; */
    justify-self: start;
  }
}
</style>

