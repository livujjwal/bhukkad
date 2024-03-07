import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name : "menu",
    initialState : {
        restaurantMenu : null,
    },
    reducers : {
        addRestaurantMenu : (state,action) =>{
            state.restaurantMenu  = action.payload;
        },
    }
})

export const {addRestaurantMenu} = menuSlice.actions;
export default menuSlice.reducer;