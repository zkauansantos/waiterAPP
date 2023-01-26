import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Container, ContentOrder, OrderHeader, Table } from './styles';

interface HeaderProps {
	tableSelected: string,
	onCancelOrder(): void
}

export default function Header ({ tableSelected, onCancelOrder } : HeaderProps) {

	return (
		<Container>
			{!tableSelected && (
				<>
					<Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>
					<Text size={24} weight="700">
								WAITER
						<Text size={24}>APP</Text>
					</Text>
				</>
			)}

			{tableSelected && (
				<ContentOrder>
					<OrderHeader>
						<Text weight="600" size={24}>Pedido</Text>

						<TouchableOpacity onPress={onCancelOrder}>
							<Text weight="600" color='#D73035' size={14}>
									cancelar Pedido
							</Text>
						</TouchableOpacity>
					</OrderHeader>
					<Table>
						<Text opacity={0.8}> Mesa {tableSelected}</Text>
					</Table>
				</ContentOrder>
			)}
		</Container>
	);
}