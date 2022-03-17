<template>
    <footer class="footer">
        <Container>
            <Logo />
            <p>Copyright &copy; {{ currentYear }} ibook</p>
        </Container>
    </footer>
</template>

<script>
export default {
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style  scoped>
    .footer {
    width: 100%;
    height: 70px;
    background: #292929;
    }

    .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    }

    p {
      color: #f0f0f0;
    }
</style>