export default {
  state: {
    date: new Date(),
    firstName: 'Kamil',
    secondName: 'Bikmetov',
    message: `Открыт к вашим предложениям, <br/>новым знакомствам, <br/>и приключениям!`,
    contactItems: [
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
  },
  getters: {
    CURRENT_YEAR_GET: (state) => {
      return state.date.getFullYear()
    },
    MY_FULL_NAME_GET: (state) => {
      return `${state.secondName} ${state.firstName}`
    },
    MESSAGE_GET: (state) => {
      return state.message
    },
    CONTACT_ITEMS_GET: (state) => {
      return state.contactItems
    },
  },
}
