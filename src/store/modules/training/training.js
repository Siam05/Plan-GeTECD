import img1 from "../../../assets/stories/1.jpg";
import img2 from "../../../assets/stories/2.jpg";
import img3 from "../../../assets/stories/3.jpg";
import img4 from "../../../assets/stories/4.jpg";
import img5 from "../../../assets/stories/5.jpg";
import img6 from "../../../assets/stories/6.jpg";

// import imgp1 from "../../../assets/training/par1.jpg";
// import imgp2 from "../../../assets/training/par2.jpg";
// import imgp3 from "../../../assets/training/par3.jpg";
// import imgp4 from "../../../assets/training/par4.jpg";
// import imgp5 from "../../../assets/training/par5.jpg";

// import imgs1 from "../../../assets/training/sbk1.jpg";
// import imgs2 from "../../../assets/training/sbk2.jpeg";
// import imgs3 from "../../../assets/training/sbk3.jpg";
// import imgs4 from "../../../assets/training/sbk4.jpg";
// import imgs5 from "../../../assets/training/sbk5.jpg";
// import imgs6 from "../../../assets/training/sbk6.jpg";

// import imgt1 from "../../../assets/training/tea1.jpg";
// import imgt2 from "../../../assets/training/tea2.jpg";
// import imgt3 from "../../../assets/training/tea3.jpg";
// import imgt4 from "../../../assets/training/tea4.jpg";
// import imgt5 from "../../../assets/training/tea5.jpg";

// import img1 from "../../../assets/training/1.jpg";
// import img2 from "../../../assets/training/2.jpg";
// import img3 from "../../../assets/training/3.jpg";
// import img4 from "../../../assets/training/4.jpg";
// import img5 from "../../../assets/training/5.jpg";
// import img6 from "../../../assets/training/6.jpg";

// import axios from 'axios';
// import V1API from '../../../../api-path/api-path';

const state = {
    parents: [
        {
            id: 1,
            image: img1,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
        {
            id: 2,
            image: img2,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
        {
            id: 3,
            image: img3,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
        {
            id: 4,
            image: img4,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
        {
            id: 5,
            image: img5,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        }
    ],

    sbks: [
        {
            id: 1,
            image: img4,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
        {
            id: 2,
            image: img3,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
        {
            id: 3,
            image: img1,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
        {
            id: 4,
            image: img2,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
        {
            id: 5,
            image: img6,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
        {
            id: 6,
            image: img5,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
    ],

    teachers: [
        {
            id: 1,
            image: img4,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
        {
            id: 2,
            image: img2,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
        {
            id: 3,
            image: img5,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
        {
            id: 4,
            image: img1,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        },
        {
            id: 5,
            image: img3,
            title: "Learning Brief: Ending Gender Stereotypes in Schools"
        }
    ],

    blogs: [
        {
            id: 1,
            image: img1,
            title: "Learning Brief: Ending Gender achieving...",
        },
        {
            id: 2,
            image: img2,
            title: "School-related gender-based violence: achieving...",
        },
        {
            id: 3,
            image: img3,
            title: "Independent Evaluation of the Girls’ Education...",
        },
        {
            id: 4,
            image: img4,
            title: "Gender at the Center Initiative Advocacy Brief...",
        },
        {
            id: 5,
            image: img5,
            title: "Asia-Pacific Learning Symposium of the Global...",
        },
        {
            id: 6,
            image: img6,
            title: "Gender at the Center Initiative (GCI) Report on ...",
        },
    ],

    // reviews: [],
}

const getters = {}

const mutations = {
    // SET_REVIEWS_LIST (state, items) {
    //     state.reviews = items
    // },
}

const actions = {
    // getReviewsList ({ commit }) {
    //     axios.get(V1API.get_reviews_list).then(result => {
    //         let items = result.data.data
    //         console.log(items)
    //         commit('SET_REVIEWS_LIST', items)
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