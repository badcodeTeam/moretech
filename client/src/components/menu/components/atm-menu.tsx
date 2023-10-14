import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterList, PointList } from '../..';
import {
	AtmPoint,
	AtmFilters,
} from '../../../services/atm-service/atm.interfaces';
import { atmFiltersSelector, atmSelector, atmsSelector } from '../../../store';
import { updateFilters } from '../../../store/atm-filters';
import { updatePoint } from '../../../store/current-point';

export const AtmMenu = () => {
	const [selectedItems, setSelectedItems] = useState<Array<string>>([]);
	const dispatch = useDispatch();
	const current = useSelector(atmSelector);
	const filters = useSelector(atmFiltersSelector);
	const [selectedPoint, setSelectedPoint] = useState<string>('');
	const [currentArray, setCurrentArray] = useState<Array<AtmPoint>>([]);
	const atms = useSelector(atmsSelector);

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

		setSelectedItems((prev) => {
			let temp = [...prev];
			if (temp.includes(value)) temp = temp.filter((item) => item !== value);
			else temp.push(value);

			return temp;
		});
	};

	const handlePointSelect = async (value: AtmPoint, needsWay?: boolean) => {
		dispatch(updatePoint({ ...value, needsWay: needsWay ?? false }));
	};

	useEffect(() => {
		if (current.id !== '') {
			setSelectedPoint(current.id);
			setCurrentArray([
				current,
				...atms.filter((item) => item.id !== current.id),
			]);
		} else {
			setCurrentArray([...atms]);
		}
	}, [current, atms]);

	return (
		<>
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
				points={currentArray}
				onSelect={(value, needsWay) => {
					handlePointSelect(value, needsWay);
					setSelectedPoint(value.id);
				}}
			/>
		</>
	);
};
