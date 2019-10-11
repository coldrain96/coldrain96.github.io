<template>
	<div class="header">
		<b-container>
			<b-row>
				<b-col cols="12">
		<ul class="header__list">
			<!--				<li><router-link to="/" active-class="active">Обо мне</router-link></li>-->
			<!--				<li><router-link to="/facts" active-class="active">Факты</router-link></li>-->
			<!--				<li><router-link to="/tools" active-class="active">Технологии</router-link></li>-->
			<!--				<li><router-link to="/projects" active-class="active">Проекты</router-link></li>-->
			<!--				<li><router-link to="/contacts" active-class="active">Контакты</router-link></li>-->
			<router-link tag="li" class="nav-item" exact active-class="active" to="/">
				<a class="nav-link">Обо мне</a>
			</router-link>
			<router-link tag="li" class="nav-item" exact active-class="active" to="/facts">
				<a class="nav-link">Факты</a>
			</router-link>
			<router-link tag="li" class="nav-item" exact active-class="active" to="/tools">
				<a class="nav-link">Технологии</a>
			</router-link>
			<router-link tag="li" class="nav-item" exact active-class="active" to="/projects">
				<a class="nav-link">Проекты</a>
			</router-link>
			<router-link tag="li" class="nav-item" exact active-class="active" to="/contacts">
				<a class="nav-link">Контакты</a>
			</router-link>

		</ul>
				</b-col>
			</b-row>
	</b-container>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss" scoped>
	.home {
		height: 100vh;
		max-height: 100vh;
	}
	.header {
		margin-bottom: 60px;
	}
	.header__list {
		display: flex;
		justify-content: center;
		align-content: space-between;
		margin: 0 0 0 0;
		flex-wrap: wrap;
		padding-left: 0px;
	}

	.header__list li {
		margin: 30px;
		list-style: none;
	}

	.header__list a {
		text-decoration: none;
		color: #000;
		font-size: 24px !important;
	}

	.header__list a:hover {
		text-decoration: none;
		color: #000 !important;
		font-size: 24px !important;
		/*border-bottom: 4px solid #000000;*/
	//opacity: 0.7;
	}
	.header__photo {
		display: flex;
		justify-content: flex-end;
	}
	.router-link-exact-active {
		font-weight: 500;
		/*border-bottom: 4px solid rgba(224,224,224,0.47);*/
		background-color: rgba(224,224,224,0.47);
	}
</style>
