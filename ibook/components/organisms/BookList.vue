<template>
    <div class="book-list">
        <BookCard v-for="book in $books" :key="book.id" :book="book"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
    computed: {
        $books() {
            return books.$all
        }
    }
})
    

</script>

<style  scoped>
    .book-list {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: auto;
        grid-gap: 2rem;
    }

    @media (max-width:  600px)  {
        html{
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 600px) and (max-width: 992px)  {
        html{
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>