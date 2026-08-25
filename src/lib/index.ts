

export const business = {
  name: "First Light Networks",
  legalName: "First Light Networks, LLC",
  rating: { score: 5.0, count: 6, label: "customers" },
};

export const headerLinks = [
  { href: '/solutions', label: 'Solutions & Kits' },
  // { href: '/for-builders', label: 'For Builders' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' }
]

export const footerLinks = [
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/contact', label: 'Contact' }
    ]
  },
  // {
  // 	heading: 'Resources',
  // 	links: [
  // 		{ href: '/resources', label: 'Learning Center' },
  // 		{ href: '/how-it-works', label: 'How It Works' },
  // 		{ href: '/for-builders', label: 'For Builders' }
  // 	]
  // },
  {
    heading: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' }
    ]
  }
]

export const trustItems = ["Structured Cabling Plans", "Full indoor + outdoor coverage", "Pre-configured & tested kits", "3-year warranty", "Builder volume pricing"];

export const steps = [
  { number: '01', title: 'Consultation', desc: 'Share your building plans and requirements. We review and send a detailed proposal with coverage maps, hardware list, and pricing within 3 days.' },
  { number: '02', title: 'System Design', desc: 'We create and send detailed cabling plans for your electrician so they can install, terminate, and test all the structured wiring while the walls are open.' },
  { number: '03', title: 'Build & Test', desc: 'Your kit is assembled, configured, and tested in our lab. We verify everything works then label, pack, and ship the whole system.' },
  { number: '04', title: 'Installation', desc: 'Kits arrive labeled and ready. Your electrician or low-voltage team follows our simple plug-and-play guide. Average install: 3–5 hours.' },
  { number: '05', title: 'Support & Handover', desc: 'We provide remote go-live support. Homeowners receive a simple guide and we remain available for any future questions or optimizations.' }
];

export const projects = [
  {
    type: 'Rural Residential',
    title: 'Private Rural Ranch',
    subtitle: '10-acre property, multiple outbuildings',
    excerpt: [
      'This customer lives in an area with poor cellular service. I installed an Omada wired network with indoor and outdoor Wi-Fi access points to extend coverage to the edges of the property. The owner can now make and receive calls and video calls anywhere on the property.',
      'I also installed PoE cameras and a network video recorder for 24/7 monitoring of entrances from anywhere. They have an XGPON primary WAN, Starlink backup WAN, and UPS backup for the core of the network. They never lose Wi-Fi or internet access, even if the fiber is broken or the power goes out.'
    ],
    result: 'Full property Wi-Fi • 24/7 security monitoring • Never lose connectivity'
  },
  {
    type: 'Commercial',
    title: 'Country Market, Gas Station & Diner',
    subtitle: 'Two-building business',
    excerpt: [
      'This business owner was having connectivity problems with their POS systems, pumps, and devices across two buildings. They had an existing Starlink setup, but the Wi-Fi was inadequate, only covering a small portion of the primary cinder-block building. The second building is metal.',
      'I installed an Omada wired network through both buildings with 4 access points and a wireless bridge between them. This completely solved the Wi-Fi coverage issues and provided wired connections for computers and a printer throughout both buildings. I also installed 20 cameras and an NVR for 24/7 recording and remote monitoring.'
    ],
    result: 'Reliable POS & device connectivity • Full coverage indoors & out • Remote camera access'
  },
  {
    type: 'Commercial',
    title: 'Dairy with Fuel Tanks',
    subtitle: '300ft between metal barns, no trenching possible',
    excerpt: [
      'This business owner wanted security cameras on their diesel tank and entrances at their dairy. They had fiber internet in the office. The best location for the cameras was on a metal barn building 300 ft from the office, separated by concrete and metal buildings. The entire area is concrete, so trenching was not an option. They also have large equipment that moves between buildings, so hanging aerial wire was not an option.',
      'I installed an outdoor Omada mesh system with 2 nodes to extend the Wi-Fi over the entire property and connect a PoE switch in the outbuilding where the cameras were needed. Two PoE cameras were connected in the second building with 24/7 motion-triggered recording and remote monitoring, plus outdoor Wi-Fi for the entire area.'
    ],
    result: 'Outdoor mesh Wi-Fi • 24/7 motion-triggered recording • Remote monitoring anywhere'
  },
  {
    type: 'Commercial',
    title: 'Resort Hotel & Recreation',
    subtitle: '20+ acres with hills and poor cellular',
    excerpt: [
      'This business is in an area with poor cellular service. They already had a Starlink setup with the maximum number of mesh nodes, but the Wi-Fi coverage was inadequate. For a primary WAN, I negotiated a business fiber connection in an area where FTTH isn’t available to residential customers. Starlink was used as the backup WAN, since the fiber infrastructure is pole-mounted.',
      'An Omada wired network was installed to every room with 10 Gb MMF trunk lines serving as the backbone. 12 Wi-Fi access points were installed throughout the building and outdoors to cover all of the rooms, with most WAPs having future-proof 2.5 Gb uplinks.'
    ],
    result: 'Enterprise-grade wired + wireless • Future-proof 2.5 Gb uplinks on most WAPs'
  },
  {
    type: 'Rural Residential',
    title: 'Rural Residential',
    subtitle: '5-acre lot, 3 buildings',
    excerpt: [
      'This customer has a 5-acre lot with 3 buildings: a single-story stick-built house with attached garage, a small wood barn 300 ft north of the house, and a large metal shop 50 ft south of the house. There was suitable conduit available between the house and shop. The customer already had Starlink with built-in Wi-Fi.',
      'The router was in the house, so the dish had interference due to tree coverage around the house. I surveyed the area for a new dish location, and there was an area 80 ft west of the shop with open sky for the dish’s field of view. I moved the Starlink router to the shop so the OEM Starlink cable could reach the new dish location. Cat 6 backhaul connects the house to the shop.',
      'An outdoor access point on the end of the house nearest the barn covers the entire used outdoor space with Wi-Fi. Two indoor access points—one in the shop and one in the house—complete the coverage of indoor spaces.'
    ],
    result: 'Clear line-of-sight Starlink • Whole-property Wi-Fi • Minimal disruption to landscaping'
  },
  {
    type: 'Agricultural',
    title: 'Rural Farm',
    subtitle: '5-acre lot, 4 buildings',
    excerpt: [
      'This customer has a 5-acre lot with 4 buildings: a house, a garage 40 ft to the north of the house, a metal shop 20 ft north of the garage, and a barn 200 ft south of the house.',
      'I installed Cat 6 direct burial between all of the buildings as a backbone. Indoor access points in each of the buildings cover all the indoor spaces and outdoor areas immediately around them.',
      'Update: This system is still in operation 6 years later and has become the backbone for multiple critical IoT and automation devices. While the system is rudimentary and that hardware has been phased out, it\'s still completely reliable and forward-compatible. The customer will probably need to upgrade a few devices in 2-3 years, but the structured wiring won\'t will last another decade or more.'
    ],
    result: 'Wired backbone to every building • Indoor + immediate outdoor coverage • Simple, reliable'
  },
  {
    type: 'Residential',
    title: 'Small Neighborhood Home',
    subtitle: '3 Bedrooms + yard',
    excerpt: [
      'This customer was remodeling their home on a 1 acre lot in a small-town neighborhood. They needed 6 cameras with 24/7 recording for full outdoor surveillance coverage. They had a Starlink kit that hadn\'t been installed.',
      'We installed structured wiring to 2 wireless access points, 2 bedrooms wall-jacks, and 7 camera locations. We installed an indoor access point in the center of the house, an outdoor access point and Starlink dish on the back of the house, and cameras on 4 corners, the front porch, and over the back yard. All of this is powered by a lithium pure-sine UPS for high-reliability.',
      'Finally, we configured a single WiFi network SSID using PPSK to seperate traffic into 3 VLANs with different passwords, rules, and security settings for the adults, the guests, and the kids.'
    ],
    result: 'Highly-reliable WiFi for the house and back yard • Full outdoor camera coverage • Permanent ad secure Starlink install'
  },
  {
    type: 'Future - Rural Residential',
    title: 'Custom Log Cabin with Shop',
    subtitle: 'New construction + outbuildings',
    excerpt: [
      'This customer built a new log cabin on their property near an existing outbuilding and large metal shop. They already have Starlink set up at the outbuilding, but the Wi-Fi isn\'t reaching the shop or the new cabin. The area has poor cellular service, so they are often disconnected.',
      'The customer has already done landscaping around all three buildings, so trenching fiber or conduit between the buildings is not allowed. We designed an outdoor Wi-Fi mesh system dedicating the 6 GHz radio for an 80 MHz wide mesh backhaul to share the WAN from the outbuilding to the other two buildings. This choice leaves the 2.4 GHz and 5 GHz channels open for device connections. The 6GHz mesh creates a reliable >1Gbps backhaul with good stability due to clear line of sight.',
      'Indoor access points installed in the cabin and shop will complete Wi-Fi coverage.',
      // 'We don\'t deploy 6GHz Wi-Fi in most cases. It offers very fast speeds at short range with clear line of sight. It will be more useful in the future when VR headesets and robots use multi-gigabit connections, but right now, it\s great for outdoor mesh deployments. Clear line-of-sight between elevated outdoor access points is the only practical use today.' 
    ],
    result: '6 GHz 80 MHz mesh links buildings • 2.4/5 GHz free for clients • Full indoor coverage • No trenching'
  },
 
];

type Testimonial =
  {
    name: string,
    role: string,
    text: string,
    image: string,
    score: number,
  }

export const testimonials: Testimonial[] = [
  // {
  //   name: "Mercer Mackey",
  //   role: "Owner - Electrician, Full-Draw Electric",
  //   text: "Chris' install instructions were completely dummy-proof. All I had to do is run wire and plug things in. I'll be offering Wi-Fi to all my customers from now on.",
  //   image: "https://picsum.photos/id/63/128",
  //   score: 5,
  // },
  // {
  //   name: "Julian Q.",
  //   role: "Owner, Private Ranch",
  //   text: "I used to be stuck inside the house during work hours for my remote job, but now I can take the dogs out on the property and not miss any calls.",
  //   image: "https://picsum.photos/id/65/128",
  //   score: 5,
  // },
  // {
  //   name: "Kyle Deskins",
  //   role: "Owner, D9 Farms",
  //   text: "The Wi-Fi works great! Staying online during power outages is a big plus and the cameras have made a big difference.",
  //   image: "https://picsum.photos/id/64/128",
  //   score: 5,
  // },
  // {
  //   name: "Luke I.",
  //   role: "Manager, Brim Rd Dairy",
  //   text: "We haven't lost any diesel since putting the cameras up. Having Wi-Fi across the whole facility is a nice bonus too.",
  //   image: "https://picsum.photos/id/62/128",
  //   score: 5,
  // },
];


export const kits = [
  {
    title: "2.5 Gig Essential Starter",
    subtitle: "Up to 4,000 sq. ft.",
    price: "$999",
    image: "",
    features: [
      "Fusion 2.5G Omada Gateway",
      "ES206XPP-M2 6-Port PoE Switch",
      "EAP723 WiFi 7 Indoor Access Point",
      "EAP650-Outdoor IP69 Access Point",
      "CyberPower SL700U Backup UPS",
      "Spare 10Gb SFP+ Port for Expansion",
      "Expandable with any Omada Devices",
      "Pre-configured with Expert Support",
    ],
    buttonText: "Buy This Kit Now",
    link: "https://buy.stripe.com/dRmbJ3brS9f3dlo0jT7IY01"
  },
  {
    popular: true,
    title: "Premium Whole-Property",
    subtitle: "5,000 or more sq. ft. + Outdoor",
    price: "Custom Pricing",
    image: "",
    features: [
      "Custom Structured Wiring Map",
      "Custom Network Design",
      "Up to 200 Buildings",
      "10Gb Fiber-Optic LAN",
      "Multi-Gigabit Wi-Fi 7",
      "Fast Outdoor Wi-Fi",
      "Ultra-low Latency Design",
      "Commercial Network Racks"
    ],
    buttonText: "Build Custom Quote",
    link: "/quote"
  },
  {
    title: "10 Gig Premium Starter",
    subtitle: "Up to 10,000 sq. ft. + Outdoor",
    price: "$4,250",
    image: "",
    features: [
      "Custom Structured Wiring Map",
      "Custom Network Design",
      "Pre-Built Custom Network Rack",
      "10Gb Fiber (SFP+) Gateway and Switch",
      "4x 2.5Gb Wi-Fi 7 Indoor Access Points",
      "2x 2.5Gb Wi-Fi 7 Outdoor Access Points",
      "Keystone Patch Panel",
      "Rackmount UPS",
    ],
    buttonText: "Buy This Kit Now",
    link: "https://buy.stripe.com/8x25kF0Ne2QF6X0c2B7IY00"
  },
];



export const blogPosts = [
  {
    title: "WiFi Requirements for Modern Luxury Homes",
    excerpt:
      "What square footage, device density, and outdoor needs really mean for your next build.",
    date: "May 2026",
  },
  {
    title: "Mesh vs Traditional: What Builders Need to Know",
    excerpt:
      "Why wired backhaul and pre-configuration matter more than you think.",
    date: "Apr 2026",
  },
  {
    title: "Outdoor WiFi Best Practices for Pools & Patios",
    excerpt:
      "Choosing the right hardware and placement for reliable exterior coverage.",
    date: "Mar 2026",
  },
  {
    title: "Pre-Wiring Checklist for New Construction",
    excerpt:
      "The exact conduit, cable, and AP locations we recommend for every floor plan.",
    date: "Feb 2026",
  },
];

export const downloads = [
  {
    title: "WiFi Planning Guide for Builders",
    type: "PDF • 18 pages",
    desc: "Complete guide to specifying WiFi in custom homes",
  },
  {
    title: "Sample Spec Sheet",
    type: "PDF",
    desc: "Ready-to-paste technical specifications",
  },
  {
    title: "ROI Calculator",
    type: "Spreadsheet",
    desc: "Calculate margin and labor savings from offering kits",
  },
];
