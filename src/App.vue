<script setup>
import {RouterView} from 'vue-router'
import LayoutHeader from "@/layout/layout-header/LayoutHeader.vue";
import LayoutFooter from "@/layout/layout-footer/LayoutFooter.vue";
</script>

<template>
    <LayoutHeader/>

    <RouterView/>

<!--    <LayoutFooter/>-->
</template>
