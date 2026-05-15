import { siteConfig } from "@/config/site";
import PaymentButton from "@/components/PaymentButton";

export default function Hero() {
  const {
    badge,
    title,
    titleHighlight,
    titleVariant,
    subtitle,
    ctaPrimary,
    ctaSecondary,
    ctaPrimaryUrl,
    ctaSecondaryUrl,
  } = siteConfig.hero;
  const titleClassByVariant = {
    classicBold: "text-6xl md:text-7xl font-sans font-extrabold tracking-normal leading-[1.05]",
    roundedFoodie: "font-rounded-food text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.03]",
  };
  const titleClass = titleClassByVariant[titleVariant] ?? titleClassByVariant.classicBold;

  return (
    <section id="hero" className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/imagenes%20pasticcio/Foto%20perfil%20sinfondo.png"
          alt="Logo de Pasticcio Lasagnas"
          className="w-14 md:w-16 object-contain mx-auto mb-2"
        />
        <span className="inline-block px-4 py-1.5 mb-4 text-base font-medium text-[#368925] bg-[#eaf4e7] rounded-full">
          {badge}
        </span>
        <h1 className={`${titleClass} text-[#5A2D2A] mb-6`}>
          {title}
          <span className="text-[#5A2D2A]"> {titleHighlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-[#7c6056] max-w-2xl mx-auto mb-10">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ctaPrimaryUrl}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FF6D0D] text-white font-medium rounded-full hover:bg-[#e75d00] transition-colors text-center"
          >
            {ctaPrimary}
          </a>
          <a
            href={ctaSecondaryUrl}
            className="w-full sm:w-auto px-8 py-3.5 border border-[#cfb8aa] text-[#704F43] font-medium rounded-full hover:border-[#368925] hover:text-[#368925] transition-colors text-center"
          >
            {ctaSecondary}
          </a>
        </div>
        <div className="mt-5 flex justify-center">
          <PaymentButton className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}
