import React from 'react';
import ScrollReveal from '../ScrollReveal';

const segments = [
    {
        emoji: '🍔',
        title: 'Restaurantes & Lanchonetes',
        desc: 'Cardápios digitais, delivery online e presença nas redes',
    },
    {
        emoji: '🏥',
        title: 'Clínicas & Consultórios',
        desc: 'Agendamento automatizado e atendimento profissional 24h',
    },
    {
        emoji: '👗',
        title: 'Lojas & E-commerces',
        desc: 'Vitrine digital que vende enquanto você dorme',
    },
    {
        emoji: '💪',
        title: 'Academias & Estúdios',
        desc: 'Captação de alunos e gestão de presença digital',
    },
    {
        emoji: '🏠',
        title: 'Imobiliárias & Construtoras',
        desc: 'Sites de alto impacto e automação de atendimento',
    },
    {
        emoji: '💈',
        title: 'Barbearias & Salões',
        desc: 'Agendamento online, redes sociais e identidade de marca',
    },
];

export default function SegmentsSection() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E40AF]/[0.02] to-transparent" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-xs font-semibold text-[#7C3AED] tracking-widest uppercase">Segmentos</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-3 mb-4">
                            Atendemos seu tipo de{' '}
                            <span className="text-gradient-animated">negócio</span>
                        </h2>
                        <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
                            Não importa o segmento — temos a solução certa pra você
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {segments.map((seg, i) => (
                        <ScrollReveal key={seg.title} delay={i * 0.1}>
                            <div className="glass-strong rounded-2xl p-7 text-center hover:border-[#7C3AED]/30 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(124,58,237,0.12)] transition-all duration-500 group">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {seg.emoji}
                                </div>
                                <h3 className="text-base font-display font-bold text-white mb-2">
                                    {seg.title}
                                </h3>
                                <p className="text-sm text-[#9CA3AF] leading-relaxed">{seg.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.4}>
                    <p className="text-center text-[#9CA3AF] text-sm mt-10">
                        Não encontrou seu segmento?{' '}
                        <a
                            href="https://wa.me/5500000000000?text=Olá!%20Vim%20pelo%20site%20da%20BT%20NEXUS%20e%20quero%20saber%20mais%20sobre%20os%20serviços."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#C4B5FD] underline underline-offset-4 hover:text-white transition-colors"
                        >
                            Fale com a gente
                        </a>{' '}
                        — atendemos qualquer tipo de negócio.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}