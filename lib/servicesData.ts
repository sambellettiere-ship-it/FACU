export const BOOKING_URL = 'https://funkawaygcs.as.me/schedule/ff405b92';

// Shared FAQ shape. Rendered on each service page and mirrored into FAQPage
// structured data so the visible Q&A and the schema never drift apart.
export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceInfo {
  title: string;
  description: string;
  price: string;
  subPrice: string;
  features: string[];
  url: string;
  longDescription: string;
  seoTitle: string;
  seoDescription: string;
  icon: string;
  // Short, keyword-rich H1 sub-headline shown under the service hero. Reinforces
  // the local intent ("… in Champaign-Urbana, IL") the SEO title targets.
  localIntro: string;
  // 3–4 questions real searchers ask about this service. Feeds both the on-page
  // FAQ block and the page's FAQPage JSON-LD (eligible for an expandable result).
  faqs: ServiceFaq[];
}

export const servicesData: Record<string, ServiceInfo> = {
  'residential-bin-cleaning': {
    title: 'Residential Bin Cleaning',
    description: 'Disinfect and power wash your home garbage bins to eliminate odors and bacteria.',
    price: '$48 first bin',
    subPrice: '+$14.99 per additional bin',
    features: ['Deep penetrating vapor wash', 'Odor elimination', 'Bacteria and germ removal', 'Optional pest strips ($12)'],
    url: BOOKING_URL,
    longDescription: 'Our residential bin cleaning service ensures your home garbage and recycling bins are free from harmful bacteria, maggots, and lingering odors. We use high-pressure, high-temperature water to deep clean the interior and exterior of your bins. Add our Garbage Guard pest strips to keep pests away.',
    seoTitle: 'Garbage Can & Trash Bin Cleaning, Champaign-Urbana IL | Funk Away GCS',
    seoDescription: 'Local trash can & garbage bin cleaning near you in Champaign, Urbana & Central IL. High-heat vapor wash kills bacteria, maggots & odor. From $48 — book online today.',
    icon: 'Trash2',
    localIntro:
      'Professional trash can and garbage bin cleaning for homes across Champaign, Urbana, Savoy, Mahomet and all of Champaign County, IL.',
    faqs: [
      {
        q: 'How much does garbage can cleaning cost near me?',
        a: 'Residential bin cleaning starts at $48 for your first bin and $14.99 for each additional bin, anywhere in the Champaign-Urbana area. Add Garbage Guard pest strips for $12 per bin.',
      },
      {
        q: 'How does the trash can cleaning process work?',
        a: 'We come to your home and deep-clean the inside and outside of each bin with high-pressure, high-temperature vapor. This kills bacteria and germs, flushes out maggots, and removes the odor — not just masks it.',
      },
      {
        q: 'How often should I get my garbage bins cleaned?',
        a: 'Most Champaign County households book a monthly cleaning to stay ahead of flies, maggots and summer odor. We also offer subscription plans that schedule it automatically.',
      },
    ],
  },
  'commercial-dumpsters': {
    title: 'Commercial Dumpsters',
    description: 'Keep your business clean and smelling fresh with our commercial dumpster sanitization.',
    price: 'From $175',
    subPrice: '3-8 yard commercial or roll-off',
    features: ['3-8 yard dumpsters ($175)', 'Roll-off commercial ($250)', 'Dumpster pad cleaning available', 'Custom contracts available'],
    url: BOOKING_URL,
    longDescription: 'Maintain a clean, professional, and hygienic environment for your business with our commercial dumpster cleaning services. We sanitize 3-8 yard dumpsters and large roll-offs, eliminating foul odors, bacteria, and pests. We also offer comprehensive dumpster pad cleaning and customized service contracts to fit your business needs.',
    seoTitle: 'Commercial Dumpster & Pad Cleaning, Champaign County IL | Funk Away GCS',
    seoDescription: 'Commercial dumpster cleaning & pad sanitizing for Champaign-Urbana businesses. 3-8 yard & roll-off units, custom contracts. Kill odor, bacteria & pests — get a quote.',
    icon: 'Trash2',
    localIntro:
      'Commercial dumpster sanitizing, dumpster-pad power washing and construction-site cleanup for businesses across Champaign County and Central Illinois.',
    faqs: [
      {
        q: 'Do you offer commercial cleaning contracts for businesses?',
        a: 'Yes. We set up custom recurring contracts for restaurants, apartment complexes, retail centers and offices across Champaign County, so your dumpsters and pads stay sanitized on a schedule that fits your business.',
      },
      {
        q: 'Can you clean the dumpster pad and surrounding area too?',
        a: 'Absolutely. Beyond sanitizing the dumpster itself, we power wash greasy, stained dumpster pads and loading areas ($145-$400 depending on size) to remove buildup, grease and odor.',
      },
      {
        q: 'Do you handle construction site and post-construction cleanup?',
        a: 'We do. We pressure wash and clean up commercial dumpsters, pads and hard surfaces on job sites throughout Central Illinois. Contact us with the details for a custom quote.',
      },
    ],
  },
  'power-washing': {
    title: 'Power Washing',
    description: 'Soft wash and power wash for homes, pavement areas, side panels, and more.',
    price: 'Custom Quote',
    subPrice: 'Depends on area size',
    features: ['Home exterior soft wash', 'Driveways & pavements', 'Dumpster pad areas ($145-$400)', 'Siding and decks'],
    url: BOOKING_URL,
    longDescription: 'Restore the beauty of your property with our professional power washing and soft washing services. We safely clean home exteriors, driveways, walkways, patios, and siding. Whether it\'s stubborn stains, algae, or dirt buildup, our specialized pressure washing equipment will leave your surfaces looking brand new.',
    seoTitle: 'Pressure Washing & Power Washing, Champaign-Urbana IL | Funk Away GCS',
    seoDescription: 'Professional pressure washing in Champaign, Urbana & Central IL. Driveways, siding, patios & concrete — remove algae, dirt & stains. Free custom quote, fully insured.',
    icon: 'Droplets',
    localIntro:
      'Professional pressure washing and soft washing for driveways, siding, patios and concrete across Champaign, Urbana and Central Illinois.',
    faqs: [
      {
        q: 'How much does pressure washing cost in Champaign-Urbana?',
        a: 'Power washing is priced by the area and surface, so we give a free custom quote. Common jobs like driveways, patios and dumpster pads typically run $145-$400.',
      },
      {
        q: 'What is the difference between power washing and soft washing?',
        a: 'Power washing uses high-pressure hot water for tough surfaces like concrete driveways and dumpster pads. Soft washing uses low pressure with cleaning solution for delicate surfaces like vinyl siding and roofs, so nothing gets damaged.',
      },
      {
        q: 'Do you pressure wash both homes and businesses?',
        a: 'Yes — we handle residential driveways, siding and patios as well as commercial storefronts, sidewalks and dumpster pads throughout Champaign County.',
      },
    ],
  },
  'home-siding-cleaning': {
    title: 'Home Siding Cleaning',
    description: 'Soft wash away algae, dirt, and grime to make your home\'s siding look brand new.',
    price: 'Custom Quote',
    subPrice: 'Based on home size',
    features: ['Gentle soft-wash method', 'Removes algae, mold & dirt', 'Safe for vinyl & painted siding', 'Restores curb appeal'],
    url: BOOKING_URL,
    longDescription: 'Years of rain, dirt, and organic growth can leave your home\'s siding looking dull and streaked. Our gentle soft-wash technique safely lifts away algae, mold, mildew, and grime without damaging your vinyl or painted siding, instantly boosting your home\'s curb appeal and protecting your investment.',
    seoTitle: 'House & Siding Soft Washing, Champaign-Urbana IL | Funk Away GCS',
    seoDescription: 'House washing & siding soft wash in Champaign, Urbana & Central IL. Safely remove algae, mold & dirt from vinyl or painted siding. Free quote — restore your curb appeal.',
    icon: 'Home',
    localIntro:
      'Gentle house washing and siding soft washing for homes across Champaign, Urbana and the surrounding Central Illinois communities.',
    faqs: [
      {
        q: 'Is soft washing safe for my vinyl or painted siding?',
        a: 'Yes. We use a low-pressure soft-wash method with a specialized cleaning solution that lifts algae, mold and dirt without forcing water behind panels or stripping paint.',
      },
      {
        q: 'How often should I have my house siding washed?',
        a: 'In the Central Illinois climate, most homes benefit from a soft wash every 1-2 years to stay ahead of the green and black organic streaking that builds up on the north and shaded sides.',
      },
      {
        q: 'How much does house washing cost?',
        a: 'Pricing is based on your home\'s size and condition, so we provide a free custom quote after a quick look at the property.',
      },
    ],
  },
  'gutter-cleaning': {
    title: 'Gutter Cleaning',
    description: 'Keep your gutters clear of debris to prevent water damage and maintain proper drainage.',
    price: 'Custom Quote',
    subPrice: 'Based on home size',
    features: ['Debris removal', 'Downspout flushing', 'Prevent water damage', 'Seasonal maintenance'],
    url: BOOKING_URL,
    longDescription: 'Clogged gutters can lead to serious water damage to your roof, foundation, and siding. Our professional gutter cleaning service ensures leaves, twigs, and debris are completely removed, allowing water to flow freely and protecting your home from costly repairs.',
    seoTitle: 'Gutter Cleaning in Champaign & Urbana, IL | Funk Away GCS',
    seoDescription: 'Local gutter cleaning in Champaign, Urbana & Central IL. We clear leaves & debris and flush downspouts to prevent water damage. Fully insured — get your free quote today.',
    icon: 'Home',
    localIntro:
      'Professional gutter cleaning and downspout flushing for homes in Champaign, Urbana, Savoy, Mahomet and across Champaign County, IL.',
    faqs: [
      {
        q: 'How much does gutter cleaning cost in Champaign-Urbana?',
        a: 'Gutter cleaning is priced by your home\'s size and gutter length, so we give a free custom quote. Most single-story Champaign-Urbana homes are quick, affordable jobs.',
      },
      {
        q: 'How often should gutters be cleaned in Central Illinois?',
        a: 'We recommend at least twice a year — late spring and again in the fall after the leaves drop — to prevent clogs, overflow and the water damage they cause to your roof, siding and foundation.',
      },
      {
        q: 'Do you flush the downspouts too?',
        a: 'Yes. We remove all leaves, twigs and debris from the gutters and flush the downspouts so water actually drains, not just the visible troughs.',
      },
      {
        q: 'Do you serve Urbana and the rest of Champaign County?',
        a: 'We do. We clean gutters throughout Champaign, Urbana, Savoy, Mahomet, Rantoul, St. Joseph, Danville and Westville, IL.',
      },
    ],
  },
  'window-cleaning': {
    title: 'Interior & Exterior Windows',
    description: 'Crystal clear windows inside and out, improving your home\'s appearance and natural light.',
    price: 'Custom Quote',
    subPrice: 'Based on number of windows',
    features: ['Interior and exterior cleaning', 'Streak-free finish', 'Screen cleaning available', 'Sill and track detailing'],
    url: BOOKING_URL,
    longDescription: 'Enjoy a brighter home and unobstructed views with our comprehensive window cleaning services. We use professional-grade squeegees and solutions to ensure a streak-free, crystal-clear finish on both the interior and exterior of your windows.',
    seoTitle: 'Window Cleaning Service, Champaign-Urbana IL | Funk Away GCS',
    seoDescription: 'Streak-free interior & exterior window cleaning in Champaign, Urbana & Central IL. Screens, sills & tracks included. Fully insured — book your free window quote today.',
    icon: 'Home',
    localIntro:
      'Streak-free interior and exterior window cleaning for homes across Champaign, Urbana and Central Illinois.',
    faqs: [
      {
        q: 'Do you clean both interior and exterior windows?',
        a: 'Yes. We clean the inside and outside of your windows for a streak-free, crystal-clear finish, and we can add screen cleaning plus sill and track detailing.',
      },
      {
        q: 'How much does window cleaning cost?',
        a: 'Window cleaning is priced by the number and type of windows, so we provide a free custom quote for your Champaign-Urbana home.',
      },
      {
        q: 'Do you clean screens, sills and tracks?',
        a: 'We can. Screen cleaning and sill/track detailing are available add-ons so the whole window looks and works like new.',
      },
    ],
  },
  'patio-deck-cleaning': {
    title: 'Patios and Decks (Cleaning & Staining)',
    description: 'Restore your outdoor living spaces with deep cleaning and high-quality protective staining.',
    price: 'Custom Quote',
    subPrice: 'Based on square footage',
    features: ['Wood and composite decks', 'Deep algae and dirt removal', 'Premium stain application', 'Weather protection'],
    url: BOOKING_URL,
    longDescription: 'Revitalize your outdoor living areas. We power wash patios and decks to remove dirt, mold, and old finishes, bringing back their natural beauty. We also offer premium staining and sealing services to protect your wood from the elements and extend its lifespan.',
    seoTitle: 'Patio & Deck Cleaning + Staining, Champaign-Urbana IL | Funk Away GCS',
    seoDescription: 'Deck & patio pressure washing and staining in Champaign, Urbana & Central IL. Remove algae, mold & old finish, then seal and protect your wood. Free custom quote.',
    icon: 'Home',
    localIntro:
      'Patio and deck cleaning, staining and sealing for outdoor living spaces across Champaign, Urbana and Central Illinois.',
    faqs: [
      {
        q: 'Do you clean and stain both wood and composite decks?',
        a: 'Yes. We deep clean wood and composite decks to remove dirt, mold and old finish, and we apply premium stain and sealant to wood decks for weather protection.',
      },
      {
        q: 'How much does deck cleaning and staining cost?',
        a: 'Pricing is based on the square footage and condition of your deck or patio, so we give a free custom quote.',
      },
      {
        q: 'When is the best time to stain a deck in Central Illinois?',
        a: 'Late spring through early fall is ideal — dry, mild days let the stain cure properly. We handle the cleaning and staining together so the wood is prepped correctly first.',
      },
    ],
  },
  'fence-cleaning-staining': {
    title: 'Stripping & Staining',
    description: 'Wood decks and fences — strip away years of weathering and grime, then protect them with a fresh coat of high-quality stain.',
    price: 'Custom Quote',
    subPrice: 'Based on size and condition',
    features: ['Wood deck & fence restoration', 'Mold and mildew removal', 'Protective staining', 'Increases property value'],
    url: BOOKING_URL,
    longDescription: 'Dirty, graying wood decks and fences can detract from your property\'s curb appeal. Our stripping service removes years of weathering, dirt, mold, and old failing finish. We follow up with professional staining to protect the wood from UV rays and moisture, keeping it looking great for years.',
    seoTitle: 'Deck & Fence Stripping & Staining, Champaign-Urbana IL | Funk Away GCS',
    seoDescription: 'Wood deck & fence stripping and staining in Champaign, Urbana & Central IL. Remove graying, mold & old finish, then protect with premium stain. Free custom quote.',
    icon: 'Home',
    localIntro:
      'Wood deck and fence stripping, restoration and staining for properties across Champaign, Urbana and Central Illinois.',
    faqs: [
      {
        q: 'What does stripping and staining involve?',
        a: 'We strip away years of weathering, dirt, mold and old failing finish from your wood deck or fence, then apply a fresh protective stain that shields it from UV and moisture.',
      },
      {
        q: 'How much does fence or deck restoration cost?',
        a: 'It depends on the size and condition of the wood, so we provide a free custom quote after assessing the project.',
      },
      {
        q: 'Will staining increase my property value?',
        a: 'Restored, freshly stained wood dramatically improves curb appeal and protects the structure, which helps preserve and increase your property\'s value.',
      },
    ],
  },
  'roof-solar-cleaning': {
    title: 'Roof & Solar Panel Cleaning',
    description: 'Remove moss, algae, and dirt carefully from your roof and maximize your solar panels\' efficiency.',
    price: 'Custom Quote',
    subPrice: 'Based on roof size & panels',
    features: ['Safe soft-wash roof cleaning', 'Maximizes solar efficiency', 'Removes black streaks & algae', 'Extends roof lifespan'],
    url: BOOKING_URL,
    longDescription: 'Black streaks, moss, and dirt not only ruin the look of your roof but can also damage shingles and reduce the efficiency of your solar panels. Our low-pressure soft washing technique safely cleans your roof without causing damage, while our specialized solar panel cleaning ensures you get the most out of your energy investment.',
    seoTitle: 'Roof & Solar Panel Cleaning, Champaign-Urbana IL | Funk Away GCS',
    seoDescription: 'Safe soft-wash roof & solar panel cleaning in Champaign, Urbana & Central IL. Remove black streaks, moss & algae, boost solar efficiency. Free quote — fully insured.',
    icon: 'Home',
    localIntro:
      'Safe, low-pressure roof and solar panel cleaning for homes across Champaign, Urbana and Central Illinois.',
    faqs: [
      {
        q: 'Is soft washing safe for my roof shingles?',
        a: 'Yes. We use a low-pressure soft-wash method that safely removes moss, algae and black streaks without cracking or dislodging shingles the way high-pressure washing can.',
      },
      {
        q: 'Does cleaning my solar panels really improve efficiency?',
        a: 'It does. Dust, pollen and grime build up on panels and cut output. A gentle professional cleaning restores light exposure so you get the most from your solar investment.',
      },
      {
        q: 'What causes the black streaks on my roof?',
        a: 'Those streaks are usually a hardy algae (Gloeocapsa magma) that feeds on shingles. Our soft wash kills and removes it, restoring the roof\'s appearance and extending its lifespan.',
      },
    ],
  },
};
