export interface PointProps {
	id: string;
	title: string;
	description: string;
	isSelected: boolean;
	onSelect: (value: string) => void;
}
