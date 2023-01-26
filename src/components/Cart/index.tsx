import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { Product } from '../../types/Product';
import formatCurrency from '../../utils/formatCurrency';
import Button from '../Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import {
	Item,
	ProductContainer,
	Actions,
	Image,
	QuantityContainer,
	ProductDetails,
	Summary,
	TotalContainer,
} from './styles';

interface CartProps {
	cartItems: CartItem[]
	onAdd: (product: Product) => void
	onDecrement: (product: Product) => void
}

export default function Cart ({ cartItems, onAdd, onDecrement }: CartProps ) {
	const total = cartItems.reduce((accumulator, item) => {
		return accumulator += item.product.price * item.quantity;
	}, 0);

	return (
		<>
			{cartItems.length > 0 && <FlatList
				data={cartItems}
				style={{ marginBottom: 20, maxHeight: 170 }}
				keyExtractor={cartItem => cartItem.product._id}
				showsVerticalScrollIndicator={false}
				renderItem={({ item: cartItem }) => (
					<Item>
						<ProductContainer>
							<Image
								source={{
									uri: `${cartItem.product.imagePath}`,
								}}
							/>
							<QuantityContainer>
								<Text size={14} color="#666">{cartItem.quantity}X</Text>
							</QuantityContainer>

							<ProductDetails>
								<Text weight="600" size={14} style={{ marginBottom: 4 }}>{cartItem.product.name}</Text>
								<Text color="#666">{formatCurrency(cartItem.product.price)}</Text>
								<Text></Text>
							</ProductDetails>
						</ProductContainer>
						<Actions>
							<TouchableOpacity
								style={{ marginRight: 16 }}
								onPress={() => onDecrement(cartItem.product)}
							>
								<MinusCircle />
							</TouchableOpacity>

							<TouchableOpacity onPress={() => onAdd(cartItem.product)}>
								<PlusCircle />
							</TouchableOpacity>
						</Actions>
					</Item>
				)}
			/>}

			<Summary>
				<TotalContainer>
					{cartItems.length > 0 ?(
						<>
							<Text color="#666">Total</Text>
							<Text weight="600" size={20}>{formatCurrency(total)}</Text>
						</>
					) : (
						<Text color='#999'>Seu Carrinho está vazio</Text>
					)}
				</TotalContainer>

				<Button onPress={() => alert('iae')} disabled={cartItems.length < 1}>
					Confirmar Pedido
				</Button>
			</Summary>
		</>

	);
}