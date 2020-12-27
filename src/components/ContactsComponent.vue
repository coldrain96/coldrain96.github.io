<template>
  <section class="contacts" style="animation: fadeIn 2s;">
    <h2>Открыт к вашим предложениям, <br/>новым знакомствам, <br/>и приключениям!</h2>
    <div class="container">
      <div class="contacts__wrapper">
        <div class="social_networks_links__row">
          <div
            v-for="(contact, index) in contacts"
            :key="index"
            class="contacts-item"
          >
            <a :href="contact.link" target="_blank">
              <div class="contacts-item__image tg-round">
                <i :class="contact.iconClass"></i>
              </div>
              <div class="contacts-item__title">
                {{ contact.title }}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <div class="created-by">
			<span>
				Created by
			</span>
          <span>Kamil Bikmetov</span>
          <span>
				<a href="https://tele.click/coldrain96" target="_blank">@coldrain96</a>
			</span>
          <span class="year">{{ new Date().getFullYear() }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      contacts: {
        type: Array,
        required: true
      }
    }
  }
</script>
<style lang="scss" src="@/assets/scss/components/contacts.scss" scoped></style>
