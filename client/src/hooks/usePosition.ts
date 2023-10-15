import { useState, useEffect } from 'react';

export const usePosition = () => {
	//55.742833° 37.648011°
	const [position, setPosition] = useState({
		latitude: 55.742833,
		longitude: 37.648011,
	});
	const [error, setError] = useState<string | null>(null);

	const onChange = ({
		coords: { latitude, longitude },
	}: GeolocationPosition) => {
		setPosition({ latitude, longitude });
	};

	const onError = (error: GeolocationPositionError) => {
		setError(error.message);
	};

	useEffect(() => {
		const geo = navigator.geolocation;

		if (!geo) {
			setError('Геолокация не поддерживается браузером');
			return;
		}

		const watcher = geo.watchPosition(onChange, onError);

		return () => geo.clearWatch(watcher);
	}, []);

	return { ...position, error };
};
