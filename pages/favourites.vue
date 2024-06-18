<script lang="ts" setup>
const favouritesProducts = useFavouritesStore()
</script>

<template>
	<Breadcrumbs my-path="Избранное" />
	<h1 class="heading">Избранное</h1>
	<Products class="" :products="favouritesProducts.favourites" />
</template>

<style lang="scss" scoped>
.products {
	margin-top: 20px;
}
</style>
