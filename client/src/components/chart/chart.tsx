import { Chart as GoogleChart } from 'react-google-charts';

export const Chart: React.FC<{ workloads: Record<string, number> }> = ({
	workloads,
}) => {
	const data = [['День', '']];

	const dayMap: Record<string, string> = {
		friday: 'пт',
		monday: 'пн',
		tuesday: 'вт',
		wednesday: 'ср',
		thursday: 'чт',
		saturday: 'сб',
		sunday: 'вс',
	};

	Object.keys(workloads).map((item) => {
		data.push([dayMap[item], workloads[item].toString()]);
	});

	const options = {
		chart: {
			title: '',
			subtitle: '',
		},
	};
	return (
		<GoogleChart
			chartType="Bar"
			width="100%"
			height="400px"
			data={data}
			options={options}
		/>
	);
};
