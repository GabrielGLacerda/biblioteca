<template>
    <NuxtLink class="book-class" :to="`/books/${book.id}`">
        <div class="text">
            <h4>{{ book.title }}</h4>
            <p>{{ book.author }}</p>
        </div>
    </NuxtLink>
</template>

<script lang="ts">
import Vue, {PropOptions} from 'vue' // PropOptions serve para poder tipar props no nuxt
import { Book } from '@/models'

export default Vue.extend({
    props: {
        book: {
            type: Object,
            required: true,

        } as PropOptions<Book>
    }
})
    

</script>

<style scoped>
    .book-card {
        color: inherit;
        display: grid;
        grid-gap: 1.5rem;
    }

     /* img {
    display: grid;
    width: 100%;
    box-shadow: 0px 4px 11px 4px rgba(0, 0, 0, 0.13);
    transition: all 300ms ease;
    } */

    img:hover{
        transform: scale(1.1);
        box-shadow: 0px 4px 17px 4px rgba(0, 0, 0, 0.11);
    }

    h4 {
    font-size: 0.875rem;
    font-weight: 400;
    }

     p {
    font-size: 13px;
    color: #7e7a7a;
  }

  NuxtLink {
      text-decoration: none;
  }
</style>

