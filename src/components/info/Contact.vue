<template>
	<div id="contact" class="container__card">
		<section class="card">
			<header>
				<h2 class="pink">{{$t('contact.name')}}</h2>
				<div class="bar__contact"></div>
				<h1 class="playfair">{{$t('contact.title')}}</h1>
			</header>
			<section>
				<p class="gray">{{$t('contact.description')}}</p>
			</section>
			<footer>
				<p class="gray">{{$t('contact.contact')}}<br>
					<a href="mailto:luciasalascobos@gmail.com">
						<span class="black">luciasalascobos@gmail.com</span>
					</a>
				</p>
			</footer>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Contact'
}
</script>

<style scoped>
#contact {
	margin-top: 12em;
}

.container__card {
	margin-bottom: 8em;
}

.card {
	width: calc(100% - 9em);
	margin-left: 9em;
}

h1,
h2 {
	margin: 0;
}

h1 {
	font-size: 2em;
}

h2 {
	display: inline-block;
	font-weight: lighter;
	position: absolute;
	transform: translateX(-6em);
}

.card p {
	width: 50%;
}

.bar__contact {
	background: #eee;
	display: inline-block;
	height: 2px;
	margin: 1.2em 0 2em 0;
	width: 100%;
}

@media only screen and (max-width: 600px) {
	.card {
		width: 100%;
		margin-left: 0;
	}

	.card p {
		width: 100%;
	}

	h1 {
		font-size: 1.8em;
	}

	h2 {
		font-size: 1.6em;
		transform: none;
	}

	.bar__contact {
		margin-left: 9em;
		width: calc(100% - 9em);
	}
}

@media only screen and (min-width: 600px) and (max-width: 960px) {
	.card p {
		width: 70%;
	}
}

@media only screen and (min-width: 960px) and (max-width: 1200px) {
	.card p {
		width: 61%;
	}
}
</style>
