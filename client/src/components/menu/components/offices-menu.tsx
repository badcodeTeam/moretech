import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterList, PointList } from '../..';
import {
	currentOfficeSelector,
	currentOfficesSelector,
	officeFiltersSelector,
} from '../../../store';
import { UnionFilters, updateFilters } from '../../../store/office-filters';
import { Office } from '../../../services/office-service/office.interfaces';
import { updateOffice } from '../../../store/current-office';

export const OfficesMenu = () => {
	const [selectedItems, setSelectedItems] = useState<Array<string>>([]);
	const dispatch = useDispatch();
	const current = useSelector(currentOfficeSelector);
	const filters = useSelector(officeFiltersSelector);
	const [selectedPoint, setSelectedPoint] = useState<string>('');
	const [currentArray, setCurrentArray] = useState<Array<Office>>([]);
	const offices = useSelector(currentOfficesSelector);

	useEffect(() => {
		const selected: Array<string> = [];

		Object.keys(filters).map((key: string) => {
			if (filters[key as keyof UnionFilters]) {
				selected.push(key);
			}
		});

		setSelectedItems(selected);
	}, [filters]);

	const handleItemSelect = async (value: string) => {
		dispatch(updateFilters(value as keyof UnionFilters));

		setSelectedItems((prev) => {
			let temp = [...prev];
			if (temp.includes(value)) temp = temp.filter((item) => item !== value);
			else temp.push(value);

			return temp;
		});
	};

	const handlePointSelect = async (value: Office, needsWay?: boolean) => {
		dispatch(updateOffice({ ...value, needsWay: needsWay ?? false }));
	};

	useEffect(() => {
		if (current.id !== '') {
			setSelectedPoint(current.id);
			setCurrentArray([
				current,
				...offices.filter((item) => item.id !== current.id),
			]);
		} else {
			setCurrentArray([...offices]);
		}
	}, [current, offices]);

	return (
		<>
			<FilterList
				selectedItems={selectedItems}
				onSelectItem={handleItemSelect}
				filters={[
					{ id: 'load', value: 'Не загруженные' },
					{ id: 'rko', value: 'Есть касса' },
					{ id: 'hasRamp', value: 'Есть пандус' },
					{ id: 'suoAvailability', value: 'Управление очередью' },
				]}
			/>
			<PointList
				selectedPoint={selectedPoint}
				points={currentArray}
				onSelect={(value, needsWay) => {
					handlePointSelect(value as Office, needsWay);
					setSelectedPoint(value.id);
				}}
			/>
		</>
	);
};
