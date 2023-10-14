import { useEffect, useState } from 'react';
import { Input } from '../input';
import { MenuWrapper, Toggler, TogglerWrapper } from './menu.styles';
import { FilterList, PointList } from '..';
import { SelectMap } from '../select-map';
import { useDispatch, useSelector } from 'react-redux';
import { apiSlice, atmFiltersSelector } from '../../store';
import { AtmFilters } from '../../services/atm-service/atm.interfaces';
import { updateFilters } from '../../store/atm-filters';
import { useLazyGetAtmsQuery } from '../../store/api/atm/atm-slice';

export const Menu = (): React.ReactElement => {
	const [value, setValue] = useState<string>('');
	const [opened, setOpened] = useState(false);
	const filters = useSelector(atmFiltersSelector);
	const [selectedItems, setSelectedItems] = useState<Array<string>>([]);
	const dispatch = useDispatch();
	const [selectedPoint, setSelectedPoint] = useState<string>('');
	//const [trigger] = useLazyGetAtmsQuery();

	useEffect(() => {
		const selected: Array<string> = [];

		Object.keys(filters).map((key: string) => {
			if (filters[key as keyof AtmFilters]) {
				selected.push(key);
			}
		});

		setSelectedItems(selected);
	}, [filters]);

	const handleItemSelect = async (value: string) => {
		dispatch(updateFilters(value as keyof AtmFilters));
		dispatch(apiSlice.util.invalidateTags(['ATMS']));
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

			<div className="scrollable">
				<SelectMap />
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
						{ id: 'nfcForBankCards', value: 'NFC' },
						{ id: 'wheelchair', value: 'Для маломобильных' },
						{ id: 'qrRead', value: 'QR' },
						{ id: 'supportsUsd', value: 'Доллары' },
						{ id: 'supportsChargeRub', value: 'Обмен валют' },
						{ id: 'supportsEur', value: 'Евро' },
						{ id: 'supportsRub', value: 'Рубли' },
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
						{
							id: '3',
							title: '2-я Кунцевская наб., 13к2',
							description:
								'Юридические услуги, выдача банковских карт, обсдуживание ипотечных кредитов, банкомат, касса',
						},
					]}
					onSelect={setSelectedPoint}
				/>
			</div>
		</MenuWrapper>
	);
};
