import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpengraphImage() {
  return buildOgImage({
    title: "Πολιτική Απορρήτου",
    description:
      "Ποια δεδομένα συλλέγει το csc.com.gr και ποια δικαιώματα έχετε.",
  });
}
