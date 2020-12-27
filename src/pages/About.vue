<template>
    <AboutComponent
      :abouts="aboutsList"
    />
</template>

<script>
  import AboutComponent from '@/components/AboutComponent'

  export default {
    components: {
      AboutComponent
    },
    data: () => ({
      aboutsList: [
        "Привет!👋", "Меня зовут Камиль, мне 24 года, я frontend-разработчик.👨‍💻",
        "Верстаю на HTML5&CSS3, познаю  тонкости языка разметки.📝",
        "Программирую на Vue.js и JavaScript.",
        "Иногда пишу стихи и рассказы, люблю активные виды отдыха.🚲",
      ]
    })
  }
</script>
