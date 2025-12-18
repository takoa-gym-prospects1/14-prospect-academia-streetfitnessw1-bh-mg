import { ContentConfig } from './types';

// ==================================================================================
// CENTRALIZAÇÃO DE IMAGENS
// ==================================================================================
const images = {
    logo: "", // Opcional - deixe vazio para usar o logo padrão. Recomendado: SVG ou PNG transparente
    heroBackgroundMobile: "/images/hero-mobile.webp", // Recomendado: 1080x1920px (Retrato)
    heroBackgroundDesktop: "/images/hero-desktop.webp", // Recomendado: 1920x1080px (Paisagem)
    memberAvatars: [ // Recomendado: 300x300px (Quadrado 1:1)
        "/images/testimonial1.webp",
        "/images/testimonial2.webp",
        "/images/testimonial3.webp",
        "/images/testimonial4.webp",
    ],
    partnerLogos: [ // Recomendado: 200x80px (PNG Transparente)
        "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&q=80",
        "https://images.unsplash.com/photo-1599305446868-59e861c7b1d5?w=200&h=80&fit=crop&q=80",
        "https://images.unsplash.com/photo-1599305446007-5a7d14c1a3ab?w=200&h=80&fit=crop&q=80",
        "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&blur=5&q=80",
        "https://images.unsplash.com/photo-1599305446868-59e861c7b1d5?w=200&h=80&fit=crop&blur=5&q=80",
    ],
    aboutImage: "/images/about.webp", // Recomendado: 800x1000px (4:5) ou 800x800px (1:1)
    testimonialAvatars: [ // Recomendado: 300x300px (Quadrado 1:1)
        "/images/testimonial1.webp",
        "/images/testimonial2.webp",
        "/images/testimonial3.webp",
        "/images/testimonial4.webp",
        "/images/testimonial5.webp",
    ],
};

export const content: ContentConfig = {
    // ==================================================================================
    // 1. CORES DO TEMA
    // ==================================================================================
    colors: {
        primary: '#E73237',     // Vermelho vibrante (cor principal)
        primaryDark: '#ffbd37',   // Amarelo escuro (hover)
        secondary: '#171717',     // Preto neutro
        background: '#ffffff',    // Branco
        text: '#0f172a',          // Slate escuro
        textMuted: '#64748b',     // Slate médio
        accent: '#FFC857',        // Amarelo (igual primary)
    },

    // ==================================================================================
    // 2. FONTES (Informativo - importação no HTML)
    // ==================================================================================
    fonts: {
        display: 'Bebas Neue, sans-serif',      // Títulos grandes
        headings: 'Space Grotesk, sans-serif',  // Subtítulos e headings
        body: 'Inter, sans-serif',              // Corpo de texto
    },

    // ==================================================================================
    // 3. SEO E METADADOS
    // ==================================================================================
    seo: {
        title: "Street Fitness - A Melhor e Mais Completa da Região",
        description: "Onde atletas são formados. Treinamento de elite com treinadores certificados e instalações de ponta.",
        domain: "https://streetfitnessacademia3.netlify.app",
        path: "/",
        themeColor: "#ffffffff",
        keywords: "academia, treinamento atlético, personal trainer, crossfit, atletas, fitness, musculação, treino funcional",
        og: {
            title: "Street Fitness - A Melhor e Mais Completa da Região",
            description: "Onde atletas são formados. Treinamento de elite com treinadores certificados e instalações de ponta.",
            type: "website",
            siteName: "Street Fitness",
            image: "/images/preview.webp", // 1200x630
            locale: "pt_BR",
        },
        twitter: {
            card: "summary_large_image",
        },
    },

    // ==================================================================================
    // 4. INFORMAÇÕES DA EMPRESA
    // ==================================================================================
    infos: {
        name: "Street Fitness",
        cnpj: "00.000.000/0001-00",
        phone: "(31) 3427-4769",
        whatsapp: "553183648359",
        email: "contato@streetfitnessacademia.com.br",
        address: "Av. Dr. Cristiano Guimarães, 1670 - Planalto, Belo Horizonte - MG",
        miniAddress: "Av. Dr. Cristiano Guimarães, 1670, Planalto/BH",
        mapsLink: "https://maps.app.goo.gl/3t2r9AZSRWeVrGBj7",
        mapsEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12623.820826103523!2d-43.96232233467431!3d-19.836382056753063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6901b3c90f895%3A0x5edb5fb213e4554e!2sAcademia%20Street%20Fitness!5e0!3m2!1spt-BR!2sbr!4v1766018738108!5m2!1spt-BR!2sbr",
        defaultWhatsappMessage: "Olá! Vim pelo site e gostaria de me matricular.",
    },

    // ==================================================================================
    // 5. IMAGENS
    // ==================================================================================
    images: images,

    // ==================================================================================
    // 6. NAVBAR
    // ==================================================================================
    navbar: {
        enabled: false, // Navbar está dentro do Hero
        logoText: "Street Fitness",
        showLogo: true,
        menuItems: [],
        ctaButtonText: "Contato",
        ctaButtonLink: "#contact",
    },

    // ==================================================================================
    // 7. HERO SECTION
    // ==================================================================================
    hero: {
        enabled: true,
        badge: {
            memberCount: "4.9/5.0",
            subtitle: "Avaliações no Google",
            avatars: 4,
        },
        headline: {
            line1: "ONDE ATLETAS",
            line2: "SÃO FORMADOS",
        },
        floatingStats: {
            left: {
                value: "12K+",
                label: "MEMBROS ATIVOS",
            },
            topRight: {
                value: "20+",
                label: "EXPERTS Treinadores",
            },
        },
        bottomStats: [
            {
                value: "+300",
                label: "MEMBROS ATIVOS",
            },
            {
                value: "+20 Anos",
                label: "Transformando Vidas",
            },
        ],
        ctaPrimary: {
            text: "Junte-se a nós",
            link: "#join",
        },
        ctaSecondary: {
            text: "Nossos Planos",
            link: "#pricing",
        },
    },

    // ==================================================================================
    // 8. ABOUT SECTION
    // ==================================================================================
    about: {
        enabled: true,
        eyebrow: "NOSSA HISTÓRIA",
        headline: "Treino Personalizado Para Cada Objetivo",
        description: "Somos uma equipe de profissionais de educação física apaixonados por transformação. Aqui, você encontra treinos estruturados, orientação clara e uma comunidade que te ajuda a manter a consistência.",
        stats: [
            { value: "12K+", label: "Membros Ativos" },
            { value: "324+", label: "Empresas Parceiras" },
            { value: "30+", label: "Treinadores Certificados" },
        ],
        features: [
            {
                title: "PROGRAMAS BASEADOS EM OBJETIVOS",
                description: "Escolha seu foco—hipertrofia, emagrecimento, força ou condicionamento—e criamos um treino sob medida para você.",
            },
            {
                title: "PROGRESSÃO ADAPTATIVA",
                description: "Seu treino evolui conforme você evolui. Ajustamos volume, carga e intensidade baseado no seu desempenho e feedback.",
            },
            {
                title: "ACOMPANHAMENTO DE PERFORMANCE",
                description: "Avaliações físicas, medidas e bioimpedância. Você sempre sabe onde está e para onde está indo.",
            },
        ],
    },

    // ==================================================================================
    // 10. FEATURES SECTION (BENTO GRID)
    // ==================================================================================
    features: {
        enabled: true,
        pill: "Diferenciais",
        headline: "Treinos Mais Inteligentes, Resultados Mais Rápidos",
        subHeadline: "Combinamos equipamentos modernos, orientação profissional e estrutura completa para você alcançar seus objetivos—sem enrolação.",
        cards: {
            card1: { // Branco (Esquerda Topo)
                title: "MAIS DE 20 ANOS TRANSFORMANDO VIDAS",
                description: "Treinos para iniciantes que constroem confiança, técnica e resistência no seu próprio ritmo. Do zero ao avançado.",
                image: "/images/feature0.webp" // Recomendado: 400x400px (Quadrado)
            },
            card2: { // Amarelo (Esquerda Baixo)
                title: "REDEFINA SEUS LIMITES. ALCANCE SEUS OBJETIVOS.",
                subtitle: "Daqui a um ano você vai desejar ter começado hoje.",
                buttonText: "Comece Sua Jornada",
                suffix: "Experience"
            },
            card3: { // Alto (Centro)
                tagText: "Comece sua jornada hoje",
                price: "A partir de R$ 79,99/mês",
                title: "TREINOS INDIVIDUAIS E EM GRUPO DISPONÍVEIS",
                subtitle: "",
                image: "/images/feature1.webp" // Recomendado: 800x1200px (Retrato Alto)
            },
            card4: { // Direita Topo
                text: "Alcance seus objetivos!",
                image: "/images/feature2.webp" // Recomendado: 800x600px (Retângulo)
            },
            card5: { // Direita Baixo
                image: "/images/feature3.webp" // Recomendado: 800x600px (Retângulo)
            }
        }
    },

    // ==================================================================================
    // 11. TEAM SECTION
    // ==================================================================================
    team: {
        enabled: true,
        pill: "Equipe",
        headline: "CONHEÇA A EQUIPE QUE VAI TE APOIAR",
        subHeadline: "Profissionais certificados, experientes e dedicados a te ajudar a evoluir em cada treino.",
        members: [
            {
                name: "Alex Rivera",
                role: "Head Coach de Musculação e Abdominal",
                image: "/images/team1.webp", // Recomendado: 600x800px (Retrato 3:4)
                socialUrl: "#"
            },
            {
                name: "Maya Souza",
                role: "Instrutora de Funcional e Ciclismo Indoor",
                image: "/images/team2.webp", // Recomendado: 600x800px (Retrato 3:4)
                socialUrl: "#"
            },
            {
                name: "Josué Lopes",
                role: "Instrutor de Ritbox e Alongamento",
                image: "/images/team3.webp", // Recomendado: 600x800px (Retrato 3:4)
                socialUrl: "#"
            }
        ]
    },

    // ==================================================================================
    // 12. PRICING SECTION
    // ==================================================================================
    pricing: {
        enabled: true,
        pill: "Planos",
        headline: "PREÇOS FLEXÍVEIS",
        subtitle: "Planos pensados para dar acesso a treino de qualidade, orientação profissional e resultados reais—sem taxas escondidas ou fidelizações abusivas.",
        plans: [
            {
                name: "Mensal",
                price: "99,99",
                period: "/Mês",
                description: "Perfeito para testes",
                features: [
                    "Musculação + Aulas completas",
                    "Pague apenas quando usar",
                    "Sem renovação automática",
                    "Cancele quando quiser",
                    "Avaliação física inicial",
                ],
                highlighted: false,
                buttonText: "Quero Testar",
                whatsappMessage: "Olá! Vim pelo site e tenho interesse no plano Mensal.",
            },
            {
                name: "Recorrente",
                price: "89,99",
                period: "/Mês",
                description: "Construa força e consistência",
                features: [
                    "Musculação + Aulas (Hidroginástica, Funcional, Ritbox, Abdominal & Alongamento)",
                    "Renovação automática no cartão",
                    "Cancele com 30 dias de aviso",
                    "Avaliação física mensal",
                    "Desconto em eventos",
                ],
                highlighted: true,
                badge: "⭐ MAIS ESCOLHIDO",
                buttonText: "Quero Flexibilidade",
                whatsappMessage: "Olá! Vim pelo site e tenho interesse no plano Recorrente.",
            },
            {
                name: "Anual",
                price: "79,99",
                period: "/Mês",
                description: "Para performance total",
                features: [
                    "Musculação + Aulas completas",
                    "12x no cartão",
                    "Fidelidade 12 meses",
                    "Avaliação física mensal inclusa",
                ],
                highlighted: false,
                buttonText: "Quero Economizar",
                whatsappMessage: "Olá! Vim pelo site e tenho interesse no plano Anual.",
            },
        ],
    },

    // ==================================================================================
    // 13. TESTIMONIALS SECTION
    // ==================================================================================
    testimonials: {
        enabled: true,
        pill: "Depoimentos",
        headline: "POR QUE NOSSOS ALUNOS CONFIAM NA GENTE",
        headlineHighlight: "",
        subtitle: "Resultados reais de pessoas reais. Veja como a [Nome da Academia] ajudou centenas de alunos a transformarem seus corpos.",
        items: [
            {
                id: 1,
                name: "Carlos T.",
                role: "Estudante",
                content: "Mesmo nos dias sem motivação, a energia daqui me puxa. A galera, os professores e a estrutura fazem tudo ficar mais fácil de manter a consistência.",
                rating: 5,
                image: images.testimonialAvatars[0],
            },
            {
                id: 2,
                name: "Mario L.",
                role: "Analista de Marketing",
                content: "Tentei outras academias, mas a [Nome] é diferente. Preço justo, professores presentes e treinos que cabem na minha rotina. Vale cada centavo.",
                rating: 5,
                image: images.testimonialAvatars[1],
            },
            {
                id: 3,
                name: "Luciana S.",
                role: "Vendedora",
                content: "Essa academia mudou completamente como eu treino. Os professores me mantêm no caminho, os treinos são fáceis de seguir e vi progresso em poucas semanas.",
                rating: 5,
                image: images.testimonialAvatars[2],
            },
            {
                id: 4,
                name: "Juliana M.",
                role: "Contadora",
                content: "Perdi 10kg em 7 meses aqui. O diferencial foi ter professor acompanhando cada treino e corrigindo minha postura. Nunca me machuquei e os resultados apareceram muito mais rápido do que eu esperava.",
                rating: 5,
                image: images.testimonialAvatars[3],
            },
            {
                id: 5,
                name: "Rafaela B.",
                role: "Estudante Universitário",
                content: "Comecei do zero, sem nunca ter pisado numa academia. A equipe me acolheu, ensinou tudo com paciência e hoje eu treino com confiança. Ganhei 6kg de músculo em 5 meses e me sinto outra pessoa!",
                rating: 5,
                image: images.testimonialAvatars[4],
            },
        ],
    },

    // ==================================================================================
    // 14. FAQ SECTION
    // ==================================================================================
    faq: {
        enabled: true,
        pill: "FAQ",
        headline: "SUAS DÚVIDAS, RESPONDIDAS",
        headlineHighlight: "",
        subHeadline: "Tire suas dúvidas mais comuns sobre nossos treinos, planos e funcionamento.",
        buttonText: "Entre em Contato",
        items: [
            {
                question: "Preciso ter experiência para treinar aqui?",
                answer: "Não! Nossos treinadores adaptam os treinos para todos os níveis, do iniciante ao avançado.",
            },
            {
                question: "Posso experimentar antes de assinar?",
                answer: "Sim! Oferecemos uma aula grátis para você conhecer nossas instalações e treinar.",
            },
            {
                question: "Posso pausar ou cancelar quando quiser?",
                answer: "Sim. Planos Mensal e Recorrente podem ser cancelados a qualquer momento (aviso 30 dias). Congelamento disponível por R$ 29/mês (máx 2 meses/ano).",
            },
            {
                question: "Quanto tempo dura cada treino e com que frequência treinar",
                answer: "Cada treino dura 60-90 minutos. Recomendamos 3-5x por semana para resultados consistentes, mas você treina no seu ritmo.",
            },
        ],
    },

    // ==================================================================================
    // 15. LOCATION SECTION
    // ==================================================================================
    location: {
        enabled: true,
        pill: "Localização",
        title: "ONDE ESTAMOS",
        description: "Venha conhecer nossa estrutura e fazer parte dessa comunidade.",
        hours: [
            { label: "Seg - Sex", time: "05:30 - 22:00" },
            { label: "Sáb", time: "08:00 - 13:00" },
            { label: "Dom", time: "09:00 - 12:00" }
        ]
    },

    // ==================================================================================
    // 16. FOOTER
    // ==================================================================================
    footer: {
        enabled: true,
        description: "É mais do que uma academia. É uma comunidade de pessoas dedicadas a superar limites e alcançar a melhor versão de si mesmas.",
        socialLinks: {
            instagram: "https://instagram.com/academiastreetfitness",
            facebook: "https://facebook.com/academiastreetfitness",
            youtube: "https://youtube.com/academiastreetfitness",
        },
        quickLinks: [
            { label: "Início", href: "#hero" },
            { label: "Sobre", href: "#about" },
            { label: "Planos", href: "#pricing" },
            { label: "Contato", href: "#contact" },
        ],
        policies: [
            { label: "Termos de Uso", href: "#" },
            { label: "Política de Privacidade", href: "#" },
        ],
        copyright: "Todos os direitos reservados.",
        developedBy: "Desenvolvido com 💪 pela ",
        developerName: "TAKOA",
        developerUrl: "https://takoadigital.com.br",
    },
};
