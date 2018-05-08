<template>
	<div>
		<app-info></app-info>
		<app-project-list></app-project-list>
		<app-contact></app-contact>
	</div>
</template>

<script>
import Info from '@/components/info/Info';
import ProjectList from '@/components/project/Project-list';
import Contact from '@/components/info/Contact';

export default {
	name: 'Home',
	components: {
		'app-info': Info,
		'app-project-list': ProjectList,
		'app-contact': Contact
	}
}
</script>

<style scoped>

</style>
