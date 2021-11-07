import {edit} from '../../services/products'
import { useState } from 'react';
import {Input, Label, Button} from './style.js';
import { useToasts } from "react-toast-notifications";


export default function Edit(props){
    const { addToast } = useToasts();
    const [previousId, setPreviousId] = useState();
    const [data, setData] = useState({
        name:"",
        type:"",
        histories:"",
      });

    const productsEdit = async () =>{
        console.log(data, 'data')
         if(!previousId) {
           addToast('Digite algo no campo para editar', {
           appearance: 'warning',
           autoDismissTimeout :3000,
           autoDismiss :true
         });
         return;
         }
         await edit(previousId, data);
    }

    function handle(e){
        setPreviousId(props.location.state.idEdit.idEditar);
        const newData={...data}
        
        newData[e.target.name] = e.target.value;
        setData(newData);
      }

    return(
        <div>
            <h1>Editar</h1>
            <form>
                <Label for="name">Nome:</Label>
                <Input onChange={(e)=>handle(e)} value={data.name} id="name" name="name" type ="text" />
                <Label for="histories">Categoria:</Label>
                <Input onChange={(e)=>handle(e)} value={data.histories} id="histories" name="histories" type ="text" />
                <Label for="type">Nova url de imagem:</Label>
                <Input onChange={(e)=>handle(e)} value={data.type} id="type" name="type" type ="text" />
            </form>
            <Button onClick={productsEdit}>EDITE SEU PRODUTO</Button>
        </div>
    );
}
