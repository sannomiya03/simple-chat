<template lang="pug">
	.sidebar
		.sidebar-header
			.categories
				p.category(
					v-for="category in categories",
					:class="{active: category.label==selectedCategoryLabel}",
					@click="selectCategory(category)") {{category.label}}
		.sidebar-body
			ul.list
				li.item(
					v-if="selectedCategory!=null"
					v-for="item, index in selectedCategory.items",
					:class="{active: selectedCategory.selectedItemIndex==index}",
					@click="selectItem(selectedCategory, index)") {{item}}
</template>
<script>
	export default{
		data(){
			return {
				selectedCategoryLabel: "catA",
				categories: [
					{ label: "catA", items: ["#itemA","#itemB","#itemC","#itemD"], selectedItemIndex: 0 },
					{ label: "catB", items: ["#item1","#item2","#item3","#item4","#item5"], selectedItemIndex: 0 },
					{ label: "catC", items: ["#itemI","#itemII","#itemIII","#itemIV"], selectedItemIndex: 0 }
				],
			}
		},
		computed: {
			selectedCategory(){
				for(var i=0; i<this.categories.length; i++){
					if(this.categories[i].label == this.selectedCategoryLabel) return this.categories[i]
				}
			}
		},
		methods: {
			selectCategory(target){ this.selectedCategoryLabel = target.label },
			selectItem(category, index){ category.selectedItemIndex = index }
		}
	}
</script>
<style lang="stylus" scoped>
	@import "~assets/stylus/mixins"
	
	.sidebar-header
		border-bottom 1px solid #aaa
	
		.categories
			flexbox()
			.category
				color #333
				padding 0 20px
				border-bottom 2px solid transparent
				cursor pointer
				&:hover
					background-color #eee
				&.active
					background-color #ddd
		
	.sidebar-body
		.list
			.item
				padding 6px 20px
				cursor pointer
				&:hover
					background-color #eee
				&.active
					background-color #ddd
</style>