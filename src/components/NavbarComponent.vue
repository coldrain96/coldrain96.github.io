<template>
	<div class="header">
		<b-container>
			<b-row>
				<b-col cols="12">
					<ul class="header__list">
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

<style lang="scss" src="@/assets/scss/navbar-component.scss" scoped></style>
