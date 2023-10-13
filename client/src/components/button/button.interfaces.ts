export interface ButtonProps {
	onlyIcon?: boolean;
	icon?: React.ReactElement;
	text?: string;
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
