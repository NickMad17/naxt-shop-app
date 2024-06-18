<script lang="ts" setup>
const favouritesProducts = useFavouritesStore()
</script>

<template>
	<Breadcrumbs my-path="Избранное" />
	<h1 class="heading">Избранное</h1>
	<Products
		v-if="favouritesProducts.favourites.length > 0"
		class=""
		:products="favouritesProducts.favourites"
	/>
	<p class="info" v-else>Избранное пусто</p>
</template>

<style lang="scss" scoped>
.products {
	margin-top: 20px;
}
</style>
