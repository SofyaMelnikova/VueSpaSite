<template>

    <div class="content">

        <div class="search__container">
            <input class="form-control"
                   type="text"
                   v-model="searchText"
                   placeholder="Enter the film name..."/>

        </div>


        <div class="card__container">
            <template v-for="director in directors" class="card__container">
                <CardBlock @click="showCard(director)" v-show="getVisibility(director.name)">

                    <template v-slot:image>
                        <img :src="director.image">
                    </template>

                    <template v-slot:info>
                        <div class="director__info-name">
                            {{ director.name }}
                        </div>
                        <div class="director__info">
                            <a>Age:</a>
                            {{ director.age }}
                        </div>
                        <div class="director__info">
                            <a>Films:</a>
                            {{ director.movies }}
                        </div>
                    </template>

                </CardBlock>
            </template>
        </div>

    </div>

</template>
<script>
import FilmCard from "@/components/FilmCard.vue";
import data from 'C:/Proga/VueProjectFilm/src/assets/director.json';
import CardBlock from "@/components/CardBlock.vue";

export default {
    name: 'MainPage',
    components: {CardBlock, FilmCard},
    data() {
        return {
            searchText: '',
            directors: data
        }
    },
    methods: {
        getVisibility(text) {
            return (text.toLowerCase()).includes(this.searchText.toLowerCase());
        },
        showCard(director) {
            this.$router.push({
                name: 'director',
                params: {
                    id: director.id,
                    obj: JSON.stringify(director)
                }
            })
        }
    },
}
</script>

<style>
.content {
    font-family: 'Geologica', sans-serif;
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

.director__info-name {
    font-size: 30px;
    font-family: Cinzel,serif;
}

.director__info {
    margin: 15px;
    font-size: 18px;
}

</style>