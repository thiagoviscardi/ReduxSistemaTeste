import axios from 'axios';

export function getAll(){
    return (axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
    .then((res=>{ 
        return res.data;
    }))
    );
}

export function remove(id){

    return (axios.delete(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`)
    .then((res=>{
        return res.data
    }))
    );
}

export function edit(id, data){

    return (axios.put(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`,
    {name:data.name, type:data.type, histories:data.histories})
    .then((res=>{
        return res.data
    }))
    );
}