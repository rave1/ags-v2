import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRight, Mail, MapPin, Phone, Menu, X } from 'lucide-react';
import SvgComponent from './components/Logo';

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
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
                <a href="#gear" className="hover:text-blue-400 transition-colors">Audio Gear</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </nav>

              {/* Empty div for alignment on mobile */}
              <div className="md:hidden w-8"></div>
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              <a href="#gear" className="hover:text-blue-400 transition-colors">Audio Gear</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Audio Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Elevate your sound with premium equipment and expert guidance
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Explore Our Products <ChevronRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="/api/placeholder/600/400" alt="Our studio" className="rounded-lg shadow-lg w-full" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Our Story</h3>
              <p className="mb-4 text-zinc-300">
                Founded in 2005, SoundCraft Audio was born from a passion for exceptional sound and a commitment to audio excellence. What began as a small consulting service for recording studios has evolved into a comprehensive provider of professional audio solutions.
              </p>
              <p className="mb-4 text-zinc-300">
                Our team consists of industry veterans, experienced sound engineers, and passionate audiophiles who understand the needs of professionals in broadcasting, music production, live sound, and installation environments.
              </p>
              <h3 className="text-2xl font-semibold mb-4 mt-6 text-blue-400">Our Mission</h3>
              <p className="text-zinc-300">
                We're dedicated to providing the highest quality audio equipment coupled with expert advice and support. Our mission is to help creators, engineers, and institutions achieve their sonic vision through cutting-edge technology and personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Kontakt</h2>

          <div className="grid md:grid-cols-1 gap-8">

            <div>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="mr-3 text-blue-400 mt-1" />
                      <div>
                        <h4 className="font-medium">Adres</h4>
                        <p className="text-zinc-400">
                          AGS Agnieszka Sopel <br />
                          Sady 88<br />
                          49-100 Niemodlin<br />
                          NIP 9910166920<br />
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="mr-3 text-blue-400 mt-1" />
                      <div>
                        <h4 className="font-medium">Telefon</h4>
                        <p className="text-zinc-400">+48 604 974 235</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="mr-3 text-blue-400 mt-1" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-zinc-400">biuro@agstechnika.pl</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8 mt-auto border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SoundCraft Audio</h3>
              <p className="text-zinc-400">
                Professional audio solutions for studios, venues, and creators.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-zinc-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-zinc-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#gear" className="text-zinc-400 hover:text-white transition-colors">Audio Gear</a></li>
                <li><a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#gear" className="text-zinc-400 hover:text-white transition-colors">Microphones</a></li>
                <li><a href="#gear" className="text-zinc-400 hover:text-white transition-colors">Mixers</a></li>
                <li><a href="#gear" className="text-zinc-400 hover:text-white transition-colors">Monitors</a></li>
                <li><a href="#gear" className="text-zinc-400 hover:text-white transition-colors">Interfaces</a></li>
                <li><a href="#gear" className="text-zinc-400 hover:text-white transition-colors">Headphones</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Newsletter</h4>
              <p className="text-zinc-400 mb-2">
                Subscribe to receive updates on new products and special offers.
              </p>
              <div className="flex">
                <Input
                  placeholder="Your email"
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
                <Button className="ml-2 bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-400">
            <p>&copy; {new Date().getFullYear()} SoundCraft Audio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;