<template>
	<div>
		<div class="nav-bar main-color cz-fx-between">
			<div class="cz-list">
					<li class="nav-item">
						<router-link to = "/">主页</router-link>
					</li>
					<li class="nav-item">
						<router-link to = "/c">专题</router-link>
					</li>
					<li class="nav-item">
						<router-link to = "/p">文章</router-link>
					</li>
					<li class="nav-item">
						<router-link to = "/u">作者</router-link>
					</li>
			</div>
			<div class="cz-df-right">
				<ul v-if="!this.user">
					<li class="cz-success-theme"><router-link to = "/sign">登录</router-link></li>
				</ul>
				<ul>
					<li v-if="this.user" class="cz-df-right">
						<router-link to="/user"><img :src="user.avatar" class="cz-avatar"></router-link>
					</li>
				</ul>
				<ul v-if="this.user">
					<li><button class="cz-btn cz-warning-theme cz-btn-round" @click="logout">退出</button></li>
				</ul>
			</div>
		</div>
		<router-view class="cz-container"></router-view>>
		<footer></footer>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				user: JSON.parse(localStorage.getItem('user'))
			};
		},
		created() {
			
		},
		methods: {
			logout() {
				this.user = null;
				localStorage.clear();
			}
		},
		computed: {
			
		}				
	}
</script>

<style scoped>
			
		.nav-bar {
		  height: 60px;
		  margin-bottom: 10px;
		}
		.nav-bar > .container {
		  height: 100%;
		  display: flex;
		  justify-content: space-between;
		  align-items: center;
		}
	
		.nav {
		  flex: 0 0 40%;
		  color: #fff;
		  display: flex;
		  justify-content: space-around;
		  align-items: center;
		  
		}
		.nav-item {
		  list-style: none;
		  width: 80px;
		  font-size: 16px;
		 
		}
		a {
		  color: #fff;
		}
		.main {
		  width: 80%;
		  margin: 0 auto;
		  height: 500px;
		  border: 1px solid #eee;
		}
		#logout{
		  color: yellow;
		  cursor: pointer;
		}
		
		.nav{
			background-color: n;
		}
		ul{
			list-style: none;
			display: flex;
			justify-content: space-around;
			align-items: center;
		}
		ul li{
			display: block;
		}
		
		.main-color {
		  background-image: linear-gradient(to right, #bf30ac 0%, #0f9d58 100%);
		  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 7px 10px 0 rgba(0, 0, 0, 0.12);
		  opacity: 0.7;
		}
</style>
