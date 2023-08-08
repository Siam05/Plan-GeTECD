import axios from 'axios';
import V1API from '../../../../api-path/api-path';

const state = {
    slider_images: [],
}

const getters = {}

const mutations = {
    SET_SLIDER_IMAGES (state, items) {
        state.slider_images = items
    }
}

const actions = {
    getSliderImages ({ commit }) {
        axios.get(V1API.get_slider_images).then(result => {
            let items = result.data.data
            console.log(items)
            commit('SET_SLIDER_IMAGES', items)
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}