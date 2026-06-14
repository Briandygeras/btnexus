import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import TiltCard from '../TiltCard';

const testimonials = [
    {
        name: 'Ana Oliveira',
        role: 'Dona de Restaurante',
        text: 'A BT NEXUS transformou completamente o digital do meu restaurante. O cardápio online e os vídeos que eles fizeram triplicaram nossos pedidos no delivery. Atendimento impecável!',
        rating: 5,
        highlight: 'Triplicou os pedidos',
    },
    {
        name: 'Dr. Ricardo Santos',
        role: 'Dentista',
        text: 'O chatbot com IA que a BT NEXUS implementou na minha clínica resolveu 80% dos agendamentos sem intervenção humana. Meus pacientes adoram a agilidade no atendimento.',
        rating: 5,
        highlight: '80% dos agendamentos automatizados',
    },
    {
        name: 'Juliana Costa',
        role: 'Proprietária de Loja',
        text: 'Meu site ficou exatamente como eu sonhei. Moderno, rápido e com uma identidade visual que representa perfeitamente minha marca. As vendas online dispararam desde o lançamento!',
        rating: 5,
        highlight: 'Vendas dispararam',
    },
    {
        name: 'Marcos Pereira',
        role: 'Personal Trainer',
        text: 'Os vídeos profissionais que a BT NEXUS produziu para o meu estúdio mudaram completamente minha presença nas redes. Ganhei mais de 2 mil seguidores no primeiro mês com os reels.',
        rating: 5,
        highlight: '+2 mil seguidores',
    },
    {
        name: 'Fernanda Lima',
        role: 'Corretora de Imóveis',
        text: 'O site futurístico com visita 3D que eles criaram para minha imobiliária impressionou todos os clientes. Parece coisa de empresa grande, mas com aquele toque pessoal que só a BT NEXUS tem.',
        rating: 5,
        highlight: 'Site com visita 3D',
    },
];

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const itemsPerView = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const maxIndex = testimonials.length - itemsPerView;

    const next = () => {
        setDirection(1);
        setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
    };

    return (
        <section id="depoimentos" className="relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 aurora-bg opacity-15" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-[150px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-xs font-semibold text-[#7C3AED] tracking-widest uppercase">Depoimentos</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-3 mb-4">
                            Quem já <span className="text-gradient-animated">confia</span> na gente
                        </h2>
                        <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
                            Cada projeto carrega uma história de sucesso
                        </p>
                    </div>
                </ScrollReveal>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="flex gap-6"
                        >
                            {testimonials.slice(current, current + itemsPerView).map((t, i) => (
                                <div key={i} className="flex-1 min-w-0">
                                    <TiltCard>
                                        <div className="glass-strong rounded-2xl p-7 h-full flex flex-col">
                                            {/* Stars */}
                                            <div className="flex gap-1 mb-4">
                                                {Array.from({ length: t.rating }).map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-[#FBBF24] fill-[#FBBF24]" />
                                                ))}
                                            </div>

                                            {/* Quote */}
                                            <p className="text-sm text-[#E5E7EB] leading-relaxed mb-6 flex-1">
                                                "{t.text}"
                                            </p>

                                            {/* Highlight badge */}
                                            <div className="inline-flex px-3 py-1 rounded-full text-[11px] font-medium text-[#C4B5FD] bg-[#7C3AED]/10 border border-[#7C3AED]/20 mb-4 w-fit">
                                                {t.highlight}
                                            </div>

                                            {/* Author */}
                                            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED]/40 to-[#1E40AF]/40 flex items-center justify-center text-sm font-display font-bold text-white">
                                                    {t.name[0]}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-white">{t.name}</p>
                                                    <p className="text-xs text-[#9CA3AF]">{t.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Nav arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-[#7C3AED]/40 transition-all z-10"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-[#7C3AED]/40 transition-all z-10"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current
                                        ? 'w-6 bg-[#7C3AED]'
                                        : 'bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}