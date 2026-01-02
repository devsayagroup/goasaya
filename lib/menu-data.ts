export interface MenuItem {
  title: string;
  description: string;
  price: string;
  image: string; 
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
  isBeverage?: boolean;
  heroImage?: string;
  caption?: string;     
  featured?: string[]; 
}

export const menuData: MenuCategory[] = [
  // ------------------ TO START ------------------
  {
    name: "To Start",
    heroImage: "/menu/to-start.jpg",
    // featured: ["Soft Shell Crab", "Griffin’s Signature"],
    items: [
      {
        title: "Shrimp Secret",
        description: "Freshness with a touch of crunch, savour the silky parmesan sauce with a mix of avocado.",
        price: "121.000",
        image: "/to-start-shrimp-secret.jpg",
      },
      {
        title: "Thai Beef Salad",
        description: "Tender beef tossed with fresh herbs, crunchy vegetables and a splash of Thai dressing.",
        price: "142.000",
        image: "/to-start-thai-beef-salad.jpg",
      },
      {
        title: "The Goa Garden",
        description: "Warm salmon served with crisp salad, chukka wakame and refreshing dressing.",
        price: "180.000",
        image: "/to-start-goa-garden.jpg",
      },
      {
        title: "Cured Salmon",
        description: "Silky, tender and firm. Rich taste yet smooth paired with delicate dill crème.",
        price: "160.000",
        image: "/to-start-cured-salmon.jpg",
      },
    ],
  },

  // ------------------ TO SHARE ------------------
  {
    name: "To Share",
    heroImage: "/menu/to-share.jpg",
    // featured: ["Soft Shell Crab", "Griffin’s Signature"],
    items: [
      {
        title: "Cauliflower Tempura",
        description: "Light and crispy battered cauliflower served with a bold dipping sauce.",
        price: "53.000",
        image: "/to-share-cauliflower-tempura.jpg",
      },
      {
        title: "The Crispy Paru",
        description: "A curated Indonesian snack. May cause instant obsession.",
        price: "96.000",
        image: "/to-share-crispy-paru.jpg",
      },
      {
        title: "Truffle Fries",
        description: "French fries with a rich earthy flavour, comes with dipping sauce.",
        price: "120.000",
        image: "/to-share-truffle-fries.jpg",
      },
      {
        title: "Griffin’s Signature",
        description: "Crispy, spicy, saucy. Shrimp wonton served over creamy mala sauce.",
        price: "126.000",
        image: "/to-share-griffins-signature.jpg",
      },
      {
        title: "Sate Padang Lidah / Daging",
        description: "The irresistible dish of Indonesia, elevated.",
        price: "168.000",
        image: "/to-share-sate-padang.jpg",
      },
      {
        title: "Calamari Fritters",
        description: "Tender squid inside a golden crunchy look.",
        price: "178.000",
        image: "/to-share-calamari-fritters.jpg",
      },
      {
        title: "Soft Shell Crab",
        description: "Crispy on the outside, tender on the inside, coated in rich salted egg yolk.",
        price: "257.000",
        image: "/to-share-soft-shell-crab.jpg",
      },
      {
        title: "Oxtail Soup",
        description: "Slow simmered soup with tender meat and Indonesian spices.",
        price: "336.000",
        image: "/to-share-oxtail-soup.jpg",
      },
      {
        title: "Goa Roasted Ribs",
        description: "Slow cooked beef short ribs infused with kecombrang flower and Indonesian spices.",
        price: "430.000",
        image: "/to-share-goa-roasted-ribs.jpg",
      },
    ],
  },

  // ------------------ PASTA ------------------
  {
    name: "Pasta",
    heroImage: "/menu/pasta.jpg",
    // featured: ["Soft Shell Crab", "Griffin’s Signature"],
    items: [
      {
        title: "Creamy Chicken Pasta",
        description: "Grilled chicken breast with creamy sautéed mushroom sauce.",
        price: "170.000",
        image: "/pasta-creamy-chicken.jpg",
      },
      {
        title: "Seafood Marinara",
        description: "Italian classic tomato sauce with fragrant herbs and fresh seafood.",
        price: "220.000",
        image: "/pasta-seafood-marinara.jpg",
      },
      {
        title: "Coastal White Wine",
        description: "Ocean fresh pasta with garlic and herbs, inspired by aglio olio.",
        price: "230.000",
        image: "/pasta-coastal-white-wine.jpg",
      },
      {
        title: "Beef Pappardelle",
        description: "Tender beef tossed with herbs and rich pasta sauce.",
        price: "255.000",
        image: "/pasta-beef-pappardelle.jpg",
      },
    ],
  },

  // ------------------ FOR YOU ------------------
  {
    name: "For You",
    heroImage: "/menu/for-you.jpg",
    // featured: ["The Beef Burger", "Lemon Butter Salmon"],
    items: [
      {
        title: "The Beef Burger",
        description: "Goa-made patty, melty cheese, Australian style. Served with fries.",
        price: "185.000",
        image: "/for-you-beef-burger.jpg",
      },
      {
        title: "Lemon Butter Salmon",
        description: "Perfectly seared salmon, melt-in-your-mouth texture.",
        price: "185.000",
        image: "/for-you-lemon-butter-salmon.jpg",
      },
      {
        title: "Desa Fried Rice",
        description: "Expertly stir-fried with authentic Indonesian seasoning.",
        price: "195.000",
        image: "/for-you-desa-fried-rice.jpg",
      },
      {
        title: "Minang Fried Rice",
        description: "Bold fragrant flavour with braised beef tongue.",
        price: "199.000",
        image: "/for-you-minang-fried-rice.jpg",
      },
      {
        title: "Aromatic Grilled Chicken",
        description: "Tender chicken infused with fragrant herbs and smoky flavour.",
        price: "210.000",
        image: "/for-you-aromatic-grilled-chicken.jpg",
      },
      {
        title: "Seared Barramundi",
        description: "Crisp exterior, tender interior with signature mashed potato.",
        price: "219.000",
        image: "/for-you-seared-barramundi.jpg",
      },
      {
        title: "Black Cod",
        description: "Exquisite seafood with subtle glazed buttery flavour.",
        price: "249.000",
        image: "/for-you-black-cod.jpg",
      },
      {
        title: "Hours Duck Confit",
        description: "Slow cooked duck served on signature mash potato.",
        price: "255.000",
        image: "/for-you-duck-confit.jpg",
      },
      {
        title: "Beef of Goa",
        description: "Healthy meal served with broccoli and warm rice.",
        price: "288.000",
        image: "/for-you-beef-of-goa.jpg",
      },
      {
        title: "The Goa Steak",
        description: "Prepared only upon your request.",
        price: "999.000",
        image: "/for-you-goa-steak.jpg",
      },
    ],
  },

  // ------------------ DESSERT ------------------
  {
    name: "The Perfect Final Touch",
    heroImage: "/menu/final-touch.jpg",
    // featured: ["Soft Shell Crab", "Griffin’s Signature"],
    items: [
      {
        title: "Putu Derry",
        description: "Elevated jajanan pasar by Chef Derry.",
        price: "55.000",
        image: "/dessert-putu-derry.jpg",
      },
      {
        title: "Coconut Shell",
        description: "Fresh coconut mousse with pineapple compote and passion fruit curd.",
        price: "115.000",
        image: "/dessert-coconut-shell.jpg",
      },
      {
        title: "Jiggly Mushroom",
        description: "Chocolate and vanilla pudding with chocolate soil and anglaise.",
        price: "125.000",
        image: "/dessert-jiggly-mushroom.jpg",
      },
      {
        title: "Sekarung Kopi Emas",
        description: "Unique coffee dessert inspired by a sack of beans.",
        price: "130.000",
        image: "/dessert-sekarung-kopi-emas.jpg",
      },
      {
        title: "Rain Forest Wood",
        description: "Dark chocolate mousse with amarena cherry and kirsch cream.",
        price: "155.000",
        image: "/dessert-rain-forest-wood.jpg",
      },
      {
        title: "Strawberry Swings",
        description: "Strawberry ruby mousse with white chocolate and yogurt gel.",
        price: "150.000",
        image: "/dessert-strawberry-swings.jpg",
      },
      {
        title: "The Italian Glass",
        description: "Mascarpone cream layered with espresso soaked lady fingers.",
        price: "160.000",
        image: "/dessert-italian-glass.jpg",
      },
      {
        title: "Zen Stone",
        description: "Milk chocolate with earl grey and lychee fillings.",
        price: "160.000",
        image: "/dessert-zen-stone.jpg",
      },
    ],
  },
  
  // ------------------ COFFEE ------------------
  {
    name: "Coffee",
    isBeverage: true,
    items: [
      { title: "Espresso", description: "", price: "55.000", image: "/bev-tea.jpg" },
      { title: "Picolo", description: "", price: "55.000", image: "/bev-milktea.jpg" },
      { title: "Latte", description: "(Hot/Iced)", price: "65.000", image: "/bev-water.jpg" },
       { title: "Capuccino", description: "(Hot/Iced)", price: "65.000", image: "/bev-tea.jpg" },
      { title: "Americano", description: "(Hot/Iced)", price: "65.000", image: "/bev-milktea.jpg" },
      { title: "Flat White", description: "", price: "65.000", image: "/bev-water.jpg" }
    ]
  },

  // ------------------ NON COFFEE ------------------
  {
    name: "Non Coffee",
    isBeverage: true,
    items: [
      { title: "Chocolate", description: "(Hot/Iced)", price: "55.000", image: "/bev-milktea.jpg" },
      { title: "Cookies and Cream Frappe", description: "", price: "65.000", image: "/bev-water.jpg" },
      { title: "Black Mamba Frappe", description: "", price: "65.000", image: "/bev-water.jpg" },
    ]
  },

  // ------------------ Matcha Series ------------------
  {
    name: "Matcha Series (Hot/Iced)",
    isBeverage: true,
    items: [
      { title: "Artisan Matcha", description: "Matcha & Fresh Milk.", price: "65.000", image: "/bev-water.jpg" },
      { title: "Banana Matcha Latte", description: "Matcha Original, Banana & Oat Milk.", price: "65.000", image: "/bev-water.jpg" },
      { title: "Strawberry Matcha Latte", description: "Strowberry, Red Syrup, Milk & Matcha Original.", price: "65.000", image: "/bev-water.jpg" },
      { title: "Ceremonial Matcha", description: "Ceremonial Matcha & Fresh Milk.", price: "135.000", image: "/bev-water.jpg" },
    ]
  },

  // ------------------ TEA & HEALTHY JUICE ------------------
  {
    name: "Tea by TWG",
    isBeverage: true,
    items: [
      { title: "Moroccan Mint Tea", description: "", price: "45.000", image: "/juice-green.jpg" },
      { title: "Chamomile Tea", description: "", price: "45.000", image: "/juice-cleanse.jpg" },
      { title: "Jasmine Tea", description: "", price: "45.000", image: "/juice-redvelvet.jpg" },
      { title: "English Breakfast Tea", description: "", price: "45.000", image: "/juice-redvelvet.jpg" },
      { title: "Earl Grey Tea", description: "", price: "45.000", image: "/juice-redvelvet.jpg" },
      { title: "Vanilla Bourbon Tea", description: "", price: "45.000", image: "/juice-redvelvet.jpg" }
    ]
  },
  {
    name: "Flavour Tea",
    isBeverage: true,
    items: [
      { title: "Ice Tea", description: "", price: "35.000", image: "/juice-green.jpg" },
      { title: "Lemon Tea", description: "", price: "45.000", image: "/juice-cleanse.jpg" },
      { title: "Goasaya Tea", description: "", price: "45.000", image: "/juice-redvelvet.jpg" },
      { title: "Lychee Tea", description: "", price: "45.000", image: "/juice-redvelvet.jpg" },
    ]
  },
  {
    name: "Healthy Juice",
    isBeverage: true,
    items: [
      { title: "Energy Booster", description: "Orange, Carrot & Ginger.", price: "60.000", image: "/juice-green.jpg" },
      { title: "Green Detox", description: "Green Pokcoy, Pineapple, Kyuri & Citrus.", price: "60.000", image: "/juice-cleanse.jpg" },
      { title: "Glowing Skin", description: "Pineapple; Apple & Citrus.", price: "60.000", image: "/juice-redvelvet.jpg" },
      { title: "Pink Glow", description: "Apple, Strowberry, Carrot & Coconut Water.", price: "60.000", image: "/juice-redvelvet.jpg" },
      { title: "Berry Harmoni", description: "Kiwi & Strawberry.", price: "60.000", image: "/juice-redvelvet.jpg" }
    ]
  },
  // ------------------ SIGNATURE COCKTAILS ------------------
  {
    name: "Signature Cocktails",
    isBeverage: true,
    heroImage: "/menu/cocktails-1.jpg",
    items: [
      { title: "Pink Sakura", description: "Dry Gin, Orange Liqueur, Cordial Sakura & Foamer.", price: "135.000", image: "/cocktail-goasunset.jpg" },
      { title: "The Chambers", description: "Dry Gin, St.Germani, Cucumber & Kina.", price: "150.000", image: "/cocktail-goasunset.jpg" },
      { title: "Bird of Paradise", description: "Saccharum, Aperol, Pineapple & Citrus.", price: "150.000", image: "/cocktail-midnight.jpg" },
      { title: "Gari-gari", description: "Spice Rum, Pina Gum & Gari-Gari.", price: "150.000", image: "/cocktail-goldenpalm.jpg" },
      { title: "Ruby Island", description: "Vodca, Dry Gin, Rum, Orange Liqueur, Red Cordial.", price: "155.000", image: "/cocktail-goasunset.jpg" },
      { title: "La Seniorita", description: "Anchitos Oro, Italian Bitters, Pina Gum & Citrus.", price: "165.000", image: "/cocktail-midnight.jpg" },
      { title: "Rhubarb Brandy", description: "Brandy, Ginger, Tangerine, Sweet Sour.", price: "165.000", image: "/cocktail-goldenpalm.jpg" },
      { title: "Neglated", description: "Clarified Negroni with Choco Nutella.", price: "165.000", image: "/cocktail-goldenpalm.jpg" },
    ]
  },

  // ------------------ CLASSIC COCKTAILS ------------------
  {
    name: "Classic Cocktails",
    heroImage: "/menu/cocktails.jpg",
    isBeverage: true,
    items: [
      { title: "Lychee Martini", description: "Martini with Gin & lychee liqueur.", price: "130.000", image: "/classic-negroni.jpg" },
      { title: "Margarita", description: "Mix of Tequila, Triple Sec & Citrus.", price: "135.000", image: "/classic-oldfashioned.jpg" },
      { title: "Whiskey Sour", description: "Whiskey, Citrus, & Foamer.", price: "150.000", image: "/classic-margarita.jpg" },
      { title: "Old Fashioned", description: "Whiskey & Bitters.", price: "150.000", image: "/classic-margarita.jpg" },
      { title: "Cosmopolitan", description: "Vodca, Triple sec, Cranberry & Citrus.", price: "160.000", image: "/classic-margarita.jpg" },
    ]
  },

  // ------------------ MOCKTAILS ------------------
  {
    name: "Mocktails",
    isBeverage: true,
    heroImage: "/menu/mocktails.jpg",
    items: [
      { title: "Autumn Spice", description: "Cranberry, Orange, Green Apple & Ginger Soda.", price: "120.000", image: "/mock-berry.jpg" },
      { title: "Blue Ocean", description: "Curacao, Pineapple, Coconut Water & Citrus.", price: "120.000", image: "/mock-citrus.jpg" },
      { title: "Sparkling Apple", description: "Green Apple, Pineapple, mint & Citrus.", price: "120.000", image: "/mock-garden.jpg" },
      { title: "Ube Butterfly", description: "Ube, Butterfly Pea, Coconut Milk & Citrus.", price: "120.000", image: "/mock-garden.jpg" },
    ]
  },
];
