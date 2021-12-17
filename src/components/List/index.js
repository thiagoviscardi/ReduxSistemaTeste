import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ProdContainer,
  Table,
  Column,
} from "./style.js";
import { getAll } from "../../services/products.js";
import Delete from "../Delete/index.js";
import { useDispatch, useSelector } from "react-redux";
import { listItem } from "../../store/list/actions.js";
// import { Lista } from "../../interfaces/index.ts";
import Button from '@material-ui/core/Button';
import {Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText} from '@material-ui/core';
import Grid from '@material-ui/core/Button';

export default function List() {
  const [lista, setLista] = useState([]);//<Lista>
  const [busca, setBusca] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const listaProdutos = useSelector((state)=>state.lista)
  const dispatch = useDispatch();
  console.log(lista, "lista");
  const listasSim = dispatch(listItem())
  console.log(listasSim, "listasSim");
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await getAll();
    setLista(res);
  }

  const allItens = Object.assign([], lista, listaProdutos);
  console.log(listaProdutos, 'o que tem aquiii')
  console.log(lista, 'listalista')

  function list() {
    if (lista && lista[0]) {
      const filtredList = allItens.filter((allItens) => allItens.name.startsWith(busca));

      console.log(filtredList, 'filtredList')
      return filtredList.map((item) => (
        <div>
        <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
          <Table>
            <tr>
              <Column width="20%" bColor="#ccc">
                Nome:
              </Column>
              <Column width="20%" bColor="#ccc">
                Data de cadastro:
              </Column>
              <Column width="20%" bColor="#ccc">
                Categoria:
              </Column>
              <Column width="20%" bColor="#ccc">
                Imagem:
              </Column>
              <Column width="20%" bColor="#ccc">
                Ações:
              </Column>
            </tr>
            <tr>
              <Column width="20%">{item.name}</Column>
              <Column width="20%">{item.createdAt}</Column>
              <Column width="20%">{item.histories}</Column>
              <Column width="20%">
                <img style={{ width: "100%" }} alt="imagem" src={item.type} />
              </Column>
              <Column width="20%">
                <Delete id = {item.id}/>
                <Link style={{textDecoradion:'none', color:'inherit'}} 
                    to={{pathname:"/edit", state:{idEdit:{idEditar:item.id}}}} >
                  <Button style={{width:'100%'}} variant="contained" color="primary">Editar</Button>
                </Link>
              </Column>
            </tr>
          </Table>
          <Grid>
            <Grid >
              <p>xs=6 md=8</p>
            </Grid>
            <Grid item xs={1} md={2}>
              <p>xs=6 md=2</p>
            </Grid>
            <Grid item xs={1} md={1}>
              <p>xs=6 md=1</p>
            </Grid>
            <Grid item xs={1} md={1}>
              <p>xs=6 md=1</p>
            </Grid>
          </Grid>
        </div>
      ));
    }
    return <></>;
  }
  return (
    <ProdContainer>
      <h1>Lista de Produtos</h1>
      <hr />
      <p>Filtre sua pesquisa</p>
      <input
        type="text"
        value={busca}
        onChange={(ev) => setBusca(ev.target.value)}
      />
      {list()}
    </ProdContainer>
  );
}
