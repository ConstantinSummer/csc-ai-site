import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpengraphImage() {
  return buildOgImage({
    title: "Konstantinos Zitis — Ιδρυτής",
    description:
      "Υποψήφιος Διδάκτορας ΕΚΠΑ σε AI & ασύρματη συνδεσιμότητα, ιδρυτής του CSC.",
  });
}
