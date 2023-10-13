import React from 'react';
import { InputProps } from '.';
import { InputButton, InputWrapper, StyledInput } from './input.styles';
import { ReactComponent as CrossIcon } from '../../assets/cross.svg';
import { Button } from '..';

export const Input: React.FC<InputProps> = ({
	onChange,
	onClear,
	placeholder,
	value,
	disableClearIcon,
}) => {
	return (
		<InputWrapper>
			<StyledInput
				onChange={onChange}
				placeholder={placeholder}
				value={value}
			/>
			{!disableClearIcon && Boolean(value.length) && (
				<InputButton>
					<Button onlyIcon onClick={onClear} icon={<CrossIcon />} />
				</InputButton>
			)}
		</InputWrapper>
	);
};
