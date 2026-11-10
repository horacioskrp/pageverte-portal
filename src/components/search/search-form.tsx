"use client";

import { useState } from "react";
import { LocationArrow24Regular, Search24Regular } from "@/components/icons";
import { cn } from "@/lib/utils";

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  compact?: boolean;
};

function SearchField({
  id,
  label,
  placeholder,
  icon,
  value,
  onChange,
  className,
  compact,
}: FieldProps) {
  return (
    <div className={cn("relative flex flex-1 items-center", className)}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      {icon && (
        <span
          className={cn(
            "pointer-events-none absolute text-ink/60",
            compact ? "left-4" : "left-5",
          )}
        >
          {icon}
        </span>
      )}
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className={cn(
          "h-full w-full min-w-0 bg-transparent text-ink outline-none placeholder:text-ink/55",
          compact ? "text-sm" : "text-base",
          icon ? (compact ? "pl-11" : "pl-14") : compact ? "pl-5" : "pl-8",
          "pr-4",
        )}
      />
    </div>
  );
}

type SearchFormProps = {
  /** Version réduite, utilisée dans la barre sticky. */
  compact?: boolean;
  /** Préfixe des ids pour éviter les doublons quand le formulaire est affiché deux fois. */
  idPrefix?: string;
};

export function SearchForm({ compact = false, idPrefix = "" }: SearchFormProps) {
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
      className={cn(
        "relative flex bg-white",
        compact
          ? "h-11 flex-row rounded-full"
          : "flex-col overflow-hidden rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.18)] md:h-16 md:flex-row md:overflow-visible md:rounded-full",
      )}
    >
      <SearchField
        id={`${idPrefix}what`}
        label="Quoi, qui ?"
        placeholder={
          compact ? "Plombier, coiffeur, taxi…" : "Plombier, coiffeur, taxi, restaurant"
        }
        value={what}
        onChange={setWhat}
        compact={compact}
        className={compact ? undefined : "h-14 md:h-auto"}
      />
      <div
        className={cn("bg-ink/40", compact ? "w-px" : "h-px md:h-auto md:w-px")}
        aria-hidden
      />
      <SearchField
        id={`${idPrefix}where`}
        label="Où ?"
        placeholder={
          compact
            ? "Ville, quartier…"
            : "Adresse, quartier, ville (Lomé, Kara…)"
        }
        icon={<LocationArrow24Regular className="size-5" />}
        value={where}
        onChange={setWhere}
        compact={compact}
        className={compact ? "pr-9" : "h-14 md:h-auto md:pr-12"}
      />
      <button
        type="submit"
        aria-label="Rechercher"
        className={cn(
          "flex items-center justify-center gap-2 bg-primary font-semibold text-white",
          compact
            ? "absolute -right-0.5 top-0 size-11 rounded-full border-2 border-white shadow-md"
            : "h-14 md:absolute md:-right-1 md:top-0 md:size-16 md:rounded-full md:border-2 md:border-white md:shadow-md",
        )}
      >
        <Search24Regular />
        {!compact && <span className="md:hidden">Rechercher</span>}
      </button>
    </form>
  );
}
