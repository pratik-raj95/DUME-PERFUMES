export interface PerfumeProduct {
  id: string;
  name: string;
  subtitle: string;
  category: "Fresh / Aquatic" | "Fresh / Aromatic" | "Woody / Fruity" | "Sweet / Gourmand" | "Fresh / Woody";
  size: "50 ml";
  concentration: "Extrait de Parfum";
  image: string;
  demoPrice: number;
  formattedPrice: string;
  mood: string;
  character: string;
  description: string;
  editorialQuote: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  metrics: {
    longevity: string; // e.g., "12+ Hours"
    sillage: string; // e.g., "Intimate to Enveloping"
    season: string[]; // e.g., ["Spring", "Summer"]
    intensity: number; // 1-5 scale
  };
  details: string[];
}

export const PRODUCTS: PerfumeProduct[] = [
  {
    id: "rasasi-hawas-ice",
    name: "RASASI HAWAS ICE",
    subtitle: "Extrait de Parfum · 50 ML",
    category: "Fresh / Aquatic",
    size: "50 ml",
    concentration: "Extrait de Parfum",
    image: "/images/rasasi-hawas-ice.jpg",
    demoPrice: 85,
    formattedPrice: "$85.00",
    mood: "Cool, Refreshing & Electrifying",
    character: "An exhilarating blast of frosty citrus and crystal marine breeze grounded by crystalline amber.",
    description:
      "A crystalline study in sub-zero freshness. Rasasi Hawas Ice opens with chilled Italian bergamot, frosted green apple, and frozen lemon zest before diving into a deep marine core. The dry-down settles into an addictive embrace of maritime ambergris and clean white musk that radiates coolness throughout the day.",
    editorialQuote: "Glacial precision meets maritime warmth — an undeniable trail of magnetic freshness.",
    notes: {
      top: ["Frozen Italian Bergamot", "Crisp Green Apple", "Star Anise", "Chilled Lemon Zest"],
      heart: ["Oceanic Marine Accord", "Frosted Plum", "Cardamom", "Orange Blossom"],
      base: ["Precious Ambergris", "Driftwood", "White Musk", "Cedarwood"],
    },
    metrics: {
      longevity: "12+ Hours",
      sillage: "Radiant & Expansive",
      season: ["Spring", "Summer", "All Year Daily"],
      intensity: 4,
    },
    details: [
      "Artisanal solid beechwood spherical closure",
      "Heavyweight European flint glass flacon",
      "Extrait de Parfum concentration for lasting sillage",
      "Hand-finished linen texture embossed label",
    ],
  },
  {
    id: "cr7-blue",
    name: "CR7 BLUE",
    subtitle: "Extrait de Parfum · 50 ML",
    category: "Fresh / Aromatic",
    size: "50 ml",
    concentration: "Extrait de Parfum",
    image: "/images/cr7-blue.jpg",
    demoPrice: 78,
    formattedPrice: "$78.00",
    mood: "Energetic, Clean & Unstoppable",
    character: "A contemporary fusion of brisk sea lavender, aromatic spices, and sun-warmed cedar.",
    description:
      "Engineered for confident momentum. CR7 Blue captures the spirit of open waters and effortless modern charisma. A brisk surge of crushed cardamom and maritime sea salt transitions into sophisticated French lavender and crisp violet leaves, anchored by creamy tonka bean and smoked atlas cedar.",
    editorialQuote: "Dynamic momentum bottled with aristocratic precision.",
    notes: {
      top: ["Mediterranean Sea Salt", "Crisp Cardamom", "Bergamot Essence", "Pink Peppercorn"],
      heart: ["French Highland Lavender", "Violet Leaves", "Geranium", "Nutmeg"],
      base: ["Atlas Cedar", "Warm Tonka Bean", "Haitian Vetiver", "Clean Cashmere Wood"],
    },
    metrics: {
      longevity: "10-12 Hours",
      sillage: "Bold & Clean",
      season: ["Spring", "Summer", "Autumn"],
      intensity: 4,
    },
    details: [
      "Artisanal solid beechwood spherical closure",
      "Heavyweight European flint glass flacon",
      "Extrait de Parfum concentration for lasting sillage",
      "Hand-finished linen texture embossed label",
    ],
  },
  {
    id: "creed-aventus",
    name: "CREED AVENTUS",
    subtitle: "Extrait de Parfum · 50 ML",
    category: "Woody / Fruity",
    size: "50 ml",
    concentration: "Extrait de Parfum",
    image: "/images/creed-aventus.jpg",
    demoPrice: 98,
    formattedPrice: "$98.00",
    mood: "Bold, Sovereign & Masterful",
    character: "The gold standard of masculine sophistication — smoky birch intertwined with regal blackcurrant and pineapple.",
    description:
      "A monumental fragrance of quiet majesty. Creed Aventus opens with an iconic burst of royal pineapple, tart blackcurrant, and crisp French apple. The composition deepens through birch tar smoke, patchouli, and Moroccan jasmine, finishing upon a profound foundation of ambergris, oakmoss, and sensual vanilla.",
    editorialQuote: "A commanding presence that announces authority without ever raising its voice.",
    notes: {
      top: ["Royal Pineapple", "Blackcurrant", "French Calville Blanc Apple", "Bergamot"],
      heart: ["Smoky Birch Wood", "Moroccan Jasmine", "Indonesian Patchouli", "Rose Petals"],
      base: ["Maritime Ambergris", "Macedonian Oakmoss", "Bourbon Vanilla", "White Musk"],
    },
    metrics: {
      longevity: "14+ Hours",
      sillage: "Commanding & Enveloping",
      season: ["All Seasons", "Signature Evening", "Black Tie"],
      intensity: 5,
    },
    details: [
      "Artisanal solid beechwood spherical closure",
      "Heavyweight European flint glass flacon",
      "Extrait de Parfum concentration for lasting sillage",
      "Hand-finished linen texture embossed label",
    ],
  },
  {
    id: "yum-boujee-marshmallow",
    name: "YUM BOUJEE MARSHMALLOW",
    subtitle: "Extrait de Parfum · 50 ML",
    category: "Sweet / Gourmand",
    size: "50 ml",
    concentration: "Extrait de Parfum",
    image: "/images/yum-boujee-marshmallow.jpg",
    demoPrice: 82,
    formattedPrice: "$82.00",
    mood: "Soft, Playful & Addictively Indulgent",
    character: "A dreamy confectionery fantasy of pillowy marshmallow, toasted pistachio, and spun vanilla sugar.",
    description:
      "Pure, sophisticated indulgence. Yum Boujee Marshmallow crafts an aura of irresistible softness. Delicately spun vanilla marshmallow and powdered sugar blend effortlessly with roasted Sicilian pistachio and wild red berries, culminating in a velvety dry-down of whipped cream, ambered tonka, and silky Australian sandalwood.",
    editorialQuote: "An intoxicating confectionery veil of silk, sugar, and sensual innocence.",
    notes: {
      top: ["Fluffy White Marshmallow", "Toasted Pistachio", "Wild Pink Berries", "Spun Sugar"],
      heart: ["Whipped Vanilla Cream", "Freesia Petals", "Sweet Coconut Milk", "Cotton Candy"],
      base: ["Australian Sandalwood", "Golden Amber", "Tonka Bean", "Powdered Musk"],
    },
    metrics: {
      longevity: "11-13 Hours",
      sillage: "Gourmand Cloud & Intimate",
      season: ["Autumn", "Winter", "Cozy Evenings"],
      intensity: 4,
    },
    details: [
      "Artisanal solid beechwood spherical closure",
      "Heavyweight European flint glass flacon",
      "Extrait de Parfum concentration for lasting sillage",
      "Hand-finished linen texture embossed label",
    ],
  },
  {
    id: "dior-sauvage",
    name: "DIOR SAUVAGE",
    subtitle: "Extrait de Parfum · 50 ML",
    category: "Fresh / Woody",
    size: "50 ml",
    concentration: "Extrait de Parfum",
    image: "/images/dior-sauvage.jpg",
    demoPrice: 92,
    formattedPrice: "$92.00",
    mood: "Raw, Powerful & Instinctive",
    character: "Radical freshness igniting warm oriental depths of radiant ambroxan, spicy pepper, and smoky vanilla.",
    description:
      "A raw, noble composition poised between untamed desert skies and nocturnal mystery. Dior Sauvage erupts with peppery Calabrian bergamot and Sichuan pepper, blooming into lavender, geranium, and star anise before settling into a majestic trail of smoky Papua vanilla and noble ambroxan.",
    editorialQuote: "Wild instinct harnessed into the epitome of contemporary refinement.",
    notes: {
      top: ["Calabrian Bergamot", "Sichuan Pepper", "Elemi Resin", "Pink Pepper"],
      heart: ["French Lavender", "Star Anise", "Nutmeg", "Geranium"],
      base: ["Noble Ambroxan", "Smoked Papua Vanilla", "Labdanum", "Cedar"],
    },
    metrics: {
      longevity: "12+ Hours",
      sillage: "Magnetizing & Powerful",
      season: ["All Seasons", "Evening", "Night Out"],
      intensity: 5,
    },
    details: [
      "Artisanal solid beechwood spherical closure",
      "Heavyweight European flint glass flacon",
      "Extrait de Parfum concentration for lasting sillage",
      "Hand-finished linen texture embossed label",
    ],
  },
];

export const CATEGORIES = [
  "All",
  "Fresh / Aquatic",
  "Fresh / Aromatic",
  "Woody / Fruity",
  "Sweet / Gourmand",
  "Fresh / Woody",
] as const;

export const FRAGRANCE_QUIZ_QUESTIONS = [
  {
    id: "vibe",
    title: "1. What sensation do you want to evoke?",
    options: [
      { label: "Glacial Freshness & Sea Breeze", category: "Fresh / Aquatic", matchId: "rasasi-hawas-ice" },
      { label: "High-Energy Athletic Magnetism", category: "Fresh / Aromatic", matchId: "cr7-blue" },
      { label: "Sovereign Authority & Regal Sophistication", category: "Woody / Fruity", matchId: "creed-aventus" },
      { label: "Sweet Confectionery Comfort & Soft Allure", category: "Sweet / Gourmand", matchId: "yum-boujee-marshmallow" },
      { label: "Raw Primal Instinct & Nocturnal Power", category: "Fresh / Woody", matchId: "dior-sauvage" },
    ],
  },
  {
    id: "occasion",
    title: "2. When will you wear this fragrance?",
    options: [
      { label: "Daily Signature & Summer Sun", matchId: "rasasi-hawas-ice" },
      { label: "Work, Gym & Active Days", matchId: "cr7-blue" },
      { label: "Boardroom, Gala & Landmark Moments", matchId: "creed-aventus" },
      { label: "Intimate Dates, Cozy Lounging & Sweet Moments", matchId: "yum-boujee-marshmallow" },
      { label: "Nightlife, Cocktails & Seductive Evenings", matchId: "dior-sauvage" },
    ],
  },
  {
    id: "notes",
    title: "3. Which note resonates most with you?",
    options: [
      { label: "Bergamot, Icy Melon & Marine Waters", matchId: "rasasi-hawas-ice" },
      { label: "Cardamom, Sea Salt & Crisp Lavender", matchId: "cr7-blue" },
      { label: "Smoky Birch, Blackcurrant & Royal Pineapple", matchId: "creed-aventus" },
      { label: "Whipped Marshmallow, Toasted Pistachio & Vanilla Cream", matchId: "yum-boujee-marshmallow" },
      { label: "Sichuan Pepper, Ambroxan & Smoky Vanilla", matchId: "dior-sauvage" },
    ],
  },
];

export const BRAND_VALUES = [
  {
    number: "01",
    title: "Extrait de Parfum Concentration",
    description:
      "Formulated with an artisanal concentration of pure perfume essences, ensuring an enveloping sillage that endures from morning to twilight without losing its nuanced character.",
  },
  {
    number: "02",
    title: "Artisanal Tactile Craftsmanship",
    description:
      "Every flacon is crowned with a hand-selected, turned solid beechwood spherical cap and paired with ultra-clear European flint glass, creating a grounding sensory ritual before every spray.",
  },
  {
    number: "03",
    title: "Distinctive Scent Architecture",
    description:
      "From maritime sub-zero aquatics to smoky royal fruit and decadent gourmands, our collection is curated to provide a personal olfactory signature for every discerning sensibility.",
  },
  {
    number: "04",
    title: "Honest, Accessible Luxury",
    description:
      "We believe remarkable fragrance craftsmanship should be experienced without prohibitive markups, delivering uncompromising luxury directly to discerning fragrance collectors.",
  },
];
