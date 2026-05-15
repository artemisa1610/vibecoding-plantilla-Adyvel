import { siteConfig } from "@/config/site";

export default function Pricing() {
  const { heading, subheading, plans } = siteConfig.pricing;
  const { enabled, paypalMeUsername, currency } = siteConfig.payment;

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#704F43] mb-4">
            {heading}
          </h2>
          <p className="text-lg text-[#7c6056] max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => {
            const planAmount = Number(String(plan.price).replace(/[^\d.]/g, ""));
            const hasValidAmount = Number.isFinite(planAmount) && planAmount > 0;
            const paypalUrl =
              enabled && paypalMeUsername
                ? hasValidAmount
                  ? `https://www.paypal.me/${paypalMeUsername}/${planAmount}${currency}`
                  : `https://www.paypal.me/${paypalMeUsername}`
                : "#contact";

            return (
              <div
                key={index}
              className={`rounded-2xl p-8 border ${
                plan.highlighted
                  ? "border-[#FF6D0D] bg-[#FF6D0D] text-white shadow-lg"
                  : "border-[#e9d9c8] bg-[#fffaf2]"
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-1 ${
                  plan.highlighted ? "text-orange-100" : "text-[#704F43]"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-orange-100" : "text-[#8f7268]"
                }`}
              >
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-orange-100" : "text-[#8f7268]"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <svg
                      className={`w-5 h-5 shrink-0 ${
                        plan.highlighted ? "text-orange-100" : "text-[#368925]"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={paypalUrl}
                target={enabled && paypalMeUsername ? "_blank" : undefined}
                rel={enabled && paypalMeUsername ? "noopener noreferrer" : undefined}
                className={`block w-full py-3 text-center rounded-full font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-white text-[#FF6D0D] hover:bg-[#fff1e8]"
                    : "bg-[#704F43] text-white hover:bg-[#5f4136]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
