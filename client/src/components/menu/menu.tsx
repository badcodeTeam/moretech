import { useEffect, useState } from 'react';
import { Input } from '../input';
import { MenuWrapper, Toggler, TogglerWrapper } from './menu.styles';
import { SelectMap } from '../select-map';
import { AtmMenu } from './components/atm-menu';
import { useLocation } from 'react-router-dom';
import { OfficesMenu } from './components/offices-menu';

export const Menu = (): React.ReactElement => {
	const [value, setValue] = useState<string>('');
	const [opened, setOpened] = useState(false);
	const [isAtm, setIsAtm] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsAtm(location.pathname.split('/')[2] === 'atms');
	}, [location]);

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
				{(isAtm && <AtmMenu />) || <OfficesMenu />}
			</div>
		</MenuWrapper>
	);
};
