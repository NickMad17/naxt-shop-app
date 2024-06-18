<script setup lang="ts">
const { myPath } = defineProps<{
	myPath: string
}>()

// Тут по идее должен браться пусть с роутера

const paths: Ref<string[]> = ref([
	'Главная',
	'Система хранения',
	'Комплекты стеллажных систем',
])

onMounted(() => {
	if (myPath?.length > 1) {
		paths.value.push(myPath)
	}
})
</script>

<template>
	<div class="breadcrumbs">
		<p v-for="path in paths" class="breadcrumbs__item" :key="path">
			<span v-if="path !== paths.at(0)" class="breadcrumbs__slash">/</span>
			<span :class="{ active: path === paths.at(-1) }">{{ path }}</span>
		</p>
		<p class="breadcrumbs__mobile-item">
			<span class="breadcrumbs__slash">/</span>
			<span>{{ paths.at(-2) }}</span>
			<span class="breadcrumbs__slash">/</span>
			<span class="active">{{ paths.at(-1) }}</span>
		</p>
	</div>
</template>

<style scoped lang="scss">
.breadcrumbs {
	margin-bottom: 32px;
	display: flex;
	gap: 10px;
	&__item {
		font-weight: 400;
		font-size: 16px;
		line-height: 16px;
		color: var(--secondary-color);
	}
	&__mobile-item {
		display: none;
	}
	&__slash {
		margin-right: 10px;
	}
}
.active {
	color: black;
}

@media (max-width: 768px) {
	.breadcrumbs {
		flex-wrap: wrap;
		&__item {
			display: none;
		}
		&__mobile-item {
			display: block;
			font-weight: 400;
			font-size: 12px;
			line-height: 20px;
			color: var(--secondary-color);
		}
	}
}
</style>
