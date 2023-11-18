import { Entity, MonthlyData } from '@/app/types/interfaces';
import React from 'react';
import {
	CartesianGrid,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Tooltip,
	Legend,
	Bar,
	BarChart
} from 'recharts';
import CustomTooltip from './custome-tooltip';

type Props = {
	data: Entity[];
};

const BarGraph = ({ data }: Props) => {
	return (
		<ResponsiveContainer
			width={'100%'}
			height={'100%'}
			className="!min-w-[600px]"
		>
			<BarChart
				data={data[0].monthlyData.sort((a: MonthlyData, b: MonthlyData) =>
					a.date > b.date ? 1 : -1
				)}
				margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
				barGap={2}
			>
				<XAxis dataKey="date" tick={{ fill: '#96969E' }} />
				<YAxis tick={{ fill: '#96969E' }} />
				<CartesianGrid
					strokeDasharray="3 3"
					strokeOpacity={0.2}
					color="#000"
					vertical={false}
				/>
				<Legend />
				<Tooltip cursor={{ fill: '#2F2F2F' }} content={<CustomTooltip />} />
				<Bar
					type="monotone"
					dataKey="Expenses"
					stroke="#F87171"
					fill="#F87171"
					opacity={0.9}
				/>
				<Bar
					type="monotone"
					dataKey="Revenue"
					stroke="#60A5FA"
					fill="#60A5FA"
					opacity={0.9}
				/>
				<Bar
					type="monotone"
					dataKey="Profit"
					stroke="#34D399"
					fill="#34D399"
					opacity={0.9}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default BarGraph;