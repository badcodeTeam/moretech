export type Filter = {
	id: string;
	value: string;
};

export interface FilterListProps {
	selectedItems: Array<string>;
	filters: Array<Filter>;
	onSelectItem: (value: string) => void;
}
