<template>
  <section class="contacts" style="animation: fadeIn 2s;">
    <h2 v-html="MESSAGE_GET"></h2>
    <div class="container">
      <div class="contacts__wrapper">
        <div class="social_networks_links__row">

          <div v-for="contactItem in CONTACT_ITEMS_GET" :key="contactItem.title"
               class="contacts-item">
            <a :href="contactItem.link" target="_blank">
              <div class="contacts-item__image tg-round">
                <i :class="contactItem.iconClass"></i>
              </div>
              <div class="contacts-item__title">
                {{ contactItem.title }}
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
          <span>
            {{ MY_FULL_NAME_GET }}
          </span>
          <span>
				<a href="https://tele.click/coldrain96" target="_blank">
                  @coldrain96
                </a>
			</span>
          <span class="year">
            {{ CURRENT_YEAR_GET }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters([
      'CURRENT_YEAR_GET',
      'MY_FULL_NAME_GET',
      'MESSAGE_GET',
      'CONTACT_ITEMS_GET',
    ]),
  }
</script>

<style lang="scss" src="@/assets/scss/pages/contacts.scss" scoped></style>
