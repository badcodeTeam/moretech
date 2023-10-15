export interface ButtonProps {
	onlyIcon?: boolean;
	icon?: React.ReactElement;
	text?: string;
	variant?: 'text' | 'contained';
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
