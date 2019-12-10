<template>
  <div id="app">
	  <router-view />
  </div>
  
</template>

<script>
	export default {
		name: 'App',
		data: () => ({})
		
	};
</script>
<style>
	@import url("assets/css/basic.css");
	@import url("assets/css/style.css");
	#app {
		/* background-image: url(assets/img/bg02.jpg); */
		background-attachment: fixed;
		background-size: calc(100%);
		height: 100%;
		/* opacity: 0.9; */
	}
</style>
