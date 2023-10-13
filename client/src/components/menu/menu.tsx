import { useState } from 'react';
import { Input } from '../input';
import { MenuWrapper } from './menu.styles';
import { FilterList } from '..';

export const Menu = (): React.ReactElement => {
	const [value, setValue] = useState<string>('');
	const [selectedItems, setSelectedItems] = useState<Array<string>>([]);

	const handleItemSelect = (value: string) => {
		setSelectedItems((prev) => {
			let temp = [...prev];
			if (temp.includes(value)) temp = temp.filter((item) => item !== value);
			else temp.push(value);

			return temp;
		});
	};

	return (
		<MenuWrapper>
			<Input
				placeholder="Поиск отделений ВТБ"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onClear={() => setValue('')}
			/>
			<FilterList
				selectedItems={selectedItems}
				onSelectItem={handleItemSelect}
				filters={[
					{ id: '1', value: 'text' },
					{ id: '2', value: 'text' },
					{ id: '3', value: 'text' },
					{ id: '4', value: 'text' },
					{ id: '5', value: 'text' },
					{ id: '6', value: 'text' },
				]}
			/>
		</MenuWrapper>
	);
};
