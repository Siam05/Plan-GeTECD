import axios from 'axios';
import V1API from '../../../../api-path/api-path';

const state = {
    site_settings: []
}

const getters = {}

const mutations = {
    SET_SITE_SETTINGS (state, items) {
        state.site_settings = items
    },
}

const actions = {
    getSiteSettings ({ commit }) {
        axios.get(V1API.get_site_settings).then(result => {
            let items = result.data.data
            // console.log("About Us",items)
            commit('SET_SITE_SETTINGS', items)
        })
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}