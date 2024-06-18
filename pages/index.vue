<script setup>
import { materialSelect, priceSelect } from '~/static/select'
const products = useProductsStore()
</script>

<template>
	<Breadcrumbs my-path="" />
	<div class="wrapper">
		<h1 class="heading">Комплекты стеллажных систем</h1>
		<div class="link-wrapper">
			<NuxtLink class="link" to="/cart">Перейти в корзину</NuxtLink>
			<NuxtLink class="link" to="/favourites">Перейти в избранное</NuxtLink>
		</div>
	</div>
	<div class="select-wrapper">
		<Select :selectData="priceSelect" />
		<Select :selectData="materialSelect" />
	</div>
	<Products :products="products.products" />
</template>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	justify-content: space-between;
}

.link-wrapper {
	display: flex;
	gap: 20px;
}

.link {
	text-decoration: underline;
	color: var(--text-color);

	&:hover {
		color: var(--primary-color);
	}
}

.select-wrapper {
	display: flex;
	gap: 24px;
	margin-top: 32px;
}

@media (max-width: 1000px) {
	.wrapper {
		flex-direction: column-reverse;
		gap: 20px;
	}
}

@media (max-width: 480px) {
	.select-wrapper {
		flex-direction: column;
	}
	.link-wrapper {
		flex-wrap: wrap;
		font-size: 14px;
	}
}
</style>
