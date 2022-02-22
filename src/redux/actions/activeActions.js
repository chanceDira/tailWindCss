import React from 'react'
import {SET_ACTIVE} from '../constants/actionTypes'

// const setActive = (payload) => {
//     return { 
//         type: SET_ACTIVE,
//         payload 
//     }
// }

export const setActive = () => {
    return { 
        type: SET_ACTIVE,
    }
}

