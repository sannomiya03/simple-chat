<template lang="pug">
	.entry
		.entry-image
		.entry-body
			p.entry-meta
				span.author {{entry.author}}
				span.time {{time}}
			.entry-contet
				.attachment(v-if="hasAttachments")
					.attachment-image(v-if="hasImg")
						img(v-for="url in entry.attachmentURLs", :src="url")
				p.content {{entry.content}}
				p store: {{$store.state.sample.hogeFromStore}}
				<button v-on:click="$store.dispatch('sample/writeHoge', '値を書き換えます')">Test</button>
</template>
<script>
	export default{
		props: ["entry"],
		computed: {
			time(){ return this.entry.datetime.split(" ")[1] },
			hasAttachments(){ return this.entry.attachmentURLs.length > 0  },
			hasImg(){ return this.entry.attachmentType=="image" },
		}
	}
</script>
<style lang="stylus" scoped>
	@import "~assets/stylus/extends"
	@import "~assets/stylus/mixins"
	@import "~assets/stylus/variables"
	.entry
		flexbox()
		.entry-image
			flex-shrink 0
			width 40px
			height 40px
			border-radius 50%
			background-color #aaa
			margin-right 10px
		.entry-body
			flex-grow 1
			.entry-meta
				flexbox()
				justify-content space-between
				line-height 1em
				margin-bottom 10px
				.time
					margin-left 1em
					color #aaa
					font-weight normal
					font-size Small
			.attachment
				max-width 400px
				.attachment-image
					position relative
					&:hover
						cursor pointer
						&:after
							position absolute
							top 0
							left 0
							width 100%
							height 100%
							background-color rgba(black, .3)
							content ""
</style>
