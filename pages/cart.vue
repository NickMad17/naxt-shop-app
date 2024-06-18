<script lang="ts" setup>
const cartProducts = useCartStore()
</script>

<template>
	<Breadcrumbs my-path="Корзина" />
	<h1 class="heading">Корзина</h1>
	<Products
		v-if="cartProducts.cart.length > 0"
		class=""
		:products="cartProducts.cart"
	/>
	<p class="info" v-else>Корзина пуста</p>
</template>

<style lang="scss" scoped>
.products {
	margin-top: 20px;
}
</style>
