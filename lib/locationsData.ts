// Per-city landing-page content. Shared between the location pages and the
// sitemap so every service area is guaranteed to be crawlable and consistent.
export interface LocationInfo {
  city: string;
  state: string;
  title: string;
  description: string;
  longText: string;
  seoTarget: string;
  highlights: string[];
}

export const locationsData: Record<string, LocationInfo> = {
  'champaign-il': {
    city: 'Champaign',
    state: 'IL',
    title: 'Champaign Pressure Washing & Garbage Can Sanitization',
    description:
      'Expert residential and commercial power washing, soft-wash house cleaning, and automatic garbage bin sanitation in Champaign, IL.',
    longText:
      'For top-tier Champaign pressure washing and professional exterior cleaning services, homeowners and business managers choose Rob & Ray at Funk Away GCS. From the lively student neighborhoods near the University of Illinois campus to quiet residential streets in Southwest Champaign, our high-temperature hot vapor washing removes grease, rust, algae, and mold from siding, driveways, decks, and fences. We also eliminate the foul stink, maggots, and harmful bacteria from your residential trash cans and commercial dumpsters, keeping your environment perfectly pleasant and sanitized.',
    seoTarget: 'Champaign Pressure Washing',
    highlights: [
      'Eco-friendly hot water extraction',
      'Soft washing for sensitive vinyl siding',
      'Deep oil-stain concrete power washing',
      'Elimination of flies, maggots, and odors with Garbage Guard strips',
    ],
  },
  'urbana-il': {
    city: 'Urbana',
    state: 'IL',
    title: 'Urbana Pressure Washing, Gutter Cleaning & Bin Washing',
    description:
      'Top-rated Urbana pressure washing, roof & solar cleaning, gutter clearing, and garbage can disinfection.',
    longText:
      'Keep your property clean and beautiful with our dedicated Urbana pressure washing and exterior restoration services. Urbana’s beautiful historic homes and wood decks require gentle, expert care. Our soft-wash siding and roof cleaning technologies safely peel away black streaks and organic algae without damaging paint or finishes. Meanwhile, our high-power driveway pressure cleaning restores concrete walkways. We also sanitize residential roll-off garbage bins and commercial dumpsters across Urbana to eliminate maggots, disease-spreading pests, and foul odors.',
    seoTarget: 'Urbana Pressure Washing',
    highlights: [
      'Gentle soft washing for historic homes',
      'Downspout flushing & gutter cleaning',
      'Wood & composite fence staining and sealing',
      'High-temperature hot vapor bin sanitization',
    ],
  },
  'savoy-il': {
    city: 'Savoy',
    state: 'IL',
    title: 'Savoy Pressure Washing & Trash Can Cleaning Services',
    description:
      'Professional power washing and high-pressure steam garbage bin sanitizing for Savoy homeowners and businesses.',
    longText:
      'In Savoy, IL, local homeowners trust Funk Away to prevent HOA violations, maintain remarkable curb appeal, and sanitize foul-smelling garbage bins. Our high-pressure hot water systems clean dirty concrete pathways, remove mold from deck surfaces, and restore vinyl siding to like-new condition. With our commercial-grade equipment and specialized pest deterrence treatments, we ensure your outdoor bins remain completely odor-free and safe from pests.',
    seoTarget: 'Savoy Pressure Washing & Bin Cleaning',
    highlights: [
      'HOA-approved exterior house washing',
      'Driveway, sidewalk, and patio pressure washing',
      'Garbage can sanitizing with natural antibacterial agents',
      'Commercial dumpster pad deep cleanings',
    ],
  },
  'mahomet-il': {
    city: 'Mahomet',
    state: 'IL',
    title: 'Mahomet Pressure Washing & Siding Restoration',
    description:
      'Residential soft wash house cleaning, deck restoration, and trash container sanitizing in Mahomet, IL.',
    longText:
      'Keeping Mahomet, IL properties clean, safe, and hygienic is our primary mission at Funk Away. We provide premium power washing for composite decks, wooden fences, and concrete driveways. Our low-pressure soft washing technique is perfect for Mahomet roofs, solar panels, and residential siding, removing organic stains gently. We also offer our signature garbage can cleaning subscription to rid your garage of flies and rotten odors.',
    seoTarget: 'Mahomet Pressure Washing',
    highlights: [
      'Safe solar panel and roof cleaning',
      'Driveway and brick patio power washing',
      'Bacterial disinfection of home garbage cans',
      'Premium deck and fence painting/staining',
    ],
  },
  'danville-il': {
    city: 'Danville',
    state: 'IL',
    title: 'Danville Commercial Dumpster & Pressure Washing Services',
    description:
      'High-power commercial dumpster pad washing and house painting/soft washing in Danville, IL.',
    longText:
      'Funk Away GCS is proud to offer Danville, Illinois homeowners and commercial enterprises unmatched exterior cleaning and heavy-duty sanitation. We specialize in high-pressure steam cleaning of dumpster pads, concrete walkways, storefront sidings, and brick building facades. Danville businesses look their absolute best and maintain peak sanitization with our customized commercial-grade bin wash services.',
    seoTarget: 'Danville Pressure Washing & Dumpster Sanitizing',
    highlights: [
      'Large commercial dumpster pad cleaning (3-8 yard or roll-off)',
      'High-volume steam and vapor power washing',
      'Walkway gum and grease spot removal',
      'Garbage guard pest protection strips',
    ],
  },
  'westville-il': {
    city: 'Westville',
    state: 'IL',
    title: 'Westville Pressure Washing & Garbage Bin Sanitization',
    description:
      'Your local Westville partners for thorough pressure washing, home soft wash, and trash can deodorization.',
    longText:
      'Operating close to our roots, Funk Away provides friendly, expert Westville pressure washing and bin sanitization services. If your wooden fence is turning gray, or your concrete patio has dark mold patches, Rob & Ray will restore and stain them to perfection. We handle dirty, maggot-ridden garbage cans with high-heat vapor wash tools and optional pest guard strips to keep bugs completely out of your yard.',
    seoTarget: 'Westville Pressure Washing',
    highlights: [
      'Complete wood restoration & protective staining',
      'High-pressure hot steam garage bin cleaning',
      'Local family-owned customer care',
      'Gutters and windows detail cleaning',
    ],
  },
  'st-joseph-il': {
    city: 'St. Joseph',
    state: 'IL',
    title: 'St. Joseph Power Washing & Residential Bin Cleaning',
    description:
      'Expert soft-wash exterior house cleaning, gutter clearing, and garbage can washing in St. Joseph, IL.',
    longText:
      'Funk Away is the premier choice for power washing and residential bin cleaning services in St. Joseph, Illinois. We restore dirty driveways, patios, siding, and roofs back to pristine condition using state-of-the-art power wash equipment. Our professional hot vapor sanitation completely sterilizes household waste canisters, removing health-threatening bacteria, viral microorganisms, and terrible odors.',
    seoTarget: 'St. Joseph Power Washing',
    highlights: [
      'High-temperature sanitization',
      'Residential window and screen clearing',
      'Low-pressure soft-wash vinyl siding cleaning',
      'Downspout and gutter clearing',
    ],
  },
  'rantoul-il': {
    city: 'Rantoul',
    state: 'IL',
    title: 'Rantoul Pressure Washing & Dumpster Pad Sanitation',
    description:
      'Deep residential/commercial power washing, soft wash siding, and trash bin disinfection in Rantoul, IL.',
    longText:
      'Maintain exceptional sanitation standards and outstanding curb appeal in Rantoul, IL, with help from Rob & Ray. Our advanced mobile washing units handle stubborn mold, stains on driveways, dirty commercial dumpsters, and clogged rain gutters. We bring heavy industrial hot water power washers directly to your location, melting away grime and sterilizing surfaces in record time.',
    seoTarget: 'Rantoul Pressure Washing & Bin Care',
    highlights: [
      'Fast, reliable scheduled service visits',
      'Industrial-strength power washing equipment',
      'Complete home exterior, siding, and deck cleaning',
      'Biodegradable chemical-free disinfection formulas',
    ],
  },
};
