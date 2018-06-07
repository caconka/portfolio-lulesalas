<template>
	<div>
		<section class="project-info">
			<header class="cover full-height">
				<slot name="info-cover" class="expand"></slot>
				<div class="arrows">
					<img
						src="@/assets/img/down-arrow.svg"
						v-scroll-to="{el: '#tastes', offset: -72}"
						alt="down arrow">
					<img
						src="@/assets/img/down-arrow.svg"
						v-scroll-to="{el: '#tastes', offset: -72}"
						alt="down arrow">
				</div>
			</header>
			<div class="container__fluid">
				<slot name="info-content"></slot>
			</div>
		</section>
	</div>
</template>

<script>
export default{
	name: 'projectLayout'
};
</script>
<style scoped>
.project-info {
	margin-top: var(--navbarHeight);
}

.cover {
	display: flex;
	align-items: flex-end;
	justify-content: center;
}

.full-height {
	height: calc(100vh - var(--navbarHeight));
}

.expand {
	width: 100%;
	height: 100%;
}

.arrows {
	position: absolute;
	bottom: 3em;
}

.container__fluid {
	margin: 70px auto;
	width: var(--maxWidth);
}
</style>
