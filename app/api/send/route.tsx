import { EmailTemplate } from "@/components/Email/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { message, firstName, subject, email } = await req.json();

    const { data, error } = await resend.emails.send({
      from: `${firstName} <onboarding@resend.dev>`,
      to: ["icarog28@gmail.com"],
      subject: subject,
      react: EmailTemplate({ message, email }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), {
        status: 500,
        headers: corsHeaders(),
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: corsHeaders(),
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: corsHeaders(),
    });
  }
}

// Middleware para lidar com CORS
export function OPTIONS() {
  return new Response(null, {
    headers: corsHeaders(),
  });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*", // Substitua '*' pelo domínio permitido, se necessário
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}
