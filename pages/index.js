import Head from 'next/head';
import Header from './components/Headers';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

function Home() {
	return (
		<div className='bg-emerald-50'>
			<Head>
				<title>Cookie Stand Admin</title>
			</Head>

			<Header />

			<Main />

			<Footer />
		</div>
	);
}

export default Home;
