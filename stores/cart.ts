import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
	const cart: Ref<IProductItem[] | null> = useCookie('cart')

	onMounted(() => {
		if (!cart.value) {
			cart.value = []
		}
	})
	const setCart = (product: IProductItem) => {
		console.log(product)

		cart.value?.push(product)
	}

	const deleteCart = (product: IProductItem) => {
		if (cart.value) {
			cart.value = cart.value.filter(item => item.id !== product.id)
		}
	}
	return { cart, setCart, deleteCart }
})
