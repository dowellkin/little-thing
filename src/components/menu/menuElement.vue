<template>
	<div class="menu-element" :class="{root: depness==0}">
		<div class="menu-elemet__title" @click="toggleElementOpened" :style="{'padding-left': (depness*10+10)+'px'}">
			{{data.title}}
				
			<div class="menu-element__open-icon" :class="{'menu-element__open-icon__opened': opened}" v-if="data.children.length > 0">
				<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					width="20px" height="20px" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;"
					xml:space="preserve">
				<g>
					<path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
						c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
						c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/>
				</g>
				</svg>
			</div>
		</div>
		
		<div v-if="opened" class="menu-element__childrens">
			<template v-for="elem in data.children">
				<menu-element :key='elem.index' :data="elem" :depness="depness + 1" />
			</template>
		</div>
	</div>
</template>

<script>
export default {
	name: "menuElement",
	props: {
		data: Object,
		depness: {
			default: 0
		}
	},
	data(){
		return {
			opened: false
		}
	},
	methods: {
		toggleElementOpened(){
			this.opened = !this.opened;
		}
	}
}
</script>

<style>
.menu-elemet__title{
	padding: 10px 0px 10px 8px;
	border-top: 1px solid rgba(0,0,0,.2);
	cursor: pointer;
	transform: background-color .2s ease;
	position: relative;
}

.root.menu-element:last-of-type .menu-elemet__title{
	border-bottom: 1px solid rgba(0,0,0,.2);
}

.menu-elemet__title:hover{
	background: rgba(207, 207, 248, 0.2);
}

.menu-element__open-icon{
	position: absolute;
	top: 50%;
	right: 25px;
	transform: translateY(-50%);
	transition: transform .2s ease;
}

.menu-element__open-icon__opened{
	transform: translateY(-50%) rotate(180deg);
}
</style>