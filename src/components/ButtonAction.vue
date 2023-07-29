<template>
  <div class="reply-container">
    <button>
      <img src="../assets/images/icon-reply.svg" alt="icon reply" />
      <span>Reply</span>
    </button>
  </div>
</template>

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
</style>
