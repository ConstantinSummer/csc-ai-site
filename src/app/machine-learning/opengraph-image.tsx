import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpengraphImage() {
  return buildOgImage({
    title: "Machine Learning",
    description:
      "Τι είναι και πώς αξιοποιείται στις επιχειρήσεις — παραδείγματα, όρια και κριτήρια απόφασης.",
  });
}
