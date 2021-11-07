import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { DeleteButton } from './style';
import {remove} from '../../services/products.js';
import { useToasts } from "react-toast-notifications";

export default function Delete(props){
    const history = useHistory();
    const {id} =props;
    const { addToast } = useToasts();
    
    
    async function productsDelete(){

        try {
            addToast('Deletando...', {
                appearance: 'success',
                autoDismissTimeout :3000,
                autoDismiss :true
              });
            await remove(id);
            
            history.push('/list');
            window.location.reload();
        
        } catch (error) {
            addToast('Erro ao deletar', {
                appearance: 'warning',
                autoDismissTimeout :3000,
                autoDismiss :true
              });
        }
    }

    return(
        <div>
            <DeleteButton onClick={productsDelete}>Deleta Produto</DeleteButton>
        </div>
    )
}