<template>
	<div>
		<top></top>
		<left></left>
		<div class="main">
			<app-main />
		</div>
	</div>
</template>

<script>
	import top from './top.vue'
    import left from './left.vue'
    import appMain from './main.vue'
	export default {
		components: {
			top,
            left,
            appMain
		},
		data() {
			return {
				
			};
		},
		created() {},
		mounted() {},
		methods: {
			
		}
	};
</script>
<style scoped>

</style>