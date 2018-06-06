<template>
	<div class="container__list">
		<header>
			<h1 id="uxui" class="playfair">{{$t('projects.title')}}</h1>
			<div class="bar"></div>
		</header>
		<section>
			<app-project-basic
				v-for="(project, index) in projects"
				:index="index"
				:project="project"
				:key="project"
			>
			</app-project-basic>
		</section>
	</div>
</template>

<script>
import ProjectBasic from './Project-basic';

const data = {
	projects: ['locspot', 'yingyangyumm', 'panificadora', 'clinicum']
};

export default {
	name: 'ProjectList',
	components: {
		'app-project-basic': ProjectBasic
	},
	data() {
		return data;
	}
};
</script>

<style scoped>
header {
	font-size: 1.3em;
	margin: 0 auto;
	text-align: right;
	width: var(--maxWidth);
}

#uxui {
	margin: 0;
	font-weight: lighter;
	font-size: 2em;
}

.bar {
	margin: .8em 0 2em auto;
}

@media only screen and (max-width: 600px) {
	#uxui {
		font-size: 1.3em;
	}
}

@media only screen and (min-width:600px) and (max-width: 960px) {
	#uxui {
		font-size: 1.5em;
	}
}
</style>
