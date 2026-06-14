import React from 'react';

const links = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Planos', href: '#planos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contato' },
];

export default function FooterSection() {
    return (
        <footer className="relative">
            {/* Gradient line */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" />

            <div className="bg-[#0A0A0F]/80 backdrop-blur-xl py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#1E40AF] flex items-center justify-center">
                                <span className="text-white font-display font-bold text-xs">BT</span>
                            </div>
                            <span className="font-display font-bold text-lg text-white tracking-tight">NEXUS</span>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <p className="text-xs text-[#9CA3AF]">
                            © 2026 BT NEXUS. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}