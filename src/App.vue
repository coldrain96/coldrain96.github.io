<template>
	<div id="app" v-on:keydown="redirect()">
		<!--		<Navbar></Navbar>-->
		<Drawer/>
		<router-view/>
		<NotAvailable/>
		<!--		<About></About>-->
		<!--		<Facts></Facts>-->
		<!--		<Tools></Tools>-->
		<!--		<Projects></Projects>-->
		<!--		<Contacts></Contacts>-->
	</div>
</template>

<script>
    // import About from './components/AboutComponent'
    // import Contacts from './components/ContactsComponent'
    // import Facts from './components/FactsComponent'
    // import Projects from './components/ProjectsComponent'
    // import Tools from './components/ToolsComponent'
    // import Navbar from './components/NavbarComponent'
    import Drawer from './components/DrawerComponent'
    import NotAvailable from './components/NotAvailableComponent'

    export default {
        name: 'App',
        data: () => ({}),
        components: {
            // Navbar,
            Drawer,
            NotAvailable,
            // About,
            // Contacts,
            // Facts,
            // Projects,
            // Tools
        },
        methods: {
            redirect() {
                window.keydown = function (event) {
                    if (event.keyCode === ArrowRight) {
                        window.location.href = "/about";
                    } else if (event.keyCode === ArrowLeft) {
                        window.location.href = "/contacts";
                    }
                }
            }
        },
    };
</script>
<style lang="scss" src="@/assets/scss/main.scss"></style>
<style lang="scss" src="@/assets/scss/media.scss"></style>

<style>
	html {
		/*overflow:  hidden;*/
	}

	#app h2 {
		margin-top: 0px !important;
		padding-top: 42px;
	}
</style>
