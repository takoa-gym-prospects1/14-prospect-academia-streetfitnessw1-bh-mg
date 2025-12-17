import React from 'react';
import { content } from '../Content';
import ScrollReveal from './ScrollReveal';
import { Check, ChevronRight } from 'lucide-react';

const Pricing: React.FC = () => {
    const { pricing, infos } = content;

    if (!pricing.enabled) return null;

    const handleWhatsAppClick = (message: string) => {
        const text = encodeURIComponent(message);
        window.open(`https://wa.me/${infos.whatsapp.replace(/\D/g, '')}?text=${text}`, '_blank');
    };

    return (
        <section className="w-full bg-[#F8F9FA] py-16 md:py-24" id="pricing">
            <div className="container-custom">
                {/* Header Full Width with Pill and Line */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="border border-primary rounded-full px-5 py-2 text-sm font-medium font-grotesk text-neutral-800 bg-white">
                            {pricing.pill}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="h-px bg-neutral-200 flex-1"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>

                    <div className="flex flex-col items-center text-center gap-6 mb-16 max-w-4xl mx-auto">
                        <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] uppercase tracking-tight">
                            {pricing.headline}
                        </h2>
                        <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">
                            {pricing.subtitle}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                    {pricing.plans.map((plan, index) => {
                        const isHighlight = plan.highlighted;

                        return (
                            <ScrollReveal key={index} delay={index * 0.1} className="h-full w-full">
                                <div className={`
                                    h-full rounded-[32px] p-8 md:p-10 transition-all duration-300 flex flex-col relative border
                                    ${isHighlight
                                        ? 'bg-black text-white shadow-2xl scale-105 border-neutral-800 z-10'
                                        : 'bg-white text-black shadow-sm hover:shadow-xl border-transparent hover:border-neutral-100'
                                    }
                                `}>

                                    {/* Header do Card */}
                                    <div className="mb-8">
                                        <div className="flex items-center justify-between gap-2 mb-2">
                                            <h3 className={`font-grotesk font-bold text-2xl ${isHighlight ? 'text-white' : 'text-black'}`}>
                                                {plan.name}
                                            </h3>
                                            {plan.badge && (
                                                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${isHighlight ? 'bg-lime-500 text-black' : 'bg-black text-white'}`}>
                                                    {plan.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className={`font-medium text-sm ${isHighlight ? 'text-neutral-400' : 'text-neutral-500'}`}>
                                            {plan.description}
                                        </p>
                                    </div>

                                    {/* Preço */}
                                    <div className="flex items-baseline gap-1 mb-8">
                                        <span className={`text-2xl font-bold ${isHighlight ? 'text-white' : 'text-black'}`}>R$</span>
                                        <span className={`text-5xl md:text-6xl font-bold tracking-tight ${isHighlight ? 'text-white' : 'text-black'}`}>
                                            {plan.price.split(',')[0]}
                                        </span>
                                        <span className={`font-medium ml-1 ${isHighlight ? 'text-neutral-400' : 'text-neutral-400'}`}>
                                            {plan.period}
                                        </span>
                                    </div>

                                    {/* Features List */}
                                    <div className="flex-1 mb-10">
                                        <ul className="space-y-4">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${isHighlight ? 'bg-white text-black' : 'bg-black text-white'}`}>
                                                        <Check size={12} strokeWidth={3} />
                                                    </div>
                                                    <span className={`text-sm leading-relaxed font-medium ${isHighlight ? 'text-neutral-300' : 'text-neutral-600'}`}>
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Botão */}
                                    <button
                                        onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
                                        className={`
                                            w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group
                                            ${isHighlight
                                                ? 'bg-white border-2 border-black text-black hover:bg-green-800 hover:text-white hover:border-green-800'
                                                : 'bg-black text-white hover:bg-green-800'
                                            }
                                        `}
                                    >
                                        <span>{plan.buttonText}</span>
                                        <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                                    </button>

                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
