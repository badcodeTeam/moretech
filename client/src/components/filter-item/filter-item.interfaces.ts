import { Filter } from '..';

export interface FilterItemProps {
	filter: Filter;
	isSelected: boolean;
	onSelectItem: (value: string) => void;
}
