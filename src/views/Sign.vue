<template>
	<div class="full">
		<h2><router-link to="/">主页</router-link></h2>
		<div class="login-box cz-shadow">
			<div class="tab">
				<span class="tab-item" :class="{ active: isActive }" @click="changeTab">登录</span>
				<span class="tab-item" :class="{ active: !isActive }" @click="changeTab">注册</span>
			</div>
			<div class="tab-box" v-show="show && selected === 0">
				<div>
					<span class="cz-black-font">手机号:</span>
					<label><input type="text" class="input-box" placeholder="请输入手机号" v-model="userDto.mobile" /></label>
				</div>
				<div>
					<span class="cz-black-font">密码:</span>
					<label><input type="password" class="input-box" placeholder="请输入密码" v-model="userDto.password" /></label>
				</div>
				<div class="cz-fx-start">
					<span class="cz-black-font" style="margin-left: 24px;">验证码:</span>
					<label><input type="text" name="yanzheng" class="yanzheng" placeholder="验证码" v-model="userDto.code" /></label>
					<img class="verify" @click.prevent="refresh" ref='codeImg' />
				</div>
				<div><button class="cz-btn cz-btn-round cz-btn-normal cz-blue-theme" @click="signIn(userDto)" autofocus="autofocus">立即登录</button></div>
			</div>
			<div class="tab-box" v-show="show && selected === 1">
				<div>
					<span class="cz-black-font">手机号:</span>
					<label><input type="tel" name="account" class="input-box" placeholder="手机号/邮箱" v-model="userDto.mobile" /></label>
				</div>
				<div>
					<span class="cz-black-font">密码:</span>
					<label><input type="password" name="password" class="input-box" placeholder="密码" v-model="userDto.password" /></label>
				</div>
				<div class="cz-fx-start">
					<span class="cz-black-font" style="margin-left: 24px;">验证码:</span>
					<label><input type="text" name="yanzheng" class="yanzheng" placeholder="验证码" /></label>
				</div>
				<div>
					<label><button @click="signUp(userDto)" class="cz-btn cz-btn-round cz-btn-normal cz-blue-theme">立即注册</button></label>
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
				password: '',
				code: ''
			},
			token: ''
		};
	},
	created() {
		this.axios.get(this.GLOBAL.baseUrl + '/code', { responseType: 'blob' }).then(res => {
			var img = this.$refs.codeImg;
			let url = window.URL.createObjectURL(res.data);
			
			img.src = url;
			console.log(res.headers);
			this.token = res.headers['access-token'];
			console.log(this.token);
		});
	},
	methods: {
		changeTab: function() {
			this.isActive = !this.isActive;
			this.selected = this.selected == 0 ? 1 : 0;
		},
		signIn: function(userDto) {
			this.axios({
					method: 'post',
					url: this.GLOBAL.baseUrl + '/user/sign-in',
					data: JSON.stringify(this.userDto),
					headers: {
						'Access-Token': this.token
					}
			}).then(res => {
				if (res.data.msg == '成功') {
					alert('登录成功');
					localStorage.setItem('user', JSON.stringify(res.data.data));
					this.$router.push('/');
				} else {
					alert(res.data.msg);
					this.userDto.code = '';
				}
			});
		},
		refresh() {
					this.axios.get(this.GLOBAL.baseUrl + '/code', { responseType: 'blob' }).then(res => {
						console.log(res);
						var img = this.$refs.codeImg;
						let url = window.URL.createObjectURL(res.data);
						img.src = url;
					});
				},
		signUp: function(userDto) {
			this.axios.post('http://localhost:8080/api/user/sign-up', JSON.stringify(this.userDto)).then(response => {
				alert(response.data.msg);
				if (response.data.msg === '注册成功') {
					this.changeTab();
				}
			});
		},

		checkAccount: function() {}
	},
	computed: {}
};
</script>

<style scoped>
a,
body {
	color: #eee;
}
.full {
	background-color: rgb(65, 105, 225);
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
h2 {
	color: #dddddd;
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
	border: 1px solid rgb(65, 105, 225);
	border-radius: 10px;
}

.tab-item {
	cursor: pointer;
	flex: 0 0 50%;
	text-align: center;
	line-height: 38px;
}
.active {
	color: rgb(65, 105, 225);
	font-weight: 600;
	border-bottom: 2px solid rgb(65, 105, 225);
}
.tab-box {
	height: 260px;
	background-color: #eee;
	color: #eee;
}
.input-box {
	width: 70%;
	height: 25px;
	background-color: #ffffff;
	border: 1px solid #e4e6e5;
	border-radius: 5px;
	color: #333;
	font-size: 13px;
	padding-left: 10px;
	margin: 20px;
}
.yanzheng {
	height: 25px;
	background-color: #ffffff;
	border: 1px solid #e4e6e5;
	border-radius: 5px;
	color: #333;
	padding-left: 10px;
	margin: 30px;
}
.verify {
	flex: 0 0 20%;
	height: 25px;
	width: 10px;
}
.verify:hover {
	cursor: pointer;
}
</style>
