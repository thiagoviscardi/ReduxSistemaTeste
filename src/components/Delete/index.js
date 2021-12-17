import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {remove} from '../../services/products.js';
import { useToasts } from "react-toast-notifications";
import Button from '@material-ui/core/Button';

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
            <Button style={{width:'100%'}}  variant="contained" color="primary" onClick={productsDelete}>Deleta Produto</Button>
        </div>
    )
}