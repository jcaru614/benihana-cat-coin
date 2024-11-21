// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { benihanaCat } from '@/app/public/images';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Benihana Cat Coin</title>
				<meta name='description' content='Official website for the Benihana Cat Coin meme coin.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header className='bg-red-600 text-white py-4'>
				<nav className='container mx-auto flex justify-between items-center'>
					<h1 className='text-3xl font-bold'>Benihana Cat Coin</h1>
					<ul className='flex space-x-4'>
						<li>
							<Link href='#home' passHref>
								<span className='cursor-pointer hover:text-black'>Home</span>
							</Link>
						</li>
						<li>
							<Link href='#about' passHref>
								<span className='cursor-pointer hover:text-black'>About</span>
							</Link>
						</li>
						<li>
							<Link href='#buy' passHref>
								<span className='cursor-pointer hover:text-black'>Buy</span>
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main className='container mx-auto px-4'>
				<section id='home' className='min-h-screen flex flex-col justify-center items-center text-center'>
					<h2 className='text-5xl font-bold text-red-600'>Welcome to Benihana Cat Coin</h2>
					<p className='text-xl mt-4 text-black'>The hottest new meme coin in town!</p>
					<Image src={benihanaCat} alt='Benihana Cat' width={300} height={300} className='mt-6' />
				</section>

				<section
					id='about'
					className='min-h-screen flex flex-col justify-center items-center text-center bg-white py-20'
				>
					<h2 className='text-4xl font-bold text-red-600'>About Benihana Cat Coin</h2>
					<p className='text-xl mt-4 max-w-prose text-black'>
						Benihana Cat Coin is the newest meme coin taking the crypto world by storm. With its playful and
						unique character, it aims to bring joy and entertainment to the cryptocurrency community.
					</p>
				</section>

				<section
					id='buy'
					className='min-h-screen flex flex-col justify-center items-center text-center bg-white py-20'
				>
					<h2 className='text-4xl font-bold text-red-600'>Buy Benihana Cat Coin</h2>
					<p className='text-xl mt-4 max-w-prose text-black'>
						Follow these simple steps to purchase Benihana Cat Coin and join the fun:
					</p>
					<ol className='list-decimal list-inside mt-6 text-left max-w-prose text-black'>
						<li>Create a cryptocurrency wallet that supports meme coins.</li>
						<li>Purchase Ethereum (ETH) or Binance Coin (BNB) from a cryptocurrency exchange.</li>
						<li>Exchange your ETH or BNB for Benihana Cat Coin on a decentralized exchange (DEX).</li>
						<li>Store your Benihana Cat Coin in your wallet and enjoy the ride!</li>
					</ol>
				</section>
			</main>

			<footer className='bg-red-600 text-white py-4 text-center'>
				<p>
					Powered by{' '}
					<a href='https://vercel.com' target='_blank' rel='noopener noreferrer' className='underline'>
						Vercel
					</a>
				</p>
			</footer>
		</div>
	);
}
