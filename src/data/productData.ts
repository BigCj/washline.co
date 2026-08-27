export interface ProductSize {
  id: string;
  nominalLength: string;
  width: string;
  label: string;
  linesCount?: number;
  lineSpacing?: string;
  totalHangingSpace?: string;
  sheetCompatibility?: string;
  isPopular?: boolean;
  minWallSpaceRequired: string;
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
      score: 'Excellent',
      reviewCount: 46,
      summary: 'Rated Excellent based on 46 customer reviews.',
    },
  },

  pricing: {
    diyKitStartingPrice: 1760,
    diyKitPriceDisplay: 'From R1,760 incl. VAT',
    diyKitRangeDisplay: 'R1,760 – R1,960 incl. VAT',
    currency: 'ZAR',
    currencySymbol: 'R',
  },

  colors: [
    {
      id: 'charcoal',
      name: 'Charcoal',
      hex: '#27272A',
      description: 'Charcoal epoxy powder-coated finish.',
      image: '/images/products/01-open-charcoal.webp',
    },
    {
      id: 'white',
      name: 'White',
      hex: '#F4F4F5',
      description: 'White epoxy powder-coated finish.',
      image: '/images/products/01-open-charcoal.webp',
    },
    {
      id: 'bronze',
      name: 'Bronze',
      hex: '#524036',
      description: 'Bronze epoxy powder-coated finish.',
      image: '/images/products/01-open-charcoal.webp',
    },
  ] as FrameColor[],

  sizes: [
    {
      id: '1.0m',
      nominalLength: '1.0 m',
      width: '80 cm',
      label: '1.0 metres × 80 cm',
      minWallSpaceRequired: '1.1 metres (nominal size + approx. 10 cm clearance)',
    },
    {
      id: '1.5m',
      nominalLength: '1.5 m',
      width: '80 cm',
      label: '1.5 metres × 80 cm',
      minWallSpaceRequired: '1.6 metres (nominal size + approx. 10 cm clearance)',
    },
    {
      id: '2.0m',
      nominalLength: '2.0 m',
      width: '80 cm',
      label: '2.0 metres × 80 cm',
      minWallSpaceRequired: '2.1 metres (nominal size + approx. 10 cm clearance)',
    },
    {
      id: '2.3m',
      nominalLength: '2.3 m',
      width: '80 cm',
      label: '2.3 metres × 80 cm',
      linesCount: 6,
      lineSpacing: 'approx. 10 cm',
      totalHangingSpace: 'approx. 13.5 metres',
      sheetCompatibility:
        'Accommodates normal queen-size fitted sheets and duvet covers without requiring them to be folded back.',
      isPopular: true,
      minWallSpaceRequired: '2.4 metres (nominal size + approx. 10 cm clearance)',
    },
    {
      id: '2.6m',
      nominalLength: '2.6 m',
      width: '80 cm',
      label: '2.6 metres × 80 cm',
      sheetCompatibility: 'Caters for king-size sheets.',
      minWallSpaceRequired: '2.7 metres (nominal size + approx. 10 cm clearance)',
    },
  ] as ProductSize[],

  sizeAdvice: {
    title: 'Choosing your size',
    popularNote:
      'Our most popular Foldaway is the 2.3 m × 80 cm model. The longest model manufactured is 2.6 m. Mr Washline recommends using a second or third washing line rather than going larger where additional hanging space is required.',
    practicalAdvantage:
      'Multiple Foldaways can be positioned strategically to make use of morning and afternoon sun or to place one under cover during rainy periods.',
  },

  kitComponents: [
    {
      number: 1,
      name: 'Front and back bars',
      quantity: 'Aluminium bars',
      description: 'Aluminium front and back bars.',
    },
    {
      number: 2,
      name: 'Left and right side arms',
      quantity: 'Left and right arms',
      description: 'Left and right side arms with support stays.',
    },
    {
      number: 3,
      name: 'Couch screws × 4',
      quantity: '4 units',
      description: 'Couch screws for wall mounting.',
    },
    {
      number: 4,
      name: 'Washers × 4',
      quantity: '4 units',
      description: 'Washers × 4.',
    },
    {
      number: 5,
      name: 'Wall plugs × 4',
      quantity: '4 units',
      description: 'Wall plugs × 4.',
    },
    {
      number: 6,
      name: 'Wing nut line tensioner',
      quantity: '1 unit',
      description: 'Wing nut line tensioner.',
    },
    {
      number: 7,
      name: 'Washing line cord',
      quantity: 'Cord',
      description: 'Washing line cord.',
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
      diy: 'DIY FOLDAWAY KIT: Delivered in kit form in a strong cardboard tube for easier transportation and requires basic assembly.',
    },
  },

  benefits: [
    {
      id: 'weatherproof',
      title: 'Weatherproof',
      tagline: 'Aluminium does not rust',
      summary:
        'The Foldaway frame is made from aluminium. Unlike conventional steel or galvanised-steel washing lines, aluminium does not rust. Aluminium is lightweight, helping make the washing line easy to operate. Frames are professionally epoxy powder-coated to provide a weatherproof finish. Machine screws used in the assembly are stainless steel.',
      bullets: [
        'Frame made from aluminium',
        'Professionally epoxy powder-coated to provide a weatherproof finish',
        'Machine screws used in assembly are stainless steel',
        'Lightweight aluminium makes the washing line easy to operate',
      ],
      image: '/images/products/06-aluminium-detail.webp',
    },
    {
      id: 'easy-to-operate',
      title: 'Easy to Operate',
      tagline: 'Simple stay/support arms',
      summary:
        'The Foldaway uses simple stay/support arms for raising and lowering the frame.',
      bullets: [
        'Simple stay/support arms for raising and lowering the frame',
        'Smooth pivot mechanism',
        'Stainless steel machine screws used in construction',
        'Lightweight aluminium construction',
      ],
      image: '/images/products/05-mechanism-closeup.webp',
    },
    {
      id: 'space-saving',
      title: 'Space Saving',
      tagline: 'More space. Same wall.',
      summary:
        'The Foldaway can be lowered against the mounting wall when not in use, allowing the area to be reused.',
      bullets: [
        'Folds down flat against the wall when not in use',
        'Allows the area to be reused',
        'Space-saving fold-down design',
        'Clean wall-mounted profile',
      ],
      image: '/images/products/04-folded-charcoal.webp',
    },
    {
      id: 'versatile',
      title: 'Versatile',
      tagline: 'Indoors. Outdoors. Wherever space matters.',
      summary:
        'Suitable for installation in spaces such as courtyards, under roof eaves, pool areas, laundry rooms, and garages.',
      bullets: [
        'Courtyards',
        'Under roof eaves',
        'Pool areas',
        'Laundry rooms',
        'Garages',
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
      'Spacer blocks may be needed where obstacles prevent the back bar from sitting correctly. Spacer blocks can also be used when installing onto suitable vibracrete walls where the upright pillars obstruct the back bar. Spacer blocks are supplied on request.',
    mountingHeight:
      'Mr Washline recommends mounting the washing line at approximately 1.85 metres high.',
    fastenersSupplied:
      'For the fully assembled Foldaway model, screws and mounting instructions are supplied.',
    clearanceRule:
      'Customers require approximately 10 cm of additional wall space. For example, a 2.3 m Foldaway requires approximately 2.4 m of wall space.',
  },

  delivery: {
    title: 'Delivery Information',
    centralPolicy:
      'Delivery available across South Africa. Delivery charges or free-delivery eligibility are confirmed during checkout or quotation.',
    leadTime: 'Approximately 1–3 working days.',
    capeTownDescription:
      'Delivery areas include Cape Town City Centre and nearby areas (Atlantic Seaboard from Sea Point to Llandudno, Blouberg and surrounds from Milnerton to Melkbosstrand, City and surrounds, False Bay as far as Simon’s Town, Northern suburbs as far as Brackenfell, Southern Peninsula including Hout Bay, Kommetjie and Noordhoek but not as far as Scarborough, and Southern suburbs). Delivery charges are confirmed during quotation or checkout.',
    capeTownZones: [
      'Atlantic Seaboard from Sea Point to Llandudno',
      'Blouberg and surrounds from Milnerton to Melkbosstrand',
      'City and surrounds',
      'False Bay as far as Simon’s Town',
      'Northern suburbs as far as Brackenfell',
      'Southern Peninsula including Hout Bay, Kommetjie and Noordhoek (not as far as Scarborough)',
      'Southern suburbs',
    ],
  },

  orderSteps: [
    {
      stepNumber: '01',
      title: 'Choose your size',
      description:
        'Customers require approximately 10 cm of additional wall space. For example, a 2.3 m Foldaway requires approximately 2.4 m of wall space.',
    },
    {
      stepNumber: '02',
      title: 'Place an order online or contact Mr Washline',
      description:
        'Select your frame colour (White, Charcoal, or Bronze) and order online or contact us directly.',
    },
    {
      stepNumber: '03',
      title: 'Provide your order details',
      description:
        'Provide the required size, customer name, delivery street address, and contact number when requesting a quotation.',
    },
    {
      stepNumber: '04',
      title: 'Order confirmation',
      description:
        'Mr Washline confirms the order and delivery information. Lead time is approximately 1–3 working days.',
    },
  ],

  contact: {
    headOffice: {
      label: 'Cape Town (Head Office)',
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
