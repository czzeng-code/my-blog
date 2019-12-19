<template>
	<div class="cz-container">
		<div class="cz-row">
			<div class="cz-col-2">
				<ul>
					<li><router-link :to="{ path: '/search/article', query: { keywords: this.keywords } }">文章</router-link></li>
					<li><router-link :to="{ path: '/search/topic', query: { keywords: this.keywords } }">专题</router-link></li>
					<li><router-link :to="{ path: '/search/user', query: { keywords: this.keywords } }">用户</router-link></li>
				</ul>
			</div>
			<div class="cz-col-10"><router-view /></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			keywords: ''
		};
	},
	created() {
		this.keywords = this.$route.query.keywords;
	},
	computed: {},
	methods: {}
};
</script>

<style></style>
