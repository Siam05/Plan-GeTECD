import axios from 'axios';
import V1API from '../../../../api-path/api-path';

const state = {
    contact: {},
}

const getters = {}

const mutations = {
    SET_CONTACT (state, item) {
        state.contact = item
    }
}

const actions = {
    async createContact ({ commit }, payload) {
        let response = await axios.post(V1API.create_contact_message, payload).then(result => {
            let item = result.data
            commit('SET_CONTACT', item)
            return result
        })
        return response
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}