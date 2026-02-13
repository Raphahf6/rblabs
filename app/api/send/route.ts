import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, empresa, whatsapp, cargo, desafio, orcamento } = body;

    const { data, error } = await resend.emails.send({
      from: 'R&B Labs <onboarding@resend.dev>', // Ou seu domínio verificado
      to: ['seu-email@gmail.com'], // COLOQUE SEU E-MAIL AQUI
      subject: `🔥 Novo Lead Qualificado: ${empresa}`,
      html: `
        <h1>Novo Pedido de Diagnóstico</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Cargo:</strong> ${cargo}</p>
        <hr />
        <p><strong>Desafio Principal:</strong><br/> ${desafio}</p>
        <p><strong>Orçamento Previsto:</strong> ${orcamento}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}