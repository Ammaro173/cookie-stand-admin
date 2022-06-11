function Form(props) {
	return (
		<div className='grid grid-cols-1 grid-rows-1 my-10 justify-items-center'>
			<form
				onSubmit={props.CreateSummaryHandler}
				className='grid justify-center w-3/4 grid-cols-1 grid-rows-3 gap-2 p-5 m-2 text-center rounded shadow-lg bg-emerald-400'
			>
				<div className='text-xl font-bold text-center'>
					<label htmlFor='title'>Create Cookie Stand</label>
				</div>
				<div className='grid grid-cols-10 align-left '>
					<label htmlFor='location' className='grid grid-cols-1 text-middle '>
						Location
					</label>
					<input type='text' id='location' className='h-6 col-span-9' placeholder='Enter a Location' />
				</div>
				<div className='grid grid-cols-4 grid-rows-1 gap-2 text-center '>
					<div className='grid grid-cols-1 grid-rows-2'>
						<label htmlFor='minCustomers'>Minimum customers per hour</label>
						<input type='number' id='minCustomers' placeholder='0' />
					</div>
					<div className='grid grid-cols-1 grid-rows-2'>
						<label htmlFor='maxCustomers'>Maximum customers per hour</label>
						<input type='number' id='maxCustomers' placeholder='0' />
					</div>
					<div className='grid grid-cols-1 grid-rows-2'>
						<label htmlFor='avgCookies'>Average cookies per sale</label>
						<input type='number' id='avgCookies' placeholder='0' />
					</div>
					<button
						type='submit'
						className='self-center h-16 px-4 py-2 font-bold rounded shadow w-60 bg-emerald-600 justify-self-center hover:bg-emerald-200 focus:shadow-outline focus:outline-none'
					>
						Create
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
