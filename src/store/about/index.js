export default {
  state: {
    textArray: [
      "Привет!👋", "Меня зовут Камиль, мне 23 года, я веб-разработчик.👨‍💻",
      "Верстаю на HTML5&CSS3, познаю  тонкости языка разметки.📝",
      "Программирую на JavaScript. Пишу стихи и рассказы, люблю активные виды отдыха.🚲",
    ]
  },
  getters: {
    aboutMeTextMessageArray(state) {
      return state.textArray
    }
  },
}
