import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpengraphImage() {
  return buildOgImage({
    title: "Cloud Computing",
    description:
      "Τι είναι και πώς αξιοποιείται στις επιχειρήσεις — μοντέλα, κόστος, ασφάλεια και πρακτικά κριτήρια απόφασης.",
  });
}
