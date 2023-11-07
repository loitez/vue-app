import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './assets/styles/styles.scss'
import router from './router'
import 'es6-promise/auto';
import vClickOutside from 'v-click-outside'




const store = createStore({
    state: {
        friends: [
            {
                id: 0,
                name: 'Alice',
                surname: 'Wood',
                img: '/images/Alice.jpeg',
                isOnline: true,
                isPinned: true,
                chat: [
                    {index: 0, sender: 'friend', text: 'Hello!', time: '7:26 am', date: '07.09.2023'},
                    {index: 1, sender: 'user', text: 'Hi, how r u?', time: '9:56 am', date: '07.09.2023'},
                    {index: 2, sender: 'friend', text: 'Great!', time: '10:04 am', date: '07.09.2023'},
                    {index: 3, sender: 'friend', text: 'What\'s new?', time: '10:04 am', date: '07.09.2023'},
                    {index: 4, sender: 'user', text: 'Um...', time: '10:08 am', date: '07.09.2023', type: 'read'}
                ] },
            {
                id: 1,
                name: 'Mark',
                surname: 'Smith',
                img: '/images/Mark.jpeg',
                isOnline: false,
                isPinned: false},
            {
                id: 2,
                name: 'Kate',
                surname: 'Rowling',
                img: '/images/Kate.jpeg',
                isOnline: true,
                isPinned: false},
            {
                id: 3,
                name: 'Sam',
                surname: 'Hemsworth',
                img: '/images/Sam.jpeg',
                isOnline: false,
                isPinned: true},
            {
                id: 4,
                name: 'Chris',
                surname: 'Brown',
                img: '/images/Chris.jpeg',
                isOnline: false,
                isPinned: true,
                chat: [
                    {index: 0, sender: 'user', text: 'Hi Chris!', time: '6:08 pm', date: '08.09.2023'},
                    {index: 1, sender: 'user', text: 'Call me', time: '6:08 pm', date: '08.09.2023'},
                    {index: 2, sender: 'friend', text: 'What\'s happened?!', time: '6:45 pm', date: '08.09.2023', type: 'new'},
                ]},
            {
                id: 5,
                name: 'Ann',
                surname: 'Holland',
                img: '/images/Ann.jpeg',
                isOnline: false,
                isPinned: false,
                chat: [
                    {index: 0, sender: 'friend', text: 'Heeey dear', time: '6:08 pm', date: '06.09.2023', type: 'new'},
                    {index: 1, sender: 'friend', text: 'W d u d 9pm friday?', time: '6:08 pm', date: '06.09.2023', type: 'new'},
                    ]},
        ],
        user: {
            name: 'Anastasia',
        },
        contextmenu:
            [
                { type:'message',
                    actions: [ {id:0, text:'Edit Message', func: 'editMessage'}, {id: 1, text:'Delete Message', func: 'deleteMessage'} ]
                },
                { type:'dialogue',
                    actions: [ {id:0, text:'Delete Dialogue', func: 'deleteDialogue'}, {id: 1, text:'Pin-Unpin Dialogue', func: 'togglePin'} ]
                }
            ]
    },
    actions: {
        togglePin({ commit }, index) {
            commit('togglePin', index);
        },
        deleteDialogue( { commit}, index) {
            commit('deleteDialogue', index)
        },
        addMessage( {commit}, inputData) {
            commit('addMessage', inputData)
        },
        editMessage( {commit}, inputData) {
            commit('editMessage', inputData)
        },
        deleteMessage( {commit}, inputData) {
            commit('deleteMessage', inputData)
        },
        readMessages({commit}, index) {
            commit('readMessages', index)
        }
    },

    mutations: {
        togglePin(state, index) {
            state.friends[index].isPinned = !state.friends[index].isPinned
        },
        deleteDialogue(state, index) {
            console.log('deleting..')
            console.log(index)
            state.friends = state.friends.filter((friend) => friend.id !== index)
        },
        addMessage(state, inputData) {
            if (!state.friends[inputData.index].chat) {
                state.friends[inputData.index].chat = []
            }
            state.friends[inputData.index].chat.push({...inputData.message})
           /* document.querySelectorAll('.message-itemWrapper')[inputData.message.index].scrollIntoView()*/
        },
        editMessage(state, inputData) {
            console.log(state, inputData)
        },
        deleteMessage(state, inputData) {
            state.friends[inputData.id].chat = state.friends[inputData.id].chat.filter((msg) => msg.index !== inputData.messageInd)
        },
        readMessages(state, index) {
            state.friends[index].chat?.forEach((item) => {
                if (item.type === 'new') {
                    item.type = ''
                }
            })
        }
    }
})

/*const App = new Vue({
    router
}).$mount('#app')*/

const app = createApp(App)


app.directive('longpress', {

    bind: function(el, binding, vNode) {



        // Убедитесь, что предоставленное выражение является функцией

        if (typeof binding.value !== 'function') {

            // Получаем имя компонента

            const compName = vNode.context.name;

            // Передаем предупреждение в консоль

            let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be `;

            if (compName) { warn += `Found in component '${compName}' `}



            console.warn(warn);

        }



        // определяем переменные

        let pressTimer = null;



        // Определяем обработчик функции

        // Создать таймер (выполнить функцию через 1 секунду)

        let start = (e) => {



            if (e.type === 'click' && e.button !== 0) {

                return;

            }



            if (pressTimer === null) {

                pressTimer = setTimeout(() => {

                    // выполняем функцию

                    handler();

                }, 1000)

            }

        }



        // отменить таймер

        let cancel = () => {



            // Проверяем, есть ли у таймера значение

            if ( pressTimer !== null ) {

                clearTimeout(pressTimer);

                pressTimer = null;

            }

        }



        // Запускаем функцию

        const handler = (e) => {

            // Выполняем метод, переданный в инструкцию

            binding.value(e)

        }



        // Добавляем слушателя событий

        el.addEventListener("mousedown", start);

        el.addEventListener("touchstart", start);



        // отменить таймер

        el.addEventListener("click", cancel);

        el.addEventListener("mouseout", cancel);

        el.addEventListener("touchend", cancel);

        el.addEventListener("touchcancel", cancel);

    }

})

app.use(store).use(router).use(vClickOutside).mount('#app')



