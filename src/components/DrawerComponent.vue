<template>
	<div class="overlay">
		<aside class="drawer">
			<div class="drawer-hamburger hamburger">
				<a href="#" :class="{ activeNav: drawerActive }" @click.prevent="drawerActive = !drawerActive">
					<div class="hamburger-line line-1"></div>
					<div class="hamburger-line line-2"></div>
					<div class="hamburger-line line-3"></div>
				</a>
			</div>
			<ul v-if="drawerActive" class="drawer__list">
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

		</aside>
	</div>
</template>

<script>
    export default {
        data: () => ({
            drawerActive: false,
            overlay: false,
        }),
        methods: {
            close() {
                // this.drawerActive = false;
                // let element = document.querySelector(`#${elementName}`);
                // const y = element.offsetTop - 65;
                // window.scrollTo(0, y);
            },
        }
    }
</script>
<style lang="scss" scoped>
	.overlay1 {
		position: fixed;
		z-index: 880;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0, 0.8);
	}
	.drawer {
		& .hamburger {
			/*position: fixed;*/
			/*right: 30px;*/
			/*top: 30px;*/
			width: 25px;
			height: 25px;
			margin-left: auto;
			margin-right: 30px;
			margin-left: 30px;
			margin-top: 30px;
		}

		& .line-wrapper {

		}

		& .hamburger-line {
			max-width: 100%;
			border-bottom: 3px solid #000;
			margin-bottom: 5px;
			border-radius: 2px;
		}

		& .drawer-hamburger {

		}

		& a.activeNav {
			height: 25px;
			width: 25px;
			display: block;
			position: absolute;
			right: 0;
			left: 30px;
		}

		& a.activeNav .drawer-hamburger {
			position: absolute;
			right: 15px;
			width: 28px;
			height: 28px;
			margin-left: auto;
		}

		& a.activeNav .line-1 {
			width: 0;
			transition: all .5s;
		}

		& a.activeNav .line-2 {
			transform: rotate(45deg);
			transition: all .5s;
			position: absolute;
			left: 0;
			right: 0;
		}

		& a.activeNav .line-3 {
			transition: all .5s;
			transform: rotate(-45deg);
		}
	}

	.drawer {
		position: fixed;
		right: 0;
		/*width: 270px;*/
		min-width: 60px;
		height: 100%;
		background-color: #fff;
		z-index: 990;
	}

	.drawer__list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: space-between;
		margin: 0 0 0 0;
		padding-left: 0px;
	}

	.drawer__list li {
		margin: 30px;
		list-style: none;
	}

	.drawer__list a {
		text-decoration: none;
		color: #000;
		font-size: 24px !important;
	}

	.drawer__list a:hover {
		text-decoration: none;
		color: #000 !important;
		font-size: 24px !important;
	}

	.router-link-exact-active {
		font-weight: 500;
		background-color: rgba(224, 224, 224, 0.47);
	}
</style>
