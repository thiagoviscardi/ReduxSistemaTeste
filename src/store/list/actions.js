export const addItem = (item) =>{
    return{
        type : "ADD_ITEM",
        item
    }
}

export const removeItem = (id) =>{
    return{
        type: "REMOVE_ITEM",
        id
    }
}

export const listItem = () =>{
    return{
        type: "LIST_ITEM",
    }
}