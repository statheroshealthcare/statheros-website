export function Services() {
  const items = [
    { title: "R&D Excellence", desc: "Continuous innovation guided by clinical evidence." },
    { title: "Quality Assurance", desc: "Stringent QA across the entire supply chain." },
    { title: "Customer Support", desc: "Responsiveness and reliability for partners and patients." },
  ];

  return (
    <section id="services" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((s) => (
            <div key={s.title} className="rounded border bg-white p-6">
              <h3 className="font-medium text-lg">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


