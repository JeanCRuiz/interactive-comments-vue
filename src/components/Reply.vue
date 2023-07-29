<template>
    <div :class="$style.container">
        <article v-for="replie in replies" :key="replie.id" class="container">
            <header class="container-header">
                <div class="header-wrapper">
                    <img class="wrapper-img" :src="replie.user.image.webp" alt="" />
                    <h2 class="wrapper-username">{{ replie.user.username }}</h2>
                    <span class="wrapper-createdAt">{{ replie.createdAt }}</span>
                </div>
            </header>
            <main class="comment">
                <p>
                    {{ replie.content }}
                </p>
            </main>
            <Score :score="replie.score" :id="replie" />
            <ButtonAction />
        </article>
    </div>
</template>

<script>
import Score from './Score.vue';
import ButtonAction from './ButtonAction.vue';


export default {
    name: 'Reply',
    components: {
        Score,
        ButtonAction
    },
    props: {
        replies: {
            type: Array,
            required: false
        }
    },
    watch: {
        replies(val) {
            console.log("from comp", val)
        }
    }


}
</script>

<style module>
.container {
    width: 100%;
    display: grid;
    justify-self: end;

    grid-column: 2 / 3;
    grid-row: 2 / 3;
    gap: 1.5rem;
}
</style>