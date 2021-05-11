<template>
  <div id="app">
		<aside class='aside'>
			<menu-wrapper />
		</aside>
		<main class="main">
			content
		</main>
  </div>
</template>

<script>
import menuWrapper from './components/menu/menuWrapper.vue';

export default {
  name: "App",
  mounted() {
    this.$store.dispatch("fetchParams");
  },
  components: {
		menuWrapper
	},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
	display: flex;
	height: 100%;
	align-items: stretch;
}

.aside{
	flex: 1;
	max-width: 250px;
	
	border-right: 1px solid rgba(0,0,0,.2);
}

.main{
	flex: 1;
}

html, body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
}

html{
	box-sizing: border-box;
}

*, *::before, *::after{
	box-sizing: inherit;
}

</style>
