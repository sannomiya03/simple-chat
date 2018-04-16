<template lang="pug">
	.sendForm
		.me
		.inputArea
			textarea(v-model="content" placeholder="content")
			.input-meta
				input(v-model="tags" placeholder="tag, tag, ...")
		.controllArea
			button.btn(:class="{disabled:!isAvailableValue}" @click="sendContent") SEND
</template>
<script>
	export default{
		data(){
			return {
				content: "",
				tags: ""
			}
		},
		computed: {
			isAvailableValue(){ return this.content!="" }
		},
		methods: {
			sendContent(){
				if(!this.isAvailableValue) return false
				this.content = ""
				this.tags = ""
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import "~assets/stylus/extends"
	@import "~assets/stylus/mixins"
	@import "~assets/stylus/variables"
	.sendForm
		padding 20px
		border-top 1px solid #aaa
		flexbox()
		.me
			flex-shrink 0
			width 40px
			height 40px
			background-color #aaa
			margin-right 10px
		.inputArea
			flex-grow 1
			padding-right 20px
			textarea
				width 100%
				height 40px
				padding 10px
				border-color #aaa
				font-size 16px
				line-height 20px
				resize none
			.input-meta
				input
					height 30px
					padding 0 10px
					line-height 20px
		.controllArea
			.btn
				@extend .btn-default
				width 80px
				height 40px
</style>