import './App.css';
import Counter from './components/Counter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './store/reducers';
import TodoList from './components/TodoList';
import {useState} from 'react';

//creating store-создание хранилища
const store = createStore(rootReducer)

export function App() {
  const[switchComponent,setSwitch]= useState(false);

  return (
    //providing store to all components in App.js
    <Provider store={store}>
      <button className="btn" onClick={()=>setSwitch(!switchComponent)}>switch</button>
      {/* conditional rendering - условный рендеринг */}
      {switchComponent ? <Counter /> : <TodoList />}
    </Provider>
  );
}
