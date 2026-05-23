const monthsFR = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
const monthsEN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatDate(iso: string | "present", locale: "fr" | "en"): string {
  if (iso === "present") return locale === "fr" ? "aujourd'hui" : "present";
  const [y, m] = iso.split("-").map(Number);
  const months = locale === "fr" ? monthsFR : monthsEN;
  return `${months[m - 1]} ${y}`;
}
