import React from 'react';

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 border-b border-black/10 bg-white/80 ">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				<div className="text-lg font-semibold tracking-[0.2em] text-white uppercase">
					Portfolio
				</div>

				<ul className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-slate-200 shadow-lg shadow-black/10">
					<li>
						<a
							href="#home"
							className="inline-flex rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="#about"
							className="inline-flex rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#projects"
							className="inline-flex rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="inline-flex rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
