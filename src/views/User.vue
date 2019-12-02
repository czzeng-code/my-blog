<template>
	<div>
		<div class="cz-row">
			<div v-for="(item, index) in users" :key="index" class="cz-col-4">
				<div class="card">
					<div class="card-head">
						<p class="cz-title">{{item.nickname}}</p>
						<router-link :to="{ path: '/user/' + item.id }">
							<img :src="item.avatar" />	
						</router-link>
					</div>
					<div class="card-body">
						<p class="cz-sub-title">{{item.introduction}}</p>
						<p class="cz-meta">{{item.articles}}篇文章，{{item.fans}}个粉丝，关注{{item.follows}}人</p>
					</div>
					<div><a :href="item.homepage" class="link" @click="go(item.homepage)">点击进入个人主页</a></div>
				</div>
			</div>
		</div>
		<div class="cz-row"><button class="cz-btn cz-btn-round" @click="loadMore">点击加载更多</button></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			currentPage: 1,
			count: 6
		};
	},
	created() {
		this.axios
			.get(this.GLOBAL.baseUrl + '/user', {
				params: {
					page: this.currentPage,
					count: this.count
				}
			})
			.then(res => {
				console.log(res.data.data.length);
				this.users = res.data.data;
			});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios
				.get(this.GLOBAL.baseUrl + '/user', {
					params: {
						page: this.currentPage,
						count: this.count
					}
				})
				.then(res => {
					console.log(res.data.data.length);
					let temp = [];
					temp = res.data.data;
					for (var i = 0; i < temp.length; i++) {
						this.users.splice(this.currentPage * this.count, 0, temp[i]);
					}
					console.log(this.users.length);
				});
		},
		go(page) {
			window.location.href = page;
		}
	},
	computed: {}
};
</script>

<style scoped>
	.cz-container {
		margin-top: 50px;
	}
	.card {
		width: 90%;
		height: 300px;
		
		margin-bottom: 50px;
		padding: 20px;
		border: 1px dashed rgb(122, 150, 234);
		border-radius: 10px;
	}
	.card-head {
		height: 30%;
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.card-head img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		margin: -100px 0 20px -60px;
	}
	.card-body {
		width: 80%;
		margin: 0 auto;
	}
	.card-body > p {
		line-height: 30px;
	}
	.card a {
		color: rgb(0, 98, 89);
		font-weight: 700;
	}
	.link {
		margin-left: 40px;
	}
	
</style>
