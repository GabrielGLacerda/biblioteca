<template>
    <div class="presentation">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime mollitia soluta odit, explicabo voluptate libero culpa ea rem fugit odio quaerat blanditiis, nostrum necessitatibus expedita animi ex! Nulla, fugiat.</p>

        <img src="@/assets/img/presentation.svg" alt="apresentação do ibook">
    </div>
</template>



<style  scoped>
    .presentation {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    }

    @media (max-width: 600px) {
        html{
            grid-template-columns: 1fr;
        }
    }

    @media  (min-width: 600px) and (max-width: 992px){
        html{
            grid-template-columns: 1fr;
        }
    }

    p {
    line-height: 26px;
    }

    img {
    max-width: 100%;
    }
</style>