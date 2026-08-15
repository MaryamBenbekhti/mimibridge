import {
  GraduationCap,
  Plane,
  Home,
  FileCheck,
  Languages,
  Compass,
  Users,
  Building,
  Shield,
} from "lucide-react";
import { CityData } from "@/components/CityGuidePage";

export const CITIES_DATA: Record<string, CityData> = {
  // ─────────────────────────────────────────────────────────────
  // 1. ISTANBUL (TURKEY)
  // ─────────────────────────────────────────────────────────────
  istanbul: {
    name: "Istanbul",
    country: "turkey",
    countryName: "Turkey",
    tagline: "The Global Cultural & Academic Metropolis",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&auto=format&fit=crop&q=80",
    introduction:
      "Bridging Europe and Asia across the historic Bosphorus Strait, Istanbul is Turkey's largest city and cultural epicenter. Home to top-ranked universities, global business headquarters, and millennia of Byzantine and Ottoman history, it offers dynamic urban life alongside rich historical heritage.",
    bestTimeToVisit: "April – June & September – November",
    mainAirports: "Istanbul Airport (IST) & Sabiha Gökçen (SAW)",
    currency: "Turkish Lira (TRY / ₺)",
    whereToStay: {
      overview:
        "Istanbul is divided into 39 districts across two continents. Key neighborhoods offer distinct atmospheres tailored to students, tourists, and relocating families.",
      neighborhoods: [
        {
          name: "Kadıköy & Moda (Asian Side)",
          tag: "Students & Expats",
          desc: "Vibrant coastal neighborhood with lively cafes, bookshops, direct ferries, and close proximity to Marmara and Yeditepe universities.",
        },
        {
          name: "Beşiktaş & Şişli (European Side)",
          tag: "Central & Academic",
          desc: "Hub for major universities (İTÜ, Bahçeşehir, Yıldız Teknik) and metro lines, surrounded by lively markets and Bosphorus views.",
        },
        {
          name: "Sultanahmet & Fatih",
          tag: "Historic & Family",
          desc: "Walking distance to Hagia Sophia, Grand Bazaar, and Istanbul University's historic Beyazıt campus.",
        },
      ],
    },
    food: {
      overview:
        "Istanbul’s culinary scene blends Aegean seafood, Southeastern kebabs, Black Sea dishes, and Ottoman palace classics.",
      specialties: [
        { name: "Balık Ekmek (Fish Sandwich)", desc: "Fresh grilled mackerel served in crusty bread along the Eminönü waterfront." },
        { name: "Simit & Turkish Tea", desc: "Sesame-crusted circular bread paired with freshly brewed çay at ferry docks." },
        { name: "İskender & Cağ Kebab", desc: "Tender sliced lamb over pita with melted butter, yogurt, and rich tomato sauce." },
        { name: "Baklava & Turkish Delight", desc: "Layered pistachio phyllo pastry and rosewater Turkish delight from Karaköy." },
      ],
      diningTip:
        "Try authentic 'Esnaf Lokantası' (tradesmen cafeterias) in central districts for delicious, budget-friendly home-cooked Turkish meals.",
    },
    shopping: {
      overview:
        "From centuries-old covered bazaars to world-class modern luxury shopping malls.",
      spots: [
        { name: "Grand Bazaar (Kapalıçarşı)", type: "Historic Bazaar", desc: "Over 4,000 historic shops selling carpets, ceramics, jewelry, and spices in Beyazıt." },
        { name: "İstinye Park & Zorlu Center", type: "Luxury Malls", desc: "Premier retail destinations featuring international designer brands, cinemas, and dining." },
        { name: "Kadıköy Tuesday Bazaar", type: "Local Market", desc: "Massive open-air fresh produce, textiles, and household goods market." },
      ],
    },
    thingsToDo: {
      overview:
        "Iconic cultural landmarks, scenic boat cruises, and world-class museums.",
      attractions: [
        { name: "Hagia Sophia & Blue Mosque", category: "Historic Landmark", desc: "Architectural wonders and active spiritual landmarks in historic Sultanahmet." },
        { name: "Bosphorus Ferry Cruise", category: "Scenic Experience", desc: "Public or private boat rides between Europe and Asia past waterfront Ottoman mansions." },
        { name: "Topkapı Palace Museum", category: "Ottoman Heritage", desc: "The former imperial residence and court of Ottoman Sultans with coastal views." },
        { name: "Galata Tower & Karaköy", category: "Viewpoint & Arts", desc: "Medieval stone tower overlooking the Golden Horn, surrounded by boutique art cafes." },
      ],
    },
    transportation: {
      overview:
        "Istanbul has a comprehensive public transit network combining Metro lines, Metrobüs, Trams, Marmaray undersea rail, and public Ferries (Şehir Hatları).",
      cardName: "Istanbulkart",
      cardDetails: "Reloadable contactless smart card for all public transit. Discounted student cards available with university enrollment proof.",
      options: [
        { name: "Metro & Tram (M2, M11, T1)", desc: "Fast transit connecting airports, business districts (Levent), and historic centers (Sultanahmet)." },
        { name: "Bosphorus Public Ferries", desc: "Scenic and efficient transit connecting Eminönü, Karaköy, Beşiktaş, Üsküdar, and Kadıköy." },
        { name: "Yellow Taxis & BiTaksi", desc: "Metered city taxis and mobile ride-hailing apps operating 24/7 across both continents." },
      ],
    },
    budget: {
      overview:
        "Istanbul is affordable compared to Western European capitals, with very budget-friendly student cafeterias and transit discounts.",
      items: [
        { item: "Student Meal (Cafeteria)", cost: "₺60 – ₺120 ($2 – $4)", note: "University dining hall or local lokanta" },
        { item: "Restaurant Meal (Mid-range)", cost: "₺250 – ₺500 ($8 – $16)", note: "Sit-down restaurant in Kadıköy or Beşiktaş" },
        { item: "Transit Fare (Istanbulkart)", cost: "₺10 – ₺20 ($0.30 – $0.65)", note: "Discounted student fare is even lower" },
        { item: "Monthly Student Room", cost: "₺8,000 – ₺16,000 ($250 – $500)", note: "Shared flat or private dorm depending on district" },
      ],
      tip: "Apply for your Student Istanbulkart immediately after university registration to save over 70% on all public transit fares.",
    },
    languageTips: {
      overview: "Basic polite Turkish phrases make daily interactions much smoother in shops and transit.",
      phrases: [
        { phrase: "Merhaba", pronunciation: "MARE-ha-ba", meaning: "Hello", context: "Everyday greeting in stores and campuses" },
        { phrase: "Teşekkür ederim", pronunciation: "te-shek-kewr e-de-reem", meaning: "Thank you", context: "Polite gratitude" },
        { phrase: "Ne kadar?", pronunciation: "ne ka-dar", meaning: "How much is it?", context: "Asking prices in markets" },
        { phrase: "Kolay gelsin", pronunciation: "ko-lie gel-seen", meaning: "May it be easy", context: "Friendly greeting to workers & shopkeepers" },
        { phrase: "Afedersiniz", pronunciation: "ah-fe-der-see-neez", meaning: "Excuse me", context: "Getting attention politely on transit" },
        { phrase: "Görüşürüz", pronunciation: "geu-rew-shew-rewz", meaning: "See you later", context: "Casual farewell" },
      ],
    },
    mimiServices: [
      { title: "Airport Pickup (IST / SAW)", desc: "Terminal meet & greet and direct private transfer to your dormitory or hotel.", href: "/turkey/travel", icon: Plane },
      { title: "Student Campus Registration", desc: "Bilingual accompaniment to university student affairs (Öğrenci İşleri).", href: "/turkey/student-services", icon: GraduationCap },
      { title: "Student Housing Walkthrough", desc: "In-person inspection and video verification of flats and private dorms.", href: "/turkey/parent", icon: Home },
      { title: "İkamet (Residency) Guidance", desc: "Step-by-step paperwork checklists and accompaniment for Göç İdaresi appointments.", href: "/turkey/paperwork", icon: FileCheck },
      { title: "Sworn Translation & Notary", desc: "Certified document translations accepted by Turkish ministries and universities.", href: "/turkey/translation", icon: Languages },
      { title: "Parent Scheduled Updates", desc: "Regular check-ins and video updates for families abroad.", href: "/turkey/parent", icon: Users },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. ANKARA (TURKEY)
  // ─────────────────────────────────────────────────────────────
  ankara: {
    name: "Ankara",
    country: "turkey",
    countryName: "Turkey",
    tagline: "The Capital Core & Leading Research Hub",
    image: "https://bukaviyyehotel.com.tr/tema/genel/uploads/haberler/ankara-gezilecek-yerler.jpg",
    introduction:
      "As Turkey's political and administrative capital, Ankara is an orderly, well-structured metropolis known for world-class research universities (METU, Bilkent, Hacettepe, Ankara University), government ministries, and international embassies.",
    bestTimeToVisit: "May – June & September – October",
    mainAirports: "Ankara Esenboğa Airport (ESB)",
    currency: "Turkish Lira (TRY / ₺)",
    whereToStay: {
      overview:
        "Ankara offers peaceful, leafy residential districts with easy metro connectivity to university campuses and government centers.",
      neighborhoods: [
        {
          name: "Çankaya & Tunalı Hilmi",
          tag: "Diplomatic & Lively",
          desc: "Central district home to embassies, parks, cafes, bookstores, and student-friendly social venues.",
        },
        {
          name: "Bahçelievler (7. Cadde)",
          tag: "Student District",
          desc: "Vibrant pedestrian avenue lined with cafes, student dining, and close access to Gazi and Ankara universities.",
        },
        {
          name: "Bilkent & Beytepe",
          tag: "Campus Greenbelt",
          desc: "Modern residential zones near Bilkent University and METU campus grounds with modern student residences.",
        },
      ],
    },
    food: {
      overview:
        "Ankara is famous for authentic Central Anatolian grilled meats, traditional pastries, and cozy student bakeries.",
      specialties: [
        { name: "Ankara Döner & Kebab", desc: "Renowned thinly-sliced seasoned beef and lamb döner served with fresh lavash." },
        { name: "Ankara Simidi", desc: "Crispy dark-sesame baked simit dipped in grape molasses (pekmez)." },
        { name: "Beypazarı Kurusu", desc: "Traditional twice-baked crunchy butter biscuits from neighboring Beypazarı." },
        { name: "Kayseri Mantısı & Soups", desc: "Handmade miniature dumplings in garlic yogurt and paprika butter." },
      ],
      diningTip:
        "The cafes along Tunalı Hilmi and 7. Cadde in Bahçelievler offer great student study setups with fast Wi-Fi and affordable menus.",
    },
    shopping: {
      overview:
        "Ankara features established covered craft bazaars alongside high-end modern shopping complexes.",
      spots: [
        { name: "Ankuva & Panora Mall", type: "Modern Mall", desc: "Upscale shopping and entertainment centers in Oran and Çankaya." },
        { name: "Kızılay Shopping District", type: "City Center", desc: "Bustling downtown commercial hub with hundreds of apparel shops and book arcades." },
        { name: "Çıkrıkçılar Yokuşu & Castle Bazaars", type: "Historic Bazaar", desc: "Cobblestone historic market selling copperware, antiques, and Turkish textiles." },
      ],
    },
    thingsToDo: {
      overview:
        "Major national monuments, peaceful botanical parks, and leading art institutions.",
      attractions: [
        { name: "Anıtkabir (Atatürk Mausoleum)", category: "National Landmark", desc: "Monumental historic complex, museum, and ceremonial grounds honoring Turkey's founder." },
        { name: "Museum of Anatolian Civilizations", category: "World-Class Museum", desc: "Award-winning museum housing Neolithic, Hittite, and Phrygian artifacts near Ankara Castle." },
        { name: "Atakule & Botanical Garden", category: "Viewpoint & Parks", desc: "Observation tower overlooking the green valleys of Çankaya and surrounding city skyline." },
        { name: "Ankara Castle (Kalesi)", category: "Historic Fortress", desc: "Ancient hilltop citadel with panoramic views and traditional Ottoman houses." },
      ],
    },
    transportation: {
      overview:
        "Ankara operates a clean and efficient underground metro network (Ankaray & Ankara Metrosu) supported by municipal EGO buses.",
      cardName: "Ankarakart",
      cardDetails: "Contactless transit smart card accepted on all Metro, Ankaray, EGO buses, and Teleferik lines.",
      options: [
        { name: "Ankara Metro (M1, M2, M3, M4)", desc: "Connects Kızılay central station to university campuses, residential hubs, and train stations." },
        { name: "EGO Municipal Buses", desc: "Extensive bus routes connecting every district and campus across the capital." },
        { name: "High-Speed Train (YHT)", desc: "Ankara YHT Gar connects to Istanbul in 4 hours, Konya in 1.5 hours, and Eskişehir in 1 hour." },
      ],
    },
    budget: {
      overview:
        "Ankara is generally 20–30% more economical than Istanbul for housing, groceries, and student living expenses.",
      items: [
        { item: "Student Meal (Campus/Lokanta)", cost: "₺50 – ₺100 ($1.60 – $3.20)", note: "University cafeteria or neighborhood dining" },
        { item: "Sit-Down Meal (Tunalı/Kızılay)", cost: "₺180 – ₺350 ($6 – $11)", note: "Mid-range restaurant meal" },
        { item: "Monthly Student Transit Pass", cost: "₺200 – ₺300 ($6.50 – $10)", note: "Unlimited student subscription on Ankarakart" },
        { item: "Student Flat Rental (Shared)", cost: "₺6,000 – ₺12,000 ($190 – $380)", note: "Per person in student-friendly districts" },
      ],
      tip: "Ankara's monthly student transit subscription is one of the most affordable in the country—register your student ID right away.",
    },
    languageTips: {
      overview: "Ankara has a large student and diplomatic community; clear and polite phrasing is welcomed everywhere.",
      phrases: [
        { phrase: "İyi günler", pronunciation: "ee-yee gewn-ler", meaning: "Good day", context: "Standard daytime greeting" },
        { phrase: "Lütfen", pronunciation: "lewt-fen", meaning: "Please", context: "Polite requests in offices and shops" },
        { phrase: "Öğrenci kartı", pronunciation: "eu-ren-jee kar-tuh", meaning: "Student card", context: "For student discounts in transport/museums" },
        { phrase: "Hesap lütfen", pronunciation: "heh-sap lewt-fen", meaning: "The bill, please", context: "Asking for the check at cafes" },
        { phrase: "Yardım edebilir misiniz?", pronunciation: "yar-dum eh-deh-bee-leer mee-see-neez", meaning: "Can you help me?", context: "Asking for directions" },
      ],
    },
    mimiServices: [
      { title: "Esenboğa Airport (ESB) Pickup", desc: "Direct terminal greeting and safe transit to your campus or flat in Ankara.", href: "/turkey/travel", icon: Plane },
      { title: "MEB Denklik & Ministry Support", desc: "Accompaniment to the Ministry of National Education for diploma equivalency.", href: "/turkey/paperwork", icon: FileCheck },
      { title: "Bilkent, METU & Ankara Uni Escort", desc: "Student registration guidance at major Ankara university campuses.", href: "/turkey/student-services", icon: GraduationCap },
      { title: "Housing & Lease Verification", desc: "Walkthroughs and lease contract reviews for student flats in Çankaya.", href: "/turkey/parent", icon: Home },
      { title: "Embassy & Notary Translation", desc: "Sworn Turkish translation for official administrative and legal filings.", href: "/turkey/translation", icon: Languages },
      { title: "Parent Video Check-Ins", desc: "Scheduled video check-ins for parents keeping in touch from abroad.", href: "/turkey/parent", icon: Users },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. TRABZON (TURKEY)
  // ─────────────────────────────────────────────────────────────
  trabzon: {
    name: "Trabzon",
    country: "turkey",
    countryName: "Turkey",
    tagline: "Black Sea Coast, Lush Highlands & Heritage",
    image: "https://www.advantour.com/img/turkey/images/trabzon.jpg",
    introduction:
      "Nestled along the emerald coastline of the northeastern Black Sea, Trabzon is famous for dramatic mountain landscapes, tea plantations, Black Sea cuisine, and Karadeniz Technical University (KTÜ) — one of Turkey's oldest and largest universities.",
    bestTimeToVisit: "June – September",
    mainAirports: "Trabzon Airport (TZX)",
    currency: "Turkish Lira (TRY / ₺)",
    whereToStay: {
      overview:
        "Accommodations range from coastal city-center flats in Ortahisar to mountain retreats near Uzungöl and lakeside villas.",
      neighborhoods: [
        {
          name: "Meydan & Ortahisar",
          tag: "City Center",
          desc: "Central hub surrounded by shops, historic Ottoman quarters, tea gardens, and easy minibus connections.",
        },
        {
          name: "Konaklar & KTÜ Campus Area",
          tag: "Student Hub",
          desc: "Directly adjacent to Karadeniz Technical University and Trabzon Airport with abundant student housing.",
        },
        {
          name: "Yomra & Kaşüstü",
          tag: "Modern Coastal & Family",
          desc: "Modern residential coastal district with new furnished apartments, shopping malls, and sea views.",
        },
      ],
    },
    food: {
      overview:
        "Black Sea cuisine is distinct and hearty, famous for fresh anchovies (hamsi), cornflour dishes, and rich cheeses.",
      specialties: [
        { name: "Trabzon Kuymak / Mıhlama", desc: "Melted local cheese and cornmeal fondue served with hot crusty bread." },
        { name: "Akçaabat Köftesi", desc: "Garlic-infused grilled meatballs paired with piyaz bean salad and ayran." },
        { name: "Karadeniz Pidesi", desc: "Crispy boat-shaped flatbread filled with local cheese and butter." },
        { name: "Fresh Black Sea Hamsi", desc: "Seasonal pan-fried anchovies with lemon and cornbread." },
      ],
      diningTip:
        "Enjoy authentic kuymak at traditional breakfast spots overlooking the Boztepe hill for breathtaking coastal views.",
    },
    shopping: {
      overview:
        "Trabzon is renowned for authentic silver filigree (Telkari), copper handicrafts, and fresh organic Black Sea tea.",
      spots: [
        { name: "Kemeraltı & Bedesten", type: "Historic Bazaar", desc: "Traditional covered market for local spices, copper cookware, and authentic silver jewelry." },
        { name: "Forum Trabzon", type: "Modern Mall", desc: "Largest shopping mall in the Black Sea region with international retail brands and dining." },
        { name: "Varlıbaş Shopping Center", type: "City Center Mall", desc: "Convenient shopping mall located close to the historic city center." },
      ],
    },
    thingsToDo: {
      overview:
        "Stunning clifftop monasteries, mountain alpine lakes, and historic Hagia Sophia of Trabzon.",
      attractions: [
        { name: "Sümela Monastery", category: "Cliffside Monastery", desc: "Ancient Greek Orthodox monastery dramatically carved into steep cliffs in Altındere National Park." },
        { name: "Uzungöl Alpine Lake", category: "Mountain Lake", desc: "Picturesque mountain lake surrounded by dense pine forests, wooden chalets, and waterfalls." },
        { name: "Trabzon Hagia Sophia (Ayasofya)", category: "Byzantine Heritage", desc: "13th-century Byzantine church and museum featuring preserved frescoes and seaside gardens." },
        { name: "Boztepe Hilltop Viewpoint", category: "Panoramic View", desc: "Scenic hill overlooking the entire city harbor and Black Sea coastline." },
      ],
    },
    transportation: {
      overview:
        "Getting around Trabzon relies on municipal buses (Metropolkart) and frequent shared minibuses (dolmuş).",
      cardName: "Trabzon Metropolkart",
      cardDetails: "Contactless transit card for Trabzon Metropolitan municipality buses.",
      options: [
        { name: "City Dolmuş Minibuses", desc: "Frequent, affordable minibuses connecting Meydan to KTÜ campus, Akçaabat, and Yomra." },
        { name: "Municipal Buses", desc: "Scheduled bus services covering suburban districts and regional coastal routes." },
        { name: "Private Chauffeur & Tour Vans", desc: "Comfortable private Mercedes vans for scenic day trips to Sümela and Uzungöl." },
      ],
    },
    budget: {
      overview:
        "Trabzon offers a very affordable cost of living, with economical student rentals and fresh local market produce.",
      items: [
        { item: "Local Meal (Köfte / Pide)", cost: "₺120 – ₺220 ($4 – $7)", note: "Traditional dining in Akçaabat or Meydan" },
        { item: "Kuymak Breakfast for Two", cost: "₺200 – ₺350 ($6.50 – $11)", note: "Full traditional breakfast" },
        { item: "Minibus (Dolmuş) Ride", cost: "₺15 – ₺25 ($0.50 – $0.80)", note: "Single trip across city districts" },
        { item: "Monthly Student Accommodation", cost: "₺4,500 – ₺9,000 ($140 – $285)", note: "Furnished room or shared flat near KTÜ" },
      ],
      tip: "Minibuses (dolmuş) departing from Meydan are the fastest way to travel between downtown and the KTÜ university campus.",
    },
    languageTips: {
      overview: "Locals in Trabzon are exceptionally hospitable; learning friendly greetings brings warm smiles.",
      phrases: [
        { phrase: "Selamünaleyküm", pronunciation: "se-la-mu-an-ley-kum", meaning: "Peace be upon you", context: "Traditional friendly greeting" },
        { phrase: "Aleykümselam", pronunciation: "a-ley-kum-se-lam", meaning: "And upon you peace", context: "Reply to greeting" },
        { phrase: "Meydan'a gidiyor mu?", pronunciation: "mey-da-na gee-dee-yor moo", meaning: "Does this go to Meydan?", context: "Asking dolmuş driver" },
        { phrase: "Eline sağlık", pronunciation: "eh-lee-neh sah-luk", meaning: "Health to your hands", context: "Complimenting the chef/cook" },
      ],
    },
    mimiServices: [
      { title: "Trabzon Airport (TZX) Pickup", desc: "Terminal arrivals greeting and private transit to campus or regional hotel.", href: "/turkey/travel", icon: Plane },
      { title: "KTÜ Student Onboarding", desc: "Karadeniz Technical University registration and student ID guidance.", href: "/turkey/student-services", icon: GraduationCap },
      { title: "Sümela & Uzungöl Excursions", desc: "Private chauffeured tours to Trabzon's mountain and highland landmarks.", href: "/turkey/travel", icon: Compass },
      { title: "Housing Walkthroughs in Yomra/KTÜ", desc: "Verification and video walkthrough of student apartments and residences.", href: "/turkey/parent", icon: Home },
      { title: "Parent Video Check-Ins", desc: "Scheduled video updates for parents of students studying at KTÜ.", href: "/turkey/parent", icon: Users },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. KARABÜK & SAFRANBOLU (TURKEY)
  // ─────────────────────────────────────────────────────────────
  karabuk: {
    name: "Karabük & Safranbolu",
    country: "turkey",
    countryName: "Turkey",
    tagline: "UNESCO Ottoman Architecture & Vibrant University Campus",
    image: "https://kuliahturki.id/wp-content/uploads/2025/06/101_Karabuk-University_Campus.jpg",
    introduction:
      "Combining the fast-growing academic community of Karabük University (KBÜ) with the UNESCO World Heritage town of Safranbolu, this region is one of Turkey's top destinations for international students and cultural travelers, surrounded by lush pine forests and historic Ottoman mansions.",
    bestTimeToVisit: "April – June & September – November",
    mainAirports: "Ankara Esenboğa (ESB) or Istanbul (IST) with direct bus transit",
    currency: "Turkish Lira (TRY / ₺)",
    whereToStay: {
      overview:
        "Students typically live in 100. Yıl district near campus, while visitors and families enjoy restored Ottoman heritage mansions in Safranbolu.",
      neighborhoods: [
        {
          name: "100. Yıl Mahallesi (Karabük)",
          tag: "Student Heart",
          desc: "Bustling university neighborhood right next to KBÜ campus with student cafes, libraries, and affordable apartments.",
        },
        {
          name: "Safranbolu Old Town (Çarşı)",
          tag: "UNESCO Heritage",
          desc: "Historic cobblestone valley featuring restored 300-year-old wooden Ottoman boutique mansions (Konak).",
        },
        {
          name: "Bağlar District (Safranbolu)",
          tag: "Peaceful Residential",
          desc: "Leafy garden district with traditional stone houses, orchards, and quiet residential streets.",
        },
      ],
    },
    food: {
      overview:
        "Famous for local saffron-infused delicacies, authentic Turkish delight (lokum), and wood-fired regional pastries.",
      specialties: [
        { name: "Safranbolu Lokumu (Saffron Delight)", desc: "World-famous light Turkish delight flavored with local saffron and whole pistachios." },
        { name: "Bükme & Kuyu Kebabı", desc: "Wood-fired spinach and minced meat pastries, and traditional pit-roasted lamb." },
        { name: "Peruhiy (Mantı)", desc: "Traditional regional boiled pasta pockets filled with curd cheese and mint butter." },
        { name: "Saffron Tea (Safran Çayı)", desc: "Fragrant herbal tea brewed with genuine saffron strands." },
      ],
      diningTip:
        "Have breakfast or coffee in a historic courtyard konak in Safranbolu Old Town for an authentic historic ambiance.",
    },
    shopping: {
      overview:
        "Historic artisan bazaars selling genuine saffron, copper handicrafts, leatherwork, and traditional sweets.",
      spots: [
        { name: "Yemeniciler Arastası (Shoemakers Guild)", desc: "Historic guild courtyard where craftsmen make handmade leather shoes and souvenirs.", type: "Artisan Guild" },
        { name: "Safranbolu Tarihi Çarşı", desc: "Historic market full of saffron shops, traditional lokum stores, and local herbal products.", type: "Historic Bazaar" },
        { name: "Kares AVM (Karabük)", desc: "Modern shopping mall in central Karabük for everyday clothing, groceries, and electronics.", type: "Shopping Mall" },
      ],
    },
    thingsToDo: {
      overview:
        "Preserved Ottoman architecture, glass canyon walkways, and natural pine forest canyons.",
      attractions: [
        { name: "Kristal Teras (Glass Terrace)", category: "Canyon Viewpoint", desc: "Suspended glass observation deck built 80 meters high over the dramatic Tokatlı Canyon." },
        { name: "Historic Safranbolu Konaks", category: "UNESCO Heritage", desc: "Walking through preserved 18th-century timber-framed Ottoman mansions and cobblestone alleys." },
        { name: "Hıdırlık Hill Viewpoint", category: "Panoramic View", desc: "Historical panoramic hill offering the classic postcard view of Safranbolu Old Town." },
        { name: "Yenice Pine Forests & Canyons", category: "Nature Retreat", desc: "Dense pine and oak mountain forests recognized for hiking trails and wildlife." },
      ],
    },
    transportation: {
      overview:
        "Frequent minibuses connect Karabük city center, Karabük University campus, and Safranbolu every few minutes.",
      cardName: "Karabük Kart",
      cardDetails: "Contactless bus card for municipal buses, with cash/cards accepted on local dolmuş routes.",
      options: [
        { name: "Campus Minibuses (Dolmuş)", desc: "Continuous shuttles running between 100. Yıl, KBÜ Campus, and Safranbolu center." },
        { name: "Intercity Coaches (Otogar)", desc: "Direct comfortable buses to Ankara (2.5 hrs) and Istanbul (5 hrs) departing hourly." },
        { name: "Private Chauffeur Transit", desc: "Private transfers for incoming students and visiting parents from Ankara or Istanbul airports." },
      ],
    },
    budget: {
      overview:
        "Karabük is one of the most budget-friendly student cities in Turkey with remarkably low living and dining costs.",
      items: [
        { item: "Student Lunch (100. Yıl Cafe)", cost: "₺40 – ₺80 ($1.30 – $2.60)", note: "Popular student meals near campus" },
        { item: "Traditional Saffron Tea & Lokum", cost: "₺50 – ₺90 ($1.60 – $3.00)", note: "Historic konak cafe experience" },
        { item: "Local Dolmuş Ride", cost: "₺12 – ₺20 ($0.40 – $0.65)", note: "Between campus and Safranbolu" },
        { item: "Monthly Student Flat (Shared)", cost: "₺3,500 – ₺7,500 ($110 – $240)", note: "Affordable student rentals in 100. Yıl" },
      ],
      tip: "The 100. Yıl student neighborhood has dozens of student copy centers, bookshops, and affordable diners within walking distance.",
    },
    languageTips: {
      overview: "With thousands of international students at KBÜ, locals are friendly and accustomed to students learning Turkish.",
      phrases: [
        { phrase: "Kampüse gidiyor mu?", pronunciation: "kam-pew-seh gee-dee-yor moo", meaning: "Does this go to campus?", context: "Asking the dolmuş driver" },
        { phrase: "100. Yıl", pronunciation: "yewz-ewn-jew yul", meaning: "100th Year neighborhood", context: "Main student district destination" },
        { phrase: "Lokum tadabilir miyim?", pronunciation: "lo-koom ta-da-bee-leer mee-yeem", meaning: "May I taste the Turkish delight?", context: "In Safranbolu sweet shops" },
        { phrase: "Çok güzel", pronunciation: "chok gew-zel", meaning: "Very nice / Beautiful", context: "Complimenting scenery or food" },
      ],
    },
    mimiServices: [
      { title: "Karabük University (KBÜ) Onboarding", desc: "Campus registration guidance and student ID paperwork assistance.", href: "/turkey/student-services", icon: GraduationCap },
      { title: "Airport Pickup from ESB / IST", desc: "Direct private long-distance transfer from airport arrivals directly to Karabük.", href: "/turkey/travel", icon: Plane },
      { title: "Student Flat & Room Walkthrough", desc: "In-person video inspection of student housing in 100. Yıl district.", href: "/turkey/parent", icon: Home },
      { title: "İkamet Support at Karabük Göç", desc: "Document preparation and accompaniment to local migration directorate.", href: "/turkey/paperwork", icon: FileCheck },
      { title: "Parent Video Updates", desc: "Scheduled video check-ins for parents of students studying at KBÜ.", href: "/turkey/parent", icon: Users },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. RIYADH (SAUDI ARABIA)
  // ─────────────────────────────────────────────────────────────
  riyadh: {
    name: "Riyadh",
    country: "saudi",
    countryName: "Saudi Arabia",
    tagline: "The Modern Financial & Cultural Capital",
    image: "https://www.wanderlustmagazine.com/wp-content/uploads/2025/04/shutterstock_1224851173-1-4096x2734-1-scaled.jpg",
    introduction:
      "Riyadh is the vibrant heart of the Kingdom and the epicenter of Saudi Vision 2030. Boasting world-class universities (King Saud University, Princess Nourah University, Alfaisal), futuristic financial districts (KAFD), and UNESCO historic Diriyah, Riyadh seamlessly unites deep Arabian heritage with cutting-edge modernity.",
    bestTimeToVisit: "November – March",
    mainAirports: "King Khalid International Airport (RUH)",
    currency: "Saudi Riyal (SAR / ﷼)",
    whereToStay: {
      overview:
        "Riyadh is an expansive city. Staying near major avenues (King Fahd Rd, Northern Ring Rd) or university districts ensures seamless mobility.",
      neighborhoods: [
        {
          name: "Al-Olaya & KAFD",
          tag: "Business & Modern",
          desc: "Central business core with iconic skyscrapers, luxury hotels, metro stations, and upscale dining.",
        },
        {
          name: "Al-Nakheel & University Zone",
          tag: "Academic & Residential",
          desc: "Prime northern district directly adjacent to King Saud University and King Abdullah Financial District.",
        },
        {
          name: "Diplomatic Quarter (DQ)",
          tag: "Quiet & Green",
          desc: "Serene international diplomatic district with manicured parks, walking trails, embassies, and cafes.",
        },
      ],
    },
    food: {
      overview:
        "Riyadh offers authentic Najdi heritage cuisine alongside Michelin-caliber international restaurants and artisan specialty coffee shops.",
      specialties: [
        { name: "Kabsa & Mandi", desc: "Fragrant spiced basmati rice served with tender roasted lamb or chicken, toasted almonds, and raisins." },
        { name: "Najdi Jareesh", desc: "Creamy crushed wheat cooked slowly with yogurt, caramelized onions, and spiced ghee." },
        { name: "Matazeez & Gursan", desc: "Traditional Najdi slow-cooked stew with thin dough disks and spiced vegetables." },
        { name: "Saudi Specialty Coffee (Gahwa) & Dates", desc: "Cardamom and saffron-infused golden Arabic coffee served with premium Sukari dates." },
      ],
      diningTip:
        "Visit Bujairi Terrace in Diriyah for fine dining overlooking the illuminated UNESCO mud-brick walls of At-Turaif.",
    },
    shopping: {
      overview:
        "From glamorous designer malls along Olaya Street to historic souks filled with oud, incense, and gold.",
      spots: [
        { name: "Souq Al-Zal (Diriyah / Deera)", type: "Historic Souk", desc: "Riyadh's oldest market for authentic Arabian rugs, vintage daggers, oud perfumes, and antiques." },
        { name: "Kingdom Centre & Centria Mall", type: "Luxury Shopping", desc: "Premier luxury shopping destinations featuring global fashion houses and the Skybridge." },
        { name: "The Zone & Riyadh Front", type: "Open-Air Lifestyle", desc: "Modern open-air promenades with flagship retail boutiques, fountains, and cafes." },
      ],
    },
    thingsToDo: {
      overview:
        "World heritage mud-brick citadels, futuristic skyscrapers, and desert adventures.",
      attractions: [
        { name: "Diriyah & At-Turaif (UNESCO)", category: "World Heritage", desc: "The birthplace of the first Saudi state with restored mud-brick palaces and museums." },
        { name: "Edge of the World (Jebel Fihrayn)", category: "Desert Safari", desc: "Dramatic 300-meter cliffs overlooking the endless desert horizon with 4x4 trails." },
        { name: "Kingdom Tower Skybridge", category: "Iconic Skyline", desc: "High-altitude glass observation bridge offering 360-degree views across illuminated Riyadh." },
        { name: "National Museum & Murabba Palace", category: "Saudi History", desc: "Extensive exhibits tracing Arabian Peninsula history, Islamic civilization, and unification." },
      ],
    },
    transportation: {
      overview:
        "Riyadh features the modern Riyadh Metro network, Riyadh Bus lines, and ride-hailing services.",
      cardName: "Darb Card / Riyadh Transit App",
      cardDetails: "Contactless transit pass and mobile app for Riyadh Metro and Bus network.",
      options: [
        { name: "Riyadh Metro Network", desc: "6 automated driverless metro lines connecting RUH Airport, KAFD, and university campuses." },
        { name: "Ride-Hailing (Uber, Careem, Bolt)", desc: "Widely available 24/7 across all neighborhoods in Riyadh with fast pickups." },
        { name: "Private Chauffeur Fleet", desc: "Executive GMC Yukon and luxury sedans for day-long meetings, family trips, and airport transit." },
      ],
    },
    budget: {
      overview:
        "Riyadh accommodates diverse budgets, with subsidized campus dining and accessible street shawarmas alongside luxury venues.",
      items: [
        { item: "Casual Meal / Shawarma", cost: "SAR 15 – SAR 35 ($4 – $9)", note: "Popular local dining or fast casual" },
        { item: "Traditional Najdi Feast", cost: "SAR 60 – SAR 120 ($16 – $32)", note: "Kabsa or Mandi dinner at traditional restaurant" },
        { item: "Metro / Bus Ride", cost: "SAR 4 – SAR 8 ($1 – $2)", note: "Single public transit fare" },
        { item: "Monthly Student Accommodation", cost: "SAR 1,800 – SAR 3,500 ($480 – $930)", note: "Campus dorm or shared private apartment" },
      ],
      tip: "University students in Saudi Arabia receive heavily subsidized on-campus housing and meals with student verification.",
    },
    languageTips: {
      overview: "Arabic is the official language, but English is widely spoken in universities, hospitals, and business centers.",
      phrases: [
        { phrase: "As-salamu alaykum", pronunciation: "as-sa-LA-mu a-LAY-kum", meaning: "Peace be upon you", context: "Universal polite greeting" },
        { phrase: "Shukran jazeelan", pronunciation: "shook-ran ja-ZEE-lan", meaning: "Thank you very much", context: "Expressing sincere gratitude" },
        { phrase: "Min fadlak / Min fadlik", pronunciation: "min fad-lak (m) / fad-leek (f)", meaning: "Please", context: "Polite requests" },
        { phrase: "Ahlan wa Sahlan", pronunciation: "AH-lan wa SAH-lan", meaning: "Welcome", context: "Warm hospitality greeting" },
        { phrase: "Bi kam hadha?", pronunciation: "bee kam HAH-za", meaning: "How much is this?", context: "Asking price at souks" },
      ],
    },
    mimiServices: [
      { title: "King Khalid Airport (RUH) Chauffeur", desc: "Terminal greeting and private luxury transfer to your campus, flat, or hotel.", href: "/saudi/travel", icon: Plane },
      { title: "King Saud & PNU Student Support", desc: "University Deanship accompaniment and student ID setup.", href: "/saudi/student-services", icon: GraduationCap },
      { title: "National Address & Bank Setup", desc: "Guidance on SPL National Address and student bank account opening.", href: "/saudi/student-services", icon: FileCheck },
      { title: "Student Housing Walkthrough", desc: "In-person inspection and video verification of campus dorms and flats.", href: "/saudi/parent", icon: Home },
      { title: "Iqama & Administrative Guidance", desc: "Checklists and preparation for student residence permit paperwork.", href: "/saudi/paperwork", icon: Shield },
      { title: "Parent Video Check-Ins", desc: "Regular scheduled check-ins and video updates for families abroad.", href: "/saudi/parent", icon: Users },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. JEDDAH (SAUDI ARABIA)
  // ─────────────────────────────────────────────────────────────
  jeddah: {
    name: "Jeddah",
    country: "saudi",
    countryName: "Saudi Arabia",
    tagline: "The Red Sea Coastal Gateway & Historic Al-Balad",
    image: "https://images.trvl-media.com/place/553248634646177626/e5c39be0-8b5d-49e9-ae16-92f7c86f9d47.jpg",
    introduction:
      "Known as the 'Bride of the Red Sea', Jeddah is Saudi Arabia's vibrant coastal commercial port and historical gateway to Makkah. Home to King Abdulaziz University (KAU), UNESCO-listed coral stone architecture in Historic Al-Balad, and a bustling waterfront corniche, Jeddah is celebrated for its cosmopolitan warmth.",
    bestTimeToVisit: "November – April",
    mainAirports: "King Abdulaziz International Airport (JED)",
    currency: "Saudi Riyal (SAR / ﷼)",
    whereToStay: {
      overview:
        "Jeddah stretches along the Red Sea coast. Staying in central or coastal districts provides convenient access to both universities and the corniche.",
      neighborhoods: [
        {
          name: "Al-Hamra & Corniche",
          tag: "Waterfront & Central",
          desc: "Scenic coastal promenade featuring sea-view hotels, King Fahd's Fountain, and popular cafes.",
        },
        {
          name: "Al-Rawdah & Al-Zahra",
          tag: "Upscale & Dining",
          desc: "Trendy northern districts renowned for chic cafes, boutique dining, and convenient transit links.",
        },
        {
          name: "Al-Sulaymaniyah (Near KAU)",
          tag: "Academic Hub",
          desc: "Directly adjacent to King Abdulaziz University and the Haramain High-Speed Rail train station.",
        },
      ],
    },
    food: {
      overview:
        "Jeddah is famous across the Arabian Peninsula for fresh Red Sea fish (Najel, Hamour), Sayadiyah rice, and spicy broasted chicken.",
      specialties: [
        { name: "Red Sea Sayadiyah", desc: "Fresh spiced catch of the day served over caramelized onion brown basmati rice." },
        { name: "Al Baik Chicken", desc: "Legendary Saudi crispy broasted chicken with world-famous garlic sauce, born in Jeddah." },
        { name: "Mutabbaq & Foul", desc: "Crispy pan-fried folded pastry stuffed with minced meat, eggs, and leeks with fava beans." },
        { name: "Hejazi Sobia & Ma'amoul", desc: "Traditional chilled Hejazi barley drink and date-filled semolina pastries." },
      ],
      diningTip:
        "Visit the Central Fish Market (Bangala) in the morning to pick fresh Red Sea fish and have it grilled on the spot.",
    },
    shopping: {
      overview:
        "Ancient coral-stone spice souks stand alongside expansive modern waterfront retail destinations.",
      spots: [
        { name: "Historic Al-Balad Souks", type: "Historic Market", desc: "Traditional alleys selling Arabian spices, incense burners, gold, and local textiles." },
        { name: "Red Sea Mall & Mall of Arabia", type: "Mega Mall", desc: "Massive retail and entertainment malls with hundreds of international brands and cinema halls." },
        { name: "Tahlia Street (Prince Mohammed Bin Abdulaziz)", type: "Boutique Boulevard", desc: "Jeddah's premier open-air avenue for luxury designer boutiques and upscale cafes." },
      ],
    },
    thingsToDo: {
      overview:
        "UNESCO coral stone architecture, world-record water fountains, and Red Sea boat cruises.",
      attractions: [
        { name: "Historic Al-Balad (UNESCO)", category: "Historic Heritage", desc: "Ancient 7th-century trading quarter featuring multi-story coral-limestone houses with intricate wooden Roshan balconies." },
        { name: "Jeddah Corniche & King Fahd's Fountain", category: "Waterfront Landmark", desc: "The world's tallest seawater fountain shooting over 300 meters high along the waterfront promenade." },
        { name: "Al Rahma Floating Mosque", category: "Coastal Landmark", desc: "Beautiful white mosque constructed on stilts over the turquoise Red Sea waters." },
        { name: "Red Sea Snorkeling & Yacht Cruises", category: "Coastal Experience", desc: "Private boat trips to pristine coral reef dive sites off the coast of Obhur." },
      ],
    },
    transportation: {
      overview:
        "Jeddah connects directly to Makkah (20 mins) and Madinah (2 hrs) via the Haramain High-Speed Train, with taxis and ride-hailing for city transit.",
      cardName: "Haramain Rail App / SAPTCO",
      cardDetails: "High-speed electric train bookings and municipal bus connections.",
      options: [
        { name: "Haramain High-Speed Railway", desc: "Ultra-modern train connecting JED Airport, Sulaymaniyah, Makkah, and Madinah." },
        { name: "Ride-Hailing (Careem & Uber)", desc: "Fast and reliable 24/7 ride-hailing across all districts and coastal areas." },
        { name: "Airport Chauffeur Transit", desc: "Pre-arranged private GMC and luxury transfers greeting you at JED terminal arrivals." },
      ],
    },
    budget: {
      overview:
        "Jeddah offers diverse dining and living options, with economical student living near university zones.",
      items: [
        { item: "Al Baik Meal", cost: "SAR 18 – SAR 28 ($5 – $7.50)", note: "Iconic local fried chicken meal" },
        { item: "Fresh Red Sea Fish Meal", cost: "SAR 50 – SAR 110 ($13 – $29)", note: "Freshly prepared seafood dinner" },
        { item: "Haramain Train to Makkah", cost: "SAR 40 – SAR 70 ($11 – $19)", note: "20-minute high-speed luxury rail trip" },
        { item: "Monthly Student Housing", cost: "SAR 1,500 – SAR 3,000 ($400 – $800)", note: "Campus residence or shared flat in Sulaymaniyah" },
      ],
      tip: "The Haramain Train station located inside JED Airport allows travelers to reach Makkah and Madinah directly without leaving the terminal.",
    },
    languageTips: {
      overview: "Jeddah has a warm, welcoming coastal dialect; simple greetings are received with great hospitality.",
      phrases: [
        { phrase: "Kayf halak?", pronunciation: "kayf ha-lak", meaning: "How are you?", context: "Everyday friendly greeting" },
        { phrase: "Alhamdulillah bi-khayr", pronunciation: "al-ham-doo-lil-lah bee-khayr", meaning: "Praise be to God, good", context: "Polite response" },
        { phrase: "Law samaht", pronunciation: "law sa-maht", meaning: "Excuse me / Please", context: "Polite attention getter" },
        { phrase: "Mumtaz jiddan", pronunciation: "moom-TAZ jeed-dan", meaning: "Very excellent", context: "Praising good food or service" },
      ],
    },
    mimiServices: [
      { title: "King Abdulaziz (JED) Airport Chauffeur", desc: "VIP terminal reception and smooth transfer to your flat or Haramain train station.", href: "/saudi/travel", icon: Plane },
      { title: "King Abdulaziz University (KAU) Support", desc: "Campus registration accompaniment and student affairs onboarding.", href: "/saudi/student-services", icon: GraduationCap },
      { title: "Haramain Train Coordination", desc: "Ticketing and station transfers for swift journeys to Makkah and Madinah.", href: "/saudi/travel", icon: Compass },
      { title: "Student Housing Walkthrough", desc: "In-person inspection and video verification of apartments in Jeddah.", href: "/saudi/parent", icon: Home },
      { title: "Arabic Translation & Notary", desc: "Certified translation for official university and residence permit documentation.", href: "/saudi/translation", icon: Languages },
      { title: "Parent Video Updates", desc: "Scheduled video calls and check-ins for parents with children studying at KAU.", href: "/saudi/parent", icon: Users },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. MAKKAH (SAUDI ARABIA)
  // ─────────────────────────────────────────────────────────────
  mekkah: {
    name: "Makkah",
    country: "saudi",
    countryName: "Saudi Arabia",
    tagline: "The Sacred Holy Center of the Islamic World",
    image: "https://images.trvl-media.com/place/178043/a8ed123e-3a19-4a74-90bd-925ff046c374.jpg",
    introduction:
      "Makkah Al-Mukarramah is the holiest city in Islam, centered around Al-Masjid Al-Haram and the Holy Ka'bah. Millions of pilgrims and international scholarship students at Umm Al-Qura University visit Makkah each year for spiritual reflection and academic scholarship in Islamic jurisprudence and sciences.",
    bestTimeToVisit: "Year-Round (Cooler months: November – February)",
    mainAirports: "King Abdulaziz Airport (JED) with direct Haramain Train (20 mins)",
    currency: "Saudi Riyal (SAR / ﷼)",
    whereToStay: {
      overview:
        "Accommodations range from premier 5-star hotel towers overlooking the Haram courtyard to residential student zones in Al-Aziziyah and Al-Awali.",
      neighborhoods: [
        {
          name: "Abraj Al-Bait & Central Haram",
          tag: "Direct Haram Access",
          desc: "Luxury towers and hotel complexes located directly on the piazza of Al-Masjid Al-Haram.",
        },
        {
          name: "Al-Aziziyah",
          tag: "Student & Pilgrim Hub",
          desc: "Lively commercial district with extensive student housing, shopping centers, and 24/7 Haram shuttles.",
        },
        {
          name: "Al-Awali & Umm Al-Qura Zone",
          tag: "Campus Greenbelt",
          desc: "Residential district close to Umm Al-Qura University campus with furnished apartments and dining.",
        },
      ],
    },
    food: {
      overview:
        "Makkah's diverse culinary culture caters to pilgrims from every continent, featuring traditional Hejazi, South Asian, and Middle Eastern dining.",
      specialties: [
        { name: "Hejazi Saleeg", desc: "Creamy rice porridge cooked with broth and milk, served with roasted chicken and spicy tomato salsa." },
        { name: "Mandi & Bukhari Rice", desc: "Aromatic spiced rice dishes served with tender lamb, carrots, and chickpeas." },
        { name: "Aish Bel-Lahm", desc: "Traditional savory baked bread topped with spiced minced meat, tahini, and sesame." },
        { name: "Zamzam Water & Dates", desc: "Sacred blessed Zamzam water served chilled throughout the Grand Mosque." },
      ],
      diningTip:
        "Food courts inside the Abraj Al-Bait complex offer hundreds of quick dining options with direct elevator access to the Haram plaza.",
    },
    shopping: {
      overview:
        "Shopping in Makkah focuses on authentic prayer rugs, misbaha prayer beads, high-grade oud, and dates.",
      spots: [
        { name: "Abraj Al-Bait Mall", type: "Haram Complex", desc: "Multi-level shopping center featuring luxury watchmakers, gold souks, clothing, and bookstores." },
        { name: "Souq Al-Aziziyah", type: "Commercial District", desc: "Popular retail market for pilgrim gifts, abayas, thobes, and electronics at great prices." },
        { name: "Makkah Mall", type: "Modern Mall", desc: "Contemporary lifestyle mall with international brands, hypermarket, and family dining." },
      ],
    },
    thingsToDo: {
      overview:
        "Spiritual rituals, historic holy mountains, and Islamic civilization museums.",
      attractions: [
        { name: "Al-Masjid Al-Haram & The Ka'bah", category: "Sacred Sanctuary", desc: "The central sanctuary of Islam, home to the Holy Ka'bah, Maqam Ibrahim, and Safa & Marwa." },
        { name: "Jabal Al-Nour & Hira Cultural Cave", category: "Historic Landmark", desc: "Mountain where the first revelation of the Holy Qur'an was received, featuring the modern Hira Cultural District." },
        { name: "Jabal Thawr", category: "Historical Mountain", desc: "Historic cave sanctuary on Mount Thawr associated with the Prophet's migration (Hijrah)." },
        { name: "Museum of the Two Holy Mosques", category: "Islamic Heritage", desc: "Exhibition displaying historical architecture, artifacts, and Ka'bah door coverings through the centuries." },
      ],
    },
    transportation: {
      overview:
        "Makkah is connected by the Haramain High-Speed Train, municipal Makkah Buses, and extensive 24/7 Haram shuttles.",
      cardName: "Makkah Bus App / Nusuk Portal",
      cardDetails: "Free/subsidized municipal bus network connecting all districts to the Grand Mosque.",
      options: [
        { name: "Haramain High-Speed Railway", desc: "Connects Makkah station directly to Jeddah Airport (20 mins) and Madinah (2 hours)." },
        { name: "Makkah Municipal Bus Network", desc: "Clean, air-conditioned bus routes connecting Aziziyah, Awali, and Haram terminals." },
        { name: "Authorized Pilgrim Taxis", desc: "Taxis and Careem ride-hailing operating across the holy city." },
      ],
    },
    budget: {
      overview:
        "Living and dining in Makkah are accessible, with prices varying during peak Ramadan and Hajj seasons.",
      items: [
        { item: "Casual Meal (Aziziyah)", cost: "SAR 15 – SAR 30 ($4 – $8)", note: "Everyday shawarma, rice, or sandwich" },
        { item: "Sit-Down Pilgrim Feast", cost: "SAR 45 – SAR 90 ($12 – $24)", note: "Traditional Mandi or Saleeg dining" },
        { item: "Haramain Train to Madinah", cost: "SAR 85 – SAR 150 ($23 – $40)", note: "High-speed rail journey between holy cities" },
        { item: "Monthly Student Housing", cost: "SAR 1,200 – SAR 2,500 ($320 – $665)", note: "Near Umm Al-Qura campus in non-peak months" },
      ],
      tip: "Use the official Nusuk application to easily schedule your Umrah permits and rawdah access in advance.",
    },
    languageTips: {
      overview: "Classic Arabic and Islamic greetings are universal throughout Makkah.",
      phrases: [
        { phrase: "Umrah Maqboolah", pronunciation: "oom-rah mak-BOO-lah", meaning: "May your Umrah be accepted", context: "Blessing to pilgrims" },
        { phrase: "Taqabbal Allah", pronunciation: "ta-kab-bal al-lah", meaning: "May God accept", context: "Post-prayer blessing" },
        { phrase: "Ayna Al-Haram?", pronunciation: "AY-na al-ha-ram", meaning: "Where is the Grand Mosque?", context: "Asking directions" },
        { phrase: "Jazak Allahu Khayran", pronunciation: "ja-zak al-lah-hoo khay-ran", meaning: "May God reward you with goodness", context: "Gratitude" },
      ],
    },
    mimiServices: [
      { title: "Haramain Station & JED Airport Chauffeur", desc: "Seamless private transfers from Jeddah airport and train terminals.", href: "/saudi/travel", icon: Plane },
      { title: "Umm Al-Qura University Support", desc: "Student registration accompaniment and campus orientation in Makkah.", href: "/saudi/student-services", icon: GraduationCap },
      { title: "Hira Cultural District & Ziyarah Tours", desc: "Respectful guided visits to historic holy landmarks across Makkah.", href: "/saudi/travel", icon: Compass },
      { title: "Student Housing Walkthrough", desc: "Inspection and video verification of student apartments in Aziziyah/Awali.", href: "/saudi/parent", icon: Home },
      { title: "Parent Video Updates", desc: "Scheduled video check-ins for families of international students studying in Makkah.", href: "/saudi/parent", icon: Users },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. MADINAH (SAUDI ARABIA)
  // ─────────────────────────────────────────────────────────────
  medinah: {
    name: "Madinah",
    country: "saudi",
    countryName: "Saudi Arabia",
    tagline: "The Radiant City & Spiritual Haven",
    image: "https://getexperience.com/cdn-cgi/image/width=1024,height=853,fit=cover,quality=55,dpr=1,sharpen=1,format=jpeg/uploads/02b8cd23-4b6e-4b8a-b985-4dc29fec32a9.jpg",
    introduction:
      "Al-Madinah Al-Munawwarah ('The Radiant City') holds deep spiritual serenity as the second holiest city in Islam. Centered around Al-Masjid An-Nabawi (The Prophet's Mosque), Madinah is home to the Islamic University of Madinah and Taibah University, welcoming scholars, students, and visitors from every corner of the globe.",
    bestTimeToVisit: "November – March",
    mainAirports: "Prince Mohammad Bin Abdulaziz Airport (MED) & Haramain Rail",
    currency: "Saudi Riyal (SAR / ﷼)",
    whereToStay: {
      overview:
        "The city radiates outward from Al-Masjid An-Nabawi, with walkable hotel districts around the Markaziyah and residential student communities along King Abdullah Rd.",
      neighborhoods: [
        {
          name: "Central Area (Al-Markaziyah)",
          tag: "Direct Mosque Access",
          desc: "Pedestrian-friendly district surrounding the courtyard of Al-Masjid An-Nabawi with hotels and restaurants.",
        },
        {
          name: "Quba & Al-Haramain Zone",
          tag: "Historic & Transit",
          desc: "Scenic area along Quba walkway connecting the Prophet's Mosque to historic Quba Mosque.",
        },
        {
          name: "Islamic University Campus Zone",
          tag: "Academic Hub",
          desc: "Western district near the Islamic University of Madinah with student accommodation and date groves.",
        },
      ],
    },
    food: {
      overview:
        "Madinah is world-renowned for Ajwa dates, aromatic Madini rice dishes, mint teas, and Hejazi bakeries.",
      specialties: [
        { name: "Madinah Ajwa & Sukari Dates", desc: "The famous, nutrient-rich black Ajwa dates celebrated for their unique spiritual and health benefits." },
        { name: "Madini Rice (Ruz Madini)", desc: "Fragrant saffron and cardamom spiced rice cooked with succulent lamb or chicken." },
        { name: "Madini Mint Tea (Na'na Madini)", desc: "Fresh sweet tea infused with famous fragrant Madinah wild mint." },
        { name: "Samboosa & Hejazi Shorba", desc: "Crispy spiced meat and cheese samosas with hearty oat lamb soup." },
      ],
      diningTip:
        "Stroll down the tree-lined Quba Avenue pedestrian walkway in the evening for open-air cafes, dates, and gelato.",
    },
    shopping: {
      overview:
        "Madinah is the global capital for date markets, premium prayer rugs, and Islamic scholarly literature.",
      spots: [
        { name: "Madinah Central Date Market (Souq Al-Tumoor)", type: "Date Market", desc: "Massive market with hundreds of farmers selling authentic Ajwa, Safawi, and Sukari dates." },
        { name: "Al-Noor Mall & Al-Rashid Mega Mall", type: "Modern Mall", desc: "Premier shopping destinations with global brands, electronics, and international dining." },
        { name: "Taiba & Al-Safwa Commercial Arcades", type: "Mosque Arcades", desc: "Convenient shopping arcades located directly steps away from the mosque courtyard." },
      ],
    },
    thingsToDo: {
      overview:
        "Spiritual prayer, historic battlefields, and peaceful organic date groves.",
      attractions: [
        { name: "Al-Masjid An-Nabawi & Rawdah", category: "Sacred Sanctuary", desc: "The Prophet's Mosque, Green Dome, and sacred Rawdah ash-Sharifah with marble courtyards and shaded umbrellas." },
        { name: "Quba Mosque (Masjid Quba)", category: "Historic Sanctuary", desc: "The first mosque built in Islamic history, connected to the Prophet's Mosque via a pedestrian avenue." },
        { name: "Mount Uhud & Martyrs Cemetery", category: "Historic Battlefield", desc: "Significant historic mountain and cemetery honoring the companions, with panoramic summit views." },
        { name: "Masjid Al-Qiblatayn", category: "Historic Mosque", desc: "The historic mosque where the direction of prayer (Qiblah) was turned towards Makkah." },
      ],
    },
    transportation: {
      overview:
        "Madinah is equipped with Prince Mohammad Airport, the Haramain High-Speed Train, Madinah Buses, and Quba electric golf carts.",
      cardName: "Madinah Bus / Nusuk App",
      cardDetails: "Convenient mobile app for city buses and prayer reservations in the Rawdah.",
      options: [
        { name: "Haramain High-Speed Train", desc: "Connects Madinah station to Makkah (2 hrs) and Jeddah (1 hr 45 mins)." },
        { name: "Madinah City Buses", desc: "Modern bus routes connecting airport, central mosque, Quba, and university campuses." },
        { name: "Quba Pedestrian Walkway & Carts", desc: "3km pedestrian boulevard with free electric carts between Prophet's Mosque and Quba." },
      ],
    },
    budget: {
      overview:
        "Madinah is one of the most affordable and peaceful metropolitan cities in Saudi Arabia for students and visitors.",
      items: [
        { item: "Casual Meal / Bukhari", cost: "SAR 15 – SAR 30 ($4 – $8)", note: "Hearty chicken and rice lunch" },
        { item: "1kg Premium Ajwa Dates", cost: "SAR 35 – SAR 80 ($9 – $21)", note: "Fresh at Central Date Market" },
        { item: "Haramain Train to Jeddah", cost: "SAR 75 – SAR 140 ($20 – $37)", note: "High-speed rail journey" },
        { item: "Monthly Student Flat", cost: "SAR 1,000 – SAR 2,200 ($265 – $585)", note: "Near Islamic University / Taibah campus" },
      ],
      tip: "Buy fresh dates directly from the Central Date Market near King Fahd Road for the best wholesale prices and quality selection.",
    },
    languageTips: {
      overview: "Arabic is universal in Madinah, with widespread multilingual assistance in English, Urdu, Turkish, and French.",
      phrases: [
        { phrase: "Hayyak Allah", pronunciation: "hay-yak al-lah", meaning: "May God greet you", context: "Warm Saudi hospitality greeting" },
        { phrase: "Ayna Quba?", pronunciation: "AY-na koo-ba", meaning: "Where is Quba Mosque?", context: "Asking directions" },
        { phrase: "Mabrooq", pronunciation: "mab-ROOK", meaning: "Congratulations / Blessed", context: "Sharing joy and congratulations" },
        { phrase: "Afwan", pronunciation: "AF-wan", meaning: "You are welcome / Excuse me", context: "Polite response" },
      ],
    },
    mimiServices: [
      { title: "Prince Mohammad (MED) Airport Chauffeur", desc: "Terminal arrivals pickup and smooth private transit to your hotel or campus.", href: "/saudi/travel", icon: Plane },
      { title: "Islamic University & Taibah Support", desc: "Student registration accompaniment and Deanship paperwork guidance.", href: "/saudi/student-services", icon: GraduationCap },
      { title: "Historical Ziyarah & Uhud Tours", desc: "Respectful guided accompaniment to Uhud, Quba, and historic battlefields.", href: "/saudi/travel", icon: Compass },
      { title: "Student Housing Walkthrough", desc: "In-person inspection and video verification of flats and residences in Madinah.", href: "/saudi/parent", icon: Home },
      { title: "Parent Video Updates", desc: "Scheduled video calls and check-ins for parents with children studying in Madinah.", href: "/saudi/parent", icon: Users },
    ],
  },
};
