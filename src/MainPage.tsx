import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Footer from './components/Footer';
import StickyNavbar from './components/StickyNavbar';
import { content } from './Content';

const MainPage: React.FC = () => {
    // Inject CSS color variables dynamically from Content.ts
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--color-primary', content.colors.primary);
        root.style.setProperty('--color-primary-dark', content.colors.primaryDark);
        root.style.setProperty('--color-secondary', content.colors.secondary);
        root.style.setProperty('--color-background', content.colors.background);
        root.style.setProperty('--color-text', content.colors.text);
        root.style.setProperty('--color-text-muted', content.colors.textMuted);
        root.style.setProperty('--color-accent', content.colors.accent);
    }, []);

    return (
        <HelmetProvider>
            <div className="min-h-screen bg-white text-slate-900 selection:bg-primary selection:text-black">
                <SEO />
                <StickyNavbar />
                <main>
                    <Hero />
                    <About />
                    <Features />
                    <Team />
                    <Pricing />
                    <Testimonials />
                    <FAQ />
                    <Location />
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    );
};

export default MainPage;
