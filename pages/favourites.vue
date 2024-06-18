<script lang="ts" setup>
const favouritesProducts = useFavouritesStore()

const checkingLength = () => {
	if (favouritesProducts.favourites) {
		return favouritesProducts.favourites.length > 0
	}
	return false
}
</script>

<template>
	<Breadcrumbs my-path="Избранное" />
	<h1 class="heading">Избранное</h1>
	<Products
		v-if="checkingLength()"
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
