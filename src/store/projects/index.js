export default {
  state: {
    arrayOfProjects: [
      {
        name: '1st-admin',
        href: '#',
        previewImgSrc: './preview/1st.jpg',
        description: {
          "✒️project name:": '1st-admin',
          "🛠️ stack:": 'HTML5&SASS, Vue, Vue-cli, Bootstrap 4',
          "display on 💻:": 'true',
          "display on 📱:": 'true',
          "💰 production:": 'true',
          "🖮 source code:": 'protected',
          "drunk cups of ☕:": '30',
          "Total rate:": '😎',
        }
      },
      {
        name: 'book-main',
        href: '#',
        previewImgSrc: './preview/book-main-10-rows.jpg',
        description: {
          "✒️project name:": 'book-main',
          "🛠️ stack:": 'Flex, JQuery, HTML5&CSS3',
          "display on 💻:": 'true',
          "display on 📱:": 'false',
          "💰 production:": 'false',
          "🖮 source code:": 'protected',
          "drunk cups of ☕:": '3',
          "Total rate:": '🌴',
        }
      },
      {
        name: 'uksivt',
        href: '#',
        previewImgSrc: './preview/uksivt.jpg',
        description: {
          "✒️project name:": 'uksivt',
          "🛠️ stack:": 'HTML5&SASS, JQuery, Smartgrid, Gulp',
          "display on 💻:": 'true',
          "display on 📱:": 'false',
          "💰 production:": 'false',
          "🖮 source code:": 'protected',
          "drunk cups of ☕:": '10',
          "Total rate:": '🎓',
        }
      },
      {
        name: 'nika',
        href: '#',
        previewImgSrc: './preview/nika.jpg',
        description: {
          "✒️project name:": 'nika (Themeforest template)',
          "🛠️ stack:": 'HTML5&CSS3',
          "display on 💻:": 'true',
          "display on 📱:": 'true',
          "💰 production:": 'true',
          "🖮 source code:": 'protected',
          "drunk cups of ☕:": '3',
          "Total rate:": '⌚',
        }
      },
      {
        name: 'the new providence',
        href: '#',
        previewImgSrc: './preview/thenewprovidence.jpg',
        description: {
          "✒️project name:": 'the new providence',
          "🛠️ stack:": 'Flex, HTML5&CSS3',
          "display on 💻:": 'true',
          "display on 📱:": 'false',
          "💰 production:": 'false',
          "🖮 source code:": 'public',
          "drunk cups of ☕:": '10',
          "Total rate:": '😏',
        }
      },
      {
        name: 'my-projects',
        href: '#',
        previewImgSrc: './preview/my.jpg',
        description: {
          "✒️project name:": 'my-projects (landing page)',
          "🛠️ stack:": 'Flex, JQuery, HTML5&CSS3',
          "display on 💻:": 'true',
          "display on 📱:": 'false',
          "💰 production:": 'false',
          "🖮 source code:": 'public',
          "drunk cups of ☕:": '10',
          "Total rate:": '👏',
        }
      },
      {
        name: 'profstyle',
        href: '#',
        previewImgSrc: './preview/profstyle.jpg',
        description: {
          "✒️project name:": 'profstyle',
          "🛠️ stack:": 'HTML5&SASS, Smartgrid, JQuery, Gulp',
          "display on 💻:": 'true',
          "display on 📱:": 'true',
          "💰 production:": 'true',
          "🖮 source code:": 'protected',
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
