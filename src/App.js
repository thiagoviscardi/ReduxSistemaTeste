
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './store/counter/actions';
import {signin} from './store/isLogged/actions';
import Menu from './components/Menu';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
 
  return (
    <div>
      {console.log(isLogged)}
      <Menu />
      <p>Counter {counter}</p>
      <p>Logado? {isLogged === false ? 'false' : 'true'}</p>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <button onClick={()=> dispatch(signin())}>Logado?</button>

      {isLogged ? <h3>Informação para quem está logado</h3> : ''}
      
    </div>
  );
}

export default App;
