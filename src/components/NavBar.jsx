import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaTelegram } from 'react-icons/fa';
import Image from 'next/image';
import { dexscreener } from '@/public/images';

const NavBar = () => {
	return (
		<header className='bg-red-700 text-white z-50'>
			{/* Header for small screens */}
			<div className='lg:hidden flex flex-col items-start p-4 w-full h-auto shadow-lg'>
				<h1 className='text-2xl font-extrabold text-yellow-300 mb-4'>Benihana Cat Coin - まじでヤバい!</h1>
				<ul className='flex flex-col space-y-2 mb-4'>
					<li>
						<Link href='#home'>
							<span className='cursor-pointer hover:text-yellow-300'>Home - 猫の楽園</span>
						</Link>
					</li>
					<li>
						<Link href='#about'>
							<span className='cursor-pointer hover:text-yellow-300'>About - これが伝説だ！</span>
						</Link>
					</li>
					<li>
						<Link href='#buy'>
							<span className='cursor-pointer hover:text-yellow-300'>Buy - さあ、買おう！</span>
						</Link>
					</li>
				</ul>
				<ul className='flex space-x-4 mb-4'>
					<li>
						<a
							href='https://twitter.com/BenihanaCatCoin'
							target='_blank'
							rel='noopener noreferrer'
							className='text-black hover:text-white'
						>
							<FaTwitter size={24} />
						</a>
					</li>
					<li>
						<a
							href='https://t.me/BenihanaCatCoin'
							target='_blank'
							rel='noopener noreferrer'
							className='text-black hover:text-white'
						>
							<FaTelegram size={24} />
						</a>
					</li>
					<li>
						<a href='https://dexscreener.com/' target='_blank' rel='noopener noreferrer'>
							<Image src={dexscreener} alt='Discord' width={24} height={24} className='text-black' />
						</a>
					</li>
				</ul>
			</div>

			{/* Navbar for large screens */}
			<div className='hidden lg:flex justify-between items-center p-6 shadow-lg'>
				<h1 className='text-3xl font-extrabold text-yellow-300'>Benihana Cat Coin - まじでヤバい!</h1>
				<nav>
					<ul className='flex space-x-6'>
						<li>
							<Link href='#home'>
								<span className='cursor-pointer hover:text-yellow-300'>Home - 猫の楽園</span>
							</Link>
						</li>
						<li>
							<Link href='#about'>
								<span className='cursor-pointer hover:text-yellow-300'>About - これが伝説だ！</span>
							</Link>
						</li>
						<li>
							<Link href='#buy'>
								<span className='cursor-pointer hover:text-yellow-300'>Buy - さあ、買おう！</span>
							</Link>
						</li>
					</ul>
				</nav>
				<ul className='flex space-x-6'>
					<li>
						<a
							href='https://twitter.com/BenihanaCatCoin'
							target='_blank'
							rel='noopener noreferrer'
							className='text-black hover:text-white'
						>
							<FaTwitter size={24} />
						</a>
					</li>
					<li>
						<a
							href='https://t.me/BenihanaCatCoin'
							target='_blank'
							rel='noopener noreferrer'
							className='text-black hover:text-white'
						>
							<FaTelegram size={24} />
						</a>
					</li>
					<li>
						<a href='https://dexscreener.com/' target='_blank' rel='noopener noreferrer'>
							<Image src={dexscreener} alt='Discord' width={24} height={24} className='text-black' />
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default NavBar;
