import { useState, useEffect } from 'react';

export const usePosition = () => {
	const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
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
