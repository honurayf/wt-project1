import './App.css';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import FilmList from './FilmList';
import SelectedFilms from './SelectedFilms';
import PurchasedFilms from './PurchasedFilms';



export default function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1> Film Satın Alma Uygulaması</h1>
      <FilmList/>
      <SelectedFilms/>
      <PurchasedFilms/>
    </div>
    </Provider>
  );
}


