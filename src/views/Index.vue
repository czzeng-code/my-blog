<template>
	<div class="cz-row">
		<div class="cz-col-8">
			<div class="cz-row">
				<div class="cz-col-6" v-for="(article,index) in articles" :key="index">
					<p class="cz-title">{{ article.title }}</p>
					<p><img :src="article.cover" ></p>
					
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
		this.axios.get('http://277u26362p.zicp.vip:23906/api/article').then(res => {
			console.log(res.data.data);
			this.articles = res.data.data;
		});
	},
	methods: {},
	computed: {}
};
</script>

<style scoped>
	.box {
		
	}
</style>
