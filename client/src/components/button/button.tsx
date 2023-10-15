import { ButtonProps, ButtonWrapper } from '.';

export const Button: React.FC<ButtonProps> = ({
	onClick,
	onlyIcon,
	icon,
	text,
	variant = 'text',
}) => {
	return (
		<ButtonWrapper variant={variant} onClick={onClick}>
			{icon}
			{!onlyIcon && <>{text}</>}
		</ButtonWrapper>
	);
};
