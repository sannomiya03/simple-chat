<template lang="pug">
	.site
		.main
			nuxt
</template>
<script>
	export default{
		components: {
		}
	}
</script>
<style lang="stylus">
	@import "~assets/stylus/reset"
	@import "~assets/stylus/base"
	@import "~assets/stylus/global" 
	@import "~assets/stylus/mixins"
	html, body
		width 100%
		height 100%
	.site
		width 100%
		height calc(100vh)
		flexbox()
		flex-direction column
		.main
			height 80%
			flex-grow 1
</style>