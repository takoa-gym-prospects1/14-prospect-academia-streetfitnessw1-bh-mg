import React from 'react';
import { Target, Dumbbell, Users } from 'lucide-react'; // Ícones para as features
import { content } from '../Content';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
    const { about, images, infos } = content;

    if (!about.enabled) return null;

    // Ícones mapeados para as features existentes
    const icons = [Target, Dumbbell, Users];

    return (
        <section className="w-full bg-white py-16 md:py-24" id="about">
            <div className="container-custom">
                {/* Header Full Width */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="border border-primary rounded-full px-5 py-2 text-sm font-medium font-grotesk text-neutral-800">
                            Sobre Nós
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="h-px bg-neutral-200 flex-1"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Text Content */}
                    <div className="order-1"> {/* Mobile: Texto primeiro (padrão) */}
                        <ScrollReveal>
                            {/* Headline */}
                            <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] mb-6 tracking-tight uppercase">
                                {about.headline}
                            </h2>

                            {/* Description */}
                            <p className="text-neutral-600 text-lg leading-relaxed mb-10">
                                {about.description}
                            </p>

                            {/* Features List (New Design) */}
                            <div className="space-y-4">
                                {about.features.map((feature, index) => {
                                    const Icon = icons[index % icons.length];
                                    return (
                                        <div key={index} className="flex gap-5 p-5 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300">
                                            {/* Icon Box */}
                                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-black">
                                                <Icon size={24} strokeWidth={1.5} />
                                            </div>
                                            {/* Content */}
                                            <div>
                                                <h4 className="font-grotesk font-bold text-sm md:text-base text-black uppercase tracking-wide mb-1">
                                                    {feature.title}
                                                </h4>
                                                <p className="text-neutral-500 text-sm leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Image (Mobile: Last) */}
                    {/* Adicionado mt-8 lg:mt-16 para baixar a imagem em relação ao texto como solicitado */}
                    <div className="order-2 relative h-full min-h-[500px] lg:min-h-full">
                        <ScrollReveal direction="right" delay={0.2} className="h-full">
                            <div className="relative w-full h-full rounded-[32px] overflow-hidden group">
                                <img
                                    src={images.aboutImage}
                                    alt={about.headline}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay / Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Bottom Text Overlay */}
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-center">
                                    <h3 className="font-bebas text-4xl md:text-5xl text-white uppercase tracking-wider mb-2">
                                        {infos.name}
                                    </h3>
                                    <p className="font-grotesk text-white/80 text-sm md:text-base uppercase tracking-widest">
                                        {infos.miniAddress}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
