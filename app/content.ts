export const logoUrl = "https://www.fluxcuts.com/logo.png";

export const modelUrl =
  "https://horizons-cdn.hostinger.com/bc0cec1b-a93d-4b08-a937-e992da7d4f82/2fdcb434bec80da3af5fb69a810d1866.webp";

export const navItems = ["Pricing", "Products", "Blog", "Contact"];

export const galleryVideos = [
  {
    label: "Flux Cuts branded handbag",
    src: "https://videos.zeroshoots.com/small_BAG_1webmwebm.webm",
  },
  {
    label: "Fitness bands product ad",
    src: "https://videos.zeroshoots.com/small_BANDSwebmwebm.webm",
  },
  {
    label: "Snack chips product ad",
    src: "https://videos.zeroshoots.com/small_CHIPS_2_ahq12_1webm.webm",
  },
  {
    label: "Fashion model ad",
    src: "https://videos.zeroshoots.com/small_FASHIONwebmwebm.webm",
  },
  {
    label: "Headphones lifestyle ad",
    src: "https://videos.zeroshoots.com/small_HEADPHONES_1webmwebm.webm",
  },
  {
    label: "Perfume product ad",
    src: "https://videos.zeroshoots.com/small_PERFUMEwebmwebm.webm",
  },
  {
    label: "Protein drink ad",
    src: "https://videos.zeroshoots.com/small_PROTEIN_1webmwebm.webm",
  },
  {
    label: "Beauty serum ad",
    src: "https://videos.zeroshoots.com/small_SERUMwebmwebm.webm",
  },
  {
    label: "Red sneakers product ad",
    src: "https://videos.zeroshoots.com/small_SHOESwebmwebm.webm",
  },
  {
    label: "Sofa lifestyle ad",
    src: "https://videos.zeroshoots.com/small_SOFAwebmwebm.webm",
  },
  {
    label: "Tumbler product ad",
    src: "https://videos.zeroshoots.com/small_TUMBLER_1_apo8_ahq12_1webm.webm",
  },
  {
    label: "Luxury watch product ad",
    src: "https://videos.zeroshoots.com/small_WATCH_1_ahq12_1webm.webm",
  },
];

export const galleryGroups = [
  {
    top: 40,
    columns: [
      { top: 0, videos: [galleryVideos[0], galleryVideos[1]] },
      { top: 70, videos: [galleryVideos[2], galleryVideos[3]] },
    ],
  },
  {
    top: 0,
    columns: [
      { top: 0, videos: [galleryVideos[4], galleryVideos[5]] },
      { top: 70, videos: [galleryVideos[6], galleryVideos[7]] },
    ],
  },
  {
    top: 30,
    columns: [
      { top: 0, videos: [galleryVideos[8], galleryVideos[9]] },
      { top: 70, videos: [galleryVideos[10], galleryVideos[11]] },
    ],
  },
];

export const compareRows = [
  {
    company: "Flux Cuts",
    cost: "$280",
    monthly: "$1,120/mo",
    videos: "4",
    savings: "Save up to $2,380/mo",
    highlight: true,
  },
  {
    company: "GoodLuckStef",
    cost: "$300",
    monthly: "$1,500/mo",
    videos: "5",
    savings: "$380/mo more",
  },
  {
    company: "HeyOz",
    cost: "$150-$875",
    monthly: "$599-$3,500/mo",
    videos: "Varies",
    savings: "Up to $2,380/mo more",
  },
  {
    company: "Sprello",
    cost: "$500-$2,000",
    monthly: "Subscription-based",
    videos: "Varies",
    savings: "Up to $880/mo more",
  },
];

export const howSteps = [
  {
    number: "01",
    title: "Brief Us",
    copy: "Tell us about your brand, product, and target audience. No lengthy forms, no back and forth.",
  },
  {
    number: "02",
    title: "We Create",
    copy: "Our team develops the concept, writes the angles, prompts the AI, and edits everything to a polished final output.",
  },
  {
    number: "03",
    title: "You Launch",
    copy: "Receive ready-to-run Meta ads. Review, approve, and start scaling.",
  },
];

export type AudienceIconName = "bag" | "store" | "growth";

export const audienceCards: Array<{
  icon: AudienceIconName;
  title: string;
  copy: string;
  link?: string;
}> = [
  {
    icon: "bag",
    title: "DTC Brands",
    copy: "You sell direct to consumer and need fresh creatives constantly. Try our Fashion Prompt Pack - plug in your model and product and generate scroll-stopping ad images instantly.",
    link: "Check out our Fashion Prompt Pack",
  },
  {
    icon: "store",
    title: "Ecommerce Stores",
    copy: "You sell physical products - consumables, accessories, clothing, food, drinks, beauty - and need ads that actually look premium.",
  },
  {
    icon: "growth",
    title: "Performance Marketers",
    copy: "You manage Meta ad spend and need more creative angles to test without blowing budget on traditional production.",
  },
];

export const faqItems = [
  {
    question: "What exactly does Flux Cuts do?",
    answer:
      "We are a creative agency that produces Meta ad creatives using AI as our production tool. Our team handles the concept, creative direction, prompting, and editing - you just brief us and approve the final output.",
  },
  {
    question: "How is this different from hiring a traditional agency?",
    answer:
      "Traditional agencies charge for shoots, studios, and actors. We skip all of that and deliver the same quality output at a fraction of the cost and time.",
  },
  {
    question: "What types of products do you make ads for?",
    answer:
      "We work with physical product brands - consumables, accessories, clothing, food and drinks, beauty and body products, and more. If it sells on Meta, we can make ads for it.",
  },
  {
    question: "What formats do you deliver?",
    answer:
      "We deliver in any format your campaign needs - vertical, square, landscape. Whatever performs best for your Meta strategy.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most projects are delivered within 48 hours of your brief being approved.",
  },
  {
    question: "What if I want changes?",
    answer:
      "All plans include revisions. Our team works with you until the creative is exactly right.",
  },
];

export const footerGroups = [
  {
    heading: "Company",
    links: ["Home", "About", "Blog", "Book a Call"],
  },
  {
    heading: "Products",
    links: ["All Products", "Pricing", "Create Account", "Log In"],
  },
  {
    heading: "Legal",
    links: ["Refund Policy", "Privacy Policy", "Terms of Service"],
  },
];
