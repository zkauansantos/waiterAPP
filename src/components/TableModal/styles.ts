import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
	background: rgba(0, 0, 0, 0.6);
	flex: 1;
	align-items: stretch;
	justify-content: center;
	padding: 0px 24px;
`;

export const ModalBody = styled.View`
	background-color: #fafafa;
	padding: 24px;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
`;

export const ModalHeader = styled.View`
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	align-items: center;
`;


export const ModalForm = styled.View`
	margin-top: 32px;
	width: 100%;
`;

export const Input = styled.TextInput`
	border-radius: 8px;
	padding: 16px;
	background-color: #fff;
	border: 1px solid rgba(240,240,240, 0.8);
	margin-bottom: 24px;
`;