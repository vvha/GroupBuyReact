import { createSlice, configureStore } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [
            {
                id: 1,
                name: 'Apple MacBook Pro 14 (2021)',
                price: 120400,
                remainingSlots: 18,
            },
            // Добавьте другие товары
        ],
    },
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

const faqsSlice = createSlice({
    name: 'faqs',
    initialState: {
        items: [
            {
                question: 'Что такое совместная покупка?',
                answer: 'Это процесс покупки товара группой людей с целью получения скидки или лучшей цены.',
            },
            // Добавьте другие вопросы
        ],
    },
    reducers: {},
});

export const { addProduct } = productsSlice.actions;

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        faqs: faqsSlice.reducer,
    },
});

export default store;