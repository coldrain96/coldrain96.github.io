<template>
  <ContactsComponent
    :contacts="contactList"
  />
</template>

<script>
  import ContactsComponent from '@/components/ContactsComponent'

  export default {
    components: {
      ContactsComponent
    },
    data: () => ({
      contactList: [
        {
          link: 'https://tele.click/coldrain96',
          iconClass: 'fab fa-telegram-plane fa-4x',
          title: 'telegram'
        },
        {
          link: 'https://github.com/coldrain96/',
          iconClass: 'fab fa-github fa-4x',
          title: 'github'
        },
        {
          link: 'skype:workplace.bikmetov.k.f',
          iconClass: 'fab fa-skype fa-4x',
          title: 'skype'
        },
        {
          link: 'mailto:bikmetov.k.f@yandex.ru?subject=Redirect from website',
          iconClass: 'far fa-envelope fa-4x',
          title: 'email'
        },
      ],
    })
  }
</script>
