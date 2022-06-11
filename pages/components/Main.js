import React from 'react';

function main() {
	return (
		<div>
			<form>
				<input type={'text'} placeholder={'Enter a city Location'} />
				<input type={'text'} placeholder={'Min Customers per hour'} />
				<input type={'text'} placeholder={'Max Customers per hour'} />
				<input type={'text'} placeholder={'Average cookies per sale'} />
				<input type={'submit'} placeholder='Create' />
			</form>
		</div>
	);
}

export default main;
