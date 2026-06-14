import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const cards = [
    {
        before: {
            title: 'Sem presença digital',
            desc: 'Negócio invisível online, sem site, sem profissionalismo',
            icon: '💤',
        },
        after: {
            title: 'Autoridade online',
            desc: 'Site profissional que vende 24h por dia, 7 dias por semana',
            icon: '🚀',
        },
    },
    {
        before: {
            title: 'Atendimento manual e lento',
            desc: 'Perdendo clientes por demora nas respostas e falta de estrutura',
            icon: '🐌',
        },
        after: {
            title: 'Chatbot inteligente',
            desc: 'Atendimento automático 24h com IA que entende seus clientes',
            icon: '🤖',
        },
    },
    {
        before: {
            title: 'Conteúdo amador',
            desc: 'Vídeos ruins, sem identidade visual, sem engajamento',
            icon: '📱',
        },
        after: {
            title: 'Marca profissional',
            desc: 'Vídeos e design que geram resultado, engajamento e vendas',
            icon: '✨',
        },
    },
];

export default function WhyBTNexusSection() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/[0.02] to-transparent" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-xs font-semibold text-[#7C3AED] tracking-widest uppercase">Por que a BT NEXUS?</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-3 mb-4">
                            A diferença que a{' '}
                            <span className="text-gradient-animated">tecnologia</span> faz
                        </h2>
                        <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
                            Veja o que muda quando você tem a BT NEXUS do seu lado
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid sm:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <ScrollReveal key={i} delay={i * 0.15}>
                            <FlipCard before={card.before} after={card.after} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FlipCard({ before, after }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="flip-card h-[280px] cursor-pointer"
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
        >
            <div className={`flip-card-inner relative w-full h-full ${flipped ? 'flipped' : ''}`}>
                {/* Front (Before) */}
                <div className="flip-card-front absolute inset-0 rounded-2xl glass-strong p-6 flex flex-col items-center justify-center text-center">
                    <div className="text-4xl mb-4 opacity-60">{before.icon}</div>
                    <h3 className="text-lg font-display font-bold text-white mb-2">{before.title}</h3>
                    <p className="text-sm text-[#9CA3AF] leading-relaxed">{before.desc}</p>
                </div>

                {/* Back (After) */}
                <div className="flip-card-back absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-[#6B21A8]/15 to-[#1E40AF]/20" />
                    <div className="absolute inset-[1px] rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.3), transparent, rgba(30,64,175,0.3))' }} />
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/20 flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="w-6 h-6 text-[#C4B5FD]" />
                        </div>
                        <h3 className="text-lg font-display font-bold text-white mb-2">{after.title}</h3>
                        <p className="text-sm text-[#E5E7EB] leading-relaxed">{after.desc}</p>
                        <ArrowRight className="w-5 h-5 text-[#C4B5FD] mx-auto mt-3" />
                    </div>
                </div>
            </div>
            <style>{`
        .flip-card { perspective: 1000px; }
        .flip-card-inner {
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          transform-style: preserve-3d;
        }
        .flip-card-inner.flipped { transform: rotateY(180deg); }
        .flip-card-front, .flip-card-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back { transform: rotateY(180deg); }
      `}</style>
        </div>
    );
}