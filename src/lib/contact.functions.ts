import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z.string().trim().min(1).max(160),
  message: z.string().trim().min(10).max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      company: data.company ? data.company : null,
      subject: data.subject,
      message: data.message,
    });

    if (error) {
      console.error("contact_submissions insert failed", error);
      throw new Error("Could not save your message. Please try again.");
    }

    return { ok: true } as const;
  });
