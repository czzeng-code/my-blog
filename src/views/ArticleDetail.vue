<template>
	<div class="cz-container">
		<h2 class="cz-title">{{ articleVo.article.title }}</h2>
		<div class="box">
			<img :src="articleVo.author.avatar" class="cz-avatar cz-avatar-s" />
			<span class="meta gutter">{{ articleVo.author.nickname }}</span>
			<span class="meta gutter">
				{{ articleVo.article.createTime.date.year }}年{{ articleVo.article.createTime.date.month }}月{{ articleVo.article.createTime.date.day }}日
				{{ articleVo.article.createTime.time.hour }}:{{ articleVo.article.createTime.time.minute }}:{{ articleVo.article.createTime.time.second }}
			</span>
		</div>
		<div v-html="articleVo.article.content"></div>
		<fieldset>
			<legend>评论</legend>
			<div class="comm-card" v-for="(item, index) in comment" :key="index">
				<div class="card-left"><img :src="item.author.avatar" alt="头像" class="cz-avatar" /></div>
				<div class="card-right">
					<p class="cz-sub-title">{{ item.author.nickname }}</p>
					<p class="cz-meta">
						{{ item.comment.createTime.date.year }}年{{ item.comment.createTime.date.month }}月{{ item.comment.createTime.date.day }}日
						{{ item.comment.createTime.time.hour }}:{{ item.comment.createTime.time.minute }}:{{ item.comment.createTime.time.second }}
					</p>
					<p>{{ item.comment.content }}</p>
				</div>
				<div><button class="cz-btn cz-btn-normal cz-btn-round delete" v-if="user.id === item.comment.userId" @click="deleteComment(item.comment.id)">删除</button></div>
			</div>
			<div class="">
				<input type="text" v-model="writeComment.content">
				<button class="cz-btn cz-btn-round cz-btn-normal" @click="release" style="background-color: #42C02E;">发布</button>
			</div>
		</fieldset>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			articleVo: {},
			comment: {},
			writeComment:{
				articleId:0,
				userId:0,
				content:''
			}
		};
	},
	created() {
		var id = this.$route.params.id;
		this.axios.get(this.GLOBAL.baseUrl + '/article/' + id).then(res => {
			// console.log(res.data.data);
			this.articleVo = res.data.data;
		});

		this.axios.get(this.GLOBAL.baseUrl + '/comment?articleId=' + id).then(res => {
			console.log(res.data.data);
			this.comment = res.data.data;
		});
	},
	methods: {
		//发评论
		release() {
			if(this.writeComment.content === '') {
				alert("评论不能为空");
			} else {
				this.writeComment.articleId = this.$route.params.id;
				this.writeComment.userId = this.user.id;
				// alert(this.comment.content);
				this.axios.post(this.GLOBAL.baseUrl + '/comment', this.writeComment)
				.then(res => {
					// alert(res.data.msg);
					this.$router.go(0);
				});
			}
		},
		deleteComment(id) {
			if(confirm("确定删除吗？")) {
				this.axios.delete(this.GLOBAL.baseUrl + '/comment?id=' + id).then(res => {
					// alert(res.data.msg);
					this.$router.go(0);
				});
			}
				
		}
	},
	computed: {}
};
</script>

<style scoped>
.cz-container {
	margin-top: 60px;
}
.cz-avatar {
	width: 40px;
	height: 40px;
}
.comm-card {
	border: 1px solid #dddddd;
	display: flex;
	border-radius: 10px;
	background-color: #eeeeee;
}
.card-right {
}
.cz-btn-round {
	color: #FFFFFF;
	height: 30px;
	width: 50px;
}
.delete:hover {
	background-color: red;
}
</style>
