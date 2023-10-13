export interface InputProps {
	placeholder: string;
	value: string;
	onClear: () => void;
	disableClearIcon?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
