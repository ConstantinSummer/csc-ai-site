import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpengraphImage() {
  return buildOgImage({
    eyebrow: "Case Study — Έρευνα MSc AI",
    title: "Πολυπρακτορική Ενισχυτική Μάθηση για VPP",
    description:
      "Αποκεντρωμένος συντονισμός Εικονικού Σταθμού Παραγωγής με περιορισμένη επικοινωνία.",
  });
}
