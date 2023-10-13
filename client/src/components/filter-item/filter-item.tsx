import { FilterItemProps, FilterWrapper } from '.';

export const FilterItem: React.FC<FilterItemProps> = ({
	filter,
	isSelected,
	onSelectItem,
}) => {
	return (
		<FilterWrapper
			isSelected={isSelected}
			onClick={() => onSelectItem(filter.id)}>
			{filter.value} {isSelected}
		</FilterWrapper>
	);
};
