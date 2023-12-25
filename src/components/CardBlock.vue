<template>

    <div class="card-block">
        <div class="card-block__image">
            <slot name="image"/>
        </div>

        <div class="card-block__info">
            <slot name="info"/>
        </div>
    </div>

</template>

<script>
export default {
    name: 'CardBlock',
};
</script>

<style>
.card-block {
    display: flex;
    justify-content: space-between;
    height: 200px;
    width: 750px;
    background-color: #f2f2f2;
    padding: 12px;
    margin-right: 20px;
    margin-bottom: 20px;
    transition: all 0.3s;
    cursor: pointer;
    border-radius: 10px;
}

.card-block:hover {
    box-shadow: 4px 4px 8px 4px rgba(34, 60, 80, 0.2);
    transform: scale(1.04);
}

.card-block__image {
    width: 20%;
    margin: 3px 12px;
}

.card-block__info {
    width: 80%;
    margin: 10px 20px;
}

.card-block img {
    width: 120px;
}
</style>