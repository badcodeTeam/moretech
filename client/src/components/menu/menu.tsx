import { useState } from 'react';
import { Input } from '../input';
import { MenuWrapper } from './menu.styles';

export const Menu = (): React.ReactElement => {
	const [value, setValue] = useState<string>('');
	return (
		<MenuWrapper>
			<Input
				placeholder="Поиск отделений ВТБ"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onClear={() => setValue('')}
			/>
		</MenuWrapper>
	);
};
