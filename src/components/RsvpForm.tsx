"use client";

import { FormEvent, useState } from "react";
import { FORM, TEXT } from "@/lib/content";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-olive/20 bg-white/60 px-6 py-10 text-center">
        <p className="text-lg italic text-olive">{TEXT.rsvpSuccess}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-xs uppercase tracking-wider text-olive-light"
        >
          {FORM.nameLabel}
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder={FORM.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-b border-olive/30 bg-transparent px-1 py-2 text-olive outline-none placeholder:text-olive/40 focus:border-olive"
        />
      </div>

      <button
        type="submit"
        className="mx-auto block w-full max-w-xs border border-[#70716f] bg-white py-3 text-sm font-semibold uppercase tracking-[0.15em] text-pink transition hover:bg-pink/10 lg:text-base"
      >
        {TEXT.rsvpButton}
      </button>
    </form>
  );
}
