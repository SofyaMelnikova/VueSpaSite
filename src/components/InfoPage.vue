<template>
    <div class="container">
        <div class="left">
            <slot name="info"></slot>

        </div>
        <div class="right">
            <div class="block_img">
                <slot name="mainPhoto"></slot>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'InfoPage',
}

</script>

<style>
.container {
    display: flex;
}

.right{
    margin: 60px;
    width: 50%;
}

.left {
    margin: 60px;
    width: 50%;
}

</style>