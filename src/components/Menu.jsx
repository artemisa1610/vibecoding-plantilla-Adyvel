import { siteConfig } from "@/config/site";

export default function Menu() {
  const { heading, subheading, items } = siteConfig.menu;

  return (
    <section id="menu" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#704F43] mb-4">
            {heading}
          </h2>
          <p className="text-lg text-[#7c6056] max-w-2xl mx-auto">{subheading}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-2xl border border-[#e9d9c8] bg-[#fffaf2] shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#704F43] mb-3">
                  {item.name}
                </h3>
                <p className="text-[#7c6056] leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
