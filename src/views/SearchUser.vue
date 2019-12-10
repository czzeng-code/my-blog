<template>
	<div class="cz-row">
			<div v-for="(item, index) in users" :key="index" class="cz-col-12">
				<div class="media-wraaper cz-shadow">
					<div class="media-left">
						<img :src="item.avatar" class="cz-avatar link" />
						<p>{{ item.nickname }}</p>
					</div>
					<div class="media-middle">
						<p>{{ item.introduction}}</p>
						<p>
							<span class="meta spacing">写了{{ item.articles }}篇文章</span>
							<span class="meta spacing">{{ item.fans }}个粉丝</span>
							<span class="meta spacing">关注了{{ item.follows }}人</span>
						</p>
					</div>
					<div class="media-right"><button class="cz-btn cz-btn-round btn-follow">关注</button></div>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				users: [],
				keywords: ''
			};
		},
		created() {
			this.keywords = this.$route.query.keywords;
			// console.log(this.keywords);
			this.axios
				.get(this.GLOBAL.baseUrl + '/user', {
					params: {
						keywords: this.keywords
					}
				})
				.then(res => {
					console.log(res.data.data.length);
					this.users = res.data.data;
				});
		},
		methods: {}
	};
</script>

<style>
	.cz-avatar {
		width: 80px;
		height: 80px;
	}
</style>
