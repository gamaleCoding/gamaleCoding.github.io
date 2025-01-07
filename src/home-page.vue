<template>
  <!-- HEADER  -->
  <header>
    <div class="header">
      <div class="wrapper">
        <img class="logo" src="./components/icons/new-logo.svg" width="120" height="100" />
      </div>
      <nav class="nav">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#expertise">Expertise</a>
        <a href="#contact-us">Contact Us</a>
      </nav>
    </div>
  </header>

  <!-- SCROLL UP  -->
  <div>
    <button @click="scrollUp" v-if="showScrollButton" class="button">
      <svg class="svgIcon" viewBox="0 0 384 512">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        ></path>
      </svg>
    </button>
  </div>

  <body>
    <!-- HOME PAGE  -->
    <div id="home">
      <div class="home">
        <div class="home-text">
          <h1>Welcome to my <span class="portfolio">PORTFOLIO</span></h1>
          <p>
            Hello, I am <span class="my-name">TEOFREDO GAMALE JR</span> <br />
            and I am a <span ref="dynamicText" class="dynamic-text">Fullstack Web Developer</span>
          </p>
          <div class="home-social-media">
            <a href="https://www.facebook.com/Teofredo Gamale">
              <img
                class="home-facebook"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAppJREFUSEt9ljtoVFEQhr8BQUUtxEaiSBqLgCKWiiAWokHEiBai2CioWMguC2IhPhALIWFj4QMsbIQUoqD4qBQLsU4ZXyBKTGNhEVBYyZhz7tx7zz3n3Nxmd+fMmZl//n9mrxA/AmhoNEPzwzt4U+if+S5JPIudXE4qsQSZWhqmfKAq7XLgCLAfYRsqw4KqwjdgWuC1wlNgUENqVhIgSLCMAndBhuueZfoEX4BzwJtGzwLXDFauLbb3aqYrLSZZEPSiwkRCaYaD68CVNsgJu9ZjQR3hHZTbdRLxoMLnIPA8B8mcfgE9hHco3802DtKzNi6A7AZ9X5w1E6wGPgPrI5rw1cE/YAvwsTy34sdRekEn3PlWhIG7FCJwRN0riIpTeL1PoXLckjmHvQI7FfaB7IiEMAY88xiCeC+AA63ECpdRuWmBjoI8TtRVX34AnPEtCuZgVmCoKD4Lo4syaceOzP4SQzqtwnYHO2zRH2BFisA5eYX4BBa0A80E4cAK/FZYG5Es86CrGsULcyhD9WVL1qziLbAnQjOPsMaTHBx8AjZHCH4CG9rWiRH+A9gY3ZtBGKlVVGR5tCjTE5HjHBiCPPtuV/1tsuaDPQROlfby6jFgqhyQjEK6YCSD5yDJWe+fMS1lGjgtA74CmzJT4PiqVWQJQm58QUWCGWCkGsaIwFGFV3Fl5pMkqBVdMelUvgv4EE57HM8tqwuh0a53QSaDpVa0KJSPcAO1RWmHxRw0NeZ+3S8msTgM58ASd0D64U4RuKVwqSqs2rJBqZGWTyL0UdaZSxvJs8BZ4GUqkHLZRWNY88VKkNOghyn+Gu8YqPOoHAJ9AjhJDpqdql8GwlWRbqAllk21catW+HWSvJHkOMiPVAtZ5WZPJGtR/gPd/fIhgDTC7AAAAABJRU5ErkJggg=="
              />
            </a>
            <a href="https://www.instagram.com/Teofredo Gamale/">
              <img
                class="home-instagram"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAApxJREFUSEudlj9oVEEQxn+TKCKCKEEECxsjQZL4h8TytLJUUqggaGOpKGghFiKIhYUgCrGyjaiFSKzERo5rRJsYQhBCioCVaYQoiLk43u7b997s3r4UXnPvZufNfN/MNzsnAijFxz4HU21tcvT2zGEwua+myMFuPHOBQgBB4zwG9Kb4aybmKUO1z1TiyjOXA6A3gRYwJiBFGfvYOPMC0AEeA0uxT/ErZXAlOG/tO0noJODWFa4Cz6yb1E7+aQL4BAz0Ac40q+5vFaULMgn6pSKb1O4NMJXSjBDFovkOjIOcE3Q6qPF1r2xniwQSSlRnWQH2Z2T1DeEBKouCDimMALcFVtQnYFLgc+jTMuiwLa/twU9gR5LgvUcEa8Ce4LwKMiroO4VfvZ7tEtgbEqyB7swk8HXfiBorrKIcFBhVuAicDHPZBpkBHQwKslXsApFAykNn/JOM80PglsBTBacucyzToNeAtyCnzX2wAbqlAmom3RnXI6nDZZBZQdsKY8nQzwscUbjby3vPiOwvMGjjlLBcLndoBel0/bJXmg/A4WQM5oBjwB2Q+55BrPkqjlWllhdfCDYDXAKeANcTBm5ybyDMopwxlTA9KGVao64SBDCO0VFgO3ABOBFgtVF5Ieg2FToJ+N+gzt8wqLkHmUZsV0CnEOaqe714tQXqyrcvlrX8AN3dlGAJGM4MmmPiJnQRGEIYQeVUrZyoO1+BQ7GK6vNXvSDnk1o3LKLGdfGcYma8qM1t6i3HET6iMtCHbtMd4AL5hdNFZQJ0PlOiKsJ/Xdd+hnLXdaLtsvfFwhFaqIzna+1RqwoLKB2BRwrLcXkFsw/iCasTB/p5JJklFztGS79pr9pX7LD6umcSR5vO/uvIJ8hv7aoUNkA1WnXaf6TD/B1vVHZDAAAAAElFTkSuQmCC"
              />
            </a>
            <a href="https://www.twitter.com/Teofredo Gamale/">
              <img
                class="home-twitter"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAkhJREFUSEuNlc+LTlEYxz8PUxRZsVDEKEkhyYolKVKDNNGUBQvJnoj8AWwsRrORpmYzGwulLGyk2UyjiIUVeUuUrKT8qsc995z33ufcc85737u5p3PP85zn+f54rgig+Meuw1ZxtzmdCermzKQvR7VfejKHkt2p5il1M05nycVhI7qgxSmfslvJOAWZC+rj64CfPS1tqA7eATkp6KQKf1FmgZvAZpApQWc1UCumitXAO4RpVN6OoP45cKQrCoGBCltRzgOLwyItRNuBj8A3kNOgS5afsD4AvErl1pS5ArwAFhBeO3naDtYK/FBhIuj2IcJtlC+myxmBBa03sjw5eK8C874IqV9WpksIhxpjeNZfgj4BloH9AvdT3zSXPQIudpU59Mx6YBfwDNiYKKRHWCHpXeBaajS/swX4hPC9UsWmBH+ja9+Ba18bpMJnB88Di4qHyH9dBXwAtmXIjd3e4KsxmrAb5H2rQJ/aBp9BWESZyHcwEienwB3duJyTp1FuAXujqzNttWKqV1cQ5rxy2s7SC+AE8LQ0W+w4MRwMBHYq/Ek6KMyT+YqPC2nRCdPuyD/gcC3jTDJrNJ+vJXwPwg1UzlnSOhpXFS6hOP03XKYQxc50A++gwHWF4/GPJcL3FzADPB6lOsvBUeBeFbAv9FH6xbl8zoyXK9cOhrDYGqN1h0w3is8Cp4BjwBqQ36Bfgc+Am6Su4jc5OQ5HSARjeW71/45L0KSjIvZpJy42V0F1UUx0pj9gvClXcn7OaEkHreziAWdkXRTSf5nV0h6R7OW7AAAAAElFTkSuQmCC"
              />
            </a>
            <a href="https://www.youtube.com/@croksvibes/">
              <img
                class="home-youtube"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhhJREFUSEudlb9qVUEQxn+TpFCiQTQggpLCQLCwuGks7WwEC1/AQrBQXyIkrY2QShBfwVewU0HRxj+FhYiFChKSQpDr5Oye3buzf07uiae7s7Pzzcz3fXsF9wmggqCoDwx/IZW5iaGEy//vz4M1btt4D1BGtBkqSuXlhyY79gSpbGOldtUhsQYYmnv0IgNwBLMdgV5A2EZlHfQicHlWt1rjLOBo+AD8BD6BbIF+7+85sMTBBvAaOJ0zMK51w8EesAl8SQB9jWfAnSjZ+fowOqyl9BS4G3uPLb4BJoP9jubGc/BK4ZqfwIz2CziXAaSirsebwGNgPeZUmCnwFVjzE5ikqcBCP2119R+wCCwBD3shcCo1YzTZF/jdNXM2rUhYRjmwZimM464tzICFVVR2OrXc67uxnvA39xFWnM2jD1xnf4/QyzR0H1NWu987QAConP9H4WRJcq2FtKkpwhLqV3S/63oLOFO5OgV+AOdLgANguTWFwFThdueRR5bkNgce5SPClf6FTpw65i8lB6o793Yo3J4boHK4P34BXC8neA7cigCV0SxYBWzn9odPAj8zkp0Yrgr6MpLTJrzhtnZoU4W35Yoc2kThAfAtANwAmQh6ovHH4mT9Xq36hM8ou8A7a8bGTvMdtB079HbUdxvbKN508189p2x4onOB5ABtVTRyxrEendx+gcZtobKDLZYBlAfZw3dcT4Rih5XoxSBBAVJYAAAAAElFTkSuQmCC"
              />
            </a>
            <a href="https://www.github.com/gamaleCoding">
              <img
                class="home-github"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAuxJREFUSEuNlk2ITlEYx3+PTDYjCyRZooyPKZKFmiJK2BjKR4oS8pWaZHzUNJoYjSmNxAg7YkrMbMxuLCyYEtH4KpKFhY9kMZNiMo97zj3nvefc917jLt7e97nPOf//+T//5zmvUHkEQdEsAAJxoPxllhouEqRqDxso2/mfiI5QnGN+FTyVpBqQDaBrgUUgcy268BGVF4L2K9wFRotPkGLGyFnmaoRulDnFJCrRD8BegYFqeQ2XCkAk+TGBs5arhvFS6cZAjwOdMRkPEKJAM9CRlaKg+OVHagK68lYIKa4EBoxoAkbfXcB+oAWYALw3eiPUoYwB7QiXUbkIuglsrEHgkZcrLPIk4BUw26nWptDq0E0dvoAMO9/WAjOBd47tSeCM+/4aqE9I/TFrU5umH1tAe9IkG+hCaPrPxjgHHA2kWY/Q7+vnJbqZMNoeJC0HHueLVtV5ad3rBZ47P5gllxAOpY7OHiPPfH9MgQVRv8UNmuE4CQR9qrDEsX2SnGBZdoJ0168J8nQnUR9oo8cev69txi1gm1vzHZjmxfb7fAZmOIAHoKuK3Fg8Wizv+yqsS2XREYXJFiBY8AxY7AbcMDAVYdQtKJ95KYsa4BswxZF6C9RlJ0hRrgnsDtp9D3C9vKeizje5VwMH3gB25CUymt9D+IEy4nxu2r9b4GfYOM7WRopaFQ6itLtGtBYXdLMKd2yRgykooMZJsxJ7rgH2IexE5TdoP7AV+OVOZCTpdXkT44tD3oAuRBjL2dRCbUzGshm/nwSWqtCDygrQ7sRlB3I30G0LWm2xRoG+olHh5b4AchjUzJ/T+RoE+51KGLV6ABc/DxwJ76xgVLit0rctoG3AQ5Ah0JfAlVxXtzkSXvdmFTort6FDjK7MXLM2qNCFmu6kAzAFD4xCu8AJhUGgSWAwlSUe79GFkzH08MYQ9so0Y3rI287pO896XegtH4jRNA0FiM8S/tso6+SyfgmGXYW1HWTjz5+CnHgLi/kXepsCL7YL4FkAAAAASUVORK5CYII="
              />
            </a>
            <a href="https://steamcommunity.com">
              <img
                class="home-steam"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAuZJREFUSEuNlktIFlEUx39n0YMkaFkuSrKNibSwKHpgBn0hRLSJkJIwCILMbJVFSA+EgoIeiFEIBQmFLXpsDIL6JAqhggqyZQRW0GNjLes0d+bOzL13RmsW3zePM/f8z///P+eOYA4BNP6JL7Nb2VUaM+ON0nclX9sm8P/+M5mb2D83y9kKpguSzaDrEJpRVgN/gOfAC6AKPPUXEATNuEgqKKdlKXAd2FAA4bNZBTkE+toj12GiBLocAT0FzJ5Jj0C6AYQugzYEHeLfDzIY11Wihw02NH0AviE0otTY0F7grJcgQLECYRyVOW6CvMSY31EVOlG+ONTtAQaBuZEurQJVl/b0/fnAG4S6sEzHyl9B6xAqKBXgZ0KjnADtAk4D48Aa1+7p+T7galEQr+CBqGFOApeAdvukHqQH9JylzTBbq/A51S/legjY6ylU9HCHXaQZuOg8vgEYmlJmuoHLcYIcn7wTtCHv5UKHG89vFFikcAHYad9dBlIBvQtMGrSCjqnQElPtJDgM2gMsDntR0CkVGlAmbbyhaRPwGOEHKtdAdyNcsfp9VGGJGT9eo1nMW0EOgG5xbNquwq1S8RM0nZaSGgvuFWBojJfwh13u2/oIYUtExYR1y9sgtC0aG31AE5AsnNMxGtm9LQUUMhLOjnlAP/ALOG672zjmYGHM5OBuAh2xHk5QRWC7JupP+OMmxjAAch70PtAY2jmI3wHcySlK6pN4YAlNURM9s5b9hDJly3+I8h7ontbKSZaXAisTNxpHZUf8dBtwz2YeURgFaQQ18SPAsEC9tze58yqhqBX0SUknZ0UeA+m3QgyBPBC0VoU+lIWF3vO5ORrNozMufd6G4ww+w+FwJO4s2zjOZlq6fSqosarp6OSwi3kJAsuuN6MXWOvSmO9WGfTfwC7gdlEbr5NDX2RIlyeWY5VtngUIEyhjtpMfoXwvWDYVuWDHksgSy/5rI/c2q+kbzaWzoG7Jt0LRUfwFJZUMLp1IpCkAAAAASUVORK5CYII="
              />
            </a>
          </div>
        </div>
        <div>
          <img class="home-picture" src="./components/icons/teo.jpg" width="500" height="500" />
        </div>
      </div>
    </div>

    <!-- ABOUT ME  -->
    <div id="about">
      <div class="about">
        <div class="about-text">
          <div>
            <img class="about-picture" src="./components/icons/teo.jpg" width="400" height="400" />
          </div>
          <div class="about-me-text">
            <h1>About Me</h1>
            <p>
              As a <span>fullstack web developer</span>, I am passionate about learning and growing
              in all areas of web development. I work on both the front-end and back-end, constantly
              exploring new technologies to improve my skills. I strive to build user-friendly
              interfaces and efficient back-end systems, always looking for ways to enhance
              performance and deliver value. I am committed to growing through challenges and
              learning from others, aiming to create meaningful and effective solutions that can
              positively impact both users and businesses. hello world
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- PROJECTS  -->
    <div id="projects">
      <div class="projects">
        <div class="projects-text">
          <h1>Projects</h1>
          <p>Here are some of the <span>projects</span> I have worked on.</p>
        </div>
        <div class="projects-card">
          <!-- first card  -->
          <div class="card">
            <div class="card-details">
              <p class="text-title">GIFT CHECK MONITORING SYSTEM</p>
            </div>
          </div>

          <!-- second card  -->
          <div class="card">
            <div class="card-details">
              <p class="text-title">
                LIBRARY MANAGEMENT SYSTEM USING BARCODE SCANNER IN BISU BILAR
              </p>
            </div>
          </div>

          <!-- third card  -->
          <div class="card">
            <div class="card-details">
              <p class="text-title">COMING SOON</p>
            </div>
          </div>

          <!-- forth card  -->
          <div class="card">
            <div class="card-details">
              <p class="text-title">COMING SOON</p>
            </div>
          </div>

          <!-- fifth card  -->
          <div class="card">
            <div class="card-details">
              <p class="text-title">COMING SOON</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- EXPERTISE  -->
    <div id="expertise">
      <div class="expertise">
        <div class="expertise-text">
          <h1>Expertise</h1>
          <p>Here are some of my <span>expertise</span> in web development.</p>
          <div class="frontend">
            <h2>Frontend Tools</h2>
            <ul class="frontend-tech">
              <ul>
                <img src="./assets/icons/html.png" width="70" height="70" />
                HTML
              </ul>
              <ul>
                <img src="./assets/icons/css.png" width="70" height="70" />
                CSS
              </ul>
              <ul>
                <img src="./assets/icons/javascript.png" width="70" height="70" />
                JavaScript
              </ul>
              <ul>
                <img src="./assets/icons/vue.png" width="70" height="70" />
                Vue
              </ul>
              <ul>
                <img src="./assets/icons/bootstrap.png" width="70" height="70" />
                Bootstrap
              </ul>
              <ul>
                <img src="./assets/icons/tailwind.png" width="70" height="70" />
                Tailwind CSS
              </ul>
            </ul>
          </div>
          <div class="backend">
            <h2>Backend Tools</h2>
            <ul class="backend-tech">
              <ul>
                <img src="./assets/icons/laravel.png" width="70" height="70" />
                Laravel 11
              </ul>
              <ul>
                <img src="./assets/icons/sql.png" width="70" height="70" />
                MySQL
              </ul>
              <ul>
                <img src="./assets/icons/nginx.png" width="70" height="70" />
                Nginx
              </ul>
              <ul>
                <img src="./assets/icons/postgresql.png" width="70" height="70" />
                Postgresql
              </ul>
              <ul>
                <img src="./assets/icons/php.png" width="70" height="70" />
                Php
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- CONTACT US  -->
    <div id="contact-us">
      <div class="contact-us">
        <div class="contact-us-text">
          <h2>Contact Us</h2>
          <p>Here are all of my personal contacts. You can message me in any of the list below</p>
          <div class="contact-icons">
            <ul>
              <a class="facebook">
                <img src="./assets/icons/facebook.png" width="50" height="50" />
              </a>
              <a href="https://www.facebook.com/Teofredo Gamale">Teofredo Gamale</a>

              <a class="gmail">
                <img src="./assets/icons/gmail.png" width="50" height="50" />
              </a>
              <a href="https://www.gmail.com/">teofredogamale@gmail.com</a>

              <a class="instagram">
                <img src="./assets/icons/instagram.png" width="50" height="50" />
              </a>
              <a href="https://www.instagram.com/">Teofredo Gamale</a>

              <a class="github">
                <img src="./assets/icons/github.png" width="50" height="50" />
              </a>
              <a href="https://www.github.com/">gamaleCoding</a>

              <a class="phone">
                <img src="./assets/icons/phone.png" width="50" height="50" />
                <a>09462348906 </a>
                <a>09539438123</a>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER  -->
    <div class="footer">
      <div class="footer-text">
        <h2>Copyright © 2025 Teofredo Gamale Jr. All Rights Reserved. - Legal notice - FAQ</h2>
        <p>
          This portfolio serves as my professional showcase, highlighting my skills, experience, and
          accomplishments as a <span>fullstack web developer</span>. It reflects my dedication to
          creating intuitive and user-friendly interfaces while leveraging the power of data to
          deliver impactful solutions. Through this platform, I aim to connect with like-minded
          professionals, demonstrate my expertise, and invite opportunities for collaboration or
          employment.
        </p>
      </div>
    </div>
  </body>
</template>

<script setup>
import { onUnmounted, ref } from 'vue'
import { onMounted } from 'vue'
import { typewriterEffect } from "@/dynamic-text.js";

 const dynamicText = ref(null);
    const textArray = ["FULLSTACK WEB DEVELOPER", "HANDSOME PROGRAMMER"];

    onMounted(() => {
      if (dynamicText.value) {
        typewriterEffect(dynamicText.value, textArray);
      }
    });

const showScrollButton = ref(false)
const handleScroll = () => {
  showScrollButton.value = window.scrollY > 600
}
const scrollUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

import './assets/header.css'
import './assets/home.css'
import './assets/about-me.css'
import './assets/projects.css'
import './assets/expertise.css'
import './assets/contact-us.css'
import './assets/footer.css'
</script>
