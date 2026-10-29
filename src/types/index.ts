export interface ProfileData {
  fullName: string;
  headline: string;
  bio1?: string;
  bio2?: string;
  phone: string;
  whatsappUrl: string;
  email: string;
  linkedinUrl: string;
  photoUrl: string;
  posterUrl: string;
  upworkProofUrl: string;
  experience: string;
  location: string;
  specialties: string[];
}

export interface ClientTestimonial {
  id: string;
  projectTitle: string;
  clientName: string;
  clientRole?: string;
  dates: string;
  rating: number;
  reviewText: string;
  freelancerResponse?: string;
  endorsements: string[];
  amount: string;
  pricingType: 'Fixed price' | 'Hourly';
  hoursLogged?: number;
  hourlyRate?: string;
  verifiedScreenshot?: string;
}

export interface FreelanceService {
  id: string;
  title: string;
  category: 'TikTok Shop Setup' | 'Ads Creative Editing' | 'Creator & Affiliates' | 'Full Management';
  badge?: string;
  description: string;
  deliverables: string[];
  turnaroundTime: string;
  startingPrice: number;
  iconName: string;
  popular?: boolean;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  industry: string;
  resultsHeadline: string;
  gmvGrowth: string;
  roas: string;
  image: string;
  challenge: string;
  solution: string;
  keyOutcomes: string[];
  testimonialQuote: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  tag: string;
  price: number;
  billingPeriod: string;
  description: string;
  features: string[];
  idealFor: string;
  popular?: boolean;
}

export interface ProjectInquiry {
  id: string;
  name: string;
  email: string;
  brandName: string;
  storeUrl?: string;
  selectedServices: string[];
  budget: string;
  timeline: string;
  message: string;
  createdAt: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  inStock: boolean;
  colorHex?: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
  helpfulCount: number;
  verifiedBuyer: boolean;
  variantSelected?: string;
}

export interface Product {
  id: string;
  title: string;
  category: 'Viral Beauty' | 'Smart Electronics' | 'Streetwear' | 'Home & Living' | 'Creator Gear';
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  soldCount: number;
  image: string;
  description: string;
  bulletPoints: string[];
  stockCount: number;
  inStock: boolean;
  creatorCommissionRate: number;
  isFlashDeal?: boolean;
  flashDealEndsInMinutes?: number;
  variants: ProductVariant[];
  reviews: ProductReview[];
  creatorReview?: {
    creatorHandle: string;
    creatorFollowers: string;
    videoViews: string;
    quote: string;
  };
}

export interface CartItem {
  id: string;
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
}

export interface LiveComment {
  id: string;
  user: string;
  avatar: string;
  comment: string;
  timestamp: string;
  isHost?: boolean;
  isBuyer?: boolean;
}

export interface OrderItem {
  productId: string;
  title: string;
  variantName: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  customerName: string;
  email: string;
  address: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  paymentMethod: string;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered';
  trackingNumber: string;
  estimatedDelivery: string;
}

export interface AffiliateRequest {
  id: string;
  creatorName: string;
  creatorHandle: string;
  avatar: string;
  followers: string;
  engagementRate: string;
  niche: string;
  requestedProduct: string;
  requestedProductId: string;
  date: string;
  status: 'Pending' | 'Sample Dispatched' | 'Content Submitted' | 'Declined';
  videoLink?: string;
}

export interface Voucher {
  code: string;
  title: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minSpend: number;
  expiresInText: string;
  claimed: boolean;
}
