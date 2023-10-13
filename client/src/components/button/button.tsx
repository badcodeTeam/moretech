import { ButtonProps, ButtonWrapper } from '.';

export const Button: React.FC<ButtonProps> = ({
	onClick,
	onlyIcon,
	icon,
	text,
}) => {
	return (
		<ButtonWrapper onClick={onClick}>
			{!onlyIcon && <>{text}</>}
			{icon}
		</ButtonWrapper>
	);
};
