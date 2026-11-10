"use client";

import { useState } from "react";
import { Checkmark24Regular } from "@/components/icons";

export function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: brancher sur le service d'emailing
    setDone(true);
  }

  return (
    <div className="flex h-full flex-col justify-center rounded-xl bg-primary p-6 text-white">
      <h3 className="text-2xl font-light leading-snug">
        Les actus locales{" "}
        <strong className="block font-bold">dans votre boîte mail !</strong>
      </h3>

      {done ? (
        <p
          role="status"
          className="mt-6 flex items-center gap-2 rounded-lg bg-white/15 p-3 text-sm font-medium"
        >
          <Checkmark24Regular className="size-5" />
          Merci, vous êtes abonné(e) !
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <label htmlFor="newsletter-email" className="block text-sm">
            Votre email :
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nom@email.com"
            className="h-11 w-full rounded-md bg-white px-3 text-sm text-ink outline-none placeholder:text-ink/50 focus-visible:ring-2 focus-visible:ring-white/60"
          />
          <button
            type="submit"
            className="mx-auto flex h-10 items-center gap-2 rounded-full border border-white bg-white px-5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
          >
            <Checkmark24Regular className="size-4" />
            Je m&apos;abonne !
          </button>
        </form>
      )}
    </div>
  );
}
