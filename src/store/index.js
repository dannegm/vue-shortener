import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const client = axios.create ({
    baseURL: 'http://s.dnn.one/',
});

export default new Vuex.Store({
    state: {
        items: [],
    },
    mutations: {
        storeUrls (state, items) {
            state.items = items
        }
    },
    actions: {
        async getUrls ({ commit }, item) {
            try {
                const { data } = await client.get('/urls')
                commit('storeUrls', data.data)
            } catch (e) {
                throw e
            }
        }
    },
    getters: {
        mappedItems (state) {
            return state.items
                .map(item => ({
                    ...item,
                    title: item.ogTags.ogTitle || item.url,
                    href: item.url,
                    description: item.ogTags.ogDescription || '',
                    createdAt: item.created_at,
                }))
                .sort((a, b) => {
                    const aTime = (new Date(a.created_at)).getTime ()
                    const bTime = (new Date(b.created_at)).getTime ()
                    return bTime - aTime
                })
        }
    },
})
