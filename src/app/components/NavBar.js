import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaTelegram, FaDiscord, FaTimes } from 'react-icons/fa';

const NavBar = () => {
	return (
		<header className='bg-white shadow-xl py-3 mt-6 rounded-lg'>
			<nav className='container mx-auto flex items-center justify-between px-6'>
				{/* Social Media Icons */}
				<div className='flex items-center space-x-6'>
					<a href='#' aria-label='Twitter'>
						<FaTwitter size='24px' className='text-gray-800' />
					</a>
					<a href='#' aria-label='Telegram'>
						<FaTelegram size='24px' className='text-gray-800' />
					</a>
					<a href='#' aria-label='Discord'>
						<FaDiscord size='24px' className='text-gray-800' />
					</a>
					<a href='#' aria-label='Close'>
						<FaTimes size='24px' className='text-gray-800' />
					</a>
				</div>

				{/* Navigation Links */}
				<ul className='flex space-x-8 text-lg font-bold text-black'>
					<li>
						<Link href='#home'>
							<span className='cursor-pointer'>HOME</span>
						</Link>
					</li>
					<li>
						<Link href='#about'>
							<span className='cursor-pointer'>About</span>
						</Link>
					</li>
					<li>
						<Link href='#faq'>
							<span className='cursor-pointer'>FAQ</span>
						</Link>
					</li>
				</ul>

				{/* Buy Token Button */}
				<div>
					<Link
						href='https://raydium.io/swap/'
						target='_blank'
						rel='noopener noreferrer'
						className='bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition'
					>
						BUY TOKEN
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
