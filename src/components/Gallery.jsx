import { siteConfig } from "@/config/site";

export default function Gallery() {
  const { heading, subheading, items } = siteConfig.gallery;

  return (
    <section id="galeria" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#704F43] mb-4">
            {heading}
          </h2>
          <p className="text-lg text-[#7c6056] max-w-2xl mx-auto">{subheading}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <figure
              key={index}
              className="overflow-hidden rounded-2xl border border-[#e5d4c4] bg-[#fffaf2] shadow-sm"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-72 w-full object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
