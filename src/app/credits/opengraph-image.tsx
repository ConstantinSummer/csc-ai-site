import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpengraphImage() {
  return buildOgImage({
    title: "Credits",
    description:
      "Αναφορές πνευματικών δικαιωμάτων για στοιχεία τρίτων στο csc.com.gr.",
  });
}
