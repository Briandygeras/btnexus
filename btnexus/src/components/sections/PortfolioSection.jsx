import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Video, Bot, TrendingUp, FolderOpen, X, ExternalLink } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const filters = [
    { key: 'all', label: 'Todos' },
    { key: 'sites', label: 'Sites' },
    { key: 'videos', label: 'Vídeos' },
    { key: 'chatbots', label: 'Chatbots' },
    { key: 'marketing', label: 'Marketing' },
];

const projects = [
    {
        category: 'sites',
        icon: Monitor,
        title: 'Landing Page Premium',
        subtitle: 'E-commerce de moda',
        client: 'Luxe Fashion',
        description: 'Landing page moderna com animações fluidas, integração com WhatsApp e design responsivo. Projeto entregue em 12 dias com identidade visual premium.',
        techs: ['React', 'Tailwind CSS', 'Framer Motion'],
        hasLive: false,
    },
    {
        category: 'videos',
        icon: Video,
        title: 'Campanha de Lançamento',
        subtitle: 'Marca de cosméticos',
        client: 'Glow Beauty',
        description: 'Série de 8 vídeos profissionais para lançamento de linha de skincare. Edição cinematográfica, motion graphics e trilha sonora original.',
        techs: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
        hasLive: false,
    },
    {
        category: 'chatbots',
        icon: Bot,
        title: 'Atendente Virtual IA',
        subtitle: 'Clínica odontológica',
        client: 'Sorriso Perfeito',
        description: 'Chatbot com IA integrado ao WhatsApp e Instagram. Agendamento automático, respostas personalizadas e redução de 80% no tempo de espera.',
        techs: ['ChatGPT', 'WhatsApp API', 'Node.js'],
        hasLive: false,
    },
    {
        category: 'marketing',
        icon: TrendingUp,
        title: 'Estratégia de Redes',
        subtitle: 'Restaurante japonês',
        client: 'Sakura Sushi',
        description: 'Gestão completa de redes sociais com posts, stories e reels. Aumento de 300% no engajamento em 3 meses de campanha.',
        techs: ['Canva', 'CapCut', 'Meta Ads'],
        hasLive: false,
    },
    {
        category: 'sites',
        icon: FolderOpen,
        title: 'Cardápio Digital',
        subtitle: 'Hamburgueria artesanal',
        client: 'Burger Lab',
        description: 'Cardápio digital interativo com fotos profissionais, sistema de pedidos integrado e QR code para mesas físicas.',
        techs: ['React', 'QR Code', 'WhatsApp API'],
        hasLive: false,
    },
    {
        category: 'videos',
        icon: Video,
        title: 'Reels Profissionais',
        subtitle: 'Academia fitness',
        client: 'Iron Fit',
        description: 'Produção de 20 reels profissionais em 30 dias. Conteúdo dinâmico para Instagram e TikTok com foco em captação de alunos.',
        techs: ['CapCut', 'Premiere Pro', 'Motion Graphics'],
        hasLive: false,
    },
];

export default function PortfolioSection() {
    const [active, setActive] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') setSelectedProject(null);
    }, []);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedProject, handleKeyDown]);

    return (
        <section id="portfolio" className="relative py-24 lg:py-32">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="text-xs font-semibold text-[#7C3AED] tracking-widest uppercase">Resultados</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-3 mb-4">
                            Nossos <span className="text-gradient-animated">Trabalhos</span>
                        </h2>
                        <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
                            Cada projeto feito com propósito e identidade única
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {filters.map((f) => (
                            <button
                                key={f.key}
                                onClick={() => setActive(f.key)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === f.key
                                        ? 'bg-gradient-to-r from-[#7C3AED] to-[#6B21A8] text-white glow-purple'
                                        : 'glass text-[#9CA3AF] hover:text-white hover:border-[#7C3AED]/30'
                                    }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="glass-strong rounded-2xl overflow-hidden group cursor-pointer hover:border-[#7C3AED]/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(124,58,237,0.15)] hover:-translate-y-1">
                                    <div className="aspect-video bg-gradient-to-br from-[#7C3AED]/10 via-[#1E40AF]/5 to-[#0A0A0F] flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22%20fill%3D%22none%22%20stroke%3D%22rgba(124%2C58%2C237%2C0.05)%22%20stroke-width%3D%221%22/%3E%3C/svg%3E')] opacity-50" />
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#7C3AED]/20 to-transparent" />
                                        <div className="text-center relative z-10">
                                            <project.icon className="w-10 h-10 text-[#7C3AED]/40 mx-auto mb-2 group-hover:text-[#7C3AED]/70 transition-colors" />
                                            <p className="text-xs text-[#9CA3AF] group-hover:text-white/80 transition-colors">
                                                Clique para ver detalhes
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h4 className="font-display font-bold text-white mb-1">{project.title}</h4>
                                        <p className="text-xs text-[#9CA3AF]">{project.subtitle}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto glass-strong rounded-2xl border-[#7C3AED]/30 shadow-[0_0_60px_rgba(124,58,237,0.15)]"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-[#9CA3AF] hover:text-red-400 hover:border-red-400/30 hover:shadow-[0_0_15px_rgba(248,113,113,0.3)] transition-all z-10"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Image placeholder */}
                            <div className="aspect-video bg-gradient-to-br from-[#7C3AED]/15 via-[#1E40AF]/10 to-[#0A0A0F] flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22%20fill%3D%22none%22%20stroke%3D%22rgba(124%2C58%2C237%2C0.08)%22%20stroke-width%3D%221%22/%3E%3C/svg%3E')] opacity-60" />
                                <selectedProject.icon className="w-16 h-16 text-[#7C3AED]/30" />
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8">
                                {/* Category tag */}
                                <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white mb-3 ${selectedProject.category === 'sites' ? 'bg-gradient-to-r from-[#6B21A8] to-[#7C3AED]' :
                                        selectedProject.category === 'videos' ? 'bg-gradient-to-r from-[#059669] to-[#34D399]' :
                                            selectedProject.category === 'chatbots' ? 'bg-gradient-to-r from-[#D946EF] to-[#F0ABFC]' :
                                                'bg-gradient-to-r from-[#7C3AED] to-[#A78BFA]'
                                    }`}>
                                    {selectedProject.category === 'sites' ? 'Site' :
                                        selectedProject.category === 'videos' ? 'Vídeo' :
                                            selectedProject.category === 'chatbots' ? 'Chatbot' : 'Marketing'}
                                </span>

                                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-sm text-[#C4B5FD] font-medium mb-4">
                                    Cliente: {selectedProject.client}
                                </p>

                                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                                    {selectedProject.description}
                                </p>

                                {/* Tech chips */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.techs.map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 rounded-full text-[11px] font-medium text-[#C4B5FD] bg-[#7C3AED]/10 border border-[#7C3AED]/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Live button */}
                                {selectedProject.hasLive ? (
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#6B21A8] hover:from-[#8B5CF6] hover:to-[#7C3AED] transition-all duration-300"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Ver projeto ao vivo
                                    </a>
                                ) : (
                                    <p className="text-xs text-[#9CA3AF] italic">
                                        Projeto em andamento — preview completo em breve
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}