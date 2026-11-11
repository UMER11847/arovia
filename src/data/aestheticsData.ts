import { Treatment, GalleryItem, Testimonial, InstagramPost } from '../types';
import botanicalTextureImage from '../assets/images/arovia_botanical_texture_1794424979173.jpg';
import clinicInteriorImage from '../assets/images/arovia_clinic_interior_1794424977248.jpg';
import heroImage from '../assets/images/arovia_hero_aesthetic_1794424976517.jpg';
import resultsGlowImage from '../assets/images/arovia_results_glow_1794424979776.jpg';
import treatmentSkincareImage from '../assets/images/arovia_treatment_skincare_1794424978317.jpg';

export const HERO_IMAGE = heroImage;
export const CLINIC_INTERIOR_IMAGE = clinicInteriorImage;
export const TREATMENT_SKINCARE_IMAGE = treatmentSkincareImage;
export const RESULTS_GLOW_IMAGE = resultsGlowImage;
export const BOTANICAL_TEXTURE_IMAGE = botanicalTextureImage;

export const TREATMENTS: Treatment[] = [
  {
    id: 'lip-architecture',
    name: 'Lip Architecture & Contour Enhancement',
    category: 'injectables',
    categoryLabel: 'Injectable Architecture',
    tagline: 'Subtle hydration, balanced proportions, and soft natural definition.',
    description: 'A bespoke micro-droplet lip contouring treatment designed to enhance your unique lip geometry, hydrate delicate vermilion borders, and create harmonized symmetry without artificial fullness.',
    fullDetails: 'Using ultra-pure cross-linked hyaluronic acid, our practitioner performs a careful analysis of your dental occlusion, facial profile, and philtrum ratio. The technique emphasizes micro-cannula placement to minimize trauma, yielding soft, pillowy lips that look entirely your own.',
    duration: '45 mins',
    downtime: '1–2 days mild swelling',
    longevity: '9–12 months',
    sensation: 'Minimal (topical lidocaine applied)',
    targetAreas: ['Vermilion Border', "Cupid's Bow", 'Oral Commissures', 'Lip Body'],
    image: RESULTS_GLOW_IMAGE,
    isPopular: true,
  },
  {
    id: 'anti-wrinkle-smoothing',
    name: 'Neuromodulator Fine Line Smoothing',
    category: 'injectables',
    categoryLabel: 'Injectable Architecture',
    tagline: 'Softening expression lines while preserving full emotional expression.',
    description: 'Precision micro-dosing of purified botulinum neuromodulators to relax overactive facial muscles, smooth dynamic frown lines, crows feet, and forehead creases while maintaining lively, authentic expression.',
    fullDetails: 'We practice conservative aesthetic medicine. By targeting only hyperdynamic muscular bands, your natural facial movement remains completely fluid and animated. Never frozen, never shiny, always rested.',
    duration: '30 mins',
    downtime: 'None (resume routine immediately)',
    longevity: '3–5 months',
    sensation: 'Tiny pinch',
    targetAreas: ['Glabellar Frown Lines', 'Forehead Lines', "Crow's Feet", 'Bunny Lines', 'Brow Lift'],
    image: HERO_IMAGE,
    isPopular: true,
  },
  {
    id: 'profhilo-bio-remodeling',
    name: 'Profhilo® Deep Dermal Bio-Remodeling',
    category: 'rejuvenation',
    categoryLabel: 'Skin Bio-Remodeling',
    tagline: 'Cellular hydration and collagen bio-stimulation for luminous elasticity.',
    description: 'An injectable anti-aging protocol formulated with one of the highest concentrations of ultrapure hyaluronic acid on the market to stimulate 4 types of collagen and elastin.',
    fullDetails: 'Administered via 5 strategic bio-aesthetic points (BAP) on each side of the face or neck, Profhilo flows uniformly through the subdermal layer. It acts like an internal moisturizer, fundamentally reversing tissue laxity and restoring radiant skin firmness from within.',
    duration: '40 mins',
    downtime: 'Small localized bumps for 12–24 hours',
    longevity: '6–9 months (2-session initial protocol)',
    sensation: 'Mild pressure at injection points',
    targetAreas: ['Full Face', 'Neck & Décolletage', 'Hands'],
    image: TREATMENT_SKINCARE_IMAGE,
    isPopular: true,
  },
  {
    id: 'collagen-induction-microneedling',
    name: 'Medical-Grade Collagen Induction & Exosomes',
    category: 'skin-health',
    categoryLabel: 'Clinical Renewal',
    tagline: 'Refining pore architecture, post-blemish texture, and dermal density.',
    description: 'Automated high-precision micro-channeling combined with sterile peptide and exosome complexes to trigger your body’s natural regenerative healing cascades.',
    fullDetails: 'Micro-fine medical needles create microscopic pathways in the dermis, accelerating cellular turnover, fading hyperpigmentation, smoothing textural irregularities, and dramatically increasing product bioavailability.',
    duration: '60 mins',
    downtime: 'Mild erythema (like a gentle sunburn) for 24 hours',
    longevity: 'Long-lasting progressive results (course of 3–4 recommended)',
    sensation: 'Tolerable (medical numbing cream included)',
    targetAreas: ['Cheeks & Forehead', 'Jawline', 'Acne Texture Zones'],
    image: BOTANICAL_TEXTURE_IMAGE,
  },
  {
    id: 'tear-trough-rejuvenation',
    name: 'Tear Trough & Periorbital Illumination',
    category: 'injectables',
    categoryLabel: 'Injectable Architecture',
    tagline: 'Gently lifting hollow under-eye shadows to refresh tired eyes.',
    description: 'Specialized blunt micro-cannula administration of low-hydrophilic hyaluronic filler into the deep under-eye trough, eliminating shadows and dark hollows.',
    fullDetails: 'The under-eye periorbital zone demands exceptional anatomical mastery. We utilize specialized light-reflecting hyaluronic formulations that do not attract excessive water, ensuring a seamless transition between cheek and lower eyelid.',
    duration: '45 mins',
    downtime: 'Minimal; occasional mild bruising',
    longevity: '12–18 months',
    sensation: 'Gentle pressure via cannula',
    targetAreas: ['Under-Eye Hollows', 'Infraorbital Rim'],
    image: RESULTS_GLOW_IMAGE,
  },
  {
    id: 'bespoke-chemical-peel',
    name: 'Bespoke Dermal Peel & Glass-Skin Protocol',
    category: 'skin-health',
    categoryLabel: 'Clinical Renewal',
    tagline: 'Medical-grade multi-acid exfoliation tailored to your melanin and barrier.',
    description: 'A customized blend of glycolic, lactic, mandelic, or trichloroacetic acids designed to unclog congested pores, dissolve sun damage, and restore a luminous glass-like complexion.',
    fullDetails: 'Following an in-depth epidermal analysis, our clinician layers medical neutralizing solutions to target specific pigmentary and cellular concerns without compromising your delicate barrier function.',
    duration: '45 mins',
    downtime: '1–3 days of invisible or micro-flaking',
    longevity: 'Instant radiance; sustained over 4–6 weeks',
    sensation: 'Warm tingling sensation for 3–5 minutes',
    targetAreas: ['Full Face', 'Neckline', 'Chest'],
    image: CLINIC_INTERIOR_IMAGE,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'portfolio-1',
    title: 'Natural Lip Vermilion Definition',
    treatmentName: 'Lip Architecture & Hydration',
    category: 'Contour',
    image: RESULTS_GLOW_IMAGE,
    focus: 'Symmetry & Hydration',
    description: 'Restoration of natural lip volume with refined vermilion border definition. Notice the soft, pillowy finish with zero artificial shelfing or overfilling.',
    downtime: '24 hours',
  },
  {
    id: 'portfolio-2',
    title: 'Glass Skin Radiance & Pore Minimization',
    treatmentName: 'Profhilo & Dermal Resurfacing',
    category: 'Radiance',
    image: HERO_IMAGE,
    focus: 'Deep Cellular Glow',
    description: 'Comprehensive dermal hydration bio-remodeling resulting in smooth light reflection across the zygomatic arch and cheek plane.',
    downtime: 'Zero downtime',
  },
  {
    id: 'portfolio-3',
    title: 'Clinical Precision Serum Infusion',
    treatmentName: 'Medical-Grade Microneedling',
    category: 'Texture',
    image: TREATMENT_SKINCARE_IMAGE,
    focus: 'Skin Barrier Refinement',
    description: 'Post-treatment epidermal clarity showcasing calm, radiant skin with smoothed surface micro-texture and revitalized vitality.',
    downtime: '1 day',
  },
  {
    id: 'portfolio-4',
    title: 'Luxury Formulations & Pure Peptides',
    treatmentName: 'Bespoke Skin Health Protocol',
    category: 'Skincare',
    image: BOTANICAL_TEXTURE_IMAGE,
    focus: 'Barrier Repair',
    description: 'Close inspection of biocompatible hyaluronic essence and botanical liposome formulations applied in clinic.',
    downtime: 'Zero downtime',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Arovia transformed how I see aesthetic care. The clinician spent over 40 minutes analyzing my facial structure before making a single gentle recommendation. My lips look soft, hydrated, and completely my own.',
    author: 'Sophia V.',
    treatment: 'Verified Client · Lip Architecture Protocol',
    verified: true,
    date: '3 weeks ago',
  },
  {
    id: 'test-2',
    quote: 'I was terrified of having a frozen or artificial forehead. At Arovia, the micro-dosing technique smoothed my stress lines while leaving my eyebrows and smiles completely natural. Everyone keeps asking which vacation I took!',
    author: 'Elena M.',
    treatment: 'Verified Client · Neuromodulator Smoothing',
    verified: true,
    date: '1 month ago',
  },
  {
    id: 'test-3',
    quote: 'The consultation suite feels like a tranquil private sanctuary. No hurried rush, no upsells. The Profhilo treatment restored the bounce and lit-from-within glow that moisturizers simply cannot achieve.',
    author: 'Camille R.',
    treatment: 'Verified Client · Profhilo® Bio-Remodeling',
    verified: true,
    date: '2 months ago',
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: HERO_IMAGE,
    caption: '“The highest art of aesthetic medicine is the one that leaves no traces—only radiant confidence.” ✨ Bespoke facial architecture consultations now open for the coming season.',
    likes: 342,
    comments: 28,
    aspect: 'aspect-square',
  },
  {
    id: 'ig-2',
    image: CLINIC_INTERIOR_IMAGE,
    caption: 'Step inside the Arovia sanctuary. Designed from warm travertine, linen, and soft natural light to ensure your treatment experience is as calm as it is transformative.',
    likes: 489,
    comments: 35,
    aspect: 'aspect-square',
  },
  {
    id: 'ig-3',
    image: RESULTS_GLOW_IMAGE,
    caption: 'Subtle lip contouring that honours your natural anatomy. 0.7ml of ultra-pure cross-linked hyaluronic acid placed with micro-cannula precision. No migration, no stiffness.',
    likes: 512,
    comments: 42,
    aspect: 'aspect-square',
  },
  {
    id: 'ig-4',
    image: TREATMENT_SKINCARE_IMAGE,
    caption: 'Behind the treatment chair: our clinician administering targeted epidermal hydration. Every formula we select meets strict European medical safety standards.',
    likes: 295,
    comments: 19,
    aspect: 'aspect-square',
  },
  {
    id: 'ig-5',
    image: BOTANICAL_TEXTURE_IMAGE,
    caption: 'Skin texture is skin health. Discover how our bespoke medical peeling protocols restore your skin’s cellular turnover and clear luminous tone.',
    likes: 418,
    comments: 24,
    aspect: 'aspect-square',
  },
  {
    id: 'ig-6',
    image: RESULTS_GLOW_IMAGE,
    caption: 'Radiance captured in golden hour light. The hallmark of an Arovia client is an undetectable glow that speaks for itself. Click the bio link to reserve your private appointment.',
    likes: 620,
    comments: 51,
    aspect: 'aspect-square',
  },
];

export const FAQS = [
  {
    question: 'How do you ensure treatments look natural and not overdone?',
    answer: 'Our entire clinical philosophy is built on anatomical facial harmony. We perform comprehensive facial mapping before touching a syringe, using conservative micro-dosing and phased treatments. We firmly believe the finest aesthetic result is one where friends notice you look remarkably well-rested, but cannot guess why.',
  },
  {
    question: 'What should I expect during my initial consultation?',
    answer: 'Your first visit is an unhurried, private conversation. We assess your facial proportions, skin barrier condition, and medical background, then discuss your personal goals. You will receive an honest, personalized treatment blueprint with exact pricing, expected longevity, and downtime expectations—with zero pressure to proceed that day.',
  },
  {
    question: 'Are aesthetic treatments painful?',
    answer: 'Client comfort is a core priority at Arovia. For injectable treatments, we use medical-grade topical anesthetic creams, vibration distraction techniques, and premium formulations infused with integrated lidocaine. Most clients report feeling only a light pressure or minor pinch.',
  },
  {
    question: 'How far in advance should I book for a special event or wedding?',
    answer: 'We recommend scheduling injectable treatments (such as lip contouring or fine line smoothing) 3 to 4 weeks prior to major events to allow full settling and any follow-up touch-up. For skin boosters like Profhilo or microneedling, starting 6 to 8 weeks ahead allows the collagen induction cycle to reach peak luminous radiance.',
  },
  {
    question: 'Can I combine multiple treatments in one visit?',
    answer: 'Yes, many complementary treatments can safely be performed during the same session—such as combining anti-wrinkle smoothing with a hyaluronic skin booster. During your consultation, we design an efficient protocol tailored to your schedule and recovery preferences.',
  },
];
