<template>
    <div class="header__container">
        <div class="logo__container">
            <a class="logo">Serial killer</a>
        </div>

        <div class="btn__container">
            <router-link to="/" class="btn">Films</router-link>
            <router-link to="/directors" class="btn">Directors</router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: "LayoutHeader",

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Permanent+Marker&family=Silkscreen&display=swap');

.header__container {
    font-family: 'Cinzel', serif;
    font-size: 26px;
    display: flex;
    justify-content: space-between;
    height: 160px;
    border-bottom: 1px solid #181818;
    //position: fixed;
}

.logo__container {
    margin: 50px 10px;
}
.logo {
    margin: 30px;
    font-size: 40px;
}

.btn__container{
    margin: 40px 10px;
    display: flex;
}

.btn {
    margin: 20px 10px;
}
</style>