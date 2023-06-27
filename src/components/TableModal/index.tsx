import { useState } from 'react';
import { Modal, TouchableOpacity, Platform } from 'react-native';
import Button from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Input, ModalBody, ModalForm, ModalHeader, Overlay } from './styles';

interface TableModalProps {
	visible: boolean;
	onCloseModal(): void;
	onSaveTable(table: string): void;
}

export default function TableModal({
	visible,
	onCloseModal,
	onSaveTable,
}: TableModalProps) {
	const [tableNumber, setTableNumber] = useState('');
	const isAndroid = Platform.OS == 'android';

	function handleSave() {
		setTableNumber('');
		onSaveTable(tableNumber);
		onCloseModal();
	}

	function handleCloseByIcon() {
		onCloseModal();
		setTableNumber('');
	}

	return (
		<Modal animationType="fade" visible={visible} transparent>
			<Overlay behavior={isAndroid ? 'height' : 'padding'}>
				<ModalBody>
					<ModalHeader>
						<Text weight="600">Informe a mesa</Text>
						<TouchableOpacity onPress={handleCloseByIcon}>
							<Close color="#f00" />
						</TouchableOpacity>
					</ModalHeader>
					<ModalForm>
						<Input
							placeholder="Número da mesa"
							placeholderTextColor="#666"
							keyboardType="number-pad"
							onChangeText={(value: any) => setTableNumber(value)}
						/>
						<Button disabled={!tableNumber} onPress={handleSave}>
							Salvar
						</Button>
					</ModalForm>
				</ModalBody>
			</Overlay>
		</Modal>
	);
}
