// Central content store for all three languages. Every page reads from here.
// Structure is nested by section so components can destructure directly.

const projectsBase = [
  {
    id: "aida",
    title: "AIDA — Autonomous Pentesting Agent",
    tagType: "amber",
    stack: null,
    repoUrl: null,
  },
  {
    id: "agent-jury",
    title: "Agent_Jury — Multi-Agent AI System",
    tagType: "teal",
    stack: "Python · Docker · OpenAI API · Solidity",
    repoUrl: "https://github.com/mustafag63/Agent_Jury",
  },
  {
    id: "dl-nids",
    title: "DL-Based-NIDS — Deep Learning Network Intrusion Detection",
    tagType: "teal",
    stack: null,
    repoUrl: "https://github.com/mustafag63/DL-Based-NIDS",
  },
  {
    id: "arfhe",
    title: "Arfhe Wallet",
    tagType: "teal",
    stack: null,
    repoUrl: null,
    siteUrl: "https://www.arfhewallet.dev",
  },
  {
    id: "flaneur",
    title: "Flaneur Bakes — Café Management System",
    tagType: "teal",
    stack: "Python (Flask) · SQLite · pywebview",
    repoUrl: "https://github.com/mustafag63/Flaneur-Stok_Takibi",
  },
  {
    id: "mixapark",
    title: "Mixapark — Business Website",
    tagType: "teal",
    stack: null,
    repoUrl: "https://github.com/mustafag63/Mixapark_Web",
  },
  {
    id: "laserzone",
    title: "LaserZone — Reservation System",
    tagType: "teal",
    stack: null,
    repoUrl: "https://github.com/mustafag63/LaserZone",
  },
  {
    id: "vr-launcher",
    title: "VR Game Launcher",
    tagType: "teal",
    stack: "Electron.js",
    repoUrl: "https://github.com/mustafag63/VR-Oyun-Baslatici",
  },
];

const content = {
  en: {
    nav: { home: "~/home", projects: "~/projects", about: "~/about", contact: "~/contact" },
    hero: {
      kicker: "Computer Engineering",
      name: "Mustafa Gocmen",
      taglineAi: "AI",
      taglinePlus: "+",
      taglineSec: "Cybersecurity",
      positioning:
        "Computer Engineering student building LLM/agent systems applied to cybersecurity, and researching the security of AI systems themselves.",
      ctaContact: "Get in touch",
      stats: [
        { value: "~0.92 AUC", label: "anomaly detection" },
        { value: "9×20", label: "experiment matrix" },
      ],
      bootLines: [
        "[OK] loading profile mustafa-gocmen",
        "[OK] domain = ai ∩ cybersecurity",
        "[OK] model.vae.auc = 0.92",
        "[OK] experiments = 9 levels × 20 seeds",
        "[READY]",
      ],
    },
    home: {
      experienceEyebrow: "Latest Experience",
      experienceLead:
        "Research Intern at LIMOS-CNRS, Université Clermont Auvergne — building a deep learning-based network intrusion detection system.",
      readMore: "Read the full entry →",
      projectsEyebrow: "Selected Projects",
      viewAll: "View all projects →",
    },
    about: {
      eyebrow: "About",
      body: "I am a Computer Engineering student at Abdullah Gül University, focused on the intersection of Artificial Intelligence and Cybersecurity. On one hand, I build RAG and agent-based systems on top of large language models and apply them to cybersecurity problems such as threat intelligence and log analysis; on the other, I'm interested in the security of AI systems themselves (adversarial attacks, model robustness). I closely follow developments in the field and put what I learn into practice through real projects rather than leaving it in theory.",
      experienceEyebrow: "Experience",
      role: "Research Intern",
      org: "LIMOS-CNRS, Université Clermont Auvergne",
      supervisor: "Supervisor: Prof. Gérard Chalhoub",
      dateRange: "Jun 2026 – Jul 2026",
      items: [
        "Developed a deep learning-based Network Intrusion Detection System (NIDS): set up a three-machine testbed (traffic generator, Zeek sensor, attacker machine) and collected realistic traffic data.",
        "Trained Dense Autoencoder and Variational Autoencoder (VAE) based anomaly detection models; the VAE model reached ~0.92 AUC across multi-seed tests.",
        "Ran a comprehensive experiment series across 9 contamination levels × 20 seeds to measure model robustness.",
      ],
      quote:
        "“Mustafa showed a great deal of technical and debugging autonomy... I believe he has all the qualities to succeed in this domain.”",
      quoteCite: "— Prof. Gérard Chalhoub, LIMOS-CNRS",
      skillsEyebrow: "Skills",
      skills: [
        { title: "Languages", items: "Python · Java · Solidity · Dart" },
        { title: "Python Ecosystem", items: "NumPy · Pandas · PyTorch · TensorFlow · FastAPI" },
        { title: "Cybersecurity", items: "NIDS · Zeek · Wireshark · tcpdump · SIEM · NIST CSF" },
        { title: "AI / LLM", items: "RAG · LangChain · multi-provider LLM integration" },
        { title: "DevOps & Tools", items: "Docker · Docker Compose · Git · GitHub · Linux CLI" },
        { title: "Blockchain", items: "OpenZeppelin (UUPS) · ECDSA · smart contract integration" },
        { title: "Other", items: "REST API design · JSON · Flutter (mobile)" },
      ],
      eduEyebrow: "Certifications & Education",
      certs: [
        { name: "Google Cybersecurity Certificate", issuer: "Google" },
        { name: "Supervised Machine Learning", issuer: "IBM" },
        { name: "Unsupervised Machine Learning", issuer: "IBM" },
        { name: "Deep Learning & Neural Networks", issuer: "IBM" },
        { name: "DELF B2", issuer: "Diplôme d'Études en Langue Française" },
      ],
      degree: "B.Sc. Computer Engineering",
      eduMeta: "Abdullah Gül University, Kayseri, Turkey — Oct 2023 – Present",
    },
    projects: {
      eyebrow: "Projects",
      tagLabels: { amber: "Active Development", teal: "" },
      list: [
        {
          tag: "Active Development",
          description:
            "An LLM-powered pentesting agent running on an isolated local lab (Raspberry Pi + MacBook running Ollama, connected via a physical switch). The agent autonomously directs steps like network discovery and vulnerability scanning. Currently in active development.",
          bullets: [],
        },
        {
          tag: "Hackathon — Monad Istanbul",
          description: "",
          bullets: [
            "Chains three LLM agents in sequence (Feasibility, Innovation, Risk) to evaluate and score technical proposals end-to-end.",
            "Multi-provider fallback so the system keeps running if one LLM provider goes offline.",
            "Packaged with Docker Compose.",
            "Results stored on-chain via OpenZeppelin UUPS contracts, with ECDSA signature verification.",
            "Baseline security: prompt injection detection, input sanitization, structured logging.",
          ],
        },
        {
          tag: "Research / LIMOS-CNRS Internship",
          description:
            "A deep learning-based Network Intrusion Detection System built end-to-end during a CNRS research internship, from raw traffic capture to a validated anomaly detection model.",
          bullets: [
            "Designed and deployed a three-machine testbed (traffic generator, Zeek sensor, attacker machine) to capture realistic, labeled network traffic instead of relying on stale public datasets.",
            "Turned raw Zeek connection logs into structured feature vectors suitable for unsupervised anomaly detection.",
            "Trained and compared Dense Autoencoder and Variational Autoencoder (VAE) models on benign-only traffic, flagging anomalies by reconstruction error; the VAE consistently outperformed the dense baseline, reaching ~0.92 AUC.",
            "Stress-tested robustness with a 9×20 experiment matrix: 9 levels of label contamination (attack traffic leaking into the \"benign\" training set) × 20 random seeds, to measure how the model degrades under realistic, imperfect training conditions.",
          ],
        },
        {
          tag: "Blockchain / AI",
          description:
            "The first FHE (Fully Homomorphic Encryption)-powered crypto wallet — a Chrome extension built by ArfDAO's core team, currently in developer preview on Ethereum, Arbitrum, and Base testnets.",
          bullets: [
            "Integrated with Arbitrum Sepolia and the COFHE service to support Shield/Unshield confidential transactions for WETH and WUSDC, keeping balances and transfers encrypted on-chain rather than just at rest.",
            "Full self-custody feature set: send/receive, NFTs, a built-in DApp browser, WalletConnect support, and a transaction explorer, across Ethereum, Arbitrum, and Base.",
            "Privacy-first by design: the wallet never collects, stores, or sells user data.",
            "My role: the wallet's AI agent and backend systems.",
          ],
        },
        {
          tag: "Client Project",
          description: "",
          bullets: [
            "End-to-end inventory, recipe, and sales tracking system for a real café: ingredient/product/recipe management, automatic stock deduction, supplier tracking.",
            "Sales/revenue dashboard with date-range filtering (Chart.js).",
            "Packaged as a standalone macOS app using pywebview.",
          ],
        },
        {
          tag: "Client Project",
          description: "A custom website built for Mixapark.",
          bullets: [],
        },
        {
          tag: "University Project",
          description: "A reservation system for laser tag venues, built as a school project.",
          bullets: [],
        },
        {
          tag: "Client Project",
          description:
            "A customer-facing game launcher for a VR arcade business, built for a client running VR sessions for customers.",
          bullets: [],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      lead: "The fastest way to reach me is email. I'm also reachable on the below.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      cvLabel: "CV / Resume",
      cvValue: "Download PDF ↓",
    },
    footer: "© 2026 Mustafa Gocmen",
  },

  fr: {
    nav: { home: "~/accueil", projects: "~/projets", about: "~/apropos", contact: "~/contact" },
    hero: {
      kicker: "Génie Informatique",
      name: "Mustafa Gocmen",
      taglineAi: "IA",
      taglinePlus: "+",
      taglineSec: "Cybersécurité",
      positioning:
        "Étudiant en Génie Informatique, je conçois des systèmes LLM/agents appliqués à la cybersécurité, et j'étudie la sécurité des systèmes d'IA eux-mêmes.",
      ctaContact: "Me contacter",
      stats: [
        { value: "~0,92 AUC", label: "détection d'anomalies" },
        { value: "9×20", label: "matrice d'expériences" },
      ],
      bootLines: [
        "[OK] chargement du profil mustafa-gocmen",
        "[OK] domaine = ia ∩ cybersécurité",
        "[OK] model.vae.auc = 0.92",
        "[OK] expériences = 9 niveaux × 20 seeds",
        "[PRÊT]",
      ],
    },
    home: {
      experienceEyebrow: "Expérience récente",
      experienceLead:
        "Stagiaire de recherche au LIMOS-CNRS, Université Clermont Auvergne — développement d'un système de détection d'intrusion réseau basé sur le deep learning.",
      readMore: "Lire l'entrée complète →",
      projectsEyebrow: "Projets sélectionnés",
      viewAll: "Voir tous les projets →",
    },
    about: {
      eyebrow: "À propos",
      body: "Je suis étudiant en Génie Informatique à l'Université Abdullah Gül, spécialisé dans l'intersection de l'Intelligence Artificielle et de la Cybersécurité. D'une part, je conçois des systèmes RAG et des agents basés sur de grands modèles de langage, que j'applique à des problématiques de cybersécurité telles que le renseignement sur les menaces et l'analyse de logs ; d'autre part, je m'intéresse à la sécurité des systèmes d'IA eux-mêmes (attaques adversariales, robustesse des modèles). Je suis de près les avancées du domaine et je mets en pratique ce que j'apprends à travers des projets concrets plutôt que de le laisser à l'état théorique.",
      experienceEyebrow: "Expérience",
      role: "Stagiaire de recherche",
      org: "LIMOS-CNRS, Université Clermont Auvergne",
      supervisor: "Encadrant : Prof. Gérard Chalhoub",
      dateRange: "Juin 2026 – Juil. 2026",
      items: [
        "Développement d'un système de détection d'intrusion réseau (NIDS) basé sur le deep learning : mise en place d'un banc d'essai à trois machines (générateur de trafic, sonde Zeek, machine attaquante) et collecte de données de trafic réalistes.",
        "Entraînement de modèles de détection d'anomalies de type Autoencodeur Dense et Autoencodeur Variationnel (VAE) ; le modèle VAE a atteint ~0,92 AUC sur des tests multi-seed.",
        "Réalisation d'une série d'expériences approfondie sur 9 niveaux de contamination × 20 seeds afin de mesurer la robustesse du modèle.",
      ],
      quote:
        "« Mustafa a fait preuve d'une grande autonomie technique et de débogage... Je pense qu'il a toutes les qualités pour réussir dans ce domaine. »",
      quoteCite: "— Prof. Gérard Chalhoub, LIMOS-CNRS",
      skillsEyebrow: "Compétences",
      skills: [
        { title: "Langages", items: "Python · Java · Solidity · Dart" },
        { title: "Écosystème Python", items: "NumPy · Pandas · PyTorch · TensorFlow · FastAPI" },
        { title: "Cybersécurité", items: "NIDS · Zeek · Wireshark · tcpdump · SIEM · NIST CSF" },
        { title: "IA / LLM", items: "RAG · LangChain · intégration multi-fournisseurs de LLM" },
        { title: "DevOps & Outils", items: "Docker · Docker Compose · Git · GitHub · Linux CLI" },
        { title: "Blockchain", items: "OpenZeppelin (UUPS) · ECDSA · intégration de smart contracts" },
        { title: "Autre", items: "Conception d'API REST · JSON · Flutter (mobile)" },
      ],
      eduEyebrow: "Certifications & Formation",
      certs: [
        { name: "Google Cybersecurity Certificate", issuer: "Google" },
        { name: "Supervised Machine Learning", issuer: "IBM" },
        { name: "Unsupervised Machine Learning", issuer: "IBM" },
        { name: "Deep Learning & Neural Networks", issuer: "IBM" },
        { name: "DELF B2", issuer: "Diplôme d'Études en Langue Française" },
      ],
      degree: "Licence en Génie Informatique",
      eduMeta: "Université Abdullah Gül, Kayseri, Turquie — Oct. 2023 – Présent",
    },
    projects: {
      eyebrow: "Projets",
      tagLabels: { amber: "Développement actif", teal: "" },
      list: [
        {
          tag: "Développement actif",
          description:
            "Un agent de pentest propulsé par LLM, exécuté sur un laboratoire local isolé (Raspberry Pi + MacBook faisant tourner Ollama, reliés via un switch physique). L'agent dirige de façon autonome des étapes comme la découverte réseau et le scan de vulnérabilités. Actuellement en développement actif.",
          bullets: [],
        },
        {
          tag: "Hackathon — Monad Istanbul",
          description: "",
          bullets: [
            "Enchaîne trois agents LLM en séquence (Faisabilité, Innovation, Risque) pour évaluer et noter des propositions techniques de bout en bout.",
            "Bascule multi-fournisseur permettant au système de continuer à fonctionner si un fournisseur de LLM tombe en panne.",
            "Packagé avec Docker Compose.",
            "Résultats stockés on-chain via des contrats OpenZeppelin UUPS, avec vérification de signature ECDSA.",
            "Sécurité de base : détection d'injection de prompt, assainissement des entrées, journalisation structurée.",
          ],
        },
        {
          tag: "Recherche / Stage LIMOS-CNRS",
          description:
            "Un système de détection d'intrusion réseau basé sur le deep learning, développé de bout en bout lors d'un stage de recherche au CNRS, de la capture brute du trafic jusqu'à un modèle de détection d'anomalies validé.",
          bullets: [
            "Conception et déploiement d'un banc d'essai à trois machines (générateur de trafic, sonde Zeek, machine attaquante) pour capturer du trafic réseau réaliste et étiqueté, plutôt que de s'appuyer sur des jeux de données publics obsolètes.",
            "Transformation des logs de connexion Zeek bruts en vecteurs de caractéristiques structurés, adaptés à la détection d'anomalies non supervisée.",
            "Entraînement et comparaison de modèles Autoencodeur Dense et Autoencodeur Variationnel (VAE) sur du trafic exclusivement bénin, détectant les anomalies par l'erreur de reconstruction ; le VAE a systématiquement surpassé le modèle dense de base, atteignant ~0,92 AUC.",
            "Test de robustesse via une matrice d'expériences de 9×20 : 9 niveaux de contamination des étiquettes (trafic malveillant infiltré dans l'ensemble d'entraînement « bénin ») × 20 seeds aléatoires, pour mesurer la dégradation du modèle dans des conditions d'entraînement réalistes et imparfaites.",
          ],
        },
        {
          tag: "Blockchain / IA",
          description:
            "Le premier portefeuille crypto propulsé par le FHE (chiffrement entièrement homomorphe) — une extension Chrome développée par l'équipe principale d'ArfDAO, actuellement en préversion développeur sur les testnets Ethereum, Arbitrum et Base.",
          bullets: [
            "Intégration avec Arbitrum Sepolia et le service COFHE pour prendre en charge les transactions confidentielles Shield/Unshield sur WETH et WUSDC, gardant les soldes et transferts chiffrés on-chain, pas seulement au repos.",
            "Ensemble complet de fonctionnalités en auto-garde : envoi/réception, NFTs, navigateur DApp intégré, support WalletConnect et explorateur de transactions, sur Ethereum, Arbitrum et Base.",
            "Conçu pour la confidentialité dès le départ : le portefeuille ne collecte, ne stocke ni ne vend jamais les données des utilisateurs.",
            "Mon rôle : l'agent IA et les systèmes backend du portefeuille.",
          ],
        },
        {
          tag: "Projet client",
          description: "",
          bullets: [
            "Système de gestion des stocks, des recettes et des ventes de bout en bout pour un vrai café : gestion des ingrédients/produits/recettes, déduction automatique des stocks, suivi des fournisseurs.",
            "Tableau de bord des ventes/revenus avec filtrage par plage de dates (Chart.js).",
            "Packagé en application macOS autonome avec pywebview.",
          ],
        },
        {
          tag: "Projet client",
          description: "Un site web sur mesure conçu pour Mixapark.",
          bullets: [],
        },
        {
          tag: "Projet universitaire",
          description: "Un système de réservation pour des salles de laser game, réalisé dans le cadre d'un projet universitaire.",
          bullets: [],
        },
        {
          tag: "Projet client",
          description:
            "Un lanceur de jeux destiné aux clients d'une entreprise de réalité virtuelle, développé pour un client proposant des sessions VR à ses clients.",
          bullets: [],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      lead: "Le plus rapide pour me joindre est l'email. Je suis aussi joignable ci-dessous.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      cvLabel: "CV",
      cvValue: "Télécharger le PDF ↓",
    },
    footer: "© 2026 Mustafa Gocmen",
  },

  tr: {
    nav: { home: "~/anasayfa", projects: "~/projeler", about: "~/hakkimda", contact: "~/iletisim" },
    hero: {
      kicker: "Bilgisayar Mühendisliği",
      name: "Mustafa Gocmen",
      taglineAi: "AI",
      taglinePlus: "+",
      taglineSec: "Siber Güvenlik",
      positioning:
        "Siber güvenliğe uygulanan LLM/ajan sistemleri geliştiren ve yapay zeka sistemlerinin güvenliğini araştıran bir Bilgisayar Mühendisliği öğrencisiyim.",
      ctaContact: "Bana Ulaşın",
      stats: [
        { value: "~0.92 AUC", label: "anomali tespiti" },
        { value: "9×20", label: "deney matrisi" },
      ],
      bootLines: [
        "[OK] profil yükleniyor mustafa-gocmen",
        "[OK] alan = ai ∩ siber güvenlik",
        "[OK] model.vae.auc = 0.92",
        "[OK] deneyler = 9 seviye × 20 seed",
        "[HAZIR]",
      ],
    },
    home: {
      experienceEyebrow: "Son Deneyim",
      experienceLead:
        "LIMOS-CNRS, Université Clermont Auvergne'de Araştırma Stajyeri — derin öğrenme tabanlı bir ağ saldırı tespit sistemi geliştiriyor.",
      readMore: "Tam kaydı oku →",
      projectsEyebrow: "Seçili Projeler",
      viewAll: "Tüm projeleri gör →",
    },
    about: {
      eyebrow: "Hakkımda",
      body: "Abdullah Gül Üniversitesi'nde Bilgisayar Mühendisliği öğrencisiyim; Yapay Zeka ve Siber Güvenlik'in kesişim noktasına odaklanıyorum. Bir yandan büyük dil modelleri üzerine RAG ve ajan tabanlı sistemler geliştirip bunları tehdit istihbaratı ve log analizi gibi siber güvenlik problemlerine uyguluyorum; diğer yandan yapay zeka sistemlerinin kendi güvenliğiyle (adversarial saldırılar, model sağlamlığı) ilgileniyorum. Alandaki gelişmeleri yakından takip ediyor ve öğrendiklerimi teoride bırakmak yerine gerçek projelerle hayata geçiriyorum.",
      experienceEyebrow: "Deneyim",
      role: "Araştırma Stajyeri",
      org: "LIMOS-CNRS, Université Clermont Auvergne",
      supervisor: "Danışman: Prof. Gérard Chalhoub",
      dateRange: "Haz 2026 – Tem 2026",
      items: [
        "Derin öğrenme tabanlı bir Ağ Saldırı Tespit Sistemi (NIDS) geliştirdim: üç makineli bir test ortamı (trafik üreteci, Zeek sensörü, saldırgan makine) kurup gerçekçi trafik verisi topladım.",
        "Dense Autoencoder ve Variational Autoencoder (VAE) tabanlı anomali tespit modelleri eğittim; VAE modeli çoklu-seed testlerinde ~0.92 AUC değerine ulaştı.",
        "Model sağlamlığını ölçmek için 9 kirlenme seviyesi × 20 seed üzerinden kapsamlı bir deney serisi çalıştırdım.",
      ],
      quote:
        "“Mustafa büyük bir teknik özerklik ve hata ayıklama becerisi gösterdi... Bu alanda başarılı olmak için gereken tüm niteliklere sahip olduğuna inanıyorum.”",
      quoteCite: "— Prof. Gérard Chalhoub, LIMOS-CNRS",
      skillsEyebrow: "Yetenekler",
      skills: [
        { title: "Diller", items: "Python · Java · Solidity · Dart" },
        { title: "Python Ekosistemi", items: "NumPy · Pandas · PyTorch · TensorFlow · FastAPI" },
        { title: "Siber Güvenlik", items: "NIDS · Zeek · Wireshark · tcpdump · SIEM · NIST CSF" },
        { title: "AI / LLM", items: "RAG · LangChain · çoklu-sağlayıcı LLM entegrasyonu" },
        { title: "DevOps & Araçlar", items: "Docker · Docker Compose · Git · GitHub · Linux CLI" },
        { title: "Blockchain", items: "OpenZeppelin (UUPS) · ECDSA · akıllı kontrat entegrasyonu" },
        { title: "Diğer", items: "REST API tasarımı · JSON · Flutter (mobil)" },
      ],
      eduEyebrow: "Sertifikalar & Eğitim",
      certs: [
        { name: "Google Cybersecurity Certificate", issuer: "Google" },
        { name: "Supervised Machine Learning", issuer: "IBM" },
        { name: "Unsupervised Machine Learning", issuer: "IBM" },
        { name: "Deep Learning & Neural Networks", issuer: "IBM" },
        { name: "DELF B2", issuer: "Diplôme d'Études en Langue Française" },
      ],
      degree: "Bilgisayar Mühendisliği Lisans",
      eduMeta: "Abdullah Gül Üniversitesi, Kayseri, Türkiye — Eki 2023 – Devam ediyor",
    },
    projects: {
      eyebrow: "Projeler",
      tagLabels: { amber: "Aktif Geliştirme", teal: "" },
      list: [
        {
          tag: "Aktif Geliştirme",
          description:
            "İzole bir yerel laboratuvarda (fiziksel bir switch ile bağlı Raspberry Pi + Ollama çalıştıran MacBook) çalışan, LLM destekli bir pentest ajanı. Ajan, ağ keşfi ve zafiyet taraması gibi adımları otonom olarak yönetiyor. Şu anda aktif geliştirme aşamasında.",
          bullets: [],
        },
        {
          tag: "Hackathon — Monad Istanbul",
          description: "",
          bullets: [
            "Teknik önerileri uçtan uca değerlendirip puanlamak için üç LLM ajanını (Fizibilite, İnovasyon, Risk) sırayla zincirler.",
            "Bir LLM sağlayıcısı çevrimdışı kaldığında sistemin çalışmaya devam etmesini sağlayan çoklu-sağlayıcı yedekleme.",
            "Docker Compose ile paketlendi.",
            "Sonuçlar, ECDSA imza doğrulamasıyla birlikte OpenZeppelin UUPS kontratları üzerinden zincir üstünde saklanır.",
            "Temel güvenlik: prompt injection tespiti, girdi temizleme, yapılandırılmış loglama.",
          ],
        },
        {
          tag: "Araştırma / LIMOS-CNRS Stajı",
          description:
            "CNRS'de bir araştırma stajı sırasında uçtan uca geliştirilen, ham trafik yakalamadan doğrulanmış bir anomali tespit modeline uzanan derin öğrenme tabanlı bir Ağ Saldırı Tespit Sistemi.",
          bullets: [
            "Güncelliğini yitirmiş genel veri setlerine güvenmek yerine gerçekçi ve etiketlenmiş ağ trafiği toplamak için üç makineli bir test ortamı (trafik üreteci, Zeek sensörü, saldırgan makine) tasarladım ve devreye aldım.",
            "Ham Zeek bağlantı loglarını, gözetimsiz anomali tespitine uygun, yapılandırılmış öznitelik vektörlerine dönüştürdüm.",
            "Yalnızca zararsız trafik üzerinde Dense Autoencoder ve Variational Autoencoder (VAE) modelleri eğitip yeniden yapılandırma hatasına göre anomalileri işaretledim; VAE modeli dense temel modeli sürekli geride bırakarak ~0.92 AUC değerine ulaştı.",
            "Modelin gerçekçi ve kusurlu eğitim koşullarında nasıl bozulduğunu ölçmek için 9×20 deney matrisiyle (eğitim setine sızan saldırı trafiğinin 9 farklı kirlenme seviyesi × 20 rastgele seed) sağlamlık testleri yaptım.",
          ],
        },
        {
          tag: "Blockchain / AI",
          description:
            "FHE (Tam Homomorfik Şifreleme) ile çalışan ilk kripto cüzdanı — ArfDAO'nun çekirdek ekibi tarafından geliştirilen bir Chrome uzantısı; şu anda Ethereum, Arbitrum ve Base testnet'lerinde geliştirici önizlemesi aşamasında.",
          bullets: [
            "WETH ve WUSDC için Shield/Unshield gizli işlemlerini desteklemek üzere Arbitrum Sepolia ve COFHE servisiyle entegre edildi; bakiyeler ve transferler sadece beklemede değil, zincir üzerinde de şifreli tutuluyor.",
            "Ethereum, Arbitrum ve Base üzerinde tam self-custody özellik seti: gönder/al, NFT'ler, entegre DApp tarayıcısı, WalletConnect desteği ve işlem gezgini.",
            "Baştan gizlilik odaklı tasarım: cüzdan kullanıcı verisini asla toplamıyor, saklamıyor veya satmıyor.",
            "Rolüm: cüzdanın yapay zeka ajanı ve backend sistemleri.",
          ],
        },
        {
          tag: "Müşteri Projesi",
          description: "",
          bullets: [
            "Gerçek bir kafe için uçtan uca envanter, tarif ve satış takip sistemi: malzeme/ürün/tarif yönetimi, otomatik stok düşümü, tedarikçi takibi.",
            "Tarih aralığı filtrelemeli satış/gelir paneli (Chart.js).",
            "pywebview kullanılarak bağımsız bir macOS uygulaması olarak paketlendi.",
          ],
        },
        {
          tag: "Müşteri Projesi",
          description: "Mixapark için özel olarak geliştirilmiş bir web sitesi.",
          bullets: [],
        },
        {
          tag: "Üniversite Projesi",
          description: "Okul projesi olarak geliştirilmiş, lazer tag mekanları için bir rezervasyon sistemi.",
          bullets: [],
        },
        {
          tag: "Müşteri Projesi",
          description:
            "Bir VR salonu işletmesi için, müşterilere VR seansları sunan bir müşteriye yönelik oyun başlatıcısı.",
          bullets: [],
        },
      ],
    },
    contact: {
      eyebrow: "İletişim",
      lead: "Bana ulaşmanın en hızlı yolu e-posta. Aşağıdan da ulaşılabilirim.",
      emailLabel: "E-posta",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      cvLabel: "CV / Özgeçmiş",
      cvValue: "PDF İndir ↓",
    },
    footer: "© 2026 Mustafa Gocmen",
  },
};

// Merge the language-agnostic project metadata (id, tagType, stack) with the
// per-language title/tag/description/bullets living in each locale's projects.list.
export function getProjects(lang) {
  const localized = content[lang].projects.list;
  return projectsBase.map((base, i) => ({
    ...base,
    tag: localized[i].tag,
    description: localized[i].description,
    bullets: localized[i].bullets,
  }));
}

export default content;
