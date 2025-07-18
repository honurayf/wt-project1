import React from "react";
import {useSelector} from 'react-redux';

export default function PurchasedFilms () {

    const purchased = useSelector(state => state.purchased); 

if(purchased.length===0) return null;

return(
<div>
    <h2>Satın ALınan Filmler</h2>
    <ul>
        {
        purchased.map(film => (<li key ={film.id}>{film.title}</li>))
        }
    </ul>
</div>
);


}