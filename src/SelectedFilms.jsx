import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { purchaseSelected } from "./store";

export default function SelectedFilms() {
    const selectedIds = useSelector(state => state.selected);
    const allFilms = useSelector( state => state.available);
    const dispatch = useDispatch();

    const selectedFilms = allFilms.filter(film => selectedIds.includes(film.id)); 

    if(selectedFilms.lenght === 0) return null;
return(
<div>
    <h2>Seçilen Filmler</h2>
    <ul>
        {selectedFilms.map(film => (
            <li key= {film.id}>{film.title}</li>
        ))}
    </ul>
    <button
    onClick={() => dispatch(purchaseSelected())}
    > Satın Al</button>
</div>
);

}