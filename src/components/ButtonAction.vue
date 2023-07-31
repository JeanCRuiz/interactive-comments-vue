<template>
  <div class="reply-container">
    <div class="wrapper" v-if="currentUser.username === currentUsername">
      <button class="delete-btn" @click="handleClick">
        <img src="../assets/images/icon-delete.svg" alt="icon reply" />
        <span>Delete</span>
      </button>
      <button>
        <img src="../assets/images/icon-edit.svg" alt="icon reply" />
        <span>Edit</span>
      </button>
    </div>
    <button v-else @click="$emit('toogleFormReply')">
      <img src="../assets/images/icon-reply.svg" alt="icon reply" />
      <span>Reply</span>
    </button>
  </div>
</template>

<script>

import { mapState } from 'pinia';
import { useCommentStore } from '../store';

export default {
  name: 'buttonAction',
  props: {
    currentUsername: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(useCommentStore, ['currentUser']),
  },

}
</script>

<style scoped>
.reply-container {
  width: fit-content;
  grid-area: button;
  justify-self: end;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--Moderate-blue);
  justify-self: end;
}

.delete-btn {
  color: var(--Soft-Red);
}

.wrapper {
  display: flex;
  gap: 1rem;
}

@media screen and (min-width: 45.625em) {
  .wrapper {
    display: flex;
    gap: 1.438rem;
  }
}
</style>
