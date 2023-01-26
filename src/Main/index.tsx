import Button from '../components/Button';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Menu from '../components/Menu';
import TableModal from '../components/TableModal';
import { useState } from 'react';
import {
	Container,
	CategoriesContainer,
	MenuContainer,
	Footer,
	FooterContainer,
} from './styles';

export default function Main () {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [tableSelected, setTableSelected] = useState('');

	function handleSaveTable(table : string) {
		setTableSelected(table);
	}

	function handleCancelOrder () {
		setTableSelected('');
	}

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
					<Menu />
				</MenuContainer>

			</Container>
			<Footer>
				<FooterContainer>
					{!tableSelected && <Button onPress={() => setIsModalVisible(true)} >
						Novo Pedido
					</Button>}
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