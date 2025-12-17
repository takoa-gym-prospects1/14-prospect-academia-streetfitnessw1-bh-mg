import React from 'react';
import { content } from '../Content';
import ScrollReveal from './ScrollReveal';
import { ChevronRight } from 'lucide-react';

const Features: React.FC = () => {
    const { features, infos } = content;

    if (!features.enabled) return null;

    const { cards } = features;

    return (
        <section className="w-full bg-white py-16 md:py-24" id="features">
            <div className="container-custom">
                {/* Header */}
                <ScrollReveal>
                    {/* Header Full Width with Pill and Line */}
                    <div className="flex items-center gap-4 mb-8">
                        <span className="border border-primary rounded-full px-5 py-2 text-sm font-medium font-grotesk text-neutral-800 bg-neutral-50">
                            {features.pill}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="h-px bg-neutral-200 flex-1"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            {/* Headline - quebra de linha tratada com whitespace-pre-line */}
                            <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] uppercase tracking-tight whitespace-pre-line">
                                {features.headline}
                            </h2>
                        </div>

                        {/* Subheadline à direita */}
                        <div className="max-w-md md:pt-4">
                            <p className="text-neutral-500 text-lg leading-relaxed">
                                {features.subHeadline.replace('[Nome da Academia]', infos.name)}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)] lg:auto-rows-auto lg:h-[700px]">

                    {/* COLUNA 1 (Esquerda) */}
                    <div className="flex flex-col gap-6 h-full">
                        {/* Card 1: Branco / Foto + Texto */}
                        <ScrollReveal delay={0.1} className="flex-1">
                            <div className="h-full bg-white rounded-[32px] p-8 border border-neutral-100 shadow-xl shadow-neutral-100/50 flex flex-col items-start relative overflow-hidden group">
                                {/* FOTO 1 (Principal): Ajuste 'w-32 h-32' para tamanho, 'left-8' para alinhamento à esquerda, e 'border-2' para borda mais fina */}
                                <div className="absolute top-8 left-8 w-32 h-32 rounded-2xl overflow-hidden rotate-12 shadow-lg z-10 border-2 border-white">
                                    <img src={cards.card1.image} className="w-full h-full object-cover" alt="" />
                                </div>
                                {/* FOTO 2 (Fundo da Foto 1): Ajuste 'left-12' para deslocamento relativo à primeira e 'w-32 h-32' para mesmo tamanho */}
                                <div className="absolute top-8 left-12 w-32 h-32 rounded-2xl overflow-hidden -rotate-6 shadow-lg z-0 opacity-60">
                                    <img src={cards.card1.image} className="w-full h-full object-cover grayscale" alt="" />
                                </div>

                                <div className="mt-auto relative z-20 pt-48">
                                    <h3 className="font-grotesk font-bold text-2xl text-black uppercase leading-tight mb-4">
                                        {cards.card1.title}
                                    </h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed">
                                        {cards.card1.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Card 2: Vermelho (Primary Color) */}
                        <ScrollReveal delay={0.2} className="flex-1">
                            <div className="h-full bg-primary rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden">
                                <div>
                                    <h3 className="font-grotesk font-bold text-2xl md:text-3xl text-white uppercase leading-none mb-2">
                                        {cards.card2.title}
                                    </h3>
                                    <p className="font-grotesk font-bold text-white text-sm uppercase">
                                        {cards.card2.subtitle}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-8">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <div className="w-4 h-4 bg-black rounded-sm transform rotate-45" />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="font-grotesk font-bold text-white uppercase text-sm">
                                            {infos.name} {cards.card2.suffix}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* COLUNA 2 (Central - Card Alto) */}
                    <ScrollReveal delay={0.3} className="h-full">
                        <div className="h-full bg-neutral-900 rounded-[32px] overflow-hidden relative group">
                            <img src={cards.card3.image} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />

                            <div className="absolute top-8 left-0 w-full text-center">
                                <span className="text-white/80 font-grotesk text-sm uppercase tracking-widest">
                                    {cards.card3.tagText}
                                </span>
                            </div>

                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="bg-white text-black text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
                                    {cards.card3.price}
                                </span>
                                <h3 className="font-bebas text-4xl text-white leading-tight mb-2">
                                    {cards.card3.title}
                                </h3>
                                <p className="text-white/70 text-sm font-grotesk">
                                    {cards.card3.subtitle}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* COLUNA 3 (Direita) */}
                    <div className="flex flex-col gap-6 h-full">
                        {/* Card 4: Imagem com Badge */}
                        <ScrollReveal delay={0.4} className="flex-1">
                            <div className="h-full bg-neutral-200 rounded-[32px] overflow-hidden relative group min-h-[300px]">
                                <img src={cards.card4.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white px-6 py-3 rounded-full shadow-lg transform group-hover:scale-105 transition-transform">
                                        <span className="font-grotesk font-bold text-black text-lg">
                                            {cards.card4.text}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Card 5: Imagem Simples */}
                        <ScrollReveal delay={0.5} className="flex-1">
                            <div className="h-full bg-neutral-200 rounded-[32px] overflow-hidden relative group min-h-[300px]">
                                <img src={cards.card5.image} className="w-full h-full object-cover" alt="" />
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
