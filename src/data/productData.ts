export interface ProductSize {
  id: string;
  nominalLength: string;
  width: string;
  label: string;
  linesCount: number;
  lineSpacing: string;
  totalHangingSpace: string;
  sheetCompatibility: string;
  isPopular?: boolean;
  minWallSpaceRequired: string;
  diyPriceInclVat: number;
  assembledPriceInclVat: number;
}

export interface FrameColor {
  id: 'charcoal' | 'white' | 'bronze';
  name: string;
  hex: string;
  description: string;
  image: string;
}

export interface KitComponent {
  number: number;
  name: string;
  quantity: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  content: string;
}

export const PRODUCT_DATA = {
  brand: {
    name: 'Mr Washline',
    strapline: 'Your foldaway washing line specialists since 2003',
    foundingYear: 2003,
    description:
      'Mr Washline are the original developers/manufacturers and national suppliers of quality aluminium, epoxy powder-coated, wall-mounted foldaway washing lines in South Africa.',
    heroTitle: 'THE FOLDAWAY',
    heroSubtitle: 'Space when you need it. Gone when you don’t.',
    heroSupporting:
      'A lightweight aluminium fold-down washing line designed for modern homes, courtyards, balconies, laundries and garages.',
    guarantee:
      '100% satisfaction / money-back guarantee in the event that the customer is not satisfied with the product or service.',
    rating: {
      score: 4.9,
      reviewCount: 46,
      label: 'Excellent',
    },
  },

  pricing: {
    diyKitStartingPrice: 1760,
    diyKitPriceRangeDisplay: 'R1,760 – R1,960 incl. VAT',
    assembledStartingPrice: 1980,
    assembledPriceRangeDisplay: 'R1,980 – R2,280 incl. VAT',
    currency: 'ZAR',
    currencySymbol: 'R',
  },

  colors: [
    {
      id: 'charcoal',
      name: 'Charcoal',
      hex: '#27272A',
      description: 'Contemporary deep architectural charcoal, epoxy powder-coated.',
      image: '/images/products/01-open-charcoal.webp',
    },
    {
      id: 'white',
      name: 'White',
      hex: '#F4F4F5',
      description: 'Clean architectural brilliant white, epoxy powder-coated.',
      image: '/images/products/01-open-charcoal.webp',
    },
    {
      id: 'bronze',
      name: 'Bronze',
      hex: '#524036',
      description: 'Rich metallic architectural bronze, epoxy powder-coated.',
      image: '/images/products/01-open-charcoal.webp',
    },
  ] as FrameColor[],

  sizes: [
    {
      id: '1.0m',
      nominalLength: '1.0m',
      width: '80cm',
      label: '1.0 metres × 80 cm',
      linesCount: 6,
      lineSpacing: 'approx. 10 cm',
      totalHangingSpace: 'approx. 6.0 metres',
      sheetCompatibility: 'Towels, delicates, shirts and baby linen',
      minWallSpaceRequired: '1.1 metres (size + 10 cm clearance)',
      diyPriceInclVat: 1760,
      assembledPriceInclVat: 1980,
    },
    {
      id: '1.5m',
      nominalLength: '1.5m',
      width: '80cm',
      label: '1.5 metres × 80 cm',
      linesCount: 6,
      lineSpacing: 'approx. 10 cm',
      totalHangingSpace: 'approx. 9.0 metres',
      sheetCompatibility: 'Single sheets, bath towels and everyday laundry loads',
      minWallSpaceRequired: '1.6 metres (size + 10 cm clearance)',
      diyPriceInclVat: 1810,
      assembledPriceInclVat: 2050,
    },
    {
      id: '2.0m',
      nominalLength: '2.0m',
      width: '80cm',
      label: '2.0 metres × 80 cm',
      linesCount: 6,
      lineSpacing: 'approx. 10 cm',
      totalHangingSpace: 'approx. 12.0 metres',
      sheetCompatibility: 'Double sheets and medium family washing loads',
      minWallSpaceRequired: '2.1 metres (size + 10 cm clearance)',
      diyPriceInclVat: 1860,
      assembledPriceInclVat: 2120,
    },
    {
      id: '2.3m',
      nominalLength: '2.3m',
      width: '80cm',
      label: '2.3 metres × 80 cm',
      linesCount: 6,
      lineSpacing: 'approx. 10 cm',
      totalHangingSpace: 'approx. 13.5 metres',
      sheetCompatibility:
        'Accommodates normal Queen-size fitted sheets and duvet covers without requiring them to be folded back',
      isPopular: true,
      minWallSpaceRequired: '2.4 metres (size + 10 cm clearance)',
      diyPriceInclVat: 1910,
      assembledPriceInclVat: 2200,
    },
    {
      id: '2.6m',
      nominalLength: '2.6m',
      width: '80cm',
      label: '2.6 metres × 80 cm',
      linesCount: 6,
      lineSpacing: 'approx. 10 cm',
      totalHangingSpace: 'approx. 15.6 metres',
      sheetCompatibility: 'Caters for King-size sheets and full family wash loads',
      minWallSpaceRequired: '2.7 metres (size + 10 cm clearance)',
      diyPriceInclVat: 1960,
      assembledPriceInclVat: 2280,
    },
  ] as ProductSize[],

  kitComponents: [
    {
      number: 1,
      name: 'Front and back bars',
      quantity: '2 aluminium bars',
      description: 'Precision pre-drilled architectural aluminium bars with stringing holes.',
    },
    {
      number: 2,
      name: 'Left and right side arms',
      quantity: '2 support arms with stays',
      description: 'Epoxy powder-coated side arms with factory pivot hinges and stay mechanisms.',
    },
    {
      number: 3,
      name: 'Couch screws × 4',
      quantity: '4 units',
      description: 'Heavy-duty masonry coach/couch screws for rock-solid wall mounting.',
    },
    {
      number: 4,
      name: 'Washers × 4',
      quantity: '4 units',
      description: 'Stainless steel washers providing even clamping pressure against wall plugs.',
    },
    {
      number: 5,
      name: 'Wall plugs × 4',
      quantity: '4 units',
      description: 'High-expansion nylon masonry plugs tailored for concrete, brick and block walls.',
    },
    {
      number: 6,
      name: 'Wing nut line tensioner',
      quantity: '1 unit',
      description: 'Quick-adjust wing nut tensioning hardware to maintain taut washing cords.',
    },
    {
      number: 7,
      name: 'Washing line cord',
      quantity: '1 continuous roll',
      description: 'UV-resistant, weather-tested heavy-duty washing line cord.',
    },
  ] as KitComponent[],

  diyKitInfo: {
    title: 'The Foldaway DIY Assemble Kit',
    subtitle: 'The ideal way to transport the Foldaway.',
    description:
      'The Foldaway DIY Assemble Kit is delivered in kit form inside a strong cardboard tube, making it convenient for transport by road or air.',
    tubeSpecs: 'Approximately 10 cm in diameter',
    assemblySpecs:
      'Assembly is straightforward. A rubber mallet is required to connect the arms to the front and back bars.',
    distinction: {
      standard: 'STANDARD FOLDAWAY: Delivered fully assembled and strung.',
      diy: 'DIY FOLDAWAY KIT: Delivered in kit form for easier transportation and requires basic assembly.',
    },
  },

  benefits: [
    {
      id: 'weatherproof',
      title: 'Weatherproof',
      tagline: 'Aluminium does not rust',
      summary:
        'The Foldaway frame is made from aluminium. Unlike conventional steel or galvanised-steel washing lines, aluminium does not rust. Aluminium is lightweight, helping make the washing line easy to operate. Frames are professionally epoxy powder-coated to provide a weather-resistant finish. Machine screws used in the assembly are stainless steel.',
      bullets: [
        'Frame manufactured from rust-resistant aluminium',
        'Professionally epoxy powder-coated protective finish',
        'Assembly machine screws are marine-grade stainless steel',
        'Lightweight structure ensures effortless operation',
      ],
      image: '/images/products/06-aluminium-detail.webp',
    },
    {
      id: 'easy-to-operate',
      title: 'Easy to Operate',
      tagline: 'Simple stay/support arm mechanism',
      summary:
        'The Foldaway uses simple stay/support arms for raising and lowering the frame. The smooth pivot mechanism allows one-motion raising and locking into position.',
      bullets: [
        'Simple stay/support arms lock firmly in raised position',
        'Effortless pivot mechanism engineered for longevity',
        'Stainless pivot bolts guarantee smooth motion',
        'Lightweight aluminium frame raises without strain',
      ],
      image: '/images/products/05-mechanism-closeup.webp',
    },
    {
      id: 'space-saving',
      title: 'Space Saving',
      tagline: 'More space. Same wall.',
      summary:
        'The Foldaway can be lowered against the mounting wall when not in use, allowing the area to be reused. Reclaims valuable courtyard, patio, garage, or laundry floor space.',
      bullets: [
        'Folds down flat against the wall when not in use',
        'Reclaims open area for entertainment, parking or gardening',
        'Zero floor footprint compared to bulky rotary airers',
        'Clean, unobtrusive architectural profile',
      ],
      image: '/images/products/04-folded-charcoal.webp',
    },
    {
      id: 'versatile',
      title: 'Versatile Application',
      tagline: 'Indoors. Outdoors. Wherever space matters.',
      summary:
        'Engineered for modern lifestyle architecture: courtyards, under roof eaves, pool areas, laundry rooms, and garages.',
      bullets: [
        'Courtyards & townhouse exterior walls',
        'Under roof eaves & covered verandahs',
        'Pool areas & braai patios',
        'Indoor laundry rooms & garage utility walls',
      ],
      image: '/images/products/01-open-charcoal.webp',
    },
  ],

  installation: {
    title: 'Installation Information',
    wallGuidance: 'The wall should ideally be flat.',
    obstacleGuidance:
      'Avoid placing the brackets where pipes, cables or other fixtures interfere.',
    spacerBlockGuidance:
      'Spacer blocks may be needed where obstacles prevent the back bar from sitting correctly. Spacer blocks can also be used when installing onto suitable vibracrete walls where the upright pillars obstruct the back bar.',
    mountingHeight: 'Mr Washline documentation recommends mounting the washing line at approximately 1.85 metres high.',
    fastenersSupplied:
      'For the fully assembled Foldaway model, screws and mounting instructions are supplied.',
    clearanceRule:
      'Customers require approximately 10 cm of additional wall space. For example, a 2.3 m Foldaway requires approximately 2.4 m of wall space.',
  },

  delivery: {
    title: 'Delivery Information',
    centralPolicy:
      'Delivery available across South Africa. Delivery charges or free-delivery eligibility are confirmed during checkout or quotation.',
    leadTime: 'Approximately 1–3 working days dispatch.',
    capeTownFreeDeliveryDescription:
      'Mr Washline provides weekly free delivery around Cape Town City Centre and nearby areas including:',
    capeTownZones: [
      'Atlantic Seaboard from Sea Point to Llandudno',
      'Blouberg and surrounds from Milnerton to Melkbosstrand',
      'City and surrounds',
      'False Bay as far as Simon’s Town',
      'Northern suburbs as far as Brackenfell',
      'Southern Peninsula including Hout Bay, Kommetjie and Noordhoek but not as far as Scarborough',
      'Southern suburbs',
    ],
  },

  orderSteps: [
    {
      stepNumber: '01',
      title: 'Choose your size',
      description:
        'Select from 1.0m to 2.6m. Remember: you require approximately 10 cm of additional wall space (e.g., a 2.3 m Foldaway requires ~2.4 m of wall space).',
    },
    {
      stepNumber: '02',
      title: 'Select colour & format',
      description:
        'Choose your epoxy powder-coated frame colour (White, Charcoal, or Bronze) and format (Standard Assembled or DIY Tube Kit).',
    },
    {
      stepNumber: '03',
      title: 'Place order or request quote',
      description:
        'Order online or send an enquiry with your required size, customer name, delivery street address, and contact number.',
    },
    {
      stepNumber: '04',
      title: 'Confirmation & Delivery',
      description:
        'Mr Washline confirms the order and delivery details. Delivered in 1–3 working days.',
    },
  ],

  reviews: [
    {
      id: 'rev-1',
      author: 'David V.R.',
      location: 'Constantia, Cape Town',
      rating: 5,
      date: 'Verified Customer',
      title: 'Superb build quality & space saver',
      content:
        'Ordered the 2.3m charcoal Foldaway for our courtyard wall. Takes our Queen fitted sheets easily without bunching. Folds completely out of the way when the kids play outside. Extremely durable aluminium.',
    },
    {
      id: 'rev-2',
      author: 'Megan K.',
      location: 'Durbanville, Western Cape',
      rating: 5,
      date: 'Verified Customer',
      title: 'Delivered in 2 days, super easy DIY assembly',
      content:
        'The cardboard tube transport made it so convenient to bring home. Used a rubber mallet as instructed and had it assembled in under 15 minutes. Very sturdy powder coating.',
    },
    {
      id: 'rev-3',
      author: 'Johan S.',
      location: 'Bryanston, Johannesburg',
      rating: 5,
      date: 'Verified Customer',
      title: 'Second one we’ve bought over 10 years',
      content:
        'We had our first Mr Washline for over 8 years in our previous house with zero rust. When we moved, installing another one was our first priority. Best foldaway line in SA.',
    },
    {
      id: 'rev-4',
      author: 'Annelize B.',
      location: 'Camps Bay, Cape Town',
      rating: 5,
      date: 'Verified Customer',
      title: 'Corrosion-free coastal performance',
      content:
        'Living right by the ocean, conventional lines rust within months. The aluminium and stainless screws on the Foldaway still look brand new after heavy winter storms.',
    },
  ] as ReviewItem[],

  contact: {
    headOffice: {
      label: 'Cape Town Head Office & Factory',
      companyName: 'Mr Washline',
      addressLines: [
        'Unit D3, Prime Park',
        'Mocke Road',
        'Diep River',
        'South Africa',
        '7800',
      ],
      addressFormatted:
        'Unit D3, Prime Park, Mocke Road, Diep River, South Africa, 7800',
      email: 'info@mrwashline.co.za',
      tel: '021 706 3651',
      telIntl: '+27 21 706 3651',
      cellWhatsapp: '082 378 2381',
      cellWhatsappIntl: '+27 82 378 2381',
      whatsappLink: 'https://wa.me/27823782381',
    },
    johannesburg: {
      label: 'Johannesburg – Installations',
      telIntl: '+27 11 486 2824',
      cellIntl: '+27 74 141 0099',
      email: 'jhb@mrwashline.co.za',
    },
    paymentMethods: ['Mastercard', 'Visa', 'EFT', 'Cash'],
  },
};
