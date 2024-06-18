export interface ISelect {
	name: string
	label: string
	options: ISelectOptions[]
}

export interface ISelectOptions {
	id: number
	name: string
	default?: boolean
}

export const priceSelect: ISelect = {
	name: 'price',
	label: 'Сортировать по:',
	options: [
		{
			id: 1,
			name: 'Цена по дате',
			default: true,
		},
		{
			id: 2,
			name: 'Цена по возрастанию',
			default: false,
		},
		{
			id: 3,
			name: 'Цена по убыванию',
			default: false,
		},
	],
}

export const materialSelect: ISelect = {
	name: 'material',
	label: 'Материал',
	options: [
		{
			id: 1,
			name: 'Все',
			default: true,
		},
		{
			id: 3,
			name: 'Дерево',
			default: false,
		},
		{
			id: 2,
			name: 'Металл',
			default: false,
		},
	],
}
