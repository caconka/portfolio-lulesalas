<template>
	<div>
		<app-base-layout>
			<app-info></app-info>
			<app-project-list></app-project-list>
			<app-contact></app-contact>
		</app-base-layout>
	</div>
</template>

<script>
import BaseLayout from '@/layouts/Base.vue';
import Info from '@/components/info/Info';
import ProjectList from '@/components/project/Project-list';
import Contact from '@/components/info/Contact';

export default {
	name: 'Home',
	components: {
		'app-base-layout': BaseLayout,
		'app-info': Info,
		'app-project-list': ProjectList,
		'app-contact': Contact
	}
};
</script>

<style scoped>

</style>
