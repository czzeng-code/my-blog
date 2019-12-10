	<template>
	<div>
		<div class="cz-container">
			<div class="cz-col-8">
				<div class="card cz-shadow" v-for="(article, index) in articles" :key="index">
					<div class="left">
						<p class="cz-title">{{ article.title }}</p>
						<p class="cz-sub-title content">{{ article.summary }}</p>
						<div class="cz-meta meta cz-fx-around">
							<span>{{ article.nickname }}</span>
							<span>
								<i class="iconfont i-like">&#xe627;</i>
								{{ article.likes }}
							</span>
							<span>
								<i class="iconfont i-comment">&#xe62f;</i>
								{{ article.comments }}
							</span>
						</div>
					</div>
					<div class="right"><img :src="article.cover" class="img" /></div>
				</div>
			</div>
			<div class="cz-col-4">
				<div class="package-title">
					<div class="func"><i class="iconfont func-i">&#xe620;</i></div>
					<div class="cz-title func-title">标签</div>
				</div>
				<div class="function">
					<ul>
						<li title="查看更多关于《blog》的文章" style="border-left: 2px solid rgb(253, 119, 178);"><a href="" style="color: rgb(47, 136, 154);">blog主题</a></li>
						<li title="查看更多关于《web》的文章" style="border-left: 2px solid rgb(13, 170, 234);"><a href="" style="color: rgb(0, 136, 204);">web主题</a></li>
						<li title="查看更多关于《原生js》的文章" style="border-left: 2px solid rgb(234, 132, 255);"><a href="" style="color: rgb(255, 94, 82);">原生js主题</a></li>
						<li title="查看更多关于《js》的文章" style="border-left: 2px solid rgb(253, 172, 95);"><a href="" style="color: rgb(158, 90, 226);">js主题</a></li>
						<li title="查看更多关于《解析》的文章" style="border-left: 2px solid rgb(13, 170, 234);"><a href="" style="color: rgb(13, 170, 234);">解析主题</a></li>
						<li title="查看更多关于《参数》的文章" style="border-left: 2px solid rgb(138, 199, 143);"><a href="" style="color: rgb(192, 30, 34);">参数主题</a></li>
						<li title="查看更多关于《canvas画布》的文章" style="border-left: 2px solid rgb(234, 132, 255);">
							<a href="" style="color: rgb(13, 170, 234);">canvas画布主题</a>
						</li>
						<li title="查看更多关于《热门》的文章" style="border-left: 2px solid rgb(147, 112, 219);"><a href="" style="color: rgb(234, 132, 255);">热门</a></li>
						<li title="查看更多关于《IOS》的文章" style="border-left: 2px solid rgb(199, 193, 131);"><a href="" style="color: rgb(253, 172, 95);">IOS主题</a></li>

						<li title="查看更多关于《blog》的文章" style="border-left: 2px solid rgb(253, 119, 178);"><a href="" style="color: rgb(47, 136, 154);">blog主题</a></li>
						<li title="查看更多关于《web》的文章" style="border-left: 2px solid rgb(13, 170, 234);"><a href="" style="color: rgb(0, 136, 204);">web主题</a></li>
						<li title="查看更多关于《原生js》的文章" style="border-left: 2px solid rgb(234, 132, 255);"><a href="" style="color: rgb(255, 94, 82);">原生js主题</a></li>
						<li title="查看更多关于《js》的文章" style="border-left: 2px solid rgb(253, 172, 95);"><a href="" style="color: rgb(158, 90, 226);">js主题</a></li>
						<li title="查看更多关于《解析》的文章" style="border-left: 2px solid rgb(13, 170, 234);"><a href="" style="color: rgb(13, 170, 234);">解析主题</a></li>
						<li title="查看更多关于《参数》的文章" style="border-left: 2px solid rgb(138, 199, 143);"><a href="" style="color: rgb(192, 30, 34);">参数主题</a></li>
						<li title="查看更多关于《canvas画布》的文章" style="border-left: 2px solid rgb(234, 132, 255);">
							<a href="" style="color: rgb(13, 170, 234);">canvas画布主题</a>
						</li>
						<li title="查看更多关于《热门》的文章" style="border-left: 2px solid rgb(147, 112, 219);"><a href="" style="color: rgb(234, 132, 255);">热门</a></li>
						<li title="查看更多关于《IOS》的文章" style="border-left: 2px solid rgb(199, 193, 131);"><a href="" style="color: rgb(253, 172, 95);">IOS主题</a></li>

						<li title="查看更多关于《blog》的文章" style="border-left: 2px solid rgb(253, 119, 178);"><a href="" style="color: rgb(47, 136, 154);">blog主题</a></li>
						<li title="查看更多关于《web》的文章" style="border-left: 2px solid rgb(13, 170, 234);"><a href="" style="color: rgb(0, 136, 204);">web主题</a></li>
						<li title="查看更多关于《原生js》的文章" style="border-left: 2px solid rgb(234, 132, 255);"><a href="" style="color: rgb(255, 94, 82);">原生js主题</a></li>
						<li title="查看更多关于《js》的文章" style="border-left: 2px solid rgb(253, 172, 95);"><a href="" style="color: rgb(158, 90, 226);">js主题</a></li>
						<li title="查看更多关于《解析》的文章" style="border-left: 2px solid rgb(13, 170, 234);"><a href="" style="color: rgb(13, 170, 234);">解析主题</a></li>
						<li title="查看更多关于《参数》的文章" style="border-left: 2px solid rgb(138, 199, 143);"><a href="" style="color: rgb(192, 30, 34);">参数主题</a></li>
						<li title="查看更多关于《canvas画布》的文章" style="border-left: 2px solid rgb(234, 132, 255);">
							<a href="" style="color: rgb(13, 170, 234);">canvas画布主题</a>
						</li>
						<li title="查看更多关于《热门》的文章" style="border-left: 2px solid rgb(147, 112, 219);"><a href="" style="color: rgb(234, 132, 255);">热门</a></li>
						<li title="查看更多关于《IOS》的文章" style="border-left: 2px solid rgb(199, 193, 131);"><a href="" style="color: rgb(253, 172, 95);">IOS主题</a></li>
					</ul>
				</div>
				<h3 class="cz-title hot-title">热门作者</h3>
				<div v-for="(item, index) in users" :key="index" class="cz-row">
					<div class="cz-col-12 box">
						<div class="cz-fx-start">
							<router-link :to="{ path: '/user/' + item.id }"><img :src="item.avatar" class="cz-avatar " /></router-link>
						</div>
						<div class="box-center">
							<p class="cz-sub-title">{{ item.nickname }}</p>
							<p class="cz-meta">{{ item.fans }}个粉丝</p>
							<p class="cz-meta">写了{{ item.articles }}篇文章</p>
						</div>
						<div class="cz-fx-right"><button class="cz-btn btn-follow link"><i class="iconfont">&#xe644;</i>关注</button></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articles: []
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/article').then(res => {
			// console.log(res.data.data);
			this.articles = res.data.data;
			for (var i = 0; i < this.articles.length; i++) {
				this.articles[i].cover = this.getImage(this.articles[i].cover);
			}
		});
		this.axios.get(this.GLOBAL.baseUrl + '/user').then(res => {
			// console.log(res.data.data);
			this.users = res.data.data;
		});
		
	},
	methods: {
		getImage(url) {
			return 'https://images.weserv.nl/?url=' + url;
		}
		
	},
	computed: {}
};

/*--------*/

</script>

<style scoped>
	  
.cz-container {
	display: flex;
}
.cz-col-8 {
	/* background-color: #B4B4B4; */
}
.cz-col-4 {
	margin-left: 10px;
	border: 1px solid #008b8b;
	height: 0 auto;
	border-radius: 10px;
}
.card {
	height: auto;
	width: 100%;
	/* padding: 0 165px 0 0; */
	/* background-color: #eee; */
	border: 1px solid rgb(122, 150, 234);
	border-radius: 10px;
	display: flex;
	margin-bottom: 20px;
	border-bottom: 1px solid #f0f0f0;
}
.right {
	width: 20%;
	height: 100%;
	margin-right: 20px;
}
.img {
	height: 100%;
	width: 100%;
	/* border: 1px solid #F0F0F0; */
	border-radius: 10px;
}
.left {
	width: 80%;
	height: 100%;
	margin-left: 15px;
}

.hot {
	border: 1px solid #ffff00;
}
.content {
	text-indent: 2em;
	margin-top: 10px;
	margin-right: 50px;
}
.meta {
	cursor: pointer;
	margin-right: 2px;
	margin-top: 10px;
}
.i-like {
	color: rgb(255, 95, 95);
}
.i-comment {
	color: #008b8b;
}
li,
ul {
	list-style-type: none;
	list-style: none;
}
ul {
	display: inline-block;
	list-style-type: disc;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	padding-inline-start: 40px;
}
li {
	display: inline-block;
	border-radius: 5px 0 0 5px;
	padding: 4px 10px;
	margin-bottom: 5px;
	margin-right: 5px;
	background: #efefef;
}
.package-title {
	display: flex;
}
.func {
	width: 30px;
	border-right: 1px solid #aaaaaa;
}
.func-i {
	margin-left: 10px;
	color: rgb(0, 159, 232);
}
.func-title {
	margin-left: 10px;
	color: rgb(0, 159, 232);
}
.function {
	border: 1px solid rgb(122, 150, 234);
}
.box {
	display: flex;
	padding-left: 20px;
	justify-content: space-around;
	border: 1px dashed rgb(122, 150, 234);
	border-radius: 10px;
}
.box-center {
	display: flex;
	flex-direction: column;
}
.cz-avatar {
	width: 50px;
	height: 50px;
}
.hot-title {
	margin-left: 10px;
	color: rgb(0, 159, 232);
}
</style>
