import { defineStore } from 'pinia'

export const useFavouritesStore = defineStore('favourites', () => {
	const favourites: Ref<IProductItem[] | null> = useCookie('favourites')

	onMounted(() => {
		if (!favourites.value) {
			favourites.value = []
		}
	})
	const setFavourites = (product: IProductItem) => {
		console.log(product)

		favourites.value?.push(product)
	}

	const deleteFavourites = (product: IProductItem) => {
		if (favourites.value) {
			favourites.value = favourites.value.filter(item => item.id !== product.id)
		}
	}
	return { favourites, setFavourites, deleteFavourites }
})
