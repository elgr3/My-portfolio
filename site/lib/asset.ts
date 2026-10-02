// Préfixe les fichiers de public/ avec le sous-chemin du site
// (ex. "/My-portfolio" sur GitHub Pages, vide en local).
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
