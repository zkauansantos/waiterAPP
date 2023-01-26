import Button from '../components/Button';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
import TableModal from '../components/TableModal';
import {
	Container,
	CategoriesContainer,
	MenuContainer,
	Footer,
	FooterContainer,
} from './styles';
import Cart from '../components/Cart';
import useMain from './useMain';

export default function Main () {
	const {
		tableSelected,
		isModalVisible,
		cartItems,
		handleAddToCart,
		setIsModalVisible,
		handleRemoveToCart,
		handleSaveTable,
		handleCancelOrder,
	} = useMain();


	return (
		<>
			<Container>
				<Header
					tableSelected={tableSelected}
					onCancelOrder={handleCancelOrder}
				/>

				<CategoriesContainer>
					<Categories />
				</CategoriesContainer>

				<MenuContainer>
					<Menu onAddToCart={handleAddToCart} />
				</MenuContainer>

			</Container>
			<Footer>
				<FooterContainer>
					{!tableSelected && (
						<Button onPress={() => setIsModalVisible(true)} >
							Novo Pedido
						</Button>
					)}

					{tableSelected && (
						<Cart cartItems={cartItems} onAdd={handleAddToCart} onDecrement={handleRemoveToCart}/>
					)}
				</FooterContainer>
			</Footer>

			<TableModal
				visible={isModalVisible}
				onCloseModal={() => setIsModalVisible(false)}
				onSaveTable={handleSaveTable}
			/>
		</>
	);
}