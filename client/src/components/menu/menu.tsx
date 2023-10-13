import { useState } from 'react';
import { Input } from '../input';
import { MenuWrapper, Toggler, TogglerWrapper } from './menu.styles';
import { FilterList, PointList } from '..';

export const Menu = (): React.ReactElement => {
	const [value, setValue] = useState<string>('');
	const [opened, setOpened] = useState(false);
	const [selectedItems, setSelectedItems] = useState<Array<string>>([]);
	const [selectedPoint, setSelectedPoint] = useState<string>('');

	const handleItemSelect = (value: string) => {
		setSelectedItems((prev) => {
			let temp = [...prev];
			if (temp.includes(value)) temp = temp.filter((item) => item !== value);
			else temp.push(value);

			return temp;
		});
	};

	return (
		<MenuWrapper opened={opened}>
			<TogglerWrapper className="toggler">
				<Toggler className="toggler" onClick={() => setOpened(!opened)} />
			</TogglerWrapper>

			<div>
				<Input
					placeholder="Поиск отделений ВТБ"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onClear={() => setValue('')}
				/>
			</div>
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
			<PointList
				selectedPoint={selectedPoint}
				points={[
					{
						id: '1',
						title: '1-я Кунцевская наб., 13к2',
						description:
							'Юридические услуги, выдача банковских карт, обсдуживание ипотечных кредитов, банкомат, касса',
					},
					{
						id: '2',
						title: '2-я Кунцевская наб., 13к2',
						description:
							'Юридические услуги, выдача банковских карт, обсдуживание ипотечных кредитов, банкомат, касса',
					},
				]}
				onSelect={setSelectedPoint}
			/>
		</MenuWrapper>
	);
};
