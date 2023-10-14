import { useState } from 'react';
import { Input } from '../input';
import { MenuWrapper, Toggler, TogglerWrapper } from './menu.styles';
import { SelectMap } from '../select-map';
import { AtmMenu } from './components/atm-menu';

export const Menu = (): React.ReactElement => {
	const [value, setValue] = useState<string>('');
	const [opened, setOpened] = useState(false);
	const isAtm = window.location.pathname.split('/')[2] === 'atms';

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
				{isAtm && <AtmMenu />}
			</div>
		</MenuWrapper>
	);
};
