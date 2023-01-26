import { useState } from 'react';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';

export default function useMain() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [tableSelected, setTableSelected] = useState('');
	const [cartItems, setCartItems] = useState<CartItem[]>([]);


	function handleAddToCart (product: Product) {
		if(!tableSelected) {
			setIsModalVisible(true);
		}

		setCartItems((prevState) => {
			const itemIndex = prevState.findIndex((cartItem) => cartItem.product._id === product._id);

			if(itemIndex < 0) {
				return [
					...prevState,
					{ quantity: 1, product },
				];
			}

			const ItemWasAlreadyInCart = [...prevState];
			const indexItemAlready = ItemWasAlreadyInCart[itemIndex];

			ItemWasAlreadyInCart[itemIndex] = {
				...indexItemAlready,
				quantity: indexItemAlready.quantity + 1,
			};

			return ItemWasAlreadyInCart;
		});
	}

	function handleRemoveToCart(product: Product) {
		setCartItems((prevState) => {
			const itemIndex = prevState.findIndex((cartItem) => cartItem.product._id === product._id);

			const cartItemForDecrement = prevState[itemIndex];
			const ItemWasAlreadyInCart = [...prevState];

			if(cartItemForDecrement.quantity === 1) {
				ItemWasAlreadyInCart.splice(itemIndex, 1);
				return ItemWasAlreadyInCart;
			}

			ItemWasAlreadyInCart[itemIndex] = {
				...cartItemForDecrement,
				quantity: cartItemForDecrement.quantity - 1,
			};

			return ItemWasAlreadyInCart;
		});
	}

	function handleSaveTable(table : string) {
		setTableSelected(table);
	}

	function handleCancelOrder () {
		setTableSelected('');
		setCartItems([]);
	}

	return {
		tableSelected,
		isModalVisible,
		cartItems,
		handleAddToCart,
		setIsModalVisible,
		handleRemoveToCart,
		handleSaveTable,
		handleCancelOrder,
	};
}