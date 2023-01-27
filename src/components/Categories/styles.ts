import styled from 'styled-components/native';
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const CategoryContainer = styled.TouchableOpacity`
	align-items: center;
	margin-left: 24px;
	min-width: 50px;
`;

export const Icon = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44px;
	height: 44px;
	border-radius: 22px;
	background-color: #fff;
	box-shadow: 0px 2px 1px ${isAndroid? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.1)'};
	elevation: 2;
	padding: 8px;
	margin-bottom: 8px;
`;