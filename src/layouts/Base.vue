<template>
	<div>
		<app-navbar></app-navbar>
		<slot></slot>
		<app-footer></app-footer>
	</div>
</template>

<script>
import NavBar from '../components/misc/NavBar';
import Footer from '../components/misc/Footer';

export default{
	name: 'baseLayout',
	components: {
		'app-navbar': NavBar,
		'app-footer': Footer
	}
};
</script>
<style scoped>

</style>
