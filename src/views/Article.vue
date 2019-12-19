<template>
	<div class="cz-row ">
		<div v-for="(item, index) in articles" :key="index" class="cz-col-12">
			<div class="card cz-shadow">
				<div class="card-left"><img :src="item.article.cover" /></div>
				<div class="card-middle">
					<router-link :to="{ path: '/p/' + item.article.id }">
						<p class="cz-title">{{ item.article.title }}</p>
					</router-link>
					<p class="cz-sub-title content">{{ item.article.summary }}</p>
					<div class="cz-meta cz-fx-start">
						<span><img :src="item.author.avatar" class="cz-avatar" /></span>
						<span class="gutter">{{ item.author.nickname }}</span>
						<span class="gutter">
							<i class="iconfont i-like link" @click="addLike(item.article.id)" >&#xe616;</i>
							<i class="iconfont i-dislike link" @click="cancelLike(item.article.id)" >&#xe6cb;</i>
							{{ item.article.likes }}
						</span>
						<span class="gutter">
							<router-link :to="{ path: '/p/' + item.article.id }">
								<i class="iconfont i-comment">&#xe62f;</i>
								{{ item.article.comments }}
							</router-link>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="cz-col-12"><button class="cz-btn cz-btn-normal cz-btn-round" @click="loadMore()">点击加载更多</button></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articles: [],
			currentPage: 1,
			count: 10,
			user: JSON.parse(localStorage.getItem('user')),
			likeEntity: {
				userId: 0,
				articleId: 0
			}
		};
	},
	created() {
		this.axios
			.get(this.GLOBAL.baseUrl + '/article', {
				params: {
					page: this.currentPage,
					count: this.count
				}
			})
			.then(res => {
				// console.log(res.data.data);
				this.articles = res.data.data;
				for (var i = 0; i < this.articles.length; i++) {
					this.articles[i].article.cover = this.getImage(this.articles[i].article.cover);
				}
			});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios
				.get(this.GLOBAL.baseUrl + '/article', {
					params: {
						page: this.currentPage,
						count: this.count
					}
				})
				.then(res => {
					// console.log(res.data.data.length);
					let temp = [];
					temp = res.data.data;
					for (var i = 0; i < temp.length; i++) {
						this.articles.splice(this.currentPage * this.count, 0, temp[i]);
					}
					for (var i = 0; i < this.articles.length; i++) {
						this.articles[i].article.cover = this.getImage(this.articles[i].article.cover);
					}
					// console.log(this.articles.length);
				});
		},
		getImage(url) {
			return 'https://images.weserv.nl/?url=' + url;
		},
		addLike(id) {
			this.likeEntity.userId = this.user.id;
			this.likeEntity.articleId = id;
			this.axios.post(this.GLOBAL.baseUrl + '/like', this.likeEntity)
			.then(res => {
				alert(res.data.msg);
				this.$router.go(0);
			})
		},
		cancelLike(id) {
			this.axios.delete(this.GLOBAL.baseUrl + '/like', {
				params: {
					userId: this.user.id,
					articleId: id
				}
			}).then(res => {
				alert(res.data.msg);
				this.$router.go(0);
			})
		}
		
	},
	computed: {}
};
</script>

<style scoped>
.cz-row {
	width: 80%;
}
h2 {
	color: #008b8b;
}
p {
	line-height: 30px;
}
.card {
	display: flex;
	/* margin-top: 35px; */
	border-bottom: 1px solid #aaaaaa;
	justify-content: center;
}
.card-left {
	width: 25%;
	height: 100%;
	margin-right: 15px;
}
.card-left > img {
	height: 100%;
	width: 100%;
	border-radius: 10px;
}
.cz-avatar {
	width: 30px;
	height: 30px;
}
.i-like {
	color: rgb(255, 95, 95);
}
.i-dislike {
	font-size : 18px;
}
.i-comment {
	color: #008b8b;
}
.gutter {
	margin-right: 30px;
}
</style>
