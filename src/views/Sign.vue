<template>
	<div class="full">
		<h2><router-link to="/">极客营</router-link></h2>
		<div class="login-box">
			<div class="tab">
				<span class="tab-item" :class="{ active: isActive }" @click="changeTab">登录</span>
				<span class="tab-item" :class="{ active: !isActive }" @click="changeTab">注册</span>
			</div>
			<div class="tab-box" v-show="show&&selected===0">
				<div>
					<label><input type="text" class="input-box" placeholder="请输入手机号" v-model="userDto.mobile"/></label>
				</div>
				<div>
					<label><input type="password" class="input-box" placeholder="请输入密码" v-model="userDto.password"/></label>
				</div>
				<div>
					<button class="cz-btn cz-btn-round cz-btn-normal" @click="signIn(userDto)" autofocus="autofocus">立即登录</button>
				</div>
			</div>
			<div class="tab-box" v-show="show&&selected===1">
				<div>
					<label><input type="tel" name="account" class="input-box" placeholder="手机号/邮箱" v-model="userDto.mobile" /></label>
				</div>
				<div>
					<label><input type="password" name="password" class="input-box" placeholder="密码" v-model="userDto.password"/></label>
				</div>
				<div>
					<label><input type="text" name="yanzheng" class="yanzheng" placeholder="验证码" /></label>
				</div>
				<div>
					<label><button @click="signUp(userDto)" class="btn">立即注册</button></label>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isActive: true,
			show: true,
			selected: 0,
			
			userDto: {
				mobile: '',
				password: ''
			}
		};
	},
	created() {
		
	},
	methods: {
		changeTab: function() {
			this.isActive = !this.isActive;
			this.selected = this.selected == 0 ? 1 : 0;
		},
		signIn: function(userDto) {
			
			this.axios.post('http://localhost:8080/api/user/sign-in', JSON.stringify(this.userDto)).then(response => {
							alert(response.data.msg);
							if (response.data.msg === '登录成功') {
								//将后台的用户信息存入本地存储
								localStorage.user = JSON.stringify(response.data.data);
								//路由跳转到首页
								this.$router.push('/');
							}
						});
		},
		signUp: function(userDto) {
			
			this.axios.post('http://localhost:8080/api/user/sign-up', JSON.stringify(this.userDto)).then(response => {
				alert(response.data.msg);
				if(response.data.msg === '注册成功') {
					this.changeTab();
				}
			});
			
			
		}
	},
	computed: {}
};
</script>

<style scoped="scoped">
body {
	
	background-image: url('https://tinyurl.com/y67s8w7t');
	background-size: calc(100%);
}
.login-box {
	width: 400px;
	height: 320px;
	text-align: center;
	position: relative;
	bottom: -160px;
	left: 540px;
	padding: 10px 5px 5px 10px;
	background-color: #eee;
	border: 1px solid #dddddd;
	border-radius: 20px;
	box-shadow: 2px 5px 10px #aaaaaa;
}
.tab {
	display: flex;
	align-items: center;
	height: 40px;
	background-color: #ddd;
}

.tab-item {
	cursor: pointer;
	margin-right: 10px;
	flex: 0 0 80px;
	text-align: center;
	line-height: 38px;
}
.active {
	color: #00bbdd;
	font-weight: 600;
	border-bottom: 2px solid #00bbdd;
}
.tab-box {
	height: 260px;
	background-color: #00897b;
	color: #eee;
}
.input-box {
	width: 70%;
	height: 30%;
	background-color: #ffffff;
	border: 1px solid #e4e6e5;
	border-radius: 3px;
	color: #333;
	font-size: 13px;
	padding-left: 10px;
	margin: 20px;
}


</style>
