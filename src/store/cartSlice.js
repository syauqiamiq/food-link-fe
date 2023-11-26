import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		initiateCart: (state) => {
			let existingCart = JSON.parse(localStorage.getItem("cart"));
			state.value = existingCart;
		},
		saveToCart: (state, action) => {
			const data = action.payload;
			console.log(data);
			let existingCart = JSON.parse(localStorage.getItem("cart"));
			if (existingCart) {
				const newCart = [...existingCart];
				data.quantity = 1;
				newCart.push(data);
				localStorage.setItem("cart", JSON.stringify(newCart));
				state.value = newCart;
			} else {
				const newCart = [];
				newCart.push(data);
				data.quantity = 1;
				localStorage.setItem("cart", JSON.stringify(newCart));
				state.value = newCart;
			}
		},
		removeFromCart: (state) => {
			console.log(state);
		},
		increaseCartQuantity: (state, action) => {
			const id = action.payload;
			const stateData = state.value.find((x) => x.id === id);
			if (stateData) {
				stateData.quantity += 1;
				localStorage.setItem("cart", JSON.stringify(state.value));
			}
		},
		decreaseCartQuantity: (state, action) => {
			const id = action.payload;
			const stateData = state.value.find((x) => x.id === id);
			if (stateData) {
				if (stateData.quantity > 1) {
					stateData.quantity -= 1;
					localStorage.setItem("cart", JSON.stringify(state.value));
				} else {
					const removedData = state.value.filter((x) => x.id !== id);
					state.value = removedData;
					localStorage.setItem("cart", JSON.stringify(state.value));
				}
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	saveToCart,
	removeFromCart,
	initiateCart,
	increaseCartQuantity,
	decreaseCartQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
