<template>
    <div class="content">
        <InfoPage>
            <template v-slot:mainPhoto>
                <img :src="director.imageLogo" alt="Logo">
            </template>

            <template v-slot:info>
                <div class="container__top">
                    <p class="container-name">{{ director.name }}</p>
                    <p class="container-year">{{ director.age }}</p>
                </div>

                <div class="info__container">
                    <div class="film-info">
                        <a>Birth place: </a>
                        {{ director.birthPlace }}
                    </div>

                    <div class="film-info">
                        <a>Notable movies: </a>
                        {{ director.movies }}
                    </div>

                    <div class="film-info">
                        <a>Facts: </a>
                        {{ director.facts }}
                    </div>

                    <div class="film-info">
                        <a>Awards: </a>
                        {{ director.awards }}
                    </div>
                </div>

                <div class="image__container">
                    <img :src="director.image1" alt="img1">
                    <img :src="director.image2" alt="img2">
                    <img :src="director.image3" alt="img3">
                </div>
            </template>

        </InfoPage>
    </div>

</template>

<script>
import InfoPage from "@/components/InfoPage.vue";

export default {
    name: 'DirectorPage',
    components: {InfoPage},
    data() {
        return {
            id: this.$route.params.id,
            director: JSON.parse(this.$route.params.obj)
        }
    },
    created() {
        console.log(this.director.imageLogo)
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