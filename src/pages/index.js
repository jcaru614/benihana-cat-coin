import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { benihanaCat } from '@/public/images';

export default function Home() {
	return (
		<div className='bg-gradient-to-r from-red-500 to-yellow-400 min-h-screen text-white'>
			<Head>
				<title>Benihana Cat Coin</title>
				<meta name='description' content='Official website for the Benihana Cat Coin meme coin.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header className='bg-opacity-80 text-white py-6'>
				<nav className='container mx-auto flex justify-between items-center'>
					<h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600'>
						Benihana Cat Coin - まじでヤバい!
					</h1>
					<ul className='flex space-x-8'>
						<li>
							<Link href='#home' passHref>
								<span className='cursor-pointer hover:text-black text-lg font-medium transform hover:scale-105 transition-all'>
									Home - 猫の楽園
								</span>
							</Link>
						</li>
						<li>
							<Link href='#about' passHref>
								<span className='cursor-pointer hover:text-black text-lg font-medium transform hover:scale-105 transition-all'>
									About - これが伝説だ！
								</span>
							</Link>
						</li>
						<li>
							<Link href='#buy' passHref>
								<span className='cursor-pointer hover:text-black text-lg font-medium transform hover:scale-105 transition-all'>
									Buy - さあ、買おう！
								</span>
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main className='container mx-auto px-6'>
				<section
					id='home'
					className='min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-pink-600 via-yellow-500 to-orange-400 py-20'
				>
					<h2 className='text-6xl font-extrabold text-white drop-shadow-lg'>
						Welcome to Benihana Cat Coin - Get ready to *merrrroow* your way to the top!
					</h2>
					<p className='text-2xl mt-4 text-white'>
						The hottest meme coin in town... It's rike sushi for your wallet!
					</p>
					<Image
						src={benihanaCat}
						alt='Benihana Cat'
						width={400}
						height={400}
						className='mt-6 rounded-full shadow-xl transform hover:scale-110 transition-all'
					/>
					<h1 className='mt-8 text-4xl font-extrabold text-white'>I make a rearrry good hibachi!!! Hai!</h1>
				</section>

				<section
					id='about'
					className='min-h-screen flex flex-col justify-center items-center text-center bg-white py-24'
				>
					<h2 className='text-5xl font-extrabold text-red-600 text-shadow'>
						About Benihana Cat Coin - Welcome to the future of memes!
					</h2>
					<p className='text-xl mt-4 max-w-3xl text-black leading-relaxed'>
						Benihana Cat Coin is the newest meme coin that's taking the crypto world by storm! With its quirky
						charm and adorable cat character, it’s rike sushi for your wallet. You’ll be laughing all the way to
						the blockchain, trust us, it’s the rear dear.
					</p>
				</section>

				<section
					id='buy'
					className='min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-yellow-400 to-red-600 py-24'
				>
					<h2 className='text-5xl font-extrabold text-white'>
						How to Buy Benihana Cat Coin - Time to revel up!
					</h2>
					<p className='text-xl mt-4 max-w-3xl text-black'>
						Ready to join the Benihana Cat revolution? Here’s how you can get started:
					</p>
					<ol className='list-decimal list-inside mt-6 text-left max-w-prose text-black'>
						<li>Make sure you have a wallet that can hold the coolest coins—Benihana Cat Coin, of course!</li>
						<li>
							Get yourself some Ethereum (ETH) or Binance Coin (BNB) from a crypto exchange, rike you're buying
							sushi for your cat.
						</li>
						<li>
							Head over to a decentralized exchange (DEX), and swap your ETH/BNB for the hottest coin on the
							market—Benihana Cat Coin!
						</li>
						<li>
							Store your Benihana Cat Coin in your wallet, and get ready for the ride of your life. Merrrroow!
						</li>
					</ol>
				</section>
			</main>

			<footer className='bg-red-600 text-white py-6 text-center'>
				<p className='text-lg'>
					<a
						href='https://vercel.com'
						target='_blank'
						rel='noopener noreferrer'
						className='underline text-white transform hover:scale-105 transition-all'
					>
						Thanks for visiting! See you at the hibachi! 🍣
					</a>
				</p>
			</footer>
		</div>
	);
}
