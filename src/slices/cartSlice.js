import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 'p1',
        image: 'computer.jpeg',
        description: 'A revolutionary computing machine.',
        name: 'Macbook Air',
        price: 1359.99,
        qty: 0,
    },
    {
        id: 'p2',
        image: 'handbag.jpeg',
        name: 'Hermes Handbag',
        description: 'A stylish handbag for any occasion.',
        price: 22359.99,
        qty: 0
    },
    {
        id: 'p3',
        image: 'mixer.jpg',
        name: 'Kitchen Aid Mixer',
        description: 'A state-of-the-art electric mixer',
        price: 359.99,
        qty: 0
    },
    {
        id: 'p4',
        image: 'sofa.jpeg',
        name: 'Sofa',
        description: 'A comfy sofa.',
        price: 999.99,
        qty: 0
    }
];

//dispatch(addItem('p3'))
//const index = 2;
//const item = {'id': 'p3', ...}
//const newItem = {'id': 'p3', qty: 1}
//
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const index = state.findIndex(x => x.id == action.payload)
            const item = state[index];
            const newItem = {...item, qty: Number(item.qty )+ 1};
            return [...state.slice(0, index), newItem, ...state.slice(index + 1)];
        },
        removeItem: (state, action) => {
            const index = state.findIndex(x => x.id == action.payload)
            const item = state[index];
            const qty = item.qty;
            if(qty < 1) return [...state];
            const newItem = {...item, qty: item.qty - 1};
            return [...state.slice(0,index), newItem, ...state.slice(index + 1)];
        },
        addQuantity: (state, action) => {
            const index = state.findIndex(x => x.id == action.payload.id);
            const item = state[index];
            const newItem = {...item, qty: item.qty + Number(action.payload.qty)};
            return [...state.slice(0, index), newItem, ...state.slice(index + 1)];
        }
    }
})

export const {addItem, removeItem, addQuantity} = cartSlice.actions;

export default cartSlice.reducer;