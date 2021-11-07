import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ProdContainer,
  Table,
  Column,
  DeleteButton,
  EditButton,
} from "./style.js";
import { getAll } from "../../services/products.js";
import Delete from "../Delete/index.js";
// import { Lista } from "../../interfaces/index.ts";
export default function List() {
  const [lista, setLista] = useState([]);//<Lista>
  const [busca, setBusca] = useState("");
  console.log(lista, "lista");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await getAll();
    setLista(res);
  }

  function list() {
    if (lista && lista[0]) {
      const filtredList = lista.filter((lista) => lista.name.startsWith(busca));

      console.log(filtredList, 'filtredList')
      return filtredList.map((item) => (
        <div>
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
                  <EditButton>
                    Editar
                  </EditButton>
                </Link>
              </Column>
               
            </tr>
          </Table>
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
