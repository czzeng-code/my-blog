<template>
	<div class="container">
		<div class="info">
			<div class="avatarBox"><img :src="userVo.user.avatar" alt="头像" class="cz-avatar" /></div>
			<div class="infoBox">
				<p class="cz-title">{{ userVo.user.nickname }}</p>
				<p class="cz-sub-title">{{ userVo.user.introduction }}</p>
				<ul>
					<li class="cz-meta">{{ userVo.user.follows }}关注 -></li>
					<li class="cz-meta">{{ userVo.user.fans }}粉丝 -></li>
					<li class="cz-meta">{{ userVo.user.articles }}文章 -></li>
					<li class="cz-meta">{{ userVo.user.createTime.date.year }}年{{ userVo.user.createTime.date.month }}月{{ userVo.user.createTime.date.day }}日加入</li>
				</ul>
			</div>
			<div><button class="cz-btn cz-btn-small cz-btn-round btn-write" @click="change()"><i class="iconfont">&#xe603;</i>写文章</button></div>
		</div>
		<div class="outer">
			<ul class="menu">
				<li>文章</li>
				<li>动态</li>
				<li>评论</li>
				<li>热门</li>
			</ul>
			<div class="card-writing" v-show="show">
				<ul>
					<li><input type="text" placeholder="标题" v-model="writed_article.title"></li>
					<li><input type="text" placeholder="摘要" v-model="writed_article.summary"></li>
					<li><input type="text" placeholder="缩略图(封面)" v-model="writed_article.cover"></li>
					<li><input type="text" placeholder="专题号" v-model="writed_article.topicId"></li>
					<li><textarea name="" id="" cols="30" rows="10" placeholder="内容" v-model="writed_article.content"></textarea></li>
					<span><button class="cz-btn cz-btn-round cz-btn-normal" @click="relaese()" style="background: rgb(236, 97, 73);color: #EEE;">发布文章</button></span>
					
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userVo: {
				user: {},
				articleList: {}
			},
			show: false,
			writed_article: {
				userId: 0,
				title: '',
				summary: '',
				cover: '',
				topicId: '',
				content: ''
			},
		};
	},
	created() {
		var id = this.$route.params.id;
		// console.log(this.$route);
		this.axios.get(this.GLOBAL.baseUrl + '/user/' + id).then(res => {
			// console.log(res.data.data);
			this.userVo = res.data.data;
		});
		
	},
	methods: {
		change(){
			this.show=!this.show;
		},
		relaese() {
			this.writed_article.userId = JSON.parse(localStorage.getItem('user')).id;
			// alert(this.writed_article.userId);
			this.axios.post(this.GLOBAL.baseUrl + '/article', this.writed_article).then(res => {
				alert(res.data.msg);
			})
		}
	},
	computed: {}
};
</script>

<style scoped>
.info {
	display: flex;
}
ul {
	display: flex;
}
li {
	line-height: 20px;
	margin-right: 20px;
}
.infoBox {
	margin-left: 20px;
}
.menu {
	margin-bottom: 20px;
	border-bottom: 1px solid #f0f0f0;
}
.menu li {
	position: relative;
	display: flex;
}
.btn-write {
	background: rgb(236, 97, 73);
	color: rgb(255,255,255);
}
.card-writing ul {
	display: inline;
}
.card-writing {
	border: 1px solid #B4B4B4;
}
</style>
