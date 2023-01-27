import { useState } from 'react';
import { FlatList } from 'react-native';
import { Category } from '../../types/Category';
import { Text } from '../Text';
import { CategoryContainer, Icon } from './styles';

interface CategoriesProps {
	categories: Category[];
	onSelectCategory(categoryId: string): void
}

export default function Categories ({ categories, onSelectCategory } : CategoriesProps) {
	const [categorySelected, setCategorySelected] = useState('');

	function handleSelectCategory(categoryId : string) {
		const category = categorySelected === categoryId ? '' : categoryId;

		onSelectCategory(category);
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
					<CategoryContainer onPress={() => handleSelectCategory(category._id)}>
						<Icon>
							<Text opacity={isSelected ? 1 : 0.65}>
								{category.icon}
							</Text>
						</Icon>

						<Text opacity={isSelected ? 1 : 0.65} size={14} weight="600">
							{category.name}
						</Text>
					</CategoryContainer>
				);
			}}
		/>
	);
}