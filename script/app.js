const App = {
    data() {
        return {
            person: {
                firstName: 'Никита',
                lastName: 'Пребышевский',
                telephone: '+7 (921) 291 79 71',
                email: 'i@legathunter.ru',
                age: 33,
                nickName: 'LegatHunter',
                address: 'РФ, Архангельск',
                urlVk: 'https://vk.com/j_flo',
                urlTelegram: 'https://t.me/legathunter',
                urlGithub: 'https://github.com/LegatHunter',
                urlLinkedin: 'https://www.linkedin.com/in/%D0%BD%D0%B8%D0%BA%D0%B8%D1%82%D0%B0-%D0%BF%D1%80%D0%B5%D0%B1%D1%8B%D1%88%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-50b54984',
                urlMailto: 'mailto:i@legathunter.ru?subject=Привет&body=Мы%20хотим%20предложить%20тебе%20очень%20высокооплачиваемую%20работу!)))',
            },

        };
    },
}

const app = Vue.createApp(App).mount("#app")


