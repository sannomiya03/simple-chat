<template lang="pug">
	.page(@drop="handleDropCancel")
		.header
			.l-column
				.l-left.l-secondary
					.l-inner
						p Simple Chat
				.l-right.l-primary
					.l-inner
						p Room Name
		.body
			.l-column
				.l-left.l-secondary
					Sidebar
				.l-right.l-primary
					.entries-view.dropzone(
						:class="[modifire]"
						@dragover="handleDragover",
						@dragleave="handleDragleave",
						@drop="handleDrop")
						.content
							Entries
							.files(v-for="file in files")
								.file
									img(v-if="file.image!=null", :src="file.image")
									p {{file.obj.name}} + ({{file.obj.type}}, {{file.obj.size}} + bytes)
						SendForm.form
</template>
<script>
	import Sidebar from "~/components/Sidebar"
	import Entries from "~/components/Entries"
	import SendForm from "~/components/SendForm"
	export default{
		components: {
			Sidebar: Sidebar,
			Entries: Entries,
			SendForm: SendForm
		},
		data(){
			return {
				modifire: {
					dropenter: false,
					dropover: false,
				},
				files: []
			}
		},
		computed: {
			username(){ return this.$route.params.username }
		},
		methods: {
			handleDragover(event){
				this.modifire.dropover = true
				event.preventDefault()
				event.dataTransfer.dropEffect = 'copy'
			},
			handleDragleave(event){
				this.modifire.dropover = false
			},
			handleDrop(event){
				event.preventDefault()
				this.modifire.dropover = false
				var files = event.dataTransfer.files
				for(var i=0; i<files.length; i++){
					var file = {
						image: null,
						obj: files[i]
					}
					this.attachImage(file)
					this.files.push(file)
				}
			},
			attachImage(file){
				var reader = new FileReader()
				reader.onload = (event)=>{
					var src = event.target.result
					file.image = src
				}
				reader.readAsDataURL(file.obj)
			},
			handleDropCancel(event){
				event.stopPropagation()
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import "~assets/stylus/mixins"
	.page
		width 100%
		height 100vh
		flexbox()
		flex-direction column
		
		.header
			height 50px
			flex-shrink 0
			border-bottom 1px solid #aaa
		.body
			height 80%
			flex-grow 1
		
		.l-inner
			padding 10px 20px
		
		.l-column
			width 100%
			height 100%
			flexbox()
			.l-primary
				flex-grow 1
			.l-secondary
				flex-basis 240px
				border-right 1px solid #aaa
		
		.sidebar
			height 100%
			
		.entries-view
			width 100%
			height 100%
			flexbox()
			flex-direction column
			.content
				flex-grow 1
				overflow scroll
			.form
				flex-shrink 0
			&.dropover
				background-color #eee
</style>