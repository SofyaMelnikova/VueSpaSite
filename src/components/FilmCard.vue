<template>
    <CardBlock @click="">

        <template v-slot:image>
            <img :src="film.imageLogo" class="image" alt="logo">
        </template>

        <template v-slot:info>
            <div class="film__info-name">
                {{ film.name }}
            </div>
            <div class="film__year">
            <span >
                Year
            </span>
                {{ film.year }}
            </div>
            <div class="film__title">
            <span >
                Director:
            </span>
                {{ film.director }}
            </div>
            <div class="film__genre">
            <span >
                Genre:
            </span>
                {{ film.genre }}
            </div>
        </template>

    </CardBlock>
</template>

<script>
import CardBlock from "@/components/CardBlock.vue";

export default {
    name: 'FilmCard',
    components: {CardBlock},
    props: {
        film: {
            type: Object
        }
    }
}

</script>

<style>
.image {
    margin: 5px 20px;
}

.film__info-name {
    font-size: 30px;
}


</style>