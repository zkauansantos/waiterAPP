import styled from 'styled-components/native';

export const ImageContainer = styled.ImageBackground`
	width: 100%;
	height: 200px;
`;

export const CloseButton = styled.TouchableOpacity`
	position: absolute;
	right: 15px;
	top: 15px;
	background: rgba(0, 0, 0, 0.5);
	width: 32px;
	height: 32px;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
`;

export const Header = styled.View`
	align-items: flex-start;
`;

export const ModalBody = styled.View`
	padding: 32px 24px 0px;
	flex: 1;
	background: #fafafa;
`;

export const IngredientsContainer = styled.View`
	margin-top: 32px;
	flex: 1;
`;

export const Ingredient = styled.View`
	align-items: center;
	border-radius: 8px;
	padding: 16px;
	flex-direction: row;
	margin-top: 4px;
	border: 1px solid rgba(204, 204, 204, 0.5);
	background: #fff;
	width: 100%;
`;

export const Footer = styled.View`
	min-height: 110px;
	background: #fff;
	padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const PriceContainer = styled.View`
`;