/* eslint-disable default-case */

import { getAll } from "../../services/products";

const lista = {};
const initialSatate =[
    ...lista
]

async function getData() {
    let res;
    return  res = await getAll();
    
  }

const listReducer = (state =  initialSatate, action)=>{
    switch (action.type){
        case "ADD_ITEM":
            return[...state, action.item];
        case "REMOVE_ITEM":
            return state.filter(item=>item.id !== action.id);
        case "LIST_ITEM":
            return[...state, getData()]
        default:
            return state;
    }

}

export default listReducer;