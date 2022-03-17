<template>
    <div class="ibook-layout">
        <Header />
        <Container>
            <Nuxt/>
        </Container>
        <Footer />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style scoped>
.ibook-layout {
  margin-top: 4.313rem;
  display: grid;
  grid-gap: 6.75rem;
}

.ibook-layout .container {
     padding-bottom: 6.75rem;
}

.footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>