<template>

    <div class="content">

        <div class="search__container">
            <input class="form-control"
                   type="text"
                   v-model="searchText"
                   placeholder="Enter the film name..."/>

<!--            <div class="select__container">-->
<!--                <a class="filter-label">Filter by genre:</a>-->

<!--                <select class="select" id="select" onchange="filterGenre($event)">-->
<!--                    <option value="">&#45;&#45;choose&#45;&#45;</option>-->
<!--                    <option value="Drama">Drama</option>-->
<!--                    <option value="Action">Action</option>-->
<!--                    <option value="Sci-Fi">Sci-Fi</option>-->
<!--                    <option value="Romance">Romance</option>-->
<!--                    <option value="Adventure">Adventure</option>-->
<!--                    <option value="Crime">Crime</option>-->
<!--                </select>-->
<!--            </div>-->

        </div>


        <div class="card__container">
            <template v-for="film in films" class="card__container">
                <CardBlock @click="showCard(film)" v-show="getVisibility(film.name)" >

                    <template v-slot:image>
                        <img :src="film.imageLogo" alt="logo">
                    </template>

                    <template v-slot:info>
                        <div class="film__info-name">
                            "{{ film.name }}"
                        </div>
                        <div class="film__info">
                            <a>
                                Year:
                            </a>
                            {{ film.year }}
                        </div>
                        <div class="film__info">
                            <a>
                                Director:
                            </a>
                            {{ film.director }}
                        </div>
                        <div class="film__info">
                            <a>
                                Genre:
                            </a>
                            {{ film.genre }}
                        </div>
                    </template>

                </CardBlock>
            </template>
        </div>
    </div>

</template>
<script>
import FilmCard from "@/components/FilmCard.vue";
import data from 'C:/Proga/VueProjectFilm/src/assets/film.json';
import CardBlock from "@/components/CardBlock.vue";

export default {
    name: 'MainPage',
    components: {CardBlock, FilmCard},
    data() {
        return {
            searchText: '',
            films: data
        }
    },
    methods: {
        getVisibility(text) {
            return (text.toLowerCase()).includes(this.searchText.toLowerCase());
        },
        showCard(film) {
            this.$router.push({
                name: 'film',
                params: {
                    id: film.id,
                    obj: JSON.stringify(film)
                }
            })
        },
        filterGenre(genre) {
            this.films.filter((genre) => {
                const length = this.films.length;
                for (let i = 0; i < length; i++) {
                    let film = this.films[i];
                    console.log(film.genre)
                    console.log(genre)
                    return !!(film.genre).includes(genre);
                }
            })

        }
    },
}
</script>

<style>

.image {
    margin: 5px 20px;
}

.content {
    font-family: 'Helvetica Neue', sans-serif;
}

.search__container {
    margin: 10px 60px;
    display: flex;
    height: 100px;
    justify-content: center;
}

.form-control {
    margin: 15px 60px;
    border: 1px solid #181818;
    border-radius: 20px;
    width: 800px;
    height: 40px;
    padding: 2px 20px;
}

.select__container {
    margin: 15px 60px;
}

.filter-label {
    margin: 12px 10px;

}

.select {
    margin: 12px 10px;
    border: 1px solid #181818;
    border-radius: 20px;
    height: 40px;
}

.card__container {
    margin: 10px 300px;
}

.image {
    margin: 5px 20px;
}

.film__info-name {
    font-size: 30px;
    font-family: 'Cinzel', sans-serif;
}

.film__info {
    margin: 10px;
    font-size: 18px;
}

</style>