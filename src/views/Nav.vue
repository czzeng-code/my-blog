<template>
	<div>
		<div class="nav-bar main-color cz-fx-around">
			<div class="cz-list">
				<li class="nav-item">
					<router-link to="/">
						<i class="iconfont">&#xe66d;</i>
						主页
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/c">
						<i class="iconfont">&#xe633;</i>
						专题
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/p">
						<i class="iconfont">&#xe617;</i>
						文章
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/users">
						<i class="iconfont">&#xe688;</i>
						作者
					</router-link>
				</li>
				<li class="nav-item "><input type="text" class="cz-input-box search-box" placeholder="请搜索作者·专题·文章" v-model="keywords" /></li>
				<li class="nav-item search-btn">
					<button class="cz-btn cz-btn-round" @click="search"><i class="iconfont">&#xe654;</i></button>
				</li>
			</div>
			<div class="nav">
				<ul v-if="!this.user">
					<li class="">
						<router-link to="/sign">
							<i class="iconfont">&#xe604;</i>
							登录
						</router-link>
					</li>
				</ul>
				<ul>
					<li v-if="this.user" class="cz-df-right">
						<router-link to="/user"><img :src="user.avatar" class="cz-avatar" /></router-link>
					</li>
				</ul>
				<ul v-if="this.user">
					<li><button class="cz-btn cz-btn-round cz-btn-small" @click="logout">退出登录</button></li>
				</ul>
			</div>
		</div>
		<router-view class="cz-container"></router-view>

		<footer></footer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			keywords: ''
		};
	},
	created() {},
	methods: {
		logout() {
			alert(this.user.id);
			this.user = null;
			localStorage.clear();
		},
		search() {
			alert(this.keywords);
			let currentPath = this.$route.path;
			if (currentPath != '/search' || currentPath != '/search/article' || currentPath != '/search/topic' || currentPath != '/search/usere') {
				this.$router.push({ path: '/search', query: { keywords: this.keywords } });
			} else {
				this.$router.push({ path: '/empty', query: { keywords: this.keywords } });
			}
		}
	},
	computed: {}
};
</script>

<style scoped>
.cz-avatar {
	margin-top: 10px;
	width: 45px;
	height: 45px;
}
.nav-bar {
	height: 60px;
	width: 100%;
	position: fixed;
	top: 0px;
}
.nav-bar > .container {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.nav {
	flex: 0 0 5%;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items:  flex-end;
}
.nav-item {
	list-style: none;
	width: 80px;
	font-size: 20px;
	margin-right: 20px;
	
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
#logout {
	color: yellow;
	cursor: pointer;
}

ul {
	list-style: none;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
ul li {
	display: block;
}

.main-color {
	/* background-image: linear-gradient(to right, #bf30ac 0%, #0f9d58 100%); */
	background-image: linear-gradient(to right, rgb(65, 105, 225) 0%, rgb(65, 105, 225) 100%);
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 7px 10px 0 rgba(0, 0, 0, 0.12);
	opacity: 0.9;
}

.cz-list {
	/* margin-left: 100px; */
}
.cz-df-right {
	/* margin-right: 100px; */
	font-size: 20px;
}
.search-btn {
	margin-left: 36px;
}
.search-box {
}
.cz-btn {
	color: white;
	background-color: rgb(65, 105, 225);
}

</style>
