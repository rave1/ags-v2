import React, { useState } from "react";
import { ChevronRight, Mail, MapPin, Phone, Menu, X } from "lucide-react";
import SvgComponent from "./components/Logo";
import technika from "@/assets/technika.webp";
import intro from "@/assets/intro.webp";

const App: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-200">
			{/* Header */}
			<header className="bg-zinc-900 text-white border-b border-zinc-800">
				<div className="container mx-auto px-4 py-4">
					<div className="flex flex-col items-center justify-center">
						{/* Logo Center Placement */}
						<SvgComponent />
						{/* Navigation and menu toggle below logo */}
						<div className="flex justify-between items-center w-full">
							{/* Mobile menu button */}
							<button
								className="md:hidden p-2"
								onClick={toggleMenu}
								aria-label="Toggle menu"
							>
								{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
							</button>

							{/* Desktop navigation */}
							<nav className="hidden md:flex space-x-8 mx-auto">
								<a
									href="#about"
									className="hover:text-blue-400 transition-colors"
								>
									O nas
								</a>
								<a
									href="#contact"
									className="hover:text-blue-400 transition-colors"
								>
									Kontakt
								</a>
							</nav>

							<div className="md:hidden w-8"></div>
						</div>
					</div>

					{/* Mobile navigation */}
					{isMenuOpen && (
						<nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4">
							<a
								href="#about"
								className="hover:text-blue-400 transition-colors"
							>
								O nas
							</a>
							<a
								href="#contact"
								className="hover:text-blue-400 transition-colors"
							>
								Kontakt
							</a>
						</nav>
					)}
				</div>
			</header>

			{/* Hero Section */}
			<section
				id="home"
				className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20"
			>
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						Profesjonalne rozwiązania audio
					</h1>
					<p className="text-xl md:text-2xl max-w-3xl mx-auto">
						Podnieś jakość swojego dźwięku dzięki sprzętowi premium i fachowej
						pomocy
					</p>
				</div>
			</section>

			{/* About Us Section */}
			<section id="about" className="py-16 bg-zinc-900">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<img
								src={technika}
								alt="Technika"
								className="rounded-lg shadow-lg w-full"
							/>
						</div>
						<div>
							<h3 className="text-3xl font-semibold mb-4 text-blue-400">
								Technika Sceniczna
							</h3>
							<p className="mb-4 text-zinc-300 text-xl">
								Pracujemy na urządzeniach firm: Midas, dB Technologies, NAW, HK
								Audio, POL-AUDIO, TW AUDiO, Shure, AKG, Audio Technica, ROBE
								Lighting, Martin Lighting, Eurolite. Oferujemy zadaszone sceny
								plenerowe o różnych parametrach, w zależności od potrzeby
							</p>
						</div>
						<div>
							<img
								src={intro}
								alt="Intro"
								className="rounded-lg shadow-lg w-full"
							/>
						</div>
						<div>
							<h3 className="text-3xl font-semibold mb-4 mt-6 text-blue-400">
								Realizacja
							</h3>
							<p className="text-zinc-300 text-xl">
								Zawodowo zajmujemy się kompleksową realizacją imprez oraz
								wydarzeń artystycznych, obsługą techniczną, a także organizacją
								koncertów artystów. Zapraszamy do współpracy!
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="contact" className="py-16 bg-zinc-900">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8">Kontakt</h2>

					<div className="flex items-center">
						<div className="">
							<div className="space-y-4 grid grid-cols-1 content-start">
								<div className="flex items-start">
									<MapPin className="mr-3 text-blue-400 mt-1" />
									<div className="">
										<h4 className="font-medium text-gray-200">Adres</h4>
										<p className="text-zinc-400">
											AGS Agnieszka Sopel <br />
											Sady 88
											<br />
											49-100 Niemodlin
											<br />
											NIP 9910166920
											<br />
											REGON 382457491
											<br />
											91 1050 1504 1000 0092 6393 6099 <br />
											(ING Bank Śląski S.A.)
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Phone className="mr-3 text-blue-400 mt-1" />
									<div>
										<h4 className="font-medium text-gray-200">Telefon</h4>
										<p className="text-zinc-400">
											<a href="tel:+48 604 974 235">+48 604 974 235</a>
										</p>
									</div>
								</div>

								<div className="flex items-start">
									<Mail className="mr-3 text-blue-400 mt-1" />
									<div>
										<h4 className="font-medium text-gray-200">Email</h4>
										<p className="text-zinc-400">
											<a href="mailto:biuro@agstechnika.pl">
												biuro@agstechnika.pl
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className="bg-black text-white py-8 mt-auto border-t border-zinc-800">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<h3 className="text-xl font-bold mb-4">AGS Technika</h3>
							<p className="text-zinc-400">
								Profesjonalne rozwiązania audio dla studiów, obiektów i twórców.
							</p>
						</div>

						<div>
							<h4 className="text-lg font-medium mb-4">Kontakt</h4>
							<ul>
								<li>
									<a
										href="#home"
										className="text-zinc-400 hover:text-white transition-colors"
									>
										AGS Agnieszka Sopel
									</a>
								</li>
								<li>
									<a
										href="#about"
										className="text-zinc-400 hover:text-white transition-colors"
									>
										Sady 88
									</a>
								</li>
								<li>
									<a
										href="#gear"
										className="text-zinc-400 hover:text-white transition-colors"
									>
										49-100 Niemodlin
									</a>
								</li>
								<li>
									<a
										href="#contact"
										className="text-zinc-400 hover:text-white transition-colors"
									>
										NIP 9910166920
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-400">
						<p>
							&copy; {new Date().getFullYear()} AGS Technika. All rights
							reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
