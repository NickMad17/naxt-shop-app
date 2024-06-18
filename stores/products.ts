import { defineStore } from 'pinia'
import { items, type IProductItem } from '~/static/items'

export interface ISortItem {
	material?: string
	price?: string | undefined
}

export const useProductsStore = defineStore('user', () => {
	const selects: Ref<ISortItem> = useCookie('selects')
	const data: Ref<IProductItem[]> = ref(items)
	const products = ref<IProductItem[] | null>(null)

	onMounted(() => {
		if (!data.value) {
			data.value = items
		}
		if (!selects.value) {
			selects.value = {}
		}
	})

	watch(selects, () => {
		sortProducts()
	})

	const setSelect = (key: string, value: string | undefined) => {
		selects.value = { ...selects.value, [key]: value }
	}

	const sortProducts = () => {
		products.value = data.value

		products.value = products.value.filter(product => {
			// material

			if (selects.value.material === 'Все') {
				return product
			}

			if (selects.value.material === product.material) {
				return product
			}
		})
		if (selects.value.price === 'Цена по возрастанию') {
			products.value = products.value.sort((a, b) => {
				if (a.price.current_price < b.price.current_price) {
					return 1
				} else if (a.price.current_price > b.price.current_price) {
					return -1
				}
				return 0
			})
		}
		if (selects.value.price === 'Цена по убыванию') {
			products.value = products.value.sort((a, b) => {
				if (a.price.current_price > b.price.current_price) {
					return 1
				} else if (a.price.current_price < b.price.current_price) {
					return -1
				}
				return 0
			})
		}
		if (selects.value.price === 'Цена по дате') {
			products.value = products.value.sort((a, b) => {
				if (a.id > b.id) {
					return 1
				} else if (a.id < b.id) {
					return -1
				}
				return 0
			})
		}
	}

	return { products, sortProducts, selects, setSelect }
})
