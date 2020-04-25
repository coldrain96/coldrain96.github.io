<template>
  <section class="projects" style="animation: fadeIn 2s;">
    <b-container>
      <h2 class="projects-title">Проекты</h2>
      <div v-masonry="containerId" transition-duration="0.3s" item-selector=".grid-item">
        <div v-masonry-tile class="item">

          <div class="card-item grid-item">
            <a href="#">
              <div class="card-item__front">
                <div class="img-wrap">
                  <img class="item-preview" src="~@/assets/img/preview/1st.jpg" alt="">
                </div>
                <div class="card-item__back">
                  <div class="description">
                    <span>✒️project name:<br/> 1st-admin</span>
                    <span>🛠️ stack:<br/> HTML5&SASS, Vue, Vue-cli, Bootstrap 4</span>
                    <span>display on 💻:<br/> true</span>
                    <span>display on 📱:<br/> true</span>
                    <span>💰 production:<br/> true</span>
                    <span>🖮 source code:<br/> protected</span>
                    <span>drunk cups of ☕:<br/> 30</span>
                    <span style="text-align: center">Total rate: 😎</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="card-item grid-item">
            <a href="#">
              <div class="card-item__front">
                <div class="img-wrap">
                  <img class="item-preview" src="~@/assets/img/preview/book-main-10-rows.jpg"
                       alt="">
                </div>
                <div class="card-item__back">
                  <div class="description">
                    <span>✒️project name:<br/> book-main</span>
                    <span>🛠️ stack:<br/>Flex, JQuery, HTML5&CSS3</span>
                    <span>display on 💻: true</span>
                    <span>display on 📱: false</span>
                    <span>💰 production: false</span>
                    <span>🖮 source code:<br/> protected</span>
                    <span>drunk cups of ☕:<br/> 3</span>
                    <span style="text-align: center">Total rate: 🌴</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="card-item grid-item">
            <a href="#">
              <div class="card-item__front">
                <div class="img-wrap">
                  <img class="item-preview" src="~@/assets/img/preview/uksivt.jpg" alt="">
                </div>
                <div class="card-item__back">
                  <div class="description">
                    <span>✒️project name:<br/> uksivt</span>
                    <span>🛠️ stack:<br/> HTML5&SASS, JQuery, Smartgrid, Gulp</span>
                    <span>display on 💻:<br/> true</span>
                    <span>display on 📱:<br/> false</span>
                    <span>💰 production:<br/> false</span>
                    <span>🖮 source code:<br/> protected</span>
                    <span>drunk cups of ☕:<br/> 10</span>
                    <span style="text-align: center">Total rate: 🎓</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="card-item grid-item">
            <a href="#">
              <div class="card-item__front">
                <div class="img-wrap">
                  <img class="item-preview" src="~@/assets/img/preview/nika.jpg" alt="">
                </div>
                <div class="card-item__back">
                  <div class="description">
                    <span>✒️project name:<br/> nika (Themeforest template)</span>
                    <span>🛠️ stack:<br/>HTML5&CSS3, </span>
                    <span>display on 💻:<br/> true</span>
                    <span>display on 📱:<br/> true</span>
                    <span>💰 production:<br/> true</span>
                    <span>🖮 source code:<br/> protected</span>
                    <span>drunk cups of ☕:<br/> 3</span>
                    <span style="text-align: center">Total rate: ⌚</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="card-item grid-item">
            <a href="#">
              <div class="card-item__front">
                <div class="img-wrap">
                  <img class="item-preview" src="~@/assets/img/preview/thenewprovidence.jpg" alt="">
                </div>
                <div class="card-item__back">
                  <div class="description">
                    <span>✒️project name:<br/> the new providence</span>
                    <span>🛠️ stack:<br/>Flex, HTML5&CSS3</span>
                    <span>display on 💻:<br/> true</span>
                    <span>display on 📱:<br/> false</span>
                    <span>💰 production:<br/> false</span>
                    <span>🖮 source code:<br/> public</span>
                    <span>drunk cups of ☕:<br/> 10</span>
                    <span style="text-align: center">Total rate: 😏</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="card-item grid-item">
            <a href="#">
              <div class="card-item__front">
                <div class="img-wrap">
                  <img class="item-preview" src="~@/assets/img/preview/my.jpg" alt="">
                </div>
                <div class="card-item__back">
                  <div class="description">
                    <span>✒️project name:<br/> my-projects (landing page)</span>
                    <span>🛠️ stack:<br/> Flex, JQuery, HTML5&CSS3</span>
                    <span>display on 💻:<br/> true</span>
                    <span>display on 📱:<br/> false</span>
                    <span>💰 production:<br/> false</span>
                    <span>🖮 source code:<br/> public</span>
                    <span>drunk cups of ☕:<br/> 10</span>
                    <span style="text-align: center">Total rate: 👏</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="card-item grid-item">
            <a href="#">
              <div class="card-item__front">
                <div class="img-wrap">
                  <img class="item-preview" src="~@/assets/img/preview/profstyle.jpg" alt="">
                </div>
                <div class="card-item__back">
                  <div class="description">
                    <span>✒️project name:<br/> profstyle</span>
                    <span>🛠️ stack:<br/> HTML5&SASS, Smartgrid, JQuery, Gulp</span>
                    <span>display on 💻:<br/> true</span>
                    <span>display on 📱:<br/> true</span>
                    <span>💰 production:<br/> true</span>
                    <span>🖮 source code:<br/> protected</span>
                    <span>drunk cups of ☕:<br/> 15</span>
                    <span style="text-align: center">Total rate: 👍</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
</script>
<style lang="scss" src="@/assets/scss/components/projects.scss" scoped></style>
