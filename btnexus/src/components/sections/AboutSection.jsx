import React from 'react';
import { Users, Zap, Shield } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import AnimatedCounter from '../AnimatedCounter';

const founders = [
    { name: 'Thales', role: 'Co-fundador', initials: 'T' },
    { name: 'Brian', role: 'Co-fundador', initials: 'B' },
];

const differentials = [
    { icon: Users, label: 'Atendimento próximo e humano' },
    { icon: Zap, label: 'Entregas rápidas e sob medida' },
    { icon: Shield, label: 'Tecnologia de ponta acessível' },
];

const stats = [
    { value: 50, suffix: '+', label: 'Projetos Entregues' },
    { value: 30, suffix: '+', label: 'Clientes Ativos' },
    { value: 98, suffix: '%', label: 'Satisfação' },
];

export default function AboutSection() {
    return (
        <section id="sobre" className="relative py-24 lg:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/[0.03] to-transparent" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-xs font-semibold text-[#7C3AED] tracking-widest uppercase">Conheça a equipe</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-3">
                            Quem está por trás da{' '}
                            <span className="text-gradient-animated">BT NEXUS</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
                    {founders.map((founder, i) => (
                        <ScrollReveal key={founder.name} delay={i * 0.15}>
                            <div className="glass-strong rounded-2xl p-8 text-center hover:border-[#7C3AED]/30 transition-all duration-500 group">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7C3AED]/30 to-[#1E40AF]/30 border-2 border-[#7C3AED]/20 flex items-center justify-center mx-auto mb-5 group-hover:border-[#7C3AED]/50 transition-colors">
                                    <span className="text-3xl font-display font-bold text-gradient">{founder.initials}</span>
                                </div>
                                <h3 className="text-xl font-display font-bold text-white mb-1">{founder.name}</h3>
                                <p className="text-sm text-[#C4B5FD]">{founder.role}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal>
                    <p className="text-center text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed mb-16">
                        Somos dois apaixonados por tecnologia e resultados. A BT NEXUS nasceu da vontade de levar presença digital de qualidade para negócios que merecem crescer.
                    </p>
                </ScrollReveal>

                <div className="grid sm:grid-cols-3 gap-6 mb-16">
                    {differentials.map((item, i) => (
                        <ScrollReveal key={item.label} delay={i * 0.1}>
                            <div className="glass rounded-xl p-6 text-center hover:border-[#7C3AED]/30 transition-all duration-500 group">
                                <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#7C3AED]/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-[#C4B5FD]" />
                                </div>
                                <p className="text-sm font-medium text-[#E5E7EB]">{item.label}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, i) => (
                        <ScrollReveal key={stat.label} delay={i * 0.1}>
                            <div className="text-center py-6">
                                <div className="text-3xl sm:text-4xl font-display font-bold text-gradient-animated mb-2">
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-xs sm:text-sm text-[#9CA3AF]">{stat.label}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}