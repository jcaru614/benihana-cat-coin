import React from 'react';
import Link from 'next/link';
import { FaTelegram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { dexscreener } from '@/public/images';

const NavBar = () => {
	return (
		<header className='bg-red-700 text-white z-50'>
			{/* Header for small screens */}
			<div className='lg:hidden flex flex-col items-start p-6 w-full h-auto shadow-2xl'>
				<h1 className='text-3xl font-extrabold text-yellow-300 mb-6 drop-shadow-2xl hover:text-white'>
					Benihana Cat Coin - まじでヤバい!
				</h1>
				<ul className='flex flex-col space-y-3 mb-6'>
					<li>
						<Link href='#home'>
							<span className='cursor-pointer text-lg font-semibold hover:text-yellow-300'>Home - 猫の楽園</span>
						</Link>
					</li>
					<li>
						<Link href='#about'>
							<span className='cursor-pointer text-lg font-semibold hover:text-yellow-300'>
								About - これが伝説だ！
							</span>
						</Link>
					</li>
					<li>
						<Link href='#buy'>
							<span className='cursor-pointer text-lg font-semibold hover:text-yellow-300'>
								Buy - さあ、買おう！
							</span>
						</Link>
					</li>
				</ul>
				<ul className='flex space-x-6'>
					<li>
						<a
							href='https://x.com/BenihanaCatCoin'
							target='_blank'
							rel='noopener noreferrer'
							className='text-black hover:text-white'
						>
							<FaSquareXTwitter size={28} />
						</a>
					</li>
					<li>
						<a
							href='https://t.me/BenihanaCatCoin'
							target='_blank'
							rel='noopener noreferrer'
							className='text-black hover:text-white'
						>
							<FaTelegram size={28} />
						</a>
					</li>
					<li>
						<a
							href='https://dexscreener.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:filter hover:invert hover:brightness-0 hover:contrast-100'
						>
							<Image src={dexscreener} alt='Dex Screener' width={28} height={28} className='text-black' />
						</a>
					</li>
				</ul>
			</div>

			{/* Navbar for large screens */}
			<div className='hidden lg:flex justify-between items-center p-8 shadow-2xl'>
				<h1 className='text-4xl font-extrabold text-yellow-300 drop-shadow-2xl hover:text-white'>
					Benihana Cat Coin - まじでヤバい!
				</h1>
				<nav>
					<ul className='flex space-x-8'>
						<li>
							<Link href='#home'>
								<span className='cursor-pointer text-xl font-semibold hover:text-yellow-300'>Home - 猫の楽園</span>
							</Link>
						</li>
						<li>
							<Link href='#about'>
								<span className='cursor-pointer text-xl font-semibold hover:text-yellow-300'>
									About - これが伝説だ！
								</span>
							</Link>
						</li>
						<li>
							<Link href='#buy'>
								<span className='cursor-pointer text-xl font-semibold hover:text-yellow-300'>
									Buy - さあ、買おう！
								</span>
							</Link>
						</li>
					</ul>
				</nav>
				<ul className='flex space-x-8'>
					<li>
						<a
							href='https://x.com/BenihanaCatCoin'
							target='_blank'
							rel='noopener noreferrer'
							className='text-black hover:text-white'
						>
							<FaSquareXTwitter size={32} />
						</a>
					</li>
					<li>
						<a
							href='https://t.me/BenihanaCatCoin'
							target='_blank'
							rel='noopener noreferrer'
							className='text-black hover:text-white'
						>
							<FaTelegram size={32} />
						</a>
					</li>
					<li>
						<a
							href='https://dexscreener.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:filter hover:invert hover:brightness-0 hover:contrast-100'
						>
							<Image src={dexscreener} alt='Dex Screener' width={32} height={32} className='text-black' />
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default NavBar;
