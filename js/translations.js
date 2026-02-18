// Système de traduction FR/EN
const translations = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.intro': 'Introduction',
        'nav.platforms': 'Plateformes',
        'nav.tutorials': 'Tutoriels',
        'nav.payment': 'Paiement',
        'nav.faq': 'FAQ',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Formation Professionnelle d\'Achat en Chine',
        'hero.subtitle': 'Formation complète pour maîtriser les plateformes d\'achat chinoises et faire vos achats en ligne avec facilité.',
        'hero.btn.start': 'Commencez votre apprentissage',
        'hero.btn.contact': 'Contactez-nous',
        
        // Introduction
        'intro.tag': 'Partie 1',
        'intro.title': 'Introduction à l\'achat en ligne en Chine',
        'intro.desc': 'Découvrez pourquoi acheter directement en Chine révolutionne vos affaires',
        'intro.card1.title': 'Avantages des Prix Directs',
        'intro.card1.text': 'Acheter directement sur les plateformes chinoises vous permet d\'accéder aux prix de gros, bien inférieurs aux prix pratiqués ailleurs. Économisez jusqu\'à 70% par rapport aux revendeurs locaux.',
        'intro.card2.title': 'Accès aux Fabricants',
        'intro.card2.text': 'Les plateformes comme 1688 et Taobao vous connectent directement aux fabricants et grossistes chinois, éliminant tous les intermédiaires de la chaîne d\'approvisionnement.',
        'intro.card3.title': 'Le Défi de l\'Accès',
        'intro.card3.text': 'Bien que ces plateformes offrent des opportunités incroyables, elles nécessitent des outils spécifiques comme Alipay ou WeChat Pay, qui ne sont pas accessibles depuis l\'Afrique. C\'est là que nous intervenons !',
        'intro.why.title': 'Pourquoi Cette Formation ?',
        'intro.why.item1': 'Apprenez à naviguer sur les plateformes chinoises comme un pro',
        'intro.why.item2': 'Découvrez comment rechercher et évaluer les produits',
        'intro.why.item3': 'Comprenez le processus d\'achat de A à Z',
        'intro.why.item4': 'Bénéficiez de notre assistance pour les paiements et livraisons',
        
        // Plateformes
        'platforms.tag': 'Partie 1',
        'platforms.title': 'Présentation des Plateformes Chinoises Populaires',
        'platforms.desc': 'Découvrez les géants du e-commerce chinois',
        'platforms.taobao.desc': 'La plus grande plateforme de vente en ligne C2C (consommateur à consommateur) en Chine. Idéale pour trouver une immense variété de produits à petits prix.',
        'platforms.tmall.desc': 'Plateforme B2C premium avec des marques officielles et authentiques. Parfait pour acheter des produits de qualité garantie et des marques reconnues.',
        'platforms.jd.desc': 'Concurrent direct d\'Alibaba avec sa propre logistique. Réputé pour sa rapidité de livraison et ses produits électroniques authentiques.',
        'platforms.1688.desc': 'La plateforme B2B d\'Alibaba pour les achats en gros. Accès direct aux fabricants avec les meilleurs prix pour les commandes en grande quantité.',
        'platforms.pinduoduo.desc': 'Plateforme de social commerce basée sur les achats groupés. Obtenez des réductions importantes en achetant avec d\'autres utilisateurs.',
        
        // FAQ
        'faq.tag': 'Partie 4',
        'faq.title': 'Questions Fréquemment Posées',
        'faq.desc': 'Trouvez rapidement les réponses à vos questions',
        'faq.q1': 'Pourquoi ne puis-je pas acheter directement sur ces plateformes ?',
        'faq.a1': 'Les plateformes chinoises comme Taobao, 1688, et Tmall n\'acceptent que les méthodes de paiement locales (Alipay, WeChat Pay) qui nécessitent un compte bancaire chinois. De plus, elles ne livrent qu\'à des adresses en Chine. Notre service vous permet de contourner ces restrictions.',
        'faq.q2': 'Y a-t-il des frais de service ?',
        'faq.a2': 'Pour ceux qui ont suivi notre formation complète, il n\'y a PAS de frais de service ! Vous viendrez vers nous uniquement pour effectuer l\'achat avec nos comptes Alipay/WeChat Pay. Vous ne payez que le prix des produits + les frais de livraison internationale.',
        'faq.q3': 'Combien de temps prend la livraison ?',
        'faq.a3.intro': 'Le délai total dépend de plusieurs facteurs :',
        'faq.a3.item1': 'Traitement de la commande : 2-3 jours',
        'faq.a3.item2': 'Livraison en Chine (vers l\'entrepôt cargo) : 3-7 jours',
        'faq.a3.item3': 'Expédition internationale Express : 7-15 jours',
        'faq.a3.item4': 'Expédition internationale Standard : 20-45 jours',
        
        // Payment
        'payment.tag': 'Partie 3',
        'payment.title': 'Comment Effectuer Votre Paiement',
        'payment.desc': 'Solutions de paiement pour les clients africains',
        'payment.flow1.title': '1. Sélection des Produits',
        'payment.flow1.text': 'Vous naviguez sur les plateformes chinoises et sélectionnez les produits que vous souhaitez acheter.',
        'payment.flow2.title': '2. Devis Personnalisé',
        'payment.flow2.text': 'Envoyez-nous les détails de votre commande. Nous calculons le prix total incluant produits + livraison.',
        'payment.flow3.title': '3. Transfert d\'Argent',
        'payment.flow3.text': 'Une fois le devis accepté, vous nous transférez le montant via l\'une de nos options de paiement.',
        'payment.flow4.title': '4. Achat Effectué',
        'payment.flow4.text': 'Nous effectuons l\'achat pour vous avec Alipay/WeChat Pay et vous envoyons la confirmation.',
        'payment.methods.title': 'Nos Options de Paiement',
        'payment.methods.intro': 'Comme les clients africains n\'ont pas accès à Alipay ou WeChat Pay, vous pouvez nous transférer l\'argent via les méthodes suivantes :',
        
        // Contact
        'contact.tag': 'Service Client',
        'contact.title': 'Contactez-Nous',
        'contact.desc': 'Notre équipe est disponible pour répondre à toutes vos questions',
        'contact.whatsapp.title': 'WhatsApp',
        'contact.whatsapp.text': 'Discutez avec nous en temps réel',
        'contact.whatsapp.btn': 'Ouvrir WhatsApp',
        'contact.telegram.title': 'Telegram',
        'contact.telegram.text': 'Contactez-nous via Telegram',
        'contact.telegram.btn': 'Ouvrir Telegram',
        'contact.phone.title': 'Téléphone',
        'contact.phone.text': 'Appelez-nous directement',
        'contact.hours.title': 'Horaires de Service',
        'contact.hours.text': 'Disponible 7j/7 | Réponse sous 24h maximum | Support en français et anglais'
    },
    
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.intro': 'Introduction',
        'nav.platforms': 'Platforms',
        'nav.tutorials': 'Tutorials',
        'nav.payment': 'Payment',
        'nav.faq': 'FAQ',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Professional Training for Buying in China',
        'hero.subtitle': 'Complete training to master Chinese shopping platforms and make your online purchases with ease.',
        'hero.btn.start': 'Start Your Learning',
        'hero.btn.contact': 'Contact Us',
        
        // Introduction
        'intro.tag': 'Part 1',
        'intro.title': 'Introduction to Online Shopping in China',
        'intro.desc': 'Discover why buying directly from China revolutionizes your business',
        'intro.card1.title': 'Direct Price Advantages',
        'intro.card1.text': 'Buying directly on Chinese platforms gives you access to wholesale prices, much lower than prices elsewhere. Save up to 70% compared to local resellers.',
        'intro.card2.title': 'Access to Manufacturers',
        'intro.card2.text': 'Platforms like 1688 and Taobao connect you directly to Chinese manufacturers and wholesalers, eliminating all middlemen from the supply chain.',
        'intro.card3.title': 'The Access Challenge',
        'intro.card3.text': 'Although these platforms offer incredible opportunities, they require specific tools like Alipay or WeChat Pay, which are not accessible from Africa. This is where we come in!',
        'intro.why.title': 'Why This Training?',
        'intro.why.item1': 'Learn to navigate Chinese platforms like a pro',
        'intro.why.item2': 'Discover how to search and evaluate products',
        'intro.why.item3': 'Understand the purchasing process from A to Z',
        'intro.why.item4': 'Benefit from our assistance for payments and deliveries',
        
        // Plateformes
        'platforms.tag': 'Part 1',
        'platforms.title': 'Popular Chinese E-Commerce Platforms',
        'platforms.desc': 'Discover the giants of Chinese e-commerce',
        'platforms.taobao.desc': 'The largest C2C (consumer to consumer) online sales platform in China. Ideal for finding a huge variety of products at low prices.',
        'platforms.tmall.desc': 'Premium B2C platform with official and authentic brands. Perfect for buying guaranteed quality products and recognized brands.',
        'platforms.jd.desc': 'Alibaba\'s direct competitor with its own logistics. Renowned for its fast delivery and authentic electronic products.',
        'platforms.1688.desc': 'Alibaba\'s B2B platform for wholesale purchases. Direct access to manufacturers with the best prices for large quantity orders.',
        'platforms.pinduoduo.desc': 'Social commerce platform based on group buying. Get significant discounts by buying with other users.',
        
        // FAQ
        'faq.tag': 'Part 4',
        'faq.title': 'Frequently Asked Questions',
        'faq.desc': 'Find answers to your questions quickly',
        'faq.q1': 'Why can\'t I buy directly on these platforms?',
        'faq.a1': 'Chinese platforms like Taobao, 1688, and Tmall only accept local payment methods (Alipay, WeChat Pay) which require a Chinese bank account. Additionally, they only deliver to addresses in China. Our service allows you to bypass these restrictions.',
        'faq.q2': 'Are there any service fees?',
        'faq.a2': 'For those who have completed our full training, there are NO service fees! You will come to us only to make the purchase with our Alipay/WeChat Pay accounts. You only pay for the product price + international shipping costs.',
        'faq.q3': 'How long does delivery take?',
        'faq.a3.intro': 'Total time depends on several factors:',
        'faq.a3.item1': 'Order processing: 2-3 days',
        'faq.a3.item2': 'Delivery in China (to cargo warehouse): 3-7 days',
        'faq.a3.item3': 'Express international shipping: 7-15 days',
        'faq.a3.item4': 'Standard international shipping: 20-45 days',
        
        // Payment
        'payment.tag': 'Part 3',
        'payment.title': 'How to Make Your Payment',
        'payment.desc': 'Payment solutions for African customers',
        'payment.flow1.title': '1. Product Selection',
        'payment.flow1.text': 'You browse Chinese platforms and select the products you want to buy.',
        'payment.flow2.title': '2. Custom Quote',
        'payment.flow2.text': 'Send us your order details. We calculate the total price including products + shipping.',
        'payment.flow3.title': '3. Money Transfer',
        'payment.flow3.text': 'Once the quote is accepted, you transfer the amount to us via one of our payment options.',
        'payment.flow4.title': '4. Purchase Completed',
        'payment.flow4.text': 'We make the purchase for you with Alipay/WeChat Pay and send you the confirmation.',
        'payment.methods.title': 'Our Payment Options',
        'payment.methods.intro': 'As African customers do not have access to Alipay or WeChat Pay, you can transfer money to us via the following methods:',
        
        // Contact
        'contact.tag': 'Customer Service',
        'contact.title': 'Contact Us',
        'contact.desc': 'Our team is available to answer all your questions',
        'contact.whatsapp.title': 'WhatsApp',
        'contact.whatsapp.text': 'Chat with us in real time',
        'contact.whatsapp.btn': 'Open WhatsApp',
        'contact.telegram.title': 'Telegram',
        'contact.telegram.text': 'Contact us via Telegram',
        'contact.telegram.btn': 'Open Telegram',
        'contact.phone.title': 'Phone',
        'contact.phone.text': 'Call us directly',
        'contact.hours.title': 'Service Hours',
        'contact.hours.text': 'Available 7/7 | Response within 24h max | Support in French and English'
    }
};

// Langue actuelle
let currentLang = localStorage.getItem('language') || 'fr';

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    translatePage();
    updateLanguageButtons();
}

// Fonction pour traduire la page
function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[currentLang][key];
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// Fonction pour mettre à jour les boutons de langue
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialiser la traduction au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Ajouter les événements aux boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Traduire la page
    translatePage();
    updateLanguageButtons();
});