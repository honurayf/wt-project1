import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { toggleSelect } from "./store";


export default function FilmList () {
    const films = useSelector(state => state.available);
    const selected = useSelector(state => state.selected);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Film Listesi</h2>
            <ul>
                {
                    films.map(film => (
                        <li key = {film.id}>
                            <label>
                                <input 
                                type="checkbox"
                                checked = {selected.includes(film.id)}
                                onChange={() => dispatch(toggleSelect(film.id))}
                                />
                                <span> {film.title}</span>
                            </label>
                        </li>
                    ))
                }
            </ul>
        </div>
    );

}