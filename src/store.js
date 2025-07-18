import {configureStore,createSlice} from '@reduxjs/toolkit';

const filmSlice = createSlice({
    name : 'films',
    initialState: {
        available: [
            {id:1 ,title: 'Inception'},
            {id:2 ,title: 'The Matrix'},
            {id:3 ,title: 'Interstellar'}
        ],
        selected: [],
        purchased : []
    },
    reducers: {
        toggleSelect : (state,action) =>{
            const filmId = action.payload;
            if(state.selected.includes(filmId)){
                state.selected = state.selected.filter(id => id !== filmId);
            } else {
                state.selected.push(filmId);
            }
        },
        purchaseSelected : (state) => {
            const selectedFilms = state.available.filter(f => state.selected.includes(f.id));
            state.purchased.push(...selectedFilms);
            state.selected = [];

        }
    }
});

export const {toggleSelect,purchaseSelected} = filmSlice.actions;
export const store = configureStore({reducer : filmSlice.reducer});
