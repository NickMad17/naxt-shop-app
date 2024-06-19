<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'

const { productItem } = defineProps<{
	productItem: IProductItem
}>()
const cart = useCartStore()
const addToCart = ref<boolean>(false)
const locate = useRoute()

console.log()

const initCart = () => {
	addToCart.value =
		cart.cart?.some(cartElement => cartElement.id === productItem.id) || false
}

onMounted(() => {
	initCart()
})

watch(
	() => cart.cart,
	() => {
		initCart()
	}
)

const click = () => {
	if (!addToCart.value) {
		cart.setCart(productItem)
		addToCart.value = true
	} else {
		cart.deleteCart(productItem)
		addToCart.value = false
	}
}
</script>

<template>
	<button class="icon" @click="click">
		<IconsBasket v-if="!addToCart" />
		<IconsComplete v-else-if="locate.path !== '/cart' && addToCart" />
		<IconsDelete v-else />
	</button>
</template>
