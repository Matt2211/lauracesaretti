<template>
    <div :categoryName="categoryName" class="related-products-container">
    <div class="container py-5 my-5">
      <div class="row text-center flex-column mb-4">
        <h4>Non e il servizio fotografico <br class="d-md-none"> adatto a te?</h4>
        <p class="lead">Prova a controllare anche:</p>
      </div>
      <div class="row related-products" >
        <div class="col-6 col-md-3" :class="{'d-none' : categoryName === 'fineArt' }">
            <NuxtLink to="/servizi-fotografici/maternità-fine-art">
                <img src="~/assets/images/Laura_Cesaretti_Photography_Fine_Art.jpg" class="img-fluid rounded " alt="">
                <h5 class="text-center mt-2">Fine Art</h5>
            </NuxtLink>
        </div>
        <div class="col-6 col-md-3" :class="{'d-none' : categoryName === 'lifeStyle' }">
            <NuxtLink to="/servizi-fotografici/maternità-life-style">
                <img src="~/assets/images/Laura_Cesaretti_Maternità_Life_Style.jpg" class="img-fluid rounded" alt="">
                <h5 class="text-center mt-2">Life Style</h5>
            </NuxtLink>
        </div>
        <div class="col-6 col-md-3" :class="{'d-none' : categoryName === 'neonato' }">
            <NuxtLink to="/servizi-fotografici/neonato">
                <img src="~/assets/images/Laura_Cesaretti_Photography_Neonato.jpg" class="img-fluid rounded" alt="">
                 <h5 class="text-center mt-2">Neonato</h5>
            </NuxtLink>
        </div>
        <div class="col-6 col-md-3" :class="{'d-none' : categoryName === 'bebè' }">
            <NuxtLink to="/servizi-fotografici/bebè">
                <img src="~/assets/images/Laura_Cesaretti_Photography_Bebè.jpg" class="img-fluid rounded" alt="">
                <h5 class="text-center mt-2">Bebè</h5>
            </NuxtLink>
        </div>
        <div class="col-6 col-md-3" :class="{'d-none' : categoryName === 'cakeSmash' }">
            <NuxtLink to="/servizi-fotografici/cake-smash">
                <img src="~/assets/images/Laura_Cesaretti_Photography_Cake_Smash.jpg" class="img-fluid rounded" alt="">
                <h5 class="text-center mt-2">Cake Smash</h5>
            </NuxtLink>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'Related',
        props: {
            categoryName: {
                type: String,
                required: true
            }
        }
    }
</script>