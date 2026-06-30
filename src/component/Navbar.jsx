import React from 'react';

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 border-b border-black/10 bg-white /80 shadow-lg shadow-black/10">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				<div className="text-lg font-semibold tracking-[0.2em] text-black uppercase">
					Portfolio
				</div>

				<ul className="flex items-center gap-2   text-base text-slate-200 ">
					<li>
						<a
							href="#home"
							className="inline-flex rounded-full px-4 py-2 text-black  relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#7843E9] before:transition-all before:duration-400 hover:before:w-full"
						>
							Home
							
						</a>
						
					</li>
					<li>
						<a
							href="#about"
							className="inline-flex rounded-full px-4 py-2 text-black  relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#7843E9] before:transition-all before:duration-400 hover:before:w-full"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#skills"
							className="inline-flex rounded-full px-4 py-2 text-black  relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#7843E9] before:transition-all before:duration-400 hover:before:w-full"
						>
							Skills
						</a>
					</li>
					<li>
						<a
							href="#projects"
							className="inline-flex rounded-full px-4 py-2 text-black  relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#7843E9] before:transition-all before:duration-400 hover:before:w-full"
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="inline-flex rounded-full px-4 py-2 text-black  relative pb-2 before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#7843E9] before:transition-all before:duration-400 hover:before:w-full"
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
