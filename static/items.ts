export interface IProductItem {
	id: string
	name: string
	code: string | null
	price: {
		old_price: number | null
		current_price: number
	}
	image: {
		url: string
	}
	material: string
}

export const items: IProductItem[] = [
	{
		id: '1',
		name: 'Ручка дверная',
		code: 'L422WH',
		price: {
			old_price: 400,
			current_price: 355,
		},
		image: {
			url: 'products/1.png',
		},
		material: 'Дерево',
	},
	{
		id: '2',
		name: 'Ручка, нержавеющая сталь',
		code: 'L423WH',
		price: {
			old_price: 400.9,
			current_price: 355.555,
		},
		image: {
			url: 'products/2.png',
		},
		material: 'Металл',
	},
	{
		id: '3',
		name: 'Стандартные петли',
		code: 'P424WN',
		price: {
			old_price: null,
			current_price: 75,
		},
		image: {
			url: 'products/3.png',
		},
		material: 'Металл',
	},
	{
		id: '4',
		name: 'Петля со стопором',
		code: 'PW5AC',
		price: {
			old_price: 270,
			current_price: 200,
		},
		image: {
			url: 'products/4.png',
		},
		material: 'Металл',
	},
	{
		id: '5',
		name: 'Ручка дверная',
		code: 'LM352',
		price: {
			old_price: null,
			current_price: 720,
		},
		image: {
			url: 'products/1.png',
		},
		material: 'Дерево',
	},
	{
		id: '6',
		name: 'Ручка, нержавеющая сталь',
		code: null,
		price: {
			old_price: null,
			current_price: 355.555,
		},
		image: {
			url: 'products/2.png',
		},
		material: 'Металл',
	},
	{
		id: '7',
		name: 'Стандартные петли',
		code: 'WD14LK',
		price: {
			old_price: null,
			current_price: 75,
		},
		image: {
			url: 'products/3.png',
		},
		material: 'Металл',
	},
	{
		id: '8',
		name: 'Петля со стопором',
		code: null,
		price: {
			old_price: 1200,
			current_price: 900,
		},
		image: {
			url: 'products/4.png',
		},
		material: 'Металл',
	},
]
