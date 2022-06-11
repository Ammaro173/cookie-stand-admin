import { useState } from 'react';
import Form from './Forms';

export default function Main() {
	const [report, setReport] = useState('Kidnly Create a Cookie Stand');
	const CreateSummaryHandler = (e) => {
		e.preventDefault();
		const report_summary = {
			location: e.target.location.value || 'No location !',
			minCustomers: e.target.minCustomers.value || 'Zero !',
			maxCustomers: e.target.maxCustomers.value || 'Zero !',
			avgCookies: e.target.avgCookies.value || 'Zero !',
		};
		setReport(report_summary);
	};
	return (
		<>
			<Form CreateSummaryHandler={CreateSummaryHandler} />
			<br />
			<Place_holder dict={report} />
		</>
	);
}

function Place_holder(report) {
	// console.log(report);
	return (
		<>
			<p className='text-center text-gray-400 shadow '>Report Table Coming Soon...</p>
			<p className='my-10 text-center text-gray-400 '>{JSON.stringify(report.dict)}</p>
		</>
	);
}
