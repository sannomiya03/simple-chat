<template lang="pug">
	.entries
		Entry.line(v-for="entry in entries", :entry="entry")
</template>
<script>
	import Entry from "~/components/Entries-Entry"
	export default{
		components: {
			Entry: Entry
		},
		data(){
			return {
				entries: [
					// {
					// 	author: "snm",
					// 	content: "こんなんでいいかな？",
					// 	attachmentURLs: ["/images/sample1.jpg"],
					// 	attachmentType: "image",
					// 	datetime: "2018/03/01 10:30:50"
					// },
					{
						author: "snm",
						content: "こんなんでいいかな？",
						attachmentURLs: ["/images/sample2.jpg"],
						attachmentType: "image",
						datetime: "2018/03/01 10:30:50"
					},
					// {
					// 	author: "snm",
					// 	content: "こんなんでいいかな？",
					// 	attachmentURLs: ["/images/sample3.jpg"],
					// 	attachmentType: "image",
					// 	datetime: "2018/03/01 10:30:50"
					// },
					// {
					// 	author: "snm",
					// 	content: "こんなんでいいかな？",
					// 	attachmentURLs: ["/images/sample1.jpg"],
					// 	attachmentType: "image",
					// 	datetime: "2018/03/01 10:30:50"
					// },
					// {
					// 	author: "snm",
					// 	content: "こんなんでいいかな？",
					// 	attachmentURLs: ["/images/sample2.jpg"],
					// 	attachmentType: "image",
					// 	datetime: "2018/03/01 10:30:50"
					// },
					// {
					// 	author: "snm",
					// 	content: "こんなんでいいかな？",
					// 	attachmentURLs: ["/images/sample3.jpg"],
					// 	attachmentType: "image",
					// 	datetime: "2018/03/01 10:30:50"
					// },
				]
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.entries
		padding 20px
		.line
			&:not(:last-child)
				margin-bottom 10px
</style>