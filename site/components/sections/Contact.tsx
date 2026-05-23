"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/GithubIcon";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { profile } from "@/content/profile";

export function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md px-3 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none transition";

  return (
    <Section id="contact" eyebrow={t("eyebrow")} title={t("title")}>
      <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-2xl">{t("subtitle")}</p>

      <div className="grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-3">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-[var(--color-text-muted)] block mb-1.5">
                  {t("name")}
                </label>
                <input className={inputClass} {...register("name")} />
                {errors.name && (
                  <p className="text-xs text-[var(--color-alert)] mt-1">{t(errors.name.message!)}</p>
                )}
              </div>
              <div>
                <label className="text-xs font-mono text-[var(--color-text-muted)] block mb-1.5">
                  {t("email")}
                </label>
                <input type="email" className={inputClass} {...register("email")} />
                {errors.email && (
                  <p className="text-xs text-[var(--color-alert)] mt-1">{t(errors.email.message!)}</p>
                )}
              </div>
            </div>
            <div>
              <label className="text-xs font-mono text-[var(--color-text-muted)] block mb-1.5">
                {t("subject")}
              </label>
              <input className={inputClass} {...register("subject")} />
              {errors.subject && (
                <p className="text-xs text-[var(--color-alert)] mt-1">{t(errors.subject.message!)}</p>
              )}
            </div>
            <div>
              <label className="text-xs font-mono text-[var(--color-text-muted)] block mb-1.5">
                {t("message")}
              </label>
              <textarea rows={6} className={inputClass} {...register("message")} />
              {errors.message && (
                <p className="text-xs text-[var(--color-alert)] mt-1">{t(errors.message.message!)}</p>
              )}
            </div>
            <div className="flex items-center gap-4 pt-2">
              <Button type="submit" disabled={status === "sending"}>
                <Send size={14} />
                {status === "sending" ? t("sending") : t("send")}
              </Button>
              {status === "success" && (
                <span className="text-sm text-[var(--color-accent-2)]">{t("success")}</span>
              )}
              {status === "error" && (
                <span className="text-sm text-[var(--color-alert)]">{t("error")}</span>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal index={1} className="lg:col-span-2">
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h3 className="font-mono text-sm text-[var(--color-text-muted)] mb-4">
              // {t("otherChannels")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 hover:text-[var(--color-accent)] transition"
                >
                  <Mail size={16} /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[var(--color-accent)] transition"
                >
                  <LinkedinIcon size={16} /> linkedin.com/in/rody-brayan-dama-somo
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[var(--color-accent)] transition"
                >
                  <GithubIcon size={16} /> github.com/elgr3
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
