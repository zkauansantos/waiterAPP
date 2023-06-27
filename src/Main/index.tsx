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
	CenteredContainer,
} from './styles';
import Cart from '../components/Cart';
import useMain from './useMain';
import { ActivityIndicator } from 'react-native';
import { Empty } from '../components/Icons/Empty';
import { Text } from '../components/Text';

export default function Main() {
	const {
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
	} = useMain();

	return (
		<>
			<Container>
				<Header
					tableSelected={tableSelected}
					onCancelOrder={handleResetOrder}
				/>

				{isLoading && (
					<CenteredContainer>
						<ActivityIndicator size={60} color='#D73035' />
					</CenteredContainer>
				)}

				{!isLoading && (
					<>
						<CategoriesContainer>
							<Categories
								categories={categories}
								onSelectCategory={handleSelectCategory}
							/>
						</CategoriesContainer>

						{isLoadingProducts ? (
							<CenteredContainer>
								<ActivityIndicator size={60} color='#D73035' />
							</CenteredContainer>
						) : (
							<>
								{products.length > 0 ? (
									<MenuContainer>
										<Menu products={products} onAddToCart={handleAddToCart} />
									</MenuContainer>
								) : (
									<CenteredContainer>
										<Empty />
										<Text color='#666' style={{ marginTop: 24 }}>
                      Nenhum Produto foi encontrado!
										</Text>
									</CenteredContainer>
								)}
							</>
						)}
					</>
				)}
			</Container>
			<Footer>
				<FooterContainer>
					{!tableSelected && (
						<Button
							onPress={() => setIsModalVisible(true)}
							disabled={isLoading}
						>
              Novo Pedido
						</Button>
					)}

					{tableSelected && (
						<Cart
							selectedTable={tableSelected}
							cartItems={cartItems}
							onAdd={handleAddToCart}
							onDecrement={handleRemoveToCart}
							onConfirmOrder={handleResetOrder}
						/>
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
