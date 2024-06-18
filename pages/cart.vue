<script lang="ts" setup>
const cartProducts = useCartStore()
</script>

<template>
	<Breadcrumbs my-path="Корзина" />
	<h1 class="heading">Корзина</h1>
	<Products class="" :products="cartProducts.cart" />
</template>

<style lang="scss" scoped>
.products {
	margin-top: 20px;
}
</style>
