<template>
	<div>
		<div class="cz-container" >
			<div class="cz-col-8">
				<div class="card" v-for="(article, index) in articles" :key="index">
					
						<div class="left">
							<p class="cz-title">{{ article.title }}</p>
							<p class="cz-sub-title content">{{ article.content}}</p>
							<div class="cz-meta meta cz-fx-around"> 
								<span>{{ article.nickname}}</span>
								<span><i class="iconfont i-like">&#xe627;</i>{{ article.likes}}</span>
								<span><i class="iconfont i-comment">&#xe62f;</i>{{ article.comments}}</span>
							</div>
						</div>
						<div class="right"><img :src="article.cover" class="img"></div>
						
						
					
				</div>
			</div>
			<div class="cz-col-4">
				<div>
					
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
		this.axios.get('http://localhost:8080/api/article/hot').then(res => {
			console.log(res.data.data);
			this.articles = res.data.data;
			for (var i = 0; i < this.articles.length; i++) {
				this.articles[i].cover = this.getImage(this.articles[i].cover);
			}
		});
	},
	methods: {
		getImage(url) {
			return 'https://images.weserv.nl/?url=' + url; 
			}
	},
	computed:{
		
	}
};

</script>

<style scoped>
	@font-face {
	  font-family: 'iconfont';  /* project id 1434157 */
	  src: url('//at.alicdn.com/t/font_1434157_kbp9kuvifl.eot');
	  src: url('//at.alicdn.com/t/font_1434157_kbp9kuvifl.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1434157_kbp9kuvifl.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1434157_kbp9kuvifl.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1434157_kbp9kuvifl.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1434157_kbp9kuvifl.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:16px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;}
	
	.cz-container{
		display: flex;
	}
	.cz-col-8{
		/* background-color: #B4B4B4; */
	}
	.cz-col-4{
		border: 1px solid #008B8B;
		height: 0 auto;
	}
	.card {
		height: 200px;
		width: 100%;
		/* padding: 0 165px 0 0; */
		/* background-color: #eee; */
		/* border: 1px solid rgb(122, 150, 234); */
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
	.cz-row{
		
	}
	
	.hot {
		border: 1px solid #FFFF00;
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
		color: #008B8B;
	}
</style>
