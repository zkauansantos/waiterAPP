import { useState } from 'react';
import { FlatList } from 'react-native';
import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import { Category, Icon } from './styles';

export default function Categories () {
	const [categorySelected, setCategorySelected] = useState('');

	function handleSelectCategory(categoryId : string) {
		const category = categorySelected === categoryId ? '' : categoryId;

		setCategorySelected(category);
	}

	return (
		<FlatList
			horizontal
			showsHorizontalScrollIndicator={false}
			data={categories}
			contentContainerStyle={{ paddingRight: 24 }}
			keyExtractor={category => category._id}
			renderItem={({ item: category }) => {
				const isSelected = categorySelected === category._id;

				return (
					<Category onPress={() => handleSelectCategory(category._id)}>
						<Icon>
							<Text opacity={isSelected ? 1 : 0.65}>
								{category.icon}
							</Text>
						</Icon>

						<Text opacity={isSelected ? 1 : 0.65} size={14} weight="600">
							{category.name}
						</Text>
					</Category>
				);
			}}
		/>
	);
}