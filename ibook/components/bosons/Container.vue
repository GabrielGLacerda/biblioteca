<template>
    <div class="container">
        <slot/>
    </div>  
</template>



<style  scoped>
.container {
  margin: 0 auto;
  max-width: 1070px;
}

@media (max-width: 600px)  {
     html{
         width: 90%;
     }    
}

@media (min-width: 600px) and (max-width: 992px) {
     html{
         width: 85%;
     }    
}   

@media (min-width:  992px) and (max-width: 1200px) {
     html{
         width: 70%;
     }    
} 

@media (min-width:  1200px){
     html{
         width: 70%;
     }    
} 
</style>