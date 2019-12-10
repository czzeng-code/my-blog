<template>
	<div>
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
		<div class="cz-row">
			<button class="cz-btn cz-btn-round cz-btn-normal" @click="loadMore()">点击加载更多</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			topics: [],
			currentPage: 1,
			count: 9
		};
	},
	created() {
		this.axios
			.get(this.GLOBAL.baseUrl + '/topic', {
				params: {
					page: this.currentPage,
					count: this.count
				}
			})
			.then(res => {
				this.topics = res.data.data;
			});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios
				.get(this.GLOBAL.baseUrl + '/topic', {
					params: {
						page: this.currentPage,
						count: this.count
					}
				})
				.then(res => {
					let temp = [];
					temp = res.data.data;
					for (var i = 0; i < temp.length; i++) {
						this.topics.splice(this.currentPage * this.count, 0, temp[i]);
					}
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
	.card {
		display: flex;
		border: 1px dashed rgb(122, 150, 234);
		border-radius: 10px;
		margin-right: 20px;
		margin-top: 40px;
	}
	.card-right {
		margin-left: 20px;
	}
	.card-left img {
		border-radius: 10px;
	}
</style>
