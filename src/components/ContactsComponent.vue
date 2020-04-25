<template>
  <section class="contacts" style="animation: fadeIn 2s;">
    <h2>
      Открыт к вашим предложениям, <br/>новым знакомствам, <br/>и приключениям!
    </h2>
    <div class="container">
      <div class="contacts__wrapper">

        <div class="social_networks_links__row">

          <div class="contacts-item">
            <a href="https://tele.click/coldrain96" target="_blank">
              <div class="contacts-item__image tg-round">
                <i class="fab fa-telegram-plane fa-4x"></i>
              </div>
              <div class="contacts-item__title">
              </div>
            </a>
          </div><!-- /.contacts-item -->

          <div class="contacts-item">
            <a href="https://github.com/coldrain96/" target="_blank">
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
            <a href="skype:workplace.bikmetov.k.f" target="_blank">
              <div class="contacts-item__image tg-round">
                <i class="fab fa-skype fa-4x"></i>
              </div>
              <div class="contacts-item__title">
              </div>
            </a>
          </div><!-- /.contacts-item -->

          <div class="contacts-item">
            <a href="mailto:bikmetov.k.f@yandex.ru?subject=Redirect from website" target="_blank">
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
				<a href="https://tele.click/coldrain96" target="_blank">@coldrain96</a>
			</span>
          <span class="year">{{ currentYear }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    computed: {
      currentYear: () => {
        return new Date().getFullYear();
      }
    }
  }
</script>
<style lang="scss" src="@/assets/scss/components/contacts.scss" scoped></style>
