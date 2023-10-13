import { FilterListProps, FilterListWrapper } from '.';
import { FilterItem } from '..';

export const FilterList: React.FC<FilterListProps> = ({
	selectedItems,
	filters,
	onSelectItem,
}) => {
	return (
		<FilterListWrapper>
			{filters.map((item) => {
				return (
					<FilterItem
						key={item.id}
						onSelectItem={onSelectItem}
						filter={item}
						isSelected={selectedItems.includes(item.id)}
					/>
				);
			})}
		</FilterListWrapper>
	);
};
