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
    heroImage: "/menu/tostart/cured-salmon.webp",
    // featured: ["Soft Shell Crab", "Griffin’s Signature"],
    items: [
      {
        title: "Shrimp Secret",
        description: "Freshness with a Touch of Crunch, Savour Cream Cheese Sauce with Mix of Pomegranate.",
        price: "121.000",
        image: "/menu/tostart/shrimp-secret.webp",
      },
      {
        title: "Thai Beef Salad",
        description: "Tender beef tossed with fresh herbs, crunchy vegetables and a splash of Thai dressing.",
        price: "142.000",
        image: "/menu/tostart/beef-salad.webp",
      },
      {
        title: "Cured Salmon",
        description: "Silky, tender and firm. Rich taste yet smooth paired with delicate dill crème.",
        price: "160.000",
        image: "/menu/tostart/cured-salmon.webp",
      },
      {
        title: "The Goa Garden",
        description: "Warm salmon served with crisp salad, chukka wakame and refreshing dressing.",
        price: "180.000",
        image: "/menu/tostart/goa-garden.webp",
      },
    ],
  },

  // ------------------ TO SHARE ------------------
  {
    name: "To Share",
    heroImage: "/menu/toshare/sate-padang.webp",
    // featured: ["Soft Shell Crab", "Griffin’s Signature"],
    items: [
      {
        title: "Cauliflower Tempura",
        description: "Light and crispy battered cauliflower served with a bold dipping sauce.",
        price: "53.000",
        image: "/menu/toshare/cauliflower.webp",
      },
      {
        title: "Truffle Fries",
        description: "French fries with a rich earthy flavour, comes with dipping sauce.",
        price: "120.000",
        image: "/menu/toshare/truffle-fries.webp",
      },
      {
        title: "Griffin’s Signature",
        description: "Crispy, spicy, saucy. Shrimp wonton served over creamy mala sauce.",
        price: "126.000",
        image: "/menu/toshare/griffin-signature.webp",
      },
      {
        title: "Sate Padang Lidah / Daging",
        description: "The irresistible dish of Indonesia, elevated.",
        price: "168.000",
        image: "/menu/toshare/sate-padang.webp",
      },
      {
        title: "Calamari Fritters",
        description: "Tender squid inside a golden crunchy look.",
        price: "178.000",
        image: "/menu/toshare/calamari-fritters.webp",
      },
      {
        title: "Oxtail Soup",
        description: "Slow simmered soup with tender meat and Indonesian spices.",
        price: "336.000",
        image: "/menu/toshare/oxtail-soup.webp",
      },
      {
        title: "Ikan Bumbu Bali",
        description: "Fresh fish marinated in traditional Balinese spices, grilled for a smoky and fragrant finish.",
        price: "439.000",
        image: "/menu/toshare/ikan-bali.webp",
      },
    ],
  },

  // ------------------ PASTA ------------------
  {
    name: "Pasta",
    heroImage: "/menu/pasta/beef-pappardelle.webp",
    // featured: ["Soft Shell Crab", "Griffin’s Signature"],
    items: [
      {
        title: "Creamy Chicken Pasta",
        description: "Grilled chicken breast with creamy sautéed mushroom sauce.",
        price: "170.000",
        image: "/menu/pasta/chicken-pasta.webp",
      },
      {
        title: "Beef Pappardelle",
        description: "Tender beef tossed with herbs and rich pasta sauce.",
        price: "220.000",
        image: "/menu/pasta/beef-pappardelle.webp",
      },
      {
        title: "Seafood Marinara",
        description: "Italian classic tomato sauce with fragrant herbs and fresh seafood.",
        price: "230.000",
        image: "/menu/pasta/seafood-marinara.webp",
      },
      {
        title: "Lobster Pasta",
        description: "Al Dente Pasta Tossed in Spicy Tomato Arrabbiata with Slowcook Lobster.",
        price: "252.000",
        image: "/menu/pasta/lobster-pasta.webp",
      },
      {
        title: "Coastal White Wine",
        description: "Ocean fresh pasta with garlic and herbs, inspired by aglio olio.",
        price: "255.000",
        image: "/menu/pasta/coastal-white.webp",
      },
    
    ],
  },

  // ------------------ FOR YOU ------------------
  {
    name: "For You",
    heroImage: "/menu/for-you.webp",
    featured: [ "The Goa Steak", "Minang Fried Rice"],
    items: [
      {
        title: "The Beef Burger",
        description: "Goa-made patty, melty cheese, Australian style. Served with fries.",
        price: "185.000",
        image: "/menu/foryou/beef-burger.webp",
      },
      {
        title: "Minang Fried Rice",
        description: "Bold fragrant flavour with braised beef tongue.",
        price: "199.000",
        image: "/menu/foryou/minang-rice.webp",
      },
      {
        title: "Aromatic Grilled Chicken",
        description: "Tender chicken infused with fragrant herbs and smoky flavour.",
        price: "210.000",
        image: "/menu/foryou/aromatic-chicken.webp",
      },
      {
        title: "Seared Barramundi",
        description: "Crisp Exterior, Tender Interior, Light Buttery Feels, Served with Grill Aromatic Rice.",
        price: "220.000",
        image: "/menu/foryou/barramundi.webp",
      },
      {
        title: "Charcoal Octopus",
        description: "Charcoal-Grilled Octopus, Corn Sauce, Roasted Baby Potato & Salad with Chilli Jangachi Dressing.",
        price: "240.000",
        image: "/menu/foryou/octopus.webp",
      },
      {
        title: "Black Cod",
        description: "Exquisite seafood with subtle glazed buttery flavour.",
        price: "249.000",
        image: "/menu/foryou/black-cod.webp",
      },
      {
        title: "Hours Duck Confit",
        description: "Slow cooked duck served on signature mash potato.",
        price: "255.000",
        image: "/menu/foryou/duck-confit.webp",
      },
      {
        title: "Rice Crusted Salmon",
        description: "Perfectly seared salmon, melt-in-your-mouth texture.",
        price: "269.000",
        image: "/menu/foryou/lemon-salmon.webp",
      },
      {
        title: "Beef of Goa",
        description: "Healthy meal served with broccoli and aromatic rice.",
        price: "288.000",
        image: "/menu/foryou/beef-goa.webp",
      },
      {
        title: "Goa Roasted Ribs",
        description: "Slow cooked beef short ribs infused with kecombrang flower and Indonesian spices.",
        price: "375.000",
        image: "/menu/toshare/roasted-ribs.webp",
      },
      {
        title: "The Goa Steak",
        description: "Prepared only upon your request.",
        price: "999.000",
        image: "/menu/foryou/goa-steak.webp",
      },
    ],
  },

  // ------------------ DESSERT ------------------
  {
    name: "The Dessert",
    heroImage: "/menu/dessert/zen-stone.webp",
    items: [
      {
        title: "Putu Derry",
        description: "Elevated jajanan pasar by Chef Derry.",
        price: "55.000",
        image: "/menu/dessert/putu-derry.webp",
      },
       {
        title: "Jiggly Mushroom",
        description: "Chocolate and vanilla pudding with chocolate soil and anglaise.",
        price: "115.000",
        image: "/menu/dessert/jiggly-mushroom.webp",
      },
      {
        title: "Coconut Shell",
        description: "Fresh coconut mousse with pineapple compote and passion fruit curd.",
        price: "125.000",
        image: "/menu/dessert/coconut-shell.webp",
      },
      {
        title: "Sekarung Kopi Emas",
        description: "Unique coffee dessert inspired by a sack of beans.",
        price: "130.000",
        image: "/menu/dessert/kopi-emas.webp",
      },
      // {
      //   title: "LA ROSE ÉTERNELLE",
      //   description: "A rose shaped chocolate entremets with a hidden raspberry heart, resting on pistachio financier beneath a delicate veil, finished with raspberry sauce and a white chocolate caramel tuile flame.",
      //   price: "140.000",
      //   image: "/menu/dessert/rose-eternelle.webp",
      // },
      {
        title: "The Italian Glass",
        description: "Mascarpone cream layered with espresso soaked lady fingers.",
        price: "150.000",
        image: "/menu/dessert/italian-glass.webp",
      },
      {
        title: "Rain Forest Wood",
        description: "Dark chocolate mousse with amarena cherry and kirsch cream.",
        price: "155.000",
        image: "/menu/dessert/rain-forest.webp",
      },
      {
        title: "Strawberry Swings",
        description: "Strawberry ruby mousse with white chocolate and yogurt gel.",
        price: "160.000",
        image: "/menu/dessert/strawberry-swing.webp",
      },
      {
        title: "Zen Stone",
        description: "Milk chocolate with earl grey and lychee fillings.",
        price: "160.000",
        image: "/menu/dessert/zen-stone.webp",
      },
      // {
      //   title: "Chinese Firework",
      //   description: "Milk chocolate entremets with ginger crèmeux and a sparkling orange core, layered with almond jaconde and sablé, accented with mandarin segment jelly and sesame tuile bursting symbolizing luck and prosperity for the New Year.",
      //   price: "160.000",
      //   image: "/menu/dessert/firework.webp",
      // },
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
      { title: "Mocha Latte", description: "(Hot/Iced)", price: "65.000", image: "/bev-water.jpg" },
      { title: "Pandan Latte", description: "(Hot/Iced)", price: "65.000", image: "/bev-water.jpg" },
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
    name: "Matcha Series",
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
    heroImage: "/menu/juice.webp",
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
    heroImage: "/menu/cocktails-1.webp",
    items: [
      { title: "Pink Sakura", description: "Dry Gin, Orange Liqueur, Cordial Sakura & Foamer.", price: "135.000", image: "/cocktail-goasunset.jpg" },
      { title: "The Chambers", description: "Dry Gin, St.Germani, Cucumber & Kina.", price: "150.000", image: "/cocktail-goasunset.jpg" },
      { title: "Bird of Paradise", description: "Saccharum, Aperol, Pineapple & Citrus.", price: "150.000", image: "/cocktail-midnight.jpg" },
      { title: "Gari-gari", description: "Spice Rum, Pina Gum & Gari-Gari.", price: "150.000", image: "/cocktail-goldenpalm.jpg" },
      { title: "Ruby Island", description: "Vodca, Dry Gin, Rum, Orange Liqueur, Red Cordial.", price: "155.000", image: "/cocktail-goasunset.jpg" },
      { title: "Moonlight", description: "Gordon's Dry Gin, Martini Dry Flower Syrup & Saline Solution.", price: "155.000", image: "/cocktail-goasunset.jpg" },
      { title: "Madam Clair", description: "J.Legrand Co Napoleon, Kahlua Coffee Liqueur The Royal Cream Liqueur, Millac, Freshmilk & Cinnamon Powder.", price: "155.000", image: "/cocktail-goasunset.jpg" },
      { title: "La Fleur", description: "Gin, Paasion Fruit, Lychee Fruit & Sparklin Wine.", price: "155.000", image: "/cocktail-goasunset.jpg" },
      { title: "La Seniorita", description: "Anchitos Oro, Italian Bitters, Pina Gum & Citrus.", price: "165.000", image: "/cocktail-midnight.jpg" },
      { title: "Rhubarb Brandy", description: "Brandy, Ginger, Tangerine, Sweet Sour.", price: "165.000", image: "/cocktail-goldenpalm.jpg" },
      { title: "Neglated", description: "Clarified Negroni with Choco Nutella.", price: "165.000", image: "/cocktail-goldenpalm.jpg" },
    ]
  },

  // ------------------ CLASSIC COCKTAILS ------------------
  {
    name: "Classic Cocktails",
    heroImage: "/menu/cocktails.webp",
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
    heroImage: "/menu/mocktails.webp",
    items: [
      { title: "Autumn Spice", description: "Cranberry, Orange, Green Apple & Ginger Soda.", price: "120.000", image: "/mock-berry.jpg" },
      { title: "Blue Ocean", description: "Curacao, Pineapple, Coconut Water & Citrus.", price: "120.000", image: "/mock-citrus.jpg" },
      { title: "Sparkling Apple", description: "Green Apple, Pineapple, mint & Citrus.", price: "120.000", image: "/mock-garden.jpg" },
      { title: "Ube Butterfly", description: "Ube, Butterfly Pea, Coconut Milk & Citrus.", price: "120.000", image: "/mock-garden.jpg" },
    ]
  },
];
