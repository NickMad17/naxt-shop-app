<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

const { productItem } = defineProps<{
	productItem: IProductItem
}>()
const favourites = useFavouritesStore()
const addToCart = ref<boolean>(false)

const initCart = () => {
	addToCart.value =
		favourites.favourites?.some(
			cartElement => cartElement.id === productItem.id
		) || false
}

onMounted(() => {
	initCart()
})

watch(
	() => favourites.favourites,
	() => {
		initCart()
	}
)

const click = () => {
	if (!addToCart.value) {
		favourites.setFavourites(productItem)
		addToCart.value = true
	} else {
		favourites.deleteFavourites(productItem)
		addToCart.value = false
	}
}
</script>

<template>
	<button class='icon' @click="click">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			:fill="addToCart ? 'black' : 'none'"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-heart"
		>
			<path
				d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
			/>
		</svg>
	</button>
</template>
