"use client";

import { useState } from "react";
import { LocationArrow24Regular, Search24Regular } from "@/components/icons";

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

function SearchField({
  id,
  label,
  placeholder,
  icon,
  value,
  onChange,
  className = "",
}: FieldProps) {
  return (
    <div className={`relative flex flex-1 items-center ${className}`}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      {icon && (
        <span className="pointer-events-none absolute left-5 text-ink/60">
          {icon}
        </span>
      )}
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className={`h-full w-full bg-transparent text-base text-ink outline-none placeholder:text-ink/55 ${
          icon ? "pl-14" : "pl-8"
        } pr-4`}
      />
    </div>
  );
}

export function SearchForm() {
  const [what, setWhat] = useState("");
  const [where, setWhere] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: brancher sur la page de résultats
    console.log({ what, where });
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.18)] md:h-16 md:flex-row md:overflow-visible md:rounded-full"
    >
      <SearchField
        id="what"
        label="Quoi, qui ?"
        placeholder="Plombier, coiffeur, taxi, restaurant"
        value={what}
        onChange={setWhat}
        className="h-14 md:h-auto"
      />
      <div className="h-px bg-ink/40 md:h-auto md:w-px" aria-hidden />
      <SearchField
        id="where"
        label="Où ?"
        placeholder="Adresse, quartier, ville (Lomé, Kara…)"
        icon={<LocationArrow24Regular className="size-5" />}
        value={where}
        onChange={setWhere}
        className="h-14 md:h-auto md:pr-12"
      />
      <button
        type="submit"
        aria-label="Rechercher"
        className="flex h-14 items-center justify-center gap-2 bg-primary font-semibold text-white md:absolute md:-right-1 md:top-0 md:size-16 md:rounded-full md:border-2 md:border-white md:shadow-md"
      >
        <Search24Regular />
        <span className="md:hidden">Rechercher</span>
      </button>
    </form>
  );
}
