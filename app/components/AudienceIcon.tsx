import type { AudienceIconName } from "../content";

type AudienceIconProps = {
  icon: AudienceIconName;
};

export function AudienceIcon({ icon }: AudienceIconProps) {
  if (icon === "store") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-7h6v7" />
      </svg>
    );
  }

  if (icon === "growth") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 17 7-7 4 4 7-7" />
        <path d="M15 7h6v6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 7h12l1 14H5L6 7Z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
      <path d="M9 11a3 3 0 0 0 6 0" />
    </svg>
  );
}
