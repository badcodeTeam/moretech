interface Point {
	id: string;
	title: string;
	description: string;
}

export interface PointListProps {
	points: Array<Point>;
	selectedPoint: string;
	onSelect: (value: string) => void;
}
