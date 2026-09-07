import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpengraphImage() {
  return buildOgImage({
    title: "Λεξικό AI & Τεχνολογίας",
    description:
      "Καθαρές, πρακτικές εξηγήσεις όρων Τεχνητής Νοημοσύνης για επιχειρηματίες και decision makers.",
  });
}
