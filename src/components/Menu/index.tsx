import { FlatList } from 'react-native';
import { useState } from 'react';
import formatCurrency from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import ProductModal from '../TableModal/ProductModal';
import { Text } from '../Text';
import {
	ProductContainer,
	ProductDetails,
	ProductImage,
	Separator,
	AddToCartButton,
} from './styles';
import { Product } from '../../types/Product';

interface MenuProps {
	onAddToCart: (product: Product) => void,
	products: Product[],
}


export default function Menu ({ onAddToCart, products } : MenuProps) {
	const [productModalIsVisible, setProductModalIsVisible] = useState(false);
	const [productSelected, setProductSelected] = useState<null | Product>(null);

	function handleSelectProduct (product : Product) {
		setProductModalIsVisible(true);
		setProductSelected(product);
	}

	return (
		<>
			<ProductModal
				onAddToCart={onAddToCart}
				productSelected={productSelected}
				visible={productModalIsVisible}
				onClose={() => setProductModalIsVisible(false)}
			/>

			<FlatList
				ItemSeparatorComponent={Separator}
				style={{ marginTop: 32 }}
				contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 16 }}
				data={products}
				keyExtractor={product => product._id}
				renderItem={({ item: product }) => (
					<ProductContainer onPress={() => handleSelectProduct(product)}>
						<ProductImage source={{
							uri: `http://10.0.2.2:3001/uploads/${product.imagePath}`,
						}}/>
						<ProductDetails>
							<Text weight="600">{product.name}</Text>
							<Text size={14} color="#666" style={{ marginVertical: 8 }}>
								{product.description}
							</Text>
							<Text size={14} weight="600">{formatCurrency(product.price)}</Text>
						</ProductDetails>

						<AddToCartButton onPress={() => onAddToCart(product)}>
							<PlusCircle />
						</AddToCartButton>
					</ProductContainer>
				)}
			>
			</FlatList>
		</>

	);
}