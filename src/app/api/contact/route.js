import { NextResponse } from "next/server";
import { resend } from "@/libs/resend";
import { addRowToSheet } from "@/libs/google-sheets";
import { siteConfig } from "@/config/site";

function escapeHtml(text) {
  return String(text).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  let body;
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "Formato incorrecto." }, { status: 400 }); }

  const { name, email, phone, message } = body;
  if (!name?.trim()) return NextResponse.json({ error: "Nombre requerido." }, { status: 400 });
  if (!email?.trim()) return NextResponse.json({ error: "Email requerido." }, { status: 400 });
  if (!isValidEmail(email)) return NextResponse.json({ error: "Email invalido." }, { status: 400 });
  if (!message?.trim()) return NextResponse.json({ error: "Mensaje requerido." }, { status: 400 });

  try {
    await addRowToSheet({ name, email, phone, message });
  } catch (error) {
    console.error("Error Google Sheets:", error);
    return NextResponse.json({ error: "Error al guardar." }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: "adyvel.campos@gmail.com",
      subject: `Nuevo contacto: ${name}`,
      html: `<div style="font-family:sans-serif"><h2>Nuevo contacto</h2><p><b>Nombre:</b> ${escapeHtml(name)}</p><p><b>Email:</b> ${escapeHtml(email)}</p>${phone ? `<p><b>Teléfono:</b> ${escapeHtml(phone)}</p>` : ""}<p><b>Mensaje:</b> ${escapeHtml(message)}</p></div>`,
    });
  } catch (error) {
    console.error("Error email admin:", error);
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: "adyvel.campos@gmail.com",
      subject: siteConfig.email.subject,
      html: `<div style="font-family:sans-serif"><h2>Hola ${escapeHtml(name)}</h2><p>Recibimos tu mensaje.</p><p>${escapeHtml(message)}</p></div>`,
    });
  } catch (error) {
    console.error("Error email cliente:", error);
  }

  return NextResponse.json({ success: true });
}
