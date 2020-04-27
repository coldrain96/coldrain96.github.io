export default {
  state: {
    arrayOfProjects: [
      {
        name: 'IT company web-site',
        href: '#',
        previewImgSrc: './preview/1.jpg',
        description: {
          "✒️project name:": 'IT company web-site',
          "🛠️ stack:": 'HTML5&SASS, Vue, Vue-cli, Bootstrap 4',
          "display on 💻:": 'true',
          "display on 📱:": 'true',
          "💰 production:": 'true',
          "drunk cups of ☕:": '30',
          "Total rate:": '😎',
        }
      },
      {
        name: 'Store of books web-site',
        href: '#',
        previewImgSrc: './preview/2.jpg',
        description: {
          "✒️project name:": 'Store of books web-site',
          "🛠️ stack:": 'Flex, JQuery, HTML5&CSS3',
          "display on 💻:": 'true',
          "display on 📱:": 'false',
          "💰 production:": 'false',
          "drunk cups of ☕:": '3',
          "Total rate:": '🌴',
        }
      },
      {
        name: 'Technical college web-site',
        href: '#',
        previewImgSrc: './preview/8.jpg',
        description: {
          "✒️project name:": 'Technical college web-site',
          "🛠️ stack:": 'HTML5&SASS, JQuery, Smartgrid, Gulp',
          "display on 💻:": 'true',
          "display on 📱:": 'false',
          "💰 production:": 'false',
          "drunk cups of ☕:": '10',
          "Total rate:": '🎓',
        }
      },
      {
        name: 'Jewelery & clocks web-site',
        href: '#',
        previewImgSrc: './preview/4.jpg',
        description: {
          "✒️project name:": 'Jewelery & clocks web-site (Themeforest template adaptation)',
          "🛠️ stack:": 'HTML5&CSS3',
          "display on 💻:": 'true',
          "display on 📱:": 'true',
          "💰 production:": 'true',
          "drunk cups of ☕:": '3',
          "Total rate:": '⌚',
        }
      },
      {
        name: 'The New Providence',
        href: '#',
        previewImgSrc: './preview/7.jpg',
        description: {
          "✒️project name:": '"The New Providence" template',
          "🛠️ stack:": 'Flex, HTML5&CSS3',
          "display on 💻:": 'true',
          "display on 📱:": 'false',
          "💰 production:": 'false',
          "drunk cups of ☕:": '10',
          "Total rate:": '😏',
        }
      },
      {
        name: 'Medical equipment web-site',
        href: '#',
        previewImgSrc: './preview/5.jpg',
        description: {
          "✒️project name:": 'Medical equipment web-site',
          "🛠️ stack:": 'HTML5&SASS, Smartgrid, JQuery, Gulp',
          "display on 💻:": 'true',
          "display on 📱:": 'true',
          "💰 production:": 'true',
          "drunk cups of ☕:": '15',
          "Total rate:": '👍',
        }
      },
    ],
  },
  getters: {
    getArrayOfAllProjects: (state) => {
      return state.arrayOfProjects
    },
  },
}
