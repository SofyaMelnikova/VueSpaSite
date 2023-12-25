<template >
    <div class="content">
        <InfoPage>
            <template v-slot:mainPhoto>
                <img :src="film.imageLogo" alt="Logo">
            </template>

            <template v-slot:info>
                <div class="container__top">
                    <p class="container-name">{{ film.name }}</p>
                    <p class="container-year">{{ film.year }}</p>
                </div>

                <div class="info__container">
                    <div class="film-info">
                        <a>Genre: </a>
                        {{ film.genre }}
                    </div>

                    <div class="film-info">
                        <a>Director: </a>
                        {{ film.director }}
                    </div>

                    <div class="film-info">
                        <a>Cast: </a>
                        {{ film.cast }}
                    </div>

                    <div class="film-info">
                        <a>Description: </a>
                        {{ film.description }}
                    </div>
                </div>

                <div class="image__container">
                    <img :src="film.image1" alt="img1">
                    <img :src="film.image2" alt="img2">
                    <img :src="film.image3" alt="img3">
                </div>
            </template>

        </InfoPage>
    </div>

</template>

<script>
import data from 'C:/Proga/VueProjectFilm/src/assets/film.json';
import InfoPage from "@/components/InfoPage.vue";

export default {
    name: 'FilmPage',
    components: {InfoPage},
    data() {
        return {
            films: data,
            id: this.$route.params.id,
            film: JSON.parse(this.$route.params.obj)
        }
    },
    created() {
        console.log(this.film.imageLogo)
    },
    methods: {
        toMainPage() {
            this.$router.push('/')
        },
    }
}

</script>

<style>

.block_img img {
    position: absolute;

    object-fit: cover;
}

.container__top {
    margin: 10px 70px;
    display: flex;
    justify-content: left;
    align-content: center;
}

.container-name {
    font-size: 30px;
    font-family: 'Cinzel', serif;
}

.container-year {
    color: red;
}

img {
    border: 1px #181818 solid;
}

.info__container {
    display: grid;
    //justify-content: ;
}

.film-info {
    margin: 5px 40px;
}

.image__container {
    margin: 40px 100px;
    justify-content: space-between;
}

.image__container img {
    margin: 20px;
}


</style>