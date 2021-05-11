<template>
	<div class="menu">
		<div class="menu__wrapper">
			<div class="menu__header">Menu</div>
			<div class="menu__content">
				<menu-element v-for="elem in menu" :key='elem.index' :data="elem" />
			</div>
		</div>
	</div>	
</template>

<script>
import menuElement from './menuElement';

export default {
	name: 'menuWrapper',
	components: {
		menuElement
	},
	computed: {
		menu(){
			return this.$store.getters['getSideMenu'];
		}
	}
}
</script>

<style>

.menu__header{
	text-align: center;
	padding: 10px 25px;
	font-size: 1.2rem;
}

</style>