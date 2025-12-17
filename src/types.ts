// ==================================================================================
// INTERFACES TYPESCRIPT PARA CONFIGURAÇÃO DO TEMPLATE
// ==================================================================================

import { LucideIcon } from 'lucide-react';

// Cores do Tema
export interface ColorsConfig {
    primary: string;
    primaryDark: string;
    secondary: string;
    background: string;
    text: string;
    textMuted: string;
    accent: string;
}

// SEO e Meta Tags
export interface SEOConfig {
    title: string;
    description: string;
    domain: string;
    path: string;
    themeColor: string;
    keywords: string;
    og: {
        title: string;
        description: string;
        type: string;
        siteName: string;
        image: string;
        locale: string;
    };
    twitter: {
        card: string;
    };
}

// Informações da Empresa
export interface InfosConfig {
    name: string;
    cnpj: string;
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    miniAddress: string;
    mapsLink: string;
    mapsEmbed: string;
    defaultWhatsappMessage: string;
}

// Imagens
export interface ImagesConfig {
    logo?: string;
    heroBackgroundMobile: string;
    heroBackgroundDesktop: string;
    memberAvatars: string[];
    partnerLogos: string[];
    aboutImage: string;
    testimonialAvatars: string[];
}

// Hero Section
export interface HeroConfig {
    enabled: boolean;
    badge: {
        memberCount: string;
        subtitle: string;
        avatars: number;
    };
    headline: {
        line1: string;
        line2: string;
    };
    floatingStats: {
        left: {
            value: string;
            label: string;
        };
        topRight: {
            value: string;
            label: string;
        };
    };
    bottomStats: Array<{
        value: string;
        label: string;
    }>;
    ctaPrimary: {
        text: string;
        link: string;
    };
    ctaSecondary: {
        text: string;
        link: string;
    };
}



// About Section
export interface AboutConfig {
    enabled: boolean;
    eyebrow: string;
    headline: string;
    description: string;
    stats: Array<{
        value: string;
        label: string;
    }>;
    features: Array<{
        title: string;
        description: string;
    }>;
}

// Features Section Configuration (Bento Grid Layout)
export interface FeaturesConfig {
    enabled: boolean;
    pill: string;
    headline: string;
    subHeadline: string;
    cards: {
        card1: {
            title: string;
            description: string;
            image: string;
        };
        card2: {
            title: string;
            subtitle: string;
            buttonText: string;
            suffix: string;
        };
        card3: {
            tagText: string;
            price: string;
            title: string;
            subtitle: string;
            image: string;
        };
        card4: {
            text: string;
            image: string;
        };
        card5: {
            image: string;
        };
    };
}

// Team Section (Former Categories)
export interface TeamConfig {
    enabled: boolean;
    pill: string;
    headline: string;
    subHeadline: string;
    members: Array<{
        name: string;
        role: string;
        image: string;
        socialUrl?: string; // Opcional: Link para perfil/instagram
    }>;
}

// Pricing Section
export interface PricingConfig {
    enabled: boolean;
    pill: string;
    headline: string;
    subtitle: string;
    plans: Array<{
        name: string;
        price: string;
        period: string;
        description: string;
        features: string[];
        highlighted: boolean;
        badge?: string;
        buttonText: string;
        whatsappMessage: string;
    }>;
}

// Testimonials Section
export interface TestimonialsConfig {
    enabled: boolean;
    pill: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    items: Array<{
        id: number;
        name: string;
        role: string;
        content: string;
        rating: number;
        image: string;
    }>;
}

// FAQ Section
export interface FAQConfig {
    enabled: boolean;
    pill: string;
    headline: string;
    headlineHighlight: string;
    subHeadline: string;
    buttonText: string;
    items: Array<{
        question: string;
        answer: string;
    }>;
}

// Location Section
export interface LocationConfig {
    enabled: boolean;
    pill: string;
    title: string;
    description: string;
    hours: Array<{
        label: string;
        time: string;
    }>;
}

// Footer Section
export interface FooterConfig {
    enabled: boolean;
    description: string;
    socialLinks: {
        instagram?: string;
        facebook?: string;
        youtube?: string;
        linkedin?: string;
    };
    quickLinks: Array<{
        label: string;
        href: string;
    }>;
    policies: Array<{
        label: string;
        href: string;
    }>;
    copyright: string;
    developedBy: string;
    developerName: string;
    developerUrl: string;
}

// Navbar Config
export interface NavbarConfig {
    enabled: boolean;
    logoText: string;
    showLogo: boolean;
    menuItems: Array<{
        label: string;
        href: string;
    }>;
    ctaButtonText: string;
    ctaButtonLink: string;
}

// Configuração Completa
export interface ContentConfig {
    colors: ColorsConfig;
    fonts: {
        display: string;
        headings: string;
        body: string;
    };
    seo: SEOConfig;
    infos: InfosConfig;
    images: ImagesConfig;
    navbar: NavbarConfig;
    hero: HeroConfig;
    about: AboutConfig;
    features: FeaturesConfig;
    team: TeamConfig;
    pricing: PricingConfig;
    testimonials: TestimonialsConfig;
    faq: FAQConfig;
    location: LocationConfig;
    footer: FooterConfig;
}
