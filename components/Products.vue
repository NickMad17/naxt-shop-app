<script lang="ts" setup>
const { products } = defineProps<{
	products: IProductItem[] | null
}>()
</script>

<template>
	<div class="products">
		<div class="products__item" v-for="product in products" :key="product.id">
			<div v-if="product.price.old_price" class="direction__sale">Скидка</div>
			<div class="products__img">
				<NuxtImg :src="product.image.url" :alt="'картинка ' + product.name" />
			</div>
			<div class="product__content direction">
				<p class="direction__code">{{ product.code }}</p>
				<p class="direction__name">{{ product.name }}</p>
				<div class="direction__box">
					<div class="direction__price">
						<span class="direction__price_old">
							{{
								product.price.old_price && Math.floor(product.price.old_price)
							}}
						</span>
						<span>
							{{
								product.price.current_price &&
								Math.floor(product.price.current_price)
							}}
							₽</span
						>
					</div>
					<div class="direction__buttons">
						<IconsCart :product-item="product" />
						<IconsHeart :product-item="product" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.products {
	margin-bottom: 100px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	row-gap: 48px;
	column-gap: 40px;

	&__item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		text-align: center;
		min-height: 352px;
		max-width: 336px;
		padding: 10px;
		border: 1px solid #eeeeee;
	}

	&__img {
		width: 100%;
		height: 237px;
		& img {
			height: 100%;
			width: 100%;
			object-fit: contain;
		}
	}
}

.direction {
	text-align: start;
	&__code {
		color: var(--secondary-color);
		margin-bottom: 5px;
		margin-top: 23px;

		font-size: 10px;
		font-weight: 400;
		line-height: 14px;
	}

	&__name {
		font-size: 16px;
		font-weight: 500;
		line-height: 22.4px;
		margin-bottom: 10px;
		// white-space: nowrap; /* Запрещает перенос строк */
		// overflow: hidden; /* Обрезает содержимое, если оно переполняет блок */
		// text-overflow: ellipsis;
		// width: 200px;
	}

	&__box {
		display: flex;
		justify-content: space-between;
		flex-wrap: nowrap;
	}

	&__price {
		font-size: 16px;
		font-weight: 400;
		line-height: 22.4px;

		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;

		&_old {
			text-decoration: line-through;
			color: var(--secondary-color);
		}
	}

	&__buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 11px;
	}

	&__sale {
		font-size: 14px;
		font-weight: 500;
		line-height: 18.2px;

		padding: 3px 16px;
		color: #fff;
		background: var(--primary-color);

		position: absolute;
		top: 10px;
		left: 0;
	}
}

@media (max-width: 900px) {
	.products {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;
	}
}

@media (max-width: 480px) {
	.products {
		display: flex;
		flex-direction: column;
		align-items: center;
		grid-template-columns: repeat(1, 1fr);
		&__item {
			width: 300px;
		}
	}
}
</style>
