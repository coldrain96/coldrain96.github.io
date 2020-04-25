<template>
  <section class="contacts" style="animation: fadeIn 2s;">
    <h2 v-html="getMessage"></h2>
    <div class="container">
      <div class="contacts__wrapper">
        <div class="social_networks_links__row">

          <div v-for="contactItem in getContactItemsArray" :key="contactItem.title"
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
          <span>{{ getMyFullName }}</span>
          <span>
				<a href="https://tele.click/coldrain96" target="_blank">@coldrain96</a>
			</span>
          <span class="year">{{ getCurrentYear }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters([
      'getCurrentYear',
      'getMyFullName',
      'getMessage',
      'getContactItemsArray',
    ]),
  }
</script>
<style lang="scss" src="@/assets/scss/components/contacts.scss" scoped></style>
