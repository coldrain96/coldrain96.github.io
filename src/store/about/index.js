export default {
  state: {
    textAboutMe: [
      "Привет!👋", "Меня зовут Камиль, мне 23 года, я веб-разработчик.👨‍💻",
      "Верстаю на HTML5&CSS3, познаю  тонкости языка разметки.📝",
      "Программирую на JavaScript. Пишу стихи и рассказы, люблю активные виды отдыха.🚲",
    ]
  },
  getters: {
      TEXT_ABOUT_ME_GET (state) {
      return state.textAboutMe
    }
  },
}
