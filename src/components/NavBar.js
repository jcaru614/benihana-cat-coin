import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaTelegram, FaDiscord, FaTimes } from 'react-icons/fa';

const NavBar = () => {
	return (
		<header className='bg-red-700 text-white py-6'>
			<nav className='container mx-auto flex justify-between items-center'>
				<h1 className='text-3xl font-extrabold text-yellow-300'>Benihana Cat Coin - まじでヤバい!</h1>
				<ul className='flex space-x-6'>
					<li>
						<Link href='#home' passHref>
							<span className='cursor-pointer hover:text-yellow-300'>Home - 猫の楽園</span>
						</Link>
					</li>
					<li>
						<Link href='#about' passHref>
							<span className='cursor-pointer hover:text-yellow-300'>About - これが伝説だ！</span>
						</Link>
					</li>
					<li>
						<Link href='#buy' passHref>
							<span className='cursor-pointer hover:text-yellow-300'>Buy - さあ、買おう！</span>
						</Link>
					</li>
				</ul>

				{/* Social Media Icons */}
				<ul className='flex space-x-6'>
					<li>
						<a
							href='https://twitter.com/BenihanaCatCoin'
							target='_blank'
							rel='noopener noreferrer'
							className='text-yellow-300 hover:text-white'
						>
							<FaTwitter size={24} />
						</a>
					</li>
					<li>
						<a
							href='https://t.me/BenihanaCatCoin'
							target='_blank'
							rel='noopener noreferrer'
							className='text-yellow-300 hover:text-white'
						>
							<FaTelegram size={24} />
						</a>
					</li>
					<li>
						<a
							href='https://discord.com/invite/BenihanaCatCoin'
							target='_blank'
							rel='noopener noreferrer'
							className='text-yellow-300 hover:text-white'
						>
							<FaDiscord size={24} />
						</a>
					</li>
					{/* Close Icon (FaTimes) */}
					<li>
						<button className='text-yellow-300 hover:text-white'>
							<FaTimes size={24} />
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
