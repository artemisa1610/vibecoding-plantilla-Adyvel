"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import PaymentButton from "@/components/PaymentButton";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");

  const { heading, subheading, form: formConfig, schedulingUrl, schedulingCta } = siteConfig.contact;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Limpia el error del campo cuando el usuario empieza a corregirlo
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Por favor escribe tu nombre.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Por favor escribe tu email.";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Ese email no parece valido. Ejemplo: nombre@correo.com";
    }
    if (formConfig.phoneRequired && !form.phone.trim()) {
      newErrors.phone = "Por favor escribe tu telefono.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Por favor escribe tu mensaje.";
    }
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || formConfig.errorMessage);
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch {
      setServerError(formConfig.errorMessage);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#704F43] mb-4">
            {heading}
          </h2>
          <p className="text-lg text-[#7c6056]">
            {subheading}
          </p>
          {schedulingUrl && (
            <a
              href={schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2.5 border border-[#368925] text-[#368925] font-medium rounded-full hover:bg-[#eaf4e7] transition-colors text-sm"
            >
              {schedulingCta}
            </a>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-[#fffaf2] border border-[#e5d4c4] rounded-2xl p-8 space-y-6 shadow-sm"
        >
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#704F43] mb-2">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder={formConfig.namePlaceholder}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6D0D] focus:border-transparent transition ${
                errors.name ? "border-red-400 bg-red-50" : "border-[#cfb8aa] bg-white"
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#704F43] mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={formConfig.emailPlaceholder}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6D0D] focus:border-transparent transition ${
                errors.email ? "border-red-400 bg-red-50" : "border-[#cfb8aa] bg-white"
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Telefono */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#704F43] mb-2">
              Telefono
              {!formConfig.phoneRequired && (
                <span className="ml-1.5 text-[#9f847a] font-normal">(opcional)</span>
              )}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder={formConfig.phonePlaceholder}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6D0D] focus:border-transparent transition ${
                errors.phone ? "border-red-400 bg-red-50" : "border-[#cfb8aa] bg-white"
              }`}
            />
            {errors.phone && (
              <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#704F43] mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder={formConfig.messagePlaceholder}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6D0D] focus:border-transparent transition resize-none ${
                errors.message ? "border-red-400 bg-red-50" : "border-[#cfb8aa] bg-white"
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 bg-[#FF6D0D] text-white font-medium rounded-full hover:bg-[#e75d00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? formConfig.sendingButton : formConfig.submitButton}
          </button>

          <div className="pt-1 text-center">
            <PaymentButton />
          </div>

          {status === "success" && (
            <p className="text-center text-[#368925] font-medium">
              {formConfig.successMessage}
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-600 font-medium">
              {serverError || formConfig.errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
