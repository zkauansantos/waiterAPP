import { useEffect, useState } from 'react';
import { CartItem } from '../types/CartItem';
import { Product } from '../types/Product';
import { Category } from '../types/Category';
import axios from 'axios';

export default function useMain() {
	const [tableSelected, setTableSelected] = useState('');
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadingProducts, setIsLoadingProducts] = useState(false);
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const [products, setProducts] = useState<Product[]>([]);


	useEffect(() => {
		Promise.all([
			axios.get('http://192.168.100.70:3001/categories'),
			axios.get('http://192.168.100.70:3001/products'),

		]).then(([categoriesResponse, productsResponse]) => {
			setCategories(categoriesResponse.data);
			setProducts(productsResponse.data);
			setIsLoading(false);
		});
	}, []);

	function handleSelectCategory (categoryId: string) {
		const route = !categoryId
			? 'http://192.168.100.70:3001/products'
			: `http://192.168.100.70:3001/categories/${categoryId}/products`;

		setIsLoadingProducts(true);

		axios.get(route).then((response) => {
			setProducts(response.data);
		});

		setIsLoadingProducts(false);
	}

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

	function handleResetOrder () {
		setTableSelected('');
		setCartItems([]);
	}

	return {
		tableSelected,
		isModalVisible,
		cartItems,
		isLoading,
		products,
		categories,
		isLoadingProducts,
		handleAddToCart,
		setIsModalVisible,
		handleRemoveToCart,
		handleSaveTable,
		handleResetOrder,
		handleSelectCategory,
	};
}