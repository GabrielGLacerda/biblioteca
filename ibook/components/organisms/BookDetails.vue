<template>
    <div class="book-details">
        <BookCover />
        <BookInfo />

    </div>
</template>



<style scoped>
    .book-details {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-gap: 1.4rem;
    }

    @media (max-width:  600px) {
        html{
            grid-template-columns: 1fr;
        }
    }

    @media (min-width: 600px) and (max-width: 992px) {
        tml{
            grid-template-columns: 1fr;
        }
    }
</style>