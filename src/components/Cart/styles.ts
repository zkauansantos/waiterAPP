import styled from 'styled-components/native';

export const Item = styled.View`
	padding: 4px 0px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Actions = styled.View`
	flex-direction: row;
`;

export const ProductContainer = styled.View`
	flex-direction: row;
`;

export const Image = styled.Image`
	width: 48px;
	height: 40px;
	border-radius:6px;
`;

export const QuantityContainer = styled.View`
	min-width: 20px;
	margin-left: 12px;
`;

export const ProductDetails = styled.View`
`;

export const Summary = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const TotalContainer = styled.View`
	margin-right: 24px;
	flex: 1;
`;