<script setup lang="ts">
const { selectData } = defineProps<{
	selectData: ISelect
}>()
//cookies
const selected: Ref<string | undefined> = useCookie(selectData.name)
//store
const products = useProductsStore()
//refs
const { options } = selectData
const isOpen = ref<boolean>(false)

onMounted(() => {
	if (!selected.value) {
		const optionsDefault = options.filter(el => {
			if (el.default === true) {
				return el
			}
		})
		selected.value = optionsDefault?.at(0)?.name
	}
	products.setSelect(selectData.name, selected.value)
})

// TODO: тут поставь pinia

watch(
	() => selected.value,
	newValue => {
		selected.value = newValue
		products.setSelect(selectData.name, selected.value)
	}
)
</script>
<template>
	<div class="select__container">
		<IconsArrow
			class="select__arrow"
			:class="{ 'select__arrow-open': isOpen }"
		/>

		<label class="select__label" for="select">{{ selectData.label }}</label>
		<select
			@click="isOpen = !isOpen"
			class="select__select"
			id="select"
			v-if="selected"
			v-model="selected"
		>
			<option
				class="select__option"
				v-for="option in options"
				:value="option.name"
				:key="option.id"
				:selected="option.name === selected"
			>
				{{ option.name }}
			</option>
		</select>
		<div v-else class="loading">Загрузка...</div>
	</div>
</template>

<style lang="scss" scoped>
.select {
	&__container {
		position: relative;
		width: 366px;
		padding-bottom: 18px;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	&__label {
		color: var(--secondary-color);
		font-size: 12px;
		font-weight: 400;
		line-height: 18px;
		margin-left: 16px;
	}

	&__select {
		cursor: pointer;
		font-size: 16px;
		font-weight: 400;
		line-height: 21px;
		appearance: none;

		padding: 10px 16px;
		&:focus {
			outline: none;
		}
	}
	&__arrow {
		position: absolute;
		top: 40px;
		right: 10px;
		&-open {
			transform: rotate(180deg);
		}
	}
}

.loading {
	margin-left: 16px;
}

@media (max-width: 480px) {
	.select {
		&__container {
			width: 100%;
		}
	}
}
</style>
