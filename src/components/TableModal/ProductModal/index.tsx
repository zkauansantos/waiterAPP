import { FlatList, Modal } from 'react-native';
import { Product } from '../../../types/Product';
import formatCurrency from '../../../utils/formatCurrency';
import Button from '../../Button';
import { Close } from '../../Icons/Close';
import { Text } from '../../Text';
import {
	ImageContainer,
	CloseButton,
	Header,
	ModalBody,
	IngredientsContainer,
	Ingredient,
	Footer,
	FooterContainer,
	PriceContainer,
} from './styles';

interface ProductModalProps {
	visible: boolean,
	onClose(): void,
	productSelected: null | Product,
	onAddToCart: (product: Product) => void
}


export default function ProductModal ({ visible, onClose, productSelected, onAddToCart } : ProductModalProps) {
	if(!productSelected) {
		return null;
	}

	function handleAddToCart(product: Product) {
		onAddToCart(product);
		onClose();
	}

	return (
		<Modal
			presentationStyle="pageSheet"
			animationType="slide"
			visible={visible}
			onRequestClose={onClose}
		>
			<ImageContainer
				source={{
					uri: `${productSelected.imagePath}`,
				}}
			>
				<CloseButton onPress={onClose}>
					<Close color='#fff'/>
				</CloseButton>
			</ImageContainer>
			<ModalBody >
				<Header>
					<Text weight="600" size={24}>{productSelected.name}</Text>
					<Text color="#666" size={16} style={{ marginTop: 8 }}>
						{productSelected.description}
					</Text>
				</Header>

				{productSelected.ingredients.length > 0 && (
					<IngredientsContainer>
						<Text weight="600" color="#666">Ingredientes</Text>
						<FlatList
							style={{ marginTop: 16 }}
							showsVerticalScrollIndicator={false}
							data={productSelected.ingredients}
							keyExtractor={ingrendient => ingrendient._id}
							renderItem={({ item: ingredient }) => (
								<Ingredient>
									<Text>{ingredient.icon}</Text>
									<Text size={14} color="#666" style={{ marginLeft: 20 }}>
										{ingredient.name}
									</Text>
								</Ingredient>
							)}
						/>
					</IngredientsContainer>
				)}
			</ModalBody>
			<Footer>
				<FooterContainer>
					<PriceContainer>
						<Text color="#666">Preço</Text>
						<Text weight="600" size={20}>{formatCurrency(productSelected.price)}</Text>
					</PriceContainer>
					<Button onPress={() => handleAddToCart(productSelected)} >
						Adicionar ao Pedido
					</Button>
				</FooterContainer>
			</Footer>
		</Modal>
	);
}