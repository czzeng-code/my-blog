<template>
	<div class="cz-row">
		<div v-for="(item, index) in articles" :key="index" class="cz-col-12">
			<div class="card cz-shadow">
				<div class="card-left"><img :src="item.article.cover" /></div>
				<div class="card-middle">
					<p class="cz-title">{{ item.article.title }}</p>
					<p class="cz-sub-title content">{{ item.article.summary }}</p>
					<div class="cz-meta cz-fx-around">
						<span>
							{{ item.author.nickname }}
						</span>
						<span>
							<i class="iconfont i-like">&#xe627;</i>
							{{ item.article.likes }}
						</span>
						<span>
							<i class="iconfont i-comment">&#xe62f;</i>
							{{ item.article.comments }}
						</span>
					</div>
				</div>
				<div class="card-right">
					<img :src="item.author.avatar"  class="cz-avatar"/>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				articles: [],
				keywords: ''
			};
		},
		created() {
			this.keywords = this.$route.query.keywords;
			// console.log(this.keywords);
			this.axios
				.get(this.GLOBAL.baseUrl + '/article', {
					params: {
						keywords: this.keywords
					}
				})
				.then(res => {
					console.log(res.data.data);
					this.articles = res.data.data;
					for (var i = 0; i < this.articles.length; i++) {
						this.articles[i].article.cover = this.getImage(this.articles[i].article.cover);
					}
				});
		},
		methods: {
			getImage(url) {
				return 'https://images.weserv.nl/?url=' + url;
			}
		}
	};
</script>

<style scoped>
	.card {
		display: flex;
		margin-top: 15px;
		border-bottom: 1px solid #AAAAAA;
	}
	.card-left {
		width: 20%;
		height: 100%;
		margin-right: 15px;
	}
	.card-left > img {
		height: 100%;
		width: 100%;
		border-radius: 10px;
	}
</style>
