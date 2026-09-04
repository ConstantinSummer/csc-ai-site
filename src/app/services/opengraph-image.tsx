import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpengraphImage() {
  return buildOgImage({
    title: "Υπηρεσίες Τεχνητής Νοημοσύνης",
    description:
      "Ανάπτυξη AI εφαρμογών, AI strategy audit, GEO/AEO visibility και corporate training.",
  });
}
