<template lang="pug">
	.page
		h1.title Welcome to Simple Chat!
		br
		br
		p.description Please input your name.
		br
		p your name: {{username}} / {{isAvailableValue}}
		p: input(v-model="username")
		br
		p: span.login-btn(:class="{disabled:!isAvailableValue}" @click="login") LOGIN
</template>
<script>
	export default{
		data(){
			return {
				username: ""
			}
		},
		computed: {
			isAvailableValue(){ return this.username!="" }
		},
		methods: {
			login(){
				if(this.isAvailableValue) this.$router.push({name: "username", params: {username: this.username}})
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import "~assets/stylus/extends"
	@import "~assets/stylus/mixins"
	.page
		padding 100px
		.title
			font-size 28px
		.login-btn
			@extend .btn-default
</style>