import React, { useState } from "react";

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const closeMenu = () => {
		setMenu(false);
	};

	return (
		<nav className="sticky top-0 z-50 border-b border-black/10 bg-white shadow-lg shadow-black/10">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<div className="text-lg font-semibold tracking-[0.2em] text-black uppercase">
					Portfolio
				</div>

				{/* Desktop Menu */}
				<ul className="hidden md:flex items-center gap-2 text-base">
					<li>
						<a
							href="#home"
							className="inline-flex rounded-full px-4 py-2 text-black relative before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#7843E9] before:transition-all before:duration-300 hover:before:w-full"
						>
							Home
						</a>
					</li>

					<li>
						<a
							href="#about"
							className="inline-flex rounded-full px-4 py-2 text-black relative before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#7843E9] before:transition-all before:duration-300 hover:before:w-full"
						>
							About
						</a>
					</li>

					<li>
						<a
							href="#skills"
							className="inline-flex rounded-full px-4 py-2 text-black relative before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#7843E9] before:transition-all before:duration-300 hover:before:w-full"
						>
							Skills
						</a>
					</li>

					<li>
						<a
							href="#projects"
							className="inline-flex rounded-full px-4 py-2 text-black relative before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#7843E9] before:transition-all before:duration-300 hover:before:w-full"
						>
							Projects
						</a>
					</li>

					<li>
						<a
							href="#contact"
							className="inline-flex rounded-full px-4 py-2 text-black relative before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-[#7843E9] before:transition-all before:duration-300 hover:before:w-full"
						>
							Contact
						</a>
					</li>
				</ul>

				{/* Hamburger */}
				<button
					className="md:hidden text-3xl text-black"
					onClick={() => setMenu(!menu)}
				>
					<i className={menu ? "bx bx-x" : "bx bx-menu"}></i>
				</button>
			</div>

			{/* Mobile Menu */}
			{menu && (
				<ul className="md:hidden flex flex-col items-center gap-4 bg-white py-6 shadow-md">
					<li>
						<a href="#home" onClick={closeMenu}>
							Home
						</a>
					</li>

					<li>
						<a href="#about" onClick={closeMenu}>
							About
						</a>
					</li>

					<li>
						<a href="#skills" onClick={closeMenu}>
							Skills
						</a>
					</li>

					<li>
						<a href="#projects" onClick={closeMenu}>
							Projects
						</a>
					</li>

					<li>
						<a href="#contact" onClick={closeMenu}>
							Contact
						</a>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
