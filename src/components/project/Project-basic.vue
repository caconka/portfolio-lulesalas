<template>
	<div :id="project === 'panificadora' ? 'architecture' : ''">
		<div class="container__full">
			<div
				v-if="project === 'yingyangyumm' || project === 'locspot'"
				:class="index % 2 === 0 ? 'bg__triangle--left' : 'bg__triangle--right'"
			></div>
			<img
				src="@/assets/img/background.jpg"
				alt="background"
				:class="[index % 2 === 0 ? 'bg--left' : 'bg--right', 'bg__' + project, {'bg__uxui--active': projects.uxui[project], 'bg__arch--active': projects.arch[project]}]"
			>
			<div
				:class="index % 2 === 0 ? 'container__flex' : 'container__flex reverse'"
			>
				<div class="section__mobile">
					<h4 class="pink">
						{{$t(`projects.${project}.type`)}}
					</h4>
				</div>
				<div class="project__image" :class="index === 1 ? 'img__ying' : ''">
					<img
						:class="[project, {'img--active': projects.uxui[project] || projects.arch[project]}]"
						:src="$t(`projects.${project}.images.basic`)"
						alt="Project photo"
					>
				</div>
				<div class="project__card">
					<h1
						class="pink section"
						:class="index % 2 === 0 ? '' : 'right'"
					>
						{{$t(`projects.${project}.type`)}}
					</h1>
					<header>
						<h2 class="playfair">{{$t(`projects.${project}.title`)}}</h2>
					</header>
					<section>
						<p class="gray">{{$t(`projects.${project}.description`)}}</p>
					</section>
					<footer :class="index % 2 === 0 ? 'right' : ''">
						<a
							target="_blank"
							:href="$t(`projects.${project}.url`)"
							class="btn bgBlack"
						>
							Ver proyecto ______
						</a>
					</footer>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
function querySelect(selector) {
	return document.querySelector(selector);
}

function addRemoveClass(uxui, arch) {
	const uxuiNav = querySelect('.btn__uxui');
	const architectureNav = querySelect('.btn__architecture');
	uxui
		? uxuiNav.className = 'btn__uxui btn--active'
		: uxuiNav.className = 'btn__uxui';
	arch
		? architectureNav.className = 'btn__architecture btn--active'
		: architectureNav.className = 'btn__architecture';

}

const data = {
	projects: {
		uxui: {
			locspot: false,
			yingyangyumm: false
		},
		arch: {
			clinicum: false,
			panificadora: false
		}
	}
}

export default {
	name: 'ProjectBasic',
	props: ['project', 'index'],
	data () {
		return data;
	},
	computed: {
		imgBgClass: function({index, project}) {
			return index % 2 === 0
				? 'bg--left bg__' + project
				: 'bg--right bg__' + project
		}
	},
	methods: {
		handleScroll () {
			const bgLocspot = querySelect('.bg__locspot');
			const bgYingyang = querySelect('.bg__yingyangyumm');
			const bgPani = querySelect('.bg__panificadora');
			const bgClinicum = querySelect('.bg__clinicum');
			const contact = querySelect('#contact');
			const heightBase = window.scrollY + window.innerHeight / 2.45;

			if (heightBase > bgLocspot.offsetTop && heightBase < bgPani.offsetTop) {
				this.projects.uxui.locspot = true;
				addRemoveClass(true, false);
				if (heightBase > bgYingyang.offsetTop) {
					this.projects.uxui.yingyangyumm = true;
				}
			}
			if (heightBase > bgPani.offsetTop && heightBase < contact.offsetTop) {
				this.projects.arch.panificadora = true;
				addRemoveClass(false, true);
				if (heightBase > bgClinicum.offsetTop) {
					this.projects.arch.clinicum = true;
				}
			}
			if (heightBase < bgLocspot.offsetTop || heightBase > contact.offsetTop) {
				addRemoveClass(false, false);
			}
		}
	},
	created () {
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed () {
		window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>

<style scoped>
.container__full {
	display: flex;
	justify-content: center;
	background-repeat: no-repeat;
	margin-bottom: 12.5em;
	background-size: cover;
	height: var(--bgCardsHeight);
}

.bg__triangle--left,
.bg__triangle--right {
	border: solid calc(110px + (100vw - var(--maxWidth)) / 2);
	opacity: .15;
	position: absolute;
	transform: translateY(calc(-62px - (100vw - var(--maxWidth)) / 2));
	z-index: 1;
}

.bg__triangle--left {
	left: 0;
	border-color: transparent transparent transparent var(--pink);
}

.bg__triangle--right {
	right: 0;
	border-color: transparent var(--gold) transparent transparent;
}

.bg--left,
.bg--right {
	height: 354px;
	position: absolute;
	padding-top: 3em;
	opacity: 0;
	transition: all .9s ease;
	width: 0;
	z-index: -999;
}

.bg--left {
	left: 0;
}

.bg--right {
	right: 0;
}

.bg__uxui--active {
	opacity: 1;
	width: calc(799px + (100% - 1000px) / 2);
}

.bg__arch--active {
	opacity: 1;
	width: calc(811px + (100% - 1000px) / 2);
}

.container__flex {
	width: var(--maxWidth);
	display: flex;
	justify-content: space-between;
}

.reverse {
	flex-direction: row-reverse;
}

.project__card {
	width: var(--proyectCardWidth);
}

.project__card h1 {
	font-weight: lighter;
}

.project__image {
	max-width: 60%;
}

.project__image img {
	max-height: 88%;
	opacity: 0;
	transition: all .6s ease;
}

.project__image .img--active {
	opacity: 1;
}

.img__ying {
	text-align: right;
}

.section {
	font-size: 1em;
	margin-top: 3vh;
}

.section__mobile {
	display: none;
}

header h2 {
	font-size: 1.7em;
}

.right {
	text-align: right;
}

.gray {
	text-shadow: 1px 1px 1px var(--white);
}

.panificadora {
	transform: translateX(-20%);
}

footer {
	margin-top: 4em;
}

.bgWhite {
	border: solid 1px #333;
}

@media only screen and (max-width: 600px) {
	.container__full {
		width: 100%;
		margin-bottom: 9.5em;
	}

	.container__flex {
		align-items: center;
		flex-direction: column;
	}

	.container__full .bg--left,
	.container__full .bg--right {
		width: 100%;
		height: 60vw;
		padding-top: 3.5em;
	}

	.bg__triangle--left,
	.bg__triangle--right {
		border: solid calc(140px + (100vw - var(--maxWidth)));
		transform: translateY(calc(-88px - (100vw - var(--maxWidth))));
	}

	.bg__triangle--left {
		left: 0;
		border-color: transparent transparent transparent var(--pink);
	}

	.bg__triangle--right {
		right: 0;
		border-color: transparent var(--gold) transparent transparent;
	}

	.arch {
		height: 156px;
	}

	.project__image {
		width: 100%;
		max-width: 100%;
	}

	.project__image img {
		width: 100%;
		max-width: 100%;
	}

	.section {
		display: none;
	}

	.section__mobile {
		display: block;
		text-align: right;
		width: 80%;
	}

	.section__mobile h4 {
		margin: 0 0 .2em 0;
		z-index: 2;
	}

	.project__card {
		margin-top: 1em;
	}

	.project__card h2 {
		font-size: 1.3em;
	}

	.project__card footer {
		text-align: right;
	}

	.container__full .bg__clinicum,
	.container__full .bg__panificadora {
		height: 41vw;
	}

	.clinicum {
		transform: translateX(10%);
	}
}

@media only screen and (min-width: 600px) and (max-width: 1200px) {
	.bg__triangle--left,
	.bg__triangle--right {
		border: solid calc(110px + (100vw - var(--maxWidth)));
		transform: translateY(calc(-62px - (100vw - var(--maxWidth))));
	}

	.bg__triangle--left {
		left: 0;
		border-color: transparent transparent transparent var(--pink);
	}

	.bg__triangle--right {
		right: 0;
		border-color: transparent var(--gold) transparent transparent;
	}

	.project__card h2 {
		font-size: 1.5em;
	}

	.project__card {
		width: 40%;
	}

	.container__full {
		margin-bottom: 5.5em;
	}

	.container__full .bg--left,
	.container__full .bg--right {
		width: 68%;
		height: 20em;
	}

	.project__image img {
		width: 60vw;
	}

	.project__image .yingyangyumm,
	.project__image .locspot {
		width: 94%;
	}

	.project__image .clinicum,
	.project__image .yingyangyumm {
		transform: translateX(2em);
	}
}
</style>
