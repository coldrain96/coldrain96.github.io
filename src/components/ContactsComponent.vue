<template>
	<section class="contacts">
		<!--		<form action="">-->
		<!--			<div class="form-group">-->

		<!--				<label for="name"></label>-->
		<!--				<input-->
		<!--						class="form-control"-->
		<!--						id="name"-->
		<!--						type="text"-->
		<!--						@blur="$v.name.$touch()"-->
		<!--						v-model="name"-->
		<!--				>-->
		<!--				<div class="invalid-feedback" v-if="!$v.required">-->
		<!--					Обязательное поле-->
		<!--				</div>-->
		<!--				&lt;!&ndash;<div class="invalid-feedback" v-if="!$v.name.email">&ndash;&gt;-->
		<!--				&lt;!&ndash;Некорректное значение&ndash;&gt;-->
		<!--				&lt;!&ndash;</div>&ndash;&gt;-->

		<!--				<label for="email"></label>-->
		<!--				<input-->
		<!--						class="form-control"-->
		<!--						:class="{'is-invalid': $v.email.$error}"-->
		<!--						id="email"-->
		<!--						type="email"-->
		<!--						@blur="$v.email.$touch()"-->
		<!--						v-model="email"-->
		<!--				>-->
		<!--				<div class="invalid-feedback" v-if="!$v.email.required">-->
		<!--					Обязательное поле-->
		<!--				</div>-->
		<!--				<div class="invalid-feedback" v-if="!$v.email.email">-->
		<!--					Некорректное значение-->
		<!--				</div>-->

		<!--				<label for="message"></label>-->
		<!--				<input-->
		<!--						class="form-control"-->
		<!--						id="message"-->
		<!--						type="text"-->
		<!--				>-->

		<!--			</div>-->
		<!--		</form>-->
		<div class="neutral-meme">
			<img src="~@/assets/img/meme1.png" alt="">
		</div>
		<h2>
			Открыт к вашим предложениям, <br/>новым знакомствам, <br/>и приключениям!
		</h2>
		<!--		<h2>-->
		<!--			<vue-typer-->
		<!--					:text='["Открыт к вашим предложениям, новым знакомствам, и приключениям!"]'-->
		<!--					:repeat='0'-->
		<!--					:shuffle='false'-->
		<!--					initial-action='typing'-->
		<!--					:pre-type-delay='70'-->
		<!--					:type-delay='90'-->
		<!--					:pre-erase-delay='2000'-->
		<!--					:erase-delay='250'-->
		<!--					erase-style='select-all'-->
		<!--					:erase-on-complete='false'-->
		<!--					caret-animation='solid'-->
		<!--			></vue-typer>-->
		<!--		</h2>-->
		<div class="container">
			<div class="contacts__wrapper">

				<div class="social_networks_links__row">

					<div class="contacts-item">
						<a href="https://tele.click/coldrain96">
							<div class="contacts-item__image tg-round">
								<i class="fab fa-telegram-plane fa-4x"></i>
							</div>
							<div class="contacts-item__title">
							</div>
						</a>
					</div><!-- /.contacts-item -->

					<div class="contacts-item">
						<a href="https://vk.com/coldrain96">
							<div class="contacts-item__image tg-round">
								<i class="fab fa-vk fa-4x"></i>
							</div>
							<div class="contacts-item__title">
							</div>
						</a>
					</div><!-- /.contacts-item -->

					<div class="contacts-item">
						<a href="https://github.com/coldrain96/">
							<div class="contacts-item__image tg-round">
								<i class="fab fa-github fa-4x"></i>
							</div>
							<div class="contacts-item__title">
							</div>
						</a>
					</div><!-- /.contacts-item -->

				</div><!-- /.social_networks_links__row -->
				<div class="social_networks_links__row">

					<div class="contacts-item">
						<a href="https://www.instagram.com/ya_pobeditel_po_jizni/">
							<div class="contacts-item__image tg-round">
								<i class="fab fa-instagram fa-4x"></i>
							</div>
							<div class="contacts-item__title">
							</div>
						</a>
					</div><!-- /.contacts-item -->

					<div class="contacts-item">
						<a href="skype:workplace.bikmetov.k.f">
							<div class="contacts-item__image tg-round">
								<i class="fab fa-skype fa-4x"></i>
							</div>
							<div class="contacts-item__title">
							</div>
						</a>
					</div><!-- /.contacts-item -->

					<div class="contacts-item">
						<a href="mailto:bikmetov.k.f@yandex.ru?subject=Redirect from website">
							<div class="contacts-item__image tg-round">
								<i class="far fa-envelope fa-4x"></i>
							</div>
							<div class="contacts-item__title">
							</div>
						</a>
					</div><!-- /.contacts-item -->

				</div><!-- /.social_networks_links__row -->

			</div>
		</div>
		<div class="footer">
			<div class="footer-content">
				<div class="created-by">
			<span>
				Created by
			</span>
					<span>Bikmetov Kamil</span>
					<span>
				<a href="https://tele.click/coldrain96">@coldrain96</a>
			</span>
					<span class="year">{{ currentYear }}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'

    export default {
        data: () => ({
            email: '',
            name: ''
        }),
        computed: {
            currentYear: () => {
                const currentYear = new Date().getFullYear();
                return currentYear;
            }
        },
        validations: {
            email: {
                required,
                email
            },
            required
        }
    }
</script>
<style lang="scss" src="@/assets/scss/components/contacts.scss" scoped></style>
