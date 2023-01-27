import { Modal } from 'react-native';
import { Text } from '../Text';
import { Confirm, Container } from './styles';
import { CheckCircle } from '../Icons/CheckCircle';

interface ConfirmOrderModalProps {
	visible: boolean,
	onOk(): void,
}

export default function ConfirmOrderModal ({ visible, onOk } : ConfirmOrderModalProps) {
	return (
		<Modal
			presentationStyle="pageSheet"
			animationType="fade"
			visible={visible}
			onRequestClose={onOk}
		>
			<Container>
				<CheckCircle  />
				<Text color="#fff" size={20} weight="600" style={{ marginTop: 12 }}>
					Pedido confirmado
				</Text>
				<Text color="#fff" opacity={0.9} style={{ marginTop: 4 }}>
					O pedido já entrou na fila de produção !
				</Text>

				<Confirm onPress={onOk}>
					<Text color="#D73035" weight="600" >OK</Text>
				</Confirm>
			</Container>
		</Modal>
	);
}