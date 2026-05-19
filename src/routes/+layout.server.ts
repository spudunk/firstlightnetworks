export function load() {
  const business = {
    name: "First Light Networks",
    rating: { score: 4.9, count: 6, label: "customers" },
  };

  const kits = [
    {
      title: "Essential Coverage",
      subtitle: "Up to 4,000 sq ft",
      price: "$2,495",
      image: "https://picsum.photos/id/201/600/400",
      features: ["3 Nodes", "Indoor + Patio Coverage", "Pre-configured"],
      buttonText: "Get This Kit",
    },
    {
      title: "Premium Whole-Home",
      subtitle: "Up to 8,000 sq ft + Outdoor",
      price: "$4,295",
      image: "https://picsum.photos/id/237/600/400",
      popular: true,
      buttonText: "Build Custom Quote",
    },
    {
      title: "Luxury Estate",
      subtitle: "10,000+ sq ft + Guest House",
      price: "$7,995",
      image: "https://picsum.photos/id/866/600/400",
      features: ["Pre-configured"],
      buttonText: "Get This Kit",
    },
  ];

  const testimonials = [
    {
      name: "Mercer Mackey",
      role: "Owner - Electrician, Full-Draw Electric",
      text: "Chris' install instructions were completely dummy-proof. All I had to do is run wire and plug things in. I'll be offering Wi-Fi to all my customers from now on.",
      image: "https://picsum.photos/id/63/128",
      score: 5,
    },
    {
      name: "Julian Q.",
      role: "Owner, Private Ranch",
      text: "I used to be stuck inside the house during work hours for my remote job, but now I can take the dogs out on the property and not miss any calls.",
      image: "https://picsum.photos/id/65/128",
      score: 5,
    },
    {
      name: "Kyle Deskins",
      role: "Owner, D9 Farms",
      text: "The Wi-Fi works great! Staying online during power outages is a big plus and the cameras have made a big difference.",
      image: "https://picsum.photos/id/64/128",
      score: 5,
    },
    {
      name: "Luke I.",
      role: "Manager, Brim Rd Dairy",
      text: "We haven't lost any diesel since putting the cameras up. Having Wi-Fi across the whole facility is a nice bonus too.",
      image: "https://picsum.photos/id/62/128",
      score: 5,
    },
  ];

  return { business, kits, testimonials };
}
