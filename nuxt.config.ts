// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
																																																																devtools: { enabled: false },
																																																																css: ['~/assets/styles/index.scss'],
																																																																modules: ['@nuxt/fonts', '@pinia/nuxt', "@nuxt/image"],
																																																																pinia: {
																																																																																																																																storesDirs: ['./stores/**', './custom-folder/stores/**'],
																																																																},

																																																																imports: {
																																																																																																																																dirs: ['./static/**'],
																																																																},
})
