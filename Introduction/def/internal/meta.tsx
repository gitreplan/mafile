
const categories = { 
  id: 'categories',
  type: 'categories',
  kids: [{
    id: 'computer',
    type: 'category',
    label: 'Computer',
    title: 'Computer',
    description: 'Computers are electronic devices that process data and perform tasks according to a set of instructions. They are used for various purposes, including work, entertainment, and communication.',
    summary: 'Computers are electronic devices that process data and perform tasks according to a set of instructions.',
    image: {
      file: new File([""], "computer.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Computer_icon.svg/1200px-Computer_icon.svg.png",
      filename: "computer.png",
      alt: "A modern computer setup with a monitor, keyboard, and mouse.",
    },
  }, {
    id: 'smartphone',
    type: 'category',
    label: 'Smartphone',
    title: 'Smartphone',
    description: 'Smartphones are handheld devices that combine mobile phone capabilities with advanced computing features. They allow users to make calls, send messages, access the internet, and run various applications.',
    summary: 'Smartphones are handheld devices that combine mobile phone capabilities with advanced computing features.',
    image: {
      file: new File([""], "smartphone.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Smartphone_icon.svg/1200px-Smartphone_icon.svg.png",
      filename: "smartphone.png",
      alt: "A modern smartphone with a touchscreen display.",
    },
  }, {
    id: 'tablet',
    type: 'category',
    label: 'Tablet',
    title: 'Tablet',
    description: 'Tablets are portable computing devices with touchscreens, larger than smartphones but smaller than laptops. They are used for browsing the internet, reading e-books, watching videos, and running applications.',
    summary: 'Tablets are portable computing devices with touchscreens, larger than smartphones but smaller than laptops.',
    image: {
      file: new File([""], "tablet.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Tablet_icon.svg/1200px-Tablet_icon.svg.png",
      filename: "tablet.png",
      alt: "A modern tablet device with a touchscreen display.",
    },
  }, {
    id: 'shirt',
    type: 'category',
    label: 'Shirt',
    title: 'Shirt',
    description: 'Shirts are clothing items worn on the upper body. They are available in various styles, fabrics, and designs, and are commonly worn for both casual and formal occasions.',
    summary: 'Shirts are clothing items worn on the upper body.',
    image: {
      file: new File([""], "shirt.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Shirt_icon.svg/1200px-Shirt_icon.svg.png",
      filename: "shirt.png",
      alt: "A modern shirt with a simple design.",
    },
  }, {
    id: 'flag',
    type: 'category',
    label: 'Flag',
    title: 'Flag',
    description: 'Flags are symbols or emblems that represent a country, organization, or group. They are often displayed to show allegiance or identity.',
    summary: 'Flags are symbols or emblems that represent a country, organization, or group.',
    image: {
      file: new File([""], "flag.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Flag_icon.svg/1200px-Flag_icon.svg.png",
      filename: "flag.png",
      alt: "A collection of national flags.",
    },
  }, { 
    id: 'shoes',
    type: 'category',
    label: 'Shoes',
    title: 'Shoes',
    description: 'Shoes are footwear designed to protect and comfort the human foot while performing various activities. They come in different styles, materials, and sizes.',
    summary: 'Shoes are footwear designed to protect and comfort the human foot.',
    image: {
      file: new File([""], "shoes.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Shoes_icon.svg/1200px-Shoes_icon.svg.png", 
      filename: "shoes.png",
      alt: "A pair of modern shoes.",
    },
  }, {
    id: 'macbook',
    type: 'category',
    label: 'MacBook',
    title: 'MacBook',
    description: 'MacBooks are portable computers designed by Apple Inc. They are known for their sleek design, powerful performance, and user-friendly interface.',
    summary: 'MacBooks are portable computers designed by Apple Inc.',
    image: {
      file: new File([""], "macbook.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/MacBook_icon.svg/1200px-MacBook_icon.svg.png",
      filename: "macbook.png",
      alt: "A modern MacBook computer.",
    },
  }],
};


const companies = {
  id: 'companies',
  type: 'companies',
  kids: [{
    id: 'apple',
    type: 'company',
    title: 'Apple Inc.',
    label: 'Apple Inc.',
    description: 'Apple Inc. is a multinational technology company that designs, manufactures, and sells consumer electronics, software, and online services. It is known for products like the iPhone, iPad, Mac, and Apple Watch.',
    summary: 'Apple Inc. is a multinational technology company known for its consumer electronics.',
    image: {
      file: new File([""], "apple.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Apple_Logo.svg/1200px-Apple_Logo.svg.png",
      filename: "apple.png",
    },
    hero_image: {
      file: new File([""], "apple_hero.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Apple_Logo.svg/1200px-Apple_Logo.svg.png",
      filename: "apple_hero.png",
    },
  }, {
    id: 'samsung',
    type: 'company',
    title: 'Samsung Electronics',
    label: 'Samsung Electronics',
    description: 'Samsung Electronics is a South Korean multinational conglomerate that designs, manufactures, and sells consumer electronics, software, and online services. It is known for products like the Galaxy smartphone series, tablets, and televisions.',
    summary: 'Samsung Electronics is a South Korean multinational conglomerate known for its consumer electronics.',
    image: {
      file: new File([""], "samsung.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png",
      filename: "samsung.png",
    },
    hero_image: {
      file: new File([""], "samsung_hero.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png",
      filename: "samsung_hero.png",
    },
  }, {
    id: 'nike',
    type: 'company',
    title: 'Nike, Inc.',
    label: 'Nike, Inc.',
    description: 'Nike, Inc. is an American multinational corporation that designs, develops, manufactures, and markets athletic footwear, apparel, and accessories. It is known for its slogan "Just Do It" and its iconic swoosh logo.',
    summary: 'Nike, Inc. is an American multinational corporation known for its athletic footwear and apparel.',
    image: {
      file: new File([""], "nike.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Nike_Logo.svg/1200px-Nike_Logo.svg.png",
      filename: "nike.png",
    },
    hero_image: {
      file: new File([""], "nike_hero.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Nike_Logo.svg/1200px-Nike_Logo.svg.png",
      filename: "nike_hero.png",
    },
  }, {
    id: 'adidas',
    type: 'company',
    title: 'Adidas AG',
    label: 'Adidas AG',
    description: 'Adidas AG is a German multinational corporation that designs and manufactures shoes, clothing, and accessories. It is known for its three-stripe logo and is one of the largest sportswear manufacturers in the world.',
    summary: 'Adidas AG is a German multinational corporation known for its sportswear and accessories.',
    image: {
      file: new File([""], "adidas.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png",
      filename: "adidas.png",
    },
    hero_image: {
      file: new File([""], "adidas_hero.png", { type: "image/png" }),
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png",
      filename: "adidas_hero.png",
    },
  }],
};


const menu = {
  id: 'menu',
  type: 'menu',
  title: 'Menu',
  label: 'Menu',
  description: 'The menu provides access to various sections and features of the application, allowing users to navigate and explore different options.',
  summary: 'The menu provides access to various sections and features of the application.',
  icon: 'ArrowBottom',
  kids: [{
    id: 'signin',
    type: 'button',
    label: 'Sign In',
    title: 'Sign In',
    description: 'Sign in to your account to access personalized features and settings.',
    summary: 'Sign in to your account.',
    icon: '',
  }, {
    id: 'signup',
    type: 'button',
    label: 'Sign Up',
    title: 'Sign Up',
    description: 'Create a new account to access all features and benefits.',
    summary: 'Create a new account.',
    icon: '',
  }, {
    id: 'instructions',
    type: 'button',
    label: 'Instructions',
    title: 'Instructions',
    description: 'View detailed instructions on how to use the application effectively.',
    summary: 'View detailed instructions.',
    icon: 'Help',
  }],
};


const app = {
  id: 'body',
  type: 'body',
  title: 'Mafile Store',
  label: 'Welcome to the Mafile Store',
  description: 'The Mafile Store is a curated collection of cinema, objects, and people that shape the Mafile point of view. Explore our offerings and discover unique items and experiences.',
  summary: 'The Mafile Store is a curated collection of cinema, objects, and people.',
  kids: [{
    id: 'auth',
    type: 'button',
    title: 'GO TO FLE2',
    label: 'GO TO FLE2',
    description: 'Access the FLE2 platform to explore additional features and content.',
    summary: 'Access the FLE2 platform.',
    icon: 'ArrowRight',
  }],
};


const sections = {
  id: 'sections',
  type: 'sections',
  title: 'FLOW',
  label: 'FLOW',
  description: 'The FLOW sections provide a structured navigation experience, allowing users to move through different parts of the application seamlessly.',
  summary: 'The FLOW sections provide a structured navigation experience.',
  kids: [{
    id: 'index',
    type: 'button',
    label: 'INDEX',
    title: 'INDEX',
    order: 0,
    description: 'The INDEX section serves as the starting point for users, providing an overview of available content and navigation options.',
    summary: 'The INDEX section serves as the starting point for users.',
    icon: '',
  }, {
    id: 'about',
    type: 'button',
    title: 'ABOUT US',
    order: 1,
    label: 'ABOUT US',
    description: 'The ABOUT US section provides information about the organization, its mission, values, and team members.',
    summary: 'The ABOUT US section provides information about the organization.',
    icon: '',
  }, {
    id: 'cinema',
    type: 'button',
    title: 'CINEMA',
    order: 2,
    label: 'CINEMA',
    description: 'The CINEMA section offers a curated selection of films, showcasing various genres, directors, and cinematic styles.',
    summary: 'The CINEMA section offers a curated selection of films.',
    icon: '',
  }, {
    id: 'shopping',
    type: 'button',
    title: 'SHOPPING',
    order: 3,
    label: 'SHOPPING',
    description: 'The SHOPPING section allows users to browse and purchase products, with a focus on quality and customer satisfaction.',
    summary: 'The SHOPPING section allows users to browse and purchase products.',
    icon: '',
  }]
};

const root = {
  id: 'root',
  type: 'root',
  kids: [{
    id: 'app_name',
    type: 'button',
    title: 'Mafile Store',
    label: 'Mafile Store',
  }, {
    id: 'moon',
    type: 'toggle',
    title: 'Theme Mode',
    label: 'Theme Mode',
    icon: 'Moon',
  }],
};

export default {

  categories,
  menu,
  app,
  root,
  sections,
  companies,

};