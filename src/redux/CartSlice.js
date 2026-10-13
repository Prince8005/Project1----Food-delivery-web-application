import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",

    initialState: [],

    reducers: {

        AddItem: (state, action) => {

            let existingItem = state.find(
                item => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.push({
                    ...action.payload,
                    qty: 1
                });
            }
        },

        IncreaseQty: (state, action) => {

            let item = state.find(
                item => item.id === action.payload
            );

            if (item) {
                item.qty += 1;
            }
        },

        DecreaseQty: (state, action) => {

            let item = state.find(
                item => item.id === action.payload
            );

            if (item && item.qty > 1) {
                item.qty -= 1;
            }
        },

        RemoveItem: (state, action) => {

            return state.filter(
                item => item.id !== action.payload
            );
        }
    }
});

export const {
    AddItem,
    IncreaseQty,
    DecreaseQty,
    RemoveItem
} = cartSlice.actions;

export default cartSlice.reducer;
