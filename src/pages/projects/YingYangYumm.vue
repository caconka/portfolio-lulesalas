<template>
	<div>
		<app-base-layout>
			<app-project-layout>
				<img slot="info-cover" :src="$t('projects.yingyangyumm.images.infoCover')"
					alt="yingyangyumm-cover">
				<template slot="info-content">
					<div class="container__grid">
						<article>
							<header>
								<h3 class="playfair lighter">
									¿Sabías que el 66% de las enfermedades cardiovasculares se
									podrían prevenir?
								</h3>
							</header>
							<ul>
								<li>Planifica tus comidas</li>
								<li>Come más sano y variado</li>
								<li>Mejora tu salud</li>
							</ul>
							<h4 class="pink">ERES LO QUE COMES</h4>
							<h1 class="header--important playfair">Ying Yang Yumm</h1>
						</article>
						<div class="img__content">
							<img :src="$t('projects.yingyangyumm.images.info1')" alt=""/>
						</div>
						<section>
							<header>
								<h4>SOBRE LA APP</h4>
								<h3 class="playfair lighter">
									Ying Yang Yumm es un planificador de comidas que hace que
									comer sano sea más fácil y cómodo.
								</h3>
							</header>
							<p class="gray">
								Muchos síntomas (como los pies fríos o la tendencia a los
								resfriados) pueden denotar intolerancia a ciertos alimentos.
								Introduce estos síntoma con un sencillo formulario y Ying Yang
								Yumm te recomendará recetas con alimentos que te benefician,
								ayudándote a organizar un menú semanal saludable y variado para
								mejorar tu salud.
							</p>
						</section>
					</div>
					<img class="full-width"
						:src="$t('projects.yingyangyumm.images.basic')" alt=""/>
					<div class="more-info">
						<div class="img__content">
							<img :src="$t('projects.yingyangyumm.images.basic')" alt=""/>
						</div>
						<section>
							<h3 class="playfair lighter">
								Menú semanal & recomendaciones personalizadas para ti
							</h3>
							<p class="gray">
								Get all the benefits of having a nutritionist who organizes your
								weekly menu and recommends you recipes with ingredients that
								benefit you based on your health status.
							</p>
						</section>
					</div>
				</template>
			</app-project-layout>
		</app-base-layout>
	</div>
</template>

<script>
import BaseLayout from '@/layouts/Base.vue';
import ProjectLayout from '@/layouts/Project.vue';

export default{
	name: 'yingyangyumm',
	components: {
		'app-base-layout': BaseLayout,
		'app-project-layout': ProjectLayout
	}
};
</script>
<style scoped>
h1,
h2,
h4 {
	margin: 0;
}

.full-width {
	margin: 1.5em 0 3em 0;
	width: 100%;
}

.img__content {
	grid-area: img;
	height: 80vh;
	max-height: 670px;
	justify-self: center;
}

.img__content img {
	max-height: 100%;
	max-width: 100%;
}

.container__grid {
	display: grid;
	grid-template-columns: repeat(2, 50%);
	grid-template-rows: repeat(3, auto);
	grid-template-areas:
		"article img"
		"section img"
		"section img"
}

.container__grid h3 {
	margin-bottom: 2.3em;
	max-width: 400px;
}

.container__grid h4 {
	margin-top: 2.3em;
}

.container__grid article {
	grid-area: article;
	justify-self: start;
	height: fit-content;
}

.container__grid .img__content {
	margin-top: 3em;
}

.container__grid section {
	grid-area: section;
	justify-self: start;
	margin-top: 2em;
	max-width: 400px;
}

.container__grid ul {
	list-style: circle;
	padding-left: 1.1em;
}

.container__grid li {
	padding-bottom: .6em;
}

.more-info {
	display: grid;
	grid-template-columns: repeat(3, 33.333%);
	grid-template-rows: repeat(3, auto);
	grid-template-areas:
		"img img info"
		"img img ."
		"img img ."
}

.more-info .img__content {
	height: 570px;
	margin-right: 1em;
	max-height: 570px;
}

.more-info section {
	grid-area: info;
	margin-top: 60px;
}
</style>
