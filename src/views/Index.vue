<template>
	<div class="cz-row">
		<div class="cz-col-8">
			<div class="cz-row">
				<div class="cz-col-6 card" v-for="(article,index) in articles" :key="index">
					<div class="left">
						<p class="cz-title">{{ article.title }}</p>
					</div>
					
					<div class="right"><img :src="article.cover" class="img"></div>
					
				</div>
			</div>
		</div>
		<div class="cz-col-4"></div>
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
	
	.card {
		height: 160px;
		width: 100%;
		padding: 0 165px 0 0;
		background-color: #eee;
		border: 1px solid coral;
		
	}
	.img {
		height: 100px;
		width: 80px;
		border: 1px solid #F0F0F0;
	}
	.cz-row{
		
	}
</style>
