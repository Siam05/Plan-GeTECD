import imgt1 from "../../../assets/stories/1.11.jpg";
import imgt2 from "../../../assets/stories/1.12.jpg";
import imgt3 from "../../../assets/stories/1.13.jpg";
import imgt4 from "../../../assets/stories/1.14.jpg";
import imgt5 from "../../../assets/stories/1.15.jpg";

import img1 from "../../../assets/stories/1.jpg";
import img2 from "../../../assets/stories/2.jpg";
import img3 from "../../../assets/stories/3.jpg";
import img4 from "../../../assets/stories/4.jpg";
import img5 from "../../../assets/stories/5.jpg";
import img6 from "../../../assets/stories/6.jpg";

// import axios from 'axios';
// import V1API from '../../../../api-path/api-path';

const state = {
    images: [
        {
            id: 1,
            image: imgt1
        },
        {
            id: 2,
            image: imgt2
        },
        {
            id: 3,
            image: imgt3
        },
        {
            id: 4,
            image: imgt4
        },
        {
            id: 5,
            image: imgt5
        }
    ],

    videos: [
        {
            id: 1,
            youTube: "https://youtu.be/CIaXycu8uqU",
            keyword: "CIaXycu8uqU",
            title: "Jackson and Michelle",
            duration: "1:12:20"
        },
        {
            id: 2,
            youTube: "https://youtu.be/T0u3xM63sBY",
            keyword: "T0u3xM63sBY",
            title: "Scott",
            duration: "22:11"
        },
        {
            id: 3,
            youTube: "https://youtu.be/bC6gEbzaxaA",
            keyword: "bC6gEbzaxaA",
            title: "Sonal",
            duration: "32:11"
        },
        {
            id: 4,
            youTube: "https://youtu.be/hZcCfEXj9ek",
            keyword: "hZcCfEXj9ek",
            title: "Paola",
            duration: "14:00"
        },
        {
            id: 5,
            youTube: "https://youtu.be/X5ix-noT3Fo",
            keyword: "X5ix-noT3Fo",
            title: "Caryn",
            duration: "8:33"
        }
    ],

    audios: [
        {
            id: 1,
            image: img1,
            title: "Eliminating Violence in and around Schools and other Educational Settings",
            duration: "1:12:20"
        },
        {
            id: 2,
            image: img2,
            title: "Using Data & Evidence to Understand the Gendered Dimensions of School Violence",
            duration: "22:11"
        },
        {
            id: 3,
            image: img3,
            title: "Techno girls: Creating STEM pathways for girls in South Africa",
            duration: "32:11"
        },
        {
            id: 4,
            image: img4,
            title: "Changing the face of STEM from Latin America to NASA",
            duration: "14:00"
        },
        {
            id: 5,
            image: img5,
            title: "Cartooning for Girls in STEM in Bangladesh",
            duration: "8:33"
        }
    ],

    stories: [
        {
            id: 1,
            image: img3,
            title: "Stopping child marriage through poetry",
            date: "25 Jan 2022"
        },
        {
            id: 2,
            image: img5,
            title: "Student task force identifies local disaster risks",
            date: "13 Jan 2021"
        },
        {
            id: 3,
            image: img1,
            title: "Health and gender equality strengthened in 5 countries",
            date: "25 Jan 2022"
        },
        {
            id: 4,
            image: img4,
            title: "Celebrating the birth of the girl-child!",
            date: "13 Jan 2021"
        },
        {
            id: 5,
            image: img2,
            title: "Meet the girls who escaped child marriage",
            date: "08 Dec 2021"
        },
        {
            id: 6,
            image: img6,
            title: "Celebrating the birth of the girl-child!",
            date: "08 Dec 2021"
        }
    ],

    gallery: [
        {
            id: 1,
            image: img2,
            title: "Eliminating Violence in and around Schools and other Educational Settings",
            duration: "1:12:20"
        },
        {
            id: 2,
            image: img4,
            title: "Using Data & Evidence to Understand the Gendered Dimensions of School Violence",
            duration: "22:11"
        },
        {
            id: 3,
            image: img3,
            title: "Techno girls: Creating STEM pathways for girls in South Africa",
            duration: "32:11"
        },
        {
            id: 4,
            image: img1,
            title: "Changing the face of STEM from Latin America to NASA",
            duration: "14:00"
        },
        {
            id: 5,
            image: img5,
            title: "Cartooning for Girls in STEM in Bangladesh",
            duration: "8:33"
        }
    ],

    // case_studies: [],
    // categories: [],
    // casesByCategory: [],
    // case_study: {},
}

const getters = {}

const mutations = {
    // SET_CASE_STUDIES (state, items) {
    //     state.case_studies = items
    // },

    // SET_CATEGORIES (state, items) {
    //     state.categories = items
    // },

    // SET_CASES_BY_CATEGORY (state, items) {
    //     state.casesByCategory = items
    // },

    // SET_CASE_DETAILS (state, items) {
    //     state.case_study= items
    // }
}

const actions = {
    // getCaseStudies ({ commit }) {
    //     axios.get(V1API.get_case_studies).then(result => {
    //         let items = result.data.data
    //         commit('SET_CASE_STUDIES', items)
    //     })
    // },

    // getCaseCategories ({ commit }) {
    //     axios.get(V1API.get_case_category).then(result => {
    //         let items = result.data.data
    //         commit('SET_CATEGORIES', items)
    //     })
    // },

    // getCasesByCategory ({ commit }, payload) {
    //     axios.get(V1API.get_cases_by_category + payload).then(result => {
    //         let items = result.data.data
    //         commit('SET_CASES_BY_CATEGORY', items)
    //     })
    // },

    // getCaseDetailsBySlug ({ commit }, payload) {
    //     console.log(V1API.get_case_studies_details + payload)
    //     axios.get(V1API.get_case_studies_details + payload).then(result => {
    //         let items = result.data.data
    //         commit('SET_CASE_DETAILS', items)
    //     })
    // },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}