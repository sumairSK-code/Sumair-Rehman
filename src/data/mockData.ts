import {
  ClientTestimonial,
  FreelanceService,
  CaseStudy,
  ServicePackage
} from '../types';

export const SUMAIR_PROFILE = {
  fullName: 'Sumair Rehman',
  headline: 'TikTok Shop & E-Commerce Growth Expert',
  phone: '+92 3351031333',
  whatsappUrl: 'https://wa.me/923351031333',
  email: 'sumairkhan4950@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/sumair-rehman-543a87326',
  photoUrl: '/assets/aistudio/9886ff78-a1b8-4487-bcd4-865c47e0a515_e796b275.png',
  posterUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_02.36.26_81a5f27e.jpeg',
  upworkProofUrl: '/assets/aistudio/image_0a70cf28.png',
  experience: '2+ Years Experience',
  location: 'Working Globally · Freelancer',
  specialties: [
    'TikTok Shop Management',
    'TikTok & Meta Ads',
    'Product Listing Optimization',
    'Influencer & Affiliate Marketing',
    'UGC Content',
    'Private-Label E-Commerce'
  ]
};

export const VERIFIED_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'test-01',
    projectTitle: 'TikTok Shops for Peter James',
    clientName: 'Peter James',
    clientRole: 'Founder, Peter James E-Commerce',
    dates: 'Oct 13, 2025 - Nov 2, 2025',
    rating: 5.0,
    reviewText: 'He was exceptionally thorough. Proactively communicated every step of the way. Went above and beyond to be helpful and educate myself the team. A wonderful experience and will be using...',
    endorsements: ['Detail Oriented', 'Clear Communicator', 'Accountable for Outcomes', 'Solution Oriented'],
    amount: '$132.00',
    pricingType: 'Fixed price',
    verifiedScreenshot: '/assets/aistudio/image_0a70cf28.png'
  },
  {
    id: 'test-02',
    projectTitle: 'Full-Time TikTok Ads Creative Editor',
    clientName: 'Growth Media Agency',
    clientRole: 'Creative Director',
    dates: 'Sep 6, 2025 - Oct 22, 2025',
    rating: 5.0,
    reviewText: 'Dedicated worker, highly recommend',
    freelancerResponse: 'Thank you! It was a great experience working with you. I\'d love to work together again in the future.',
    endorsements: ['Accountable for Outcomes', 'High Speed Delivery', 'Video Hook Specialist'],
    amount: '$208.25',
    pricingType: 'Hourly',
    hoursLogged: 40,
    hourlyRate: '$5.00 /hr',
    verifiedScreenshot: '/assets/aistudio/image_0a70cf28.png'
  },
  {
    id: 'test-03',
    projectTitle: 'TikTok Creator Affiliate Campaign & Store Scaling',
    clientName: 'Nordic Glow Beauty',
    clientRole: 'Head of Growth',
    dates: 'Nov 10, 2025 - Dec 18, 2025',
    rating: 5.0,
    reviewText: 'Sumair generated over $34,000 in creator-driven GMV within our very first month on TikTok Shop. He handled creator sample pitching, script guidelines, and product SEO seamlessly. 10/10.',
    endorsements: ['Revenue Driver', 'Creator Management', 'Top-Tier Communication'],
    amount: '$1,450.00',
    pricingType: 'Fixed price'
  }
];

export const FREELANCE_SERVICES: FreelanceService[] = [
  {
    id: 'srv-01',
    title: 'TikTok Shop Setup & Management',
    category: 'TikTok Shop Setup',
    badge: 'Core Specialty',
    description: 'Complete seller account creation, business verification, warehouse & shipping configuration, daily dispatch oversight, order fulfillment, and compliance management.',
    deliverables: [
      'TikTok Shop Seller Center setup & tax registration',
      'Warehouse mapping with 48h SLA fulfillment templates',
      'Category approval and anti-suspension compliance',
      'Day-to-day store operations & account health monitoring'
    ],
    turnaroundTime: '2 - 3 Days',
    startingPrice: 150,
    iconName: 'Store',
    popular: true
  },
  {
    id: 'srv-02',
    title: 'TikTok, Facebook & Instagram Ads',
    category: 'Ads Creative Editing',
    badge: 'High ROAS',
    description: 'Performance-driven multi-platform ad campaigns. Strategic media buying, Spark Ads setup, audience targeting, and high-retention creative testing across TikTok and Meta.',
    deliverables: [
      'TikTok Ads Manager & Meta Ads campaign structure',
      '3-second viral hook testing for thumb-stopping attention',
      'Lookalike, interest, and retargeting custom audiences',
      'Continuous ROAS optimization & weekly spend reports'
    ],
    turnaroundTime: '24 - 48 Hours',
    startingPrice: 200,
    iconName: 'Video',
    popular: true
  },
  {
    id: 'srv-03',
    title: 'Product Listing & SEO Optimization',
    category: 'TikTok Shop Setup',
    badge: 'Search Traffic',
    description: 'Optimize your product titles, descriptions, image carousels, and search keywords to rank at the top of the TikTok Shop marketplace and FYP recommendations.',
    deliverables: [
      'Keyword-researched listing titles with high search intent',
      'Conversion-focused bullet points & benefit descriptions',
      'High-CTR thumbnail guidance & image gallery sequencing',
      'Category tagging & algorithm indexing for organic sales'
    ],
    turnaroundTime: '1 - 2 Days',
    startingPrice: 120,
    iconName: 'Search'
  },
  {
    id: 'srv-04',
    title: 'Influencer & Affiliate Marketing',
    category: 'Creator & Affiliates',
    badge: 'Viral Organic',
    description: 'Recruit active TikTok creators to promote your products. Manage free sample dispatches, draft high-converting creative briefs, and negotiate commission rates.',
    deliverables: [
      'Targeted creator vetting & recruitment (50+ creators)',
      'High-response DM & outreach email scripts',
      'Sample tracking pipeline from dispatch to live video',
      'Commission tier structuring (Open Plan & Target Collab)'
    ],
    turnaroundTime: 'Ongoing / 7 Days',
    startingPrice: 300,
    iconName: 'Users'
  },
  {
    id: 'srv-05',
    title: 'UGC Content & Creative Strategy',
    category: 'Ads Creative Editing',
    badge: 'High Retention',
    description: 'Transform raw customer and creator videos into viral e-commerce creatives with dynamic subtitles, sound sync, zoom cuts, and problem-solution storytelling.',
    deliverables: [
      'Thumb-stopping 3-second hook variations per asset',
      'Native CapCut / Premiere editing with animated typography',
      'Trending viral audio selection & sound effects',
      'Vertical 9:16 format delivered in 4K/1080p'
    ],
    turnaroundTime: '24 - 48 Hours',
    startingPrice: 180,
    iconName: 'Sparkles'
  },
  {
    id: 'srv-06',
    title: 'E-Commerce Growth & Performance Analytics',
    category: 'Full Management',
    badge: 'Data-Driven',
    description: 'Comprehensive store auditing, conversion funnel analysis, margin optimization, and private-label scaling strategies to ensure sustainable profitability.',
    deliverables: [
      'In-depth store conversion rate & traffic analysis',
      'Customer acquisition cost (CAC) vs. LTV optimization',
      'Promotional flash sales & voucher campaign planning',
      'Actionable weekly growth roadmap & KPI dashboards'
    ],
    turnaroundTime: 'Monthly Retainer',
    startingPrice: 500,
    iconName: 'BarChart'
  }
];

export const FREELANCE_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-01',
    client: 'Peter James E-Commerce',
    title: 'Launching TikTok Shop from Zero to $42K First Month GMV',
    industry: 'Lifestyle & Accessories',
    resultsHeadline: '+$42,180.00 GMV in 30 Days',
    gmvGrowth: '+340%',
    roas: '4.2x',
    image: '/src/assets/images/hero_tiktok_live_studio_1793308418404.jpg',
    challenge: 'Peter James had a successful Shopify store but zero presence on TikTok Shop. Their team needed full setup, warehouse routing, and listing compliance.',
    solution: 'Sumair took complete ownership: registered and verified the US TikTok Shop, mapped warehouse shipping rules with 48-hour delivery SLAs, created 12 optimized listings with SEO keywords, and setup promotional coupons.',
    keyOutcomes: [
      'Shop approved and live within 48 hours without delays',
      '12 listings formatted with viral TikTok tags',
      'Achieved 5.0 star seller rating with 0 late dispatch penalties',
      'Generated $42,180 GMV within the first 30 days of launch'
    ],
    testimonialQuote: '"He was exceptionally thorough. Proactively communicated every step of the way. Went above and beyond to be helpful and educate myself the team. A wonderful experience and will be using..."'
  },
  {
    id: 'cs-02',
    client: 'Volta Audio Brand',
    title: 'Scaling TikTok Video Ads from 1.4x to 3.8x ROAS with Creative Hooks',
    industry: 'Consumer Electronics',
    resultsHeadline: '3.8x ROAS on TikTok Ads Manager',
    gmvGrowth: '+185%',
    roas: '3.8x',
    image: '/src/assets/images/product_wireless_anc_earbuds_1793308419748.jpg',
    challenge: 'The brand was bleeding budget on generic corporate video ads with high scroll-away rates in the first 2 seconds.',
    solution: 'Sumair edited 20 rapid-fire UGC hooks focusing on sound comparison, airport travel ASMR, and direct price anchors ("Why buy $250 pods when these exist?").',
    keyOutcomes: [
      'First 3-second hold rate increased from 14% to 41%',
      'Cost per acquisition (CPA) decreased by 54%',
      'Ad creatives generated over 2.4M paid views',
      'Scaled daily ad spend profitably from $300 to $1,800'
    ],
    testimonialQuote: '"Dedicated worker, highly recommend. Sumair understands what stops the scroll on TikTok better than entire agencies."'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'pkg-01',
    name: 'TikTok Shop Launch Starter',
    tag: 'Quick Launch',
    price: 199,
    billingPeriod: 'one-time',
    description: 'Get approved and live on TikTok Shop quickly without account rejections or shipping delays.',
    features: [
      'Complete TikTok Shop Seller Account Setup',
      'Tax & Identity Verification assistance',
      'Warehouse & Shipping Template configuration',
      'Up to 5 Optimized Product Listings with SEO',
      'TikTok Business Account linking',
      '30-minute 1-on-1 walkthrough call'
    ],
    idealFor: 'Shopify / Amazon brands launching on TikTok for the first time'
  },
  {
    id: 'pkg-02',
    name: 'Viral TikTok Ads Creative Pack',
    tag: 'Most Popular',
    price: 399,
    billingPeriod: 'per pack',
    description: 'High-converting ad creatives designed specifically for TikTok Ads Manager and Meta with hook split-testing.',
    features: [
      '10 High-Retention TikTok Video Ads',
      '3 Tested Hook variations per video (30 hooks total)',
      'Dynamic text styling & animated captions',
      'Trending viral sound selection',
      'Color graded & audio leveled (4K export)',
      'Includes 2 rounds of revisions'
    ],
    idealFor: 'E-commerce media buyers wanting fresh winning creatives',
    popular: true
  },
  {
    id: 'pkg-03',
    name: 'Full Growth Retainer',
    tag: 'All-Inclusive',
    price: 850,
    billingPeriod: 'per month',
    description: 'Hands-off TikTok Shop growth partner. I handle your store operations, creator collaborations, and fresh creative video pipeline.',
    features: [
      'End-to-End TikTok Shop Store Management',
      'Weekly Creative Video Ads & UGC Hook Editing',
      'Creator Affiliate Outreach & Sample Management',
      'Product Listing SEO & Optimization',
      'Seller Account Health & Policy Compliance',
      'Direct WhatsApp & Slack Communication'
    ],
    idealFor: 'Established brands scaling to $50k - $200k+ monthly on TikTok'
  }
];
