import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Check } from "lucide-react";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { PageHeader } from "@/components/site/PageHeader";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — OSINTUS" },
      { name: "description", content: "Reach OSINTUS for confidential intelligence, investigations, and security consulting enquiries." },
      { property: "og:title", content: "Contact — OSINTUS" },
      { property: "og:description", content: "Discreet engagement for intelligence and investigations work." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Add a subject").max(160),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000),
});

type FormState = z.infer<typeof schema>;

function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const send = useServerFn(submitContact);

  const onChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const next: Partial<Record<keyof FormState, string>> = {};
      for (const issue of res.error.issues) {
        const key = issue.path[0] as keyof FormState;
        next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    setSending(true);
    try {
      await send({ data: res.data });
      toast.success("Message sent — we'll be in touch.");
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Discreet engagement."
        description="Tell us about the decision in front of you. We respond within one business day."
      />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <aside className="space-y-px overflow-hidden rounded-sm border border-border bg-border md:col-span-4 self-start">
            {[
              { Icon: Mail, label: "Email", value: "hello@osintus.com", href: "mailto:hello@osintus.com" },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="bg-background p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-surface-2 text-foreground">
                    <Icon className="h-4 w-4" strokeWidth={1.4} />
                  </span>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}</p>
                </div>
                {href ? (
                  <a href={href} className="mt-3 block text-sm text-foreground hover:text-paper">{value}</a>
                ) : (
                  <p className="mt-3 text-sm text-foreground">{value}</p>
                )}
              </div>
            ))}
          </aside>


          <div className="md:col-span-8">
            {submitted ? (
              <div className="rounded-sm border border-border bg-surface/40 p-10 text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-surface-3 text-foreground">
                  <Check className="h-5 w-5" />
                </span>
                <h2 className="mt-6 font-display text-2xl text-foreground">Message received.</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Thank you — a member of our team will be in touch within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", subject: "", message: "" }); }}
                  className="mt-8 inline-flex items-center gap-2 rounded-sm border border-border px-4 py-2 text-xs font-mono uppercase tracking-widest text-foreground/80 hover:border-border-strong hover:text-foreground"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-sm border border-border bg-surface/30 p-6 md:p-10">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Name" id="name" value={form.name} onChange={onChange("name")} error={errors.name} />
                  <Field label="Email" id="email" type="email" value={form.email} onChange={onChange("email")} error={errors.email} />
                  <Field label="Company" id="company" value={form.company ?? ""} onChange={onChange("company")} error={errors.company} optional />
                  <Field label="Subject" id="subject" value={form.subject} onChange={onChange("subject")} error={errors.subject} />
                </div>
                <div className="mt-5">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={onChange("message")}
                    className="focus-ring mt-2 w-full rounded-sm border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70"
                    placeholder="Briefly describe the situation and the decision in front of you."
                  />
                  {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
                </div>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">All enquiries are treated as confidential.</p>
                  <button type="submit" disabled={sending} className="rounded-sm border border-border-strong bg-paper px-5 py-3 text-sm font-medium text-navy hover:bg-foreground disabled:opacity-60">
                    {sending ? "Sending…" : "Send message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
      {children}
    </label>
  );
}

function Field({
  label, id, value, onChange, error, type = "text", optional,
}: {
  label: string; id: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; type?: string; optional?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}{optional && <span className="ml-1 normal-case text-muted-foreground/60">(optional)</span>}</Label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="focus-ring mt-2 h-11 w-full rounded-sm border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground/70"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
