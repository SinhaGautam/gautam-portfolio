import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const validation = contactSchema.safeParse(payload);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;

    // 🔥 1. Send email to YOU
    const adminMail = await resend.emails.send({
      from: "Gautam <onboarding@resend.dev>",
      to: ["testdevops017@gmail.com"],
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 🔥 2. Auto-reply to USER
    // const userMail = await resend.emails.send({
    //   from: "Gautam <onboarding@resend.dev>",
    //   to: [email],
    //   subject: "Thanks for contacting me!",
    //   html: `
    //     <p>Hi ${name},</p>
    //     <p>Thanks for reaching out. I’ve received your message and will get back to you shortly.</p>
    //     <br/>
    //     <p>Best regards,<br/>Gautam</p>
    //   `,
    // });

    // Optional logging (good for debugging)
    // console.log("Admin mail:", adminMail);
    // console.log("User mail:", userMail);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Contact API error", error);

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}