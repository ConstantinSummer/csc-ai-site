import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpengraphImage() {
  return buildOgImage({
    eyebrow: "Case Study — Dubai",
    title: "Ευφυείς Υπηρεσίες AI για Στόλους Ταξί",
    description:
      "IS4T: multi-agent AI και μετρημένη εξοικονόμηση καυσίμου 8–10%.",
  });
}
