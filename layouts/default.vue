<template>
	<header />
	<main class="center">
		<slot />
	</main>
	<footer />
</template>

<style scoped>
.center {
	position: relative;
	padding-top: 32px;
	padding-left: calc(50% - 600px);
	padding-right: calc(50% - 600px);
}

@media (max-width: 1250px) and (min-width: 1000px) {
	.center {
		padding-left: calc(50% - 500px);
		padding-right: calc(50% - 500px);
	}
}

@media (max-width: 1050px) and (min-width: 840px) {
	.center {
		padding-left: calc(50% - 400px);
		padding-right: calc(50% - 400px);
	}
}

@media (max-width: 840px) {
	.center {
		padding-left: 25px;
		padding-right: 25px;
	}
}
</style>
