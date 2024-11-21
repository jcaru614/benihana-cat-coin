import Head from 'next/head';
import Image from 'next/image';
import { benihanaCat } from '@/public/images';
import NavBar from '@/components/NavBar';

export default function Home() {
	return (
		<div>
			<h1>test</h1>
		</div>
		// <div className='bg-gradient-to-r from-red-500 to-yellow-400 min-h-screen text-white'>
		// 	<Head>
		// 		<title>Benihana Cat Coin</title>
		// 		<meta name='description' content='Official website for the Benihana Cat Coin meme coin.' />
		// 		<link rel='icon' href='/favicon.ico' />
		// 	</Head>
		// 	<NavBar />
		// 	<main className='container mx-auto px-6'>
		// 		<section
		// 			id='home'
		// 			className='min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white via-yellow-50 to-white'
		// 		>
		// 			<h2 className='text-5xl font-extrabold text-red-600 leading-tight drop-shadow-lg'>
		// 				Welcome to Benihana Cat Coin - Get ready to *Merrrroow* your way to the top!
		// 			</h2>
		// 			<p className='text-2xl mt-6 text-gray-800'>
		// 				The hottest meme coin in town... Its rike sushi for your wallet!
		// 			</p>
		// 			<Image src={benihanaCat} alt='Benihana Cat' width={300} height={300} className='mt-8' />
		// 			<h1 className='mt-8 text-3xl font-bold text-red-600 drop-shadow-lg'>
		// 				I make a rearrry good hibachi!!! Hai!
		// 			</h1>
		// 		</section>

		// 		<section
		// 			id='about'
		// 			className='min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 py-20'
		// 		>
		// 			<h2 className='text-4xl font-extrabold text-red-600 leading-tight drop-shadow-lg'>
		// 				About Benihana Cat Coin - Welcome to the future of memes!
		// 			</h2>
		// 			<p className='text-xl mt-6 max-w-4xl text-gray-700'>
		// 				Benihana Cat Coin is the newest meme coin thats taking the crypto world by storm! With its quirky
		// 				charm and adorable cat character, it’s rike sushi for your wallet. You’ll be laughing all the way to
		// 				the blockchain, trust us, it’s the rear dear.
		// 			</p>
		// 		</section>

		// 		<section
		// 			id='buy'
		// 			className='min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 py-20'
		// 		>
		// 			<h2 className='text-4xl font-extrabold text-red-600 leading-tight drop-shadow-lg'>
		// 				How to Buy Benihana Cat Coin - Time to revel up!
		// 			</h2>
		// 			<p className='text-xl mt-6 max-w-4xl text-gray-700'>
		// 				Ready to join the Benihana Cat revolution? Here’s how you can get started:
		// 			</p>
		// 			<ol className='list-decimal list-inside mt-6 text-left max-w-4xl text-gray-700'>
		// 				<li>Make sure you have a wallet that can hold the coolest coins—Benihana Cat Coin, of course!</li>
		// 				<li>
		// 					Get yourself some Ethereum (ETH) or Binance Coin (BNB) from a crypto exchange, rike youre buying
		// 					sushi for your cat.
		// 				</li>
		// 				<li>
		// 					Head over to a decentralized exchange (DEX), and swap your ETH/BNB for the hottest coin on the
		// 					market—Benihana Cat Coin!
		// 				</li>
		// 				<li>
		// 					Store your Benihana Cat Coin in your wallet, and get ready for the ride of your life. Merrrroow!
		// 				</li>
		// 			</ol>
		// 		</section>
		// 	</main>

		// 	<footer className='bg-red-700 text-white py-6 text-center'>
		// 		<p className='text-lg'>
		// 			<a
		// 				href='https://vercel.com'
		// 				target='_blank'
		// 				rel='noopener noreferrer'
		// 				className='underline text-yellow-300'
		// 			>
		// 				Thanks for visiting! See you at the hibachi!
		// 			</a>
		// 		</p>
		// 	</footer>
		// </div>
	);
}
