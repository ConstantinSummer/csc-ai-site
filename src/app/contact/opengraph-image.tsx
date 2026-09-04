import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpengraphImage() {
  return buildOgImage({
    title: "Επικοινωνία",
    description:
      "Συζητήστε το δικό σας project Τεχνητής Νοημοσύνης με το CSC AI Solutions.",
  });
}
