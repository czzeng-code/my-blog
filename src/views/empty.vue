<template>
	<div><span>没查到你所要的信息，请再搜搜试试吧</span></div>
</template>

<script>
export default {
	data() {
		return {
			keywords:''
		};
	},
	mounted() {
		this.keywords = this.$route.query.keywords
		this.$router.push({ path: '/search', query: { keywords: this.keywords } });
	}
};
</script>

<style>
</style>
