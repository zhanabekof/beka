"use client";

import { FormEvent, useState } from "react";
import { ATTENDANCE_OPTIONS } from "@/lib/constants";

export function RsvpForm() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !attendance) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-olive/20 bg-white/60 px-6 py-10 text-center">
        <p className="text-lg text-olive">Рахмет! Жауабыңыз қабылданды.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm uppercase tracking-wider text-olive-light"
        >
          Аты-Жөніңіз
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Аты-Жөніңіз"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-b border-olive/30 bg-transparent px-1 py-2 text-olive outline-none placeholder:text-olive/40 focus:border-olive"
        />
      </div>

      <fieldset>
        <legend className="mb-3 text-sm uppercase tracking-wider text-olive-light">
          Қатысуыңыз:
        </legend>
        <div className="space-y-3">
          {ATTENDANCE_OPTIONS.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-3 text-olive"
            >
              <input
                type="radio"
                name="attendance"
                value={option}
                required
                checked={attendance === option}
                onChange={(e) => setAttendance(e.target.value)}
                className="h-4 w-4 accent-olive"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full bg-olive py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-olive-light"
      >
        жіберу
      </button>
    </form>
  );
}
