<template>
	<div class="cz-row">
		<div v-for="(item, index) in topics" :key="index" class="cz-col-4 cz-fx-center">
			<div class="card cz-shadow">
				<div class="card-left">
					<img :src="item.logo"/>
				</div>
				<div class="card-right">
					<p class="cz-title">{{item.topicName}}</p>
					<p class="cz-meta">{{ item.articles}}篇文章，{{ item.follows}}人关注</p>
					<p class="cz-sub-title">{{item.description.slice(0,30)}}</p>
					
					<a :href="item.homepage" class="link" @click="go(item, homepage)">专题主页</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				topics: [],
				keywords: ''
			};
		},
		created() {
			this.keywords = this.$route.query.keywords;
			// console.log(this.keywords);
			this.axios
				.get(this.GLOBAL.baseUrl + '/topic', {
					params: {
						keywords: this.keywords
					}
				})
				.then(res => {
					// console.log(res.data.data);
					this.topics = res.data.data;
				});
		},
		methods: {}
	};
</script>

<style scoped>
	.card {
		display: flex;
		border: 1px dashed rgb(122, 150, 234);
		border-radius: 10px;
		margin-right: 20px;
		margin-top: 20px;
	}
	.card-right {
		margin-left: 20px;
	}
	.card-left > img {
		border-radius: 10px;
	}
</style>
