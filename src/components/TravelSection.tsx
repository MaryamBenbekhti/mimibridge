import React from "react";

const CITIES = [
  { name: "Istanbul", desc: "The strategic global heart", img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=600&auto=format&fit=crop" },
  { name: "Ankara", desc: "The institutional core", img: "https://images.unsplash.com/photo-1600025983226-9d0d296c683b?q=80&w=600&auto=format&fit=crop" },
  { name: "Cappadocia", desc: "An otherworldly ecosystem", img: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=600&auto=format&fit=crop" },
];

export default function TravelSection() {
  return (
    <section id="travel" className="py-24 bg-brand-plum/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold block mb-2">Curated Travel Experiences</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-plum">Interactive City Guides</h2>
          </div>
          <p className="text-sm text-brand-plum/70 max-w-xs mt-4 md:mt-0">Seamless transitions from arrival to luxury regional navigation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CITIES.map((city) => (
            <div key={city.name} className="group relative h-[450px] rounded-premium overflow-hidden shadow-md bg-brand-plum">
              <img 
                src={city.img} 
                alt={city.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-plum via-brand-plum/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end text-brand-ivory">
                <h3 className="font-serif text-2xl font-bold mb-1">{city.name}</h3>
                <p className="text-xs text-brand-ivory/80 font-light mb-4">{city.desc}</p>
                <button className="bg-brand-ivory text-brand-plum text-xs font-semibold px-4 py-2.5 rounded-[10px] w-fit transform opacity-90 hover:opacity-100 transition-all">
                  Explore Destinations
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}