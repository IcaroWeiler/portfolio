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
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
