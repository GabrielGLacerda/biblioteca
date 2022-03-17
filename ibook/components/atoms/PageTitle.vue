<template>
    <h1 class="page-title">
        {{ text }} <b>{{ strong }}</b>
    </h1>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    props: {
        text: {
            type: String,
            required: true
        },
         strong: {
            type: String,
            required: true
        }
    }
})
</script>

<style  scoped>
    .page-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 500;
    }

    @media (max-width: 600px) {
        html{
            grid-template-columns: 1fr;
            font-size: 1.8rem;
        }
    }

    @media  (min-width: 600px) and (max-width: 992px){
        html{
            grid-template-columns: 1fr;
            font-size: 1.8rem;
        }
    }

    b {
    color: #292929;
  }
</style>