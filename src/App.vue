<template>
	<div id="app">
		<fire-canvas class="fire"></fire-canvas>
		<router-view />
	</div>
</template>

<script>
import FireCanvas from './components/FireCanvas';
export default {
	name: 'App',
	data: () => ({}),
	components: {
		FireCanvas
	}
};
</script>
<style>
@import url('assets/css/basic.css');
@import url('assets/css/style.css');
/* #app {
		background-image: url(assets/img/bg02.jpg);
		background-attachment: fixed;
		background-size: calc(100%);
		height: 100%;
		opacity: 0.9;
	} */

#app {
	margin: 0;
	padding: 0;
	overflow: hidden;
	min-height: 100%;
	width: 100%;
}
@media screen and (max-width: 440px) {
	.fire {
		display: none;
	}
	#app {
		background: #000;
	}
}
.fire {
	width: -moz-calc();
}
</style>
