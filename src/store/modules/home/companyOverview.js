import axios from 'axios';
import V1API from '../../../../api-path/api-path';

const state = {
    comapnyOverviews: [],
}

const getters = {}

const mutations = {
    SET_COMPANY_OVERVIEW (state, items) {
        state.comapnyOverviews = items
    },
}

const actions = {
    getCompanyOverview ({ commit }) {
        axios.get(V1API.get_company_overview).then(result => {
            let items = result.data.data
            commit('SET_COMPANY_OVERVIEW', items)
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