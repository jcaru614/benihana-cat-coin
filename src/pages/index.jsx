import Head from 'next/head';
import Image from 'next/image';
import { benihanaCat } from '@/public/images';
import { NavBar } from '@/components';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Benihana Cat Coin</title>
				<meta name='description' content='Official website for the Benihana Cat Coin meme coin.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavBar />
			<main className='mr-5 ml-5 mt-5'>
				<section
					id='home'
					className='min-h-screen flex flex-col justify-center items-center text-center bg-white rounded-lg shadow-lg w-full max-w-full px-4 sm:px-8 py-8 sm:py-12'
				>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-600 leading-tight drop-shadow-lg'>
						Welcome to Benihana Cat Coin - Get ready to Meoow your way to massive gains!
					</h2>
					<p className='text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 text-gray-800'>
						The hottest meme coin in town... It’s like sushi for your wallet!
					</p>
					<video autoPlay loop muted height='150' className='mt-6 sm:mt-8'>
						<source src='/video.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>

					<h1 className='mt-6 sm:mt-8 text-2xl sm:text-3xl font-bold text-red-600 drop-shadow-lg'>
						I make a really good hibachi!!! Hai!
					</h1>
				</section>

				<section
					id='about'
					className='min-h-screen relative flex flex-col justify-center items-center text-center bg-white rounded-lg shadow-lg w-full max-w-full px-4 sm:px-8 py-8 sm:py-12 mt-8'
				>
					<Image
						src={benihanaCat}
						alt='Benihana Cat'
						layout='fill'
						objectFit='cover'
						className='absolute inset-0 z-0 p-10'
					/>
					<div className='relative z-10 px-6 py-4 max-w-2xl bg-black bg-opacity-50 rounded-lg'>
						<h2 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl z-10'>
							About Benihana Cat Coin - Welcome to the future of memes!
						</h2>

						<p className='text-xl sm:text-2xl md:text-3xl text-white font-bold drop-shadow-2xl'>
							Benihana Cat Coin is the newest meme coin that’s taking the crypto world by storm! With its quirky
							charm and adorable cat character, it’s like sushi for your wallet. You’ll be laughing all the way to
							the blockchain, trust us, it’s the real deal.
						</p>
					</div>
				</section>

				<section
					id='buy'
					className='min-h-screen relative flex flex-col justify-center items-center text-center bg-white rounded-lg shadow-lg w-full max-w-full px-4 sm:px-8 py-8 sm:py-12 mt-8'
				>
					<h2 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-600 leading-tight drop-shadow-2xl z-10'>
						How to Buy Benihana Cat Coin - Time to level up!
					</h2>

					<p className='text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 max-w-2xl text-red-600 font-bold drop-shadow-2xl z-10 relative'>
						Ready to join the Benihana Cat revolution? Here’s how you can get started:
					</p>

					<div className='relative z-10 px-6 py-4 max-w-2xl bg-black bg-opacity-50 rounded-lg mt-10'>
						<ol className='list-decimal list-inside mt-4 sm:mt-6 text-left max-w-2xl text-white font-bold drop-shadow-2xl'>
							<li className='mt-2'>
								Make sure you have a wallet that can hold the coolest coins—Benihana Cat Coin, of course!
							</li>
							<li className='mt-2'>
								Get yourself some Ethereum (ETH) or Binance Coin (BNB) from a crypto exchange, like you’re buying
								sushi for your cat.
							</li>
							<li className='mt-2'>
								Head over to a decentralized exchange (DEX), and swap your ETH/BNB for the hottest coin on the
								market— Benihana Cat Coin!
							</li>
							<li className='mt-2'>
								Store your Benihana Cat Coin in your wallet, and get ready for the ride of your life. Meoow!
							</li>
						</ol>
					</div>
				</section>
				
			</main>

			<footer className='bg-red-700 text-white py-4 sm:py-6 text-center'>
				<p className='text-sm sm:text-base md:text-lg'>Thanks for visiting! See you at the hibachi!</p>
			</footer>
		</div>
	);
}
