export type MenuOption = {
  name: string;
  desc: string;
  image?: string; 
};

export type CourseData = {
  course: string;
  title: string;
  options: MenuOption[];
};

export const juneTableMenu: CourseData[] = [
  {
    course: "Course 01",
    title: "Appetizer",
    options: [
      { 
        name: "Rujak Kuah Pindang", 
        desc: "Balinese style salad with tropical fruits tossed in pindang fish broth.", 
        image: "/campaigns/menu.jpeg" 
      },
      { 
        name: "Tuna Niçoise Gohu Salad", 
        desc: "A fusion of French and Indonesian cuisine, combining tuna, fresh vegetables, olives, and eggs aromatic flavors of Maluku’s traditional gohu dressing.", 
        image: "/campaigns/menu.jpeg" 
      },
      { 
        name: "Chicken Char Siu Bao", 
        desc: "Steamed buns filled with tender chicken glazed in a hoisin sauce.", 
        image: "/campaigns/menu.jpeg" 
      },
      { 
        name: "Burrata Caprese", 
        desc: "Creamy burrata cheese paired with ripe tomatoes, fresh basil, smoked ham and balsamic vinegar.", 
        image: "/campaigns/menu.jpeg" 
      },
      { 
        name: "Chicken Vol-au-Vent", 
        desc: "Puff pastry filled with a creamy chicken ragout and delicate herbs paired with honey mustard salad dressing.", 
        image: "/campaigns/menu.jpeg" 
      },
    ]
  },
  {
    course: "Course 02",
    title: "Main Course",
    options: [
      { 
        name: "Nasi Bakar Salmon", 
        desc: "Grilled fragrant rice wrapped in banana leaves, filled with salmon and aromatic herbs.", 
        image: "/campaigns/menu.jpeg" 
      },
      { 
        name: "Duck à la Lyonnaise", 
        desc: "Grilled smoked duck served with potato foam, chicken jus and potato lyonnaise.", 
        image: "/campaigns/menu.jpeg" 
      },
      { 
        name: "Spaghetti alle Vongole", 
        desc: "Classic Neapolitan pasta dish made with fresh clams, garlic, olive oil, white wine, and parsley.", 
        image: "/campaigns/menu.jpeg" 
      },
      { 
        name: "Pasta al Nero", 
        desc: "Italian pasta dish coated in a rich black sauce made from cuttlefish ink served with grilled Jimbaran tiger prawns.", 
        image: "/campaigns/menu.jpeg" 
      },
      { 
        name: "Creamy Pesto Pasta", 
        desc: "Al dente cappellini coated in a velvety basil pesto cream sauce, served with pan-seared tiger prawns.", 
        image: "/campaigns/menu.jpeg" 
      },
    ]
  },
  {
    course: "Course 03",
    title: "Dessert",
    options: [
      { 
        name: "Burning Rome", 
        desc: "A dramatic tableside experience featuring torched Italian meringue, smoked dark chocolate ganache, and a hidden core of spiced cherry compote.", 
        image: "/campaigns/menu.jpeg" 
      },
      { 
        name: "Pearfect", 
        desc: "Delicately poached Nashi pear infused with osmanthus tea, served alongside vanilla bean mascarpone and a crisp almond tuile.", 
        image: "/campaigns/menu.jpeg" 
      },
      { 
        name: "Chocolate Songkit Kiamboy", 
        desc: "Rich Valrhona chocolate crémeux balanced by a vibrant calamansi curd, finished with a dusting of savory-tart kiamboy powder and cacao nibs.", 
        image: "/campaigns/menu.jpeg" 
      },
    ]
  },
  {
    course: "Course 04",
    title: "Signature Drinks",
    options: [
      { 
        name: "White Wine", 
        desc: "Crisp and refreshing with delicate notes of citrus and green apple.", 
        image: "/campaigns/menu.jpeg" 
      },
      { 
        name: "Grand Noir Rosé", 
        desc: "Elegant dry rosé featuring subtle hints of strawberry and white peach.", 
        image: "/campaigns/menu.jpeg" 
      },
      { 
        name: "Klamboi", 
        desc: "Our signature tropical fruit blend with a refreshing sparkling finish.", 
        image: "/campaigns/menu.jpeg" 
      },
      { 
        name: "Elizabeth", 
        desc: "A botanical infusion featuring elderflower, crisp cucumber ribbons, and tonic.", 
        image: "/campaigns/menu.jpeg" 
      },
    ]
  }
];