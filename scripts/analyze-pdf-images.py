"""Analyze PDF pages and embedded images for product image extraction."""

from pathlib import Path
import fitz

SOURCE = Path(r"d:\sonar\source")

PRODUCT_SOURCES = {
    "sonoeye": r"CHISON SonoEye\CHISON SonoEye Introduction 2026-01-16.pdf",
    "sonoeye-ios": r"CHISON SonoEye\SonoEye+ios.pdf",
    "consona-n6": r"MINDRAY\Consona Diagnostic Ultrasound System\Brochure ENG-Consona N6-210285X8P-20221202-small.pdf",
    "consona-n7": r"MINDRAY\Consona Diagnostic Ultrasound System\ENG-Consona N7-210285X8P-20221202-small.pdf",
    "consona-n9": r"MINDRAY\Consona Diagnostic Ultrasound System\ENG-Consona N9 catalog.pdf",
    "digieye-330": r"MINDRAY\Digital Radiography System\DigiEye_330_series_brochure.pdf",
    "digieye-350": r"MINDRAY\Digital Radiography System\DigiEye 350 series brochure.pdf",
    "digieye-680": r"MINDRAY\Digital Radiography System\ENG-DigiEye 680 series brochure.pdf",
    "hepatus-5": r"MINDRAY\Liver Fibrosis Scanner\ENG-Hepatus 5-210285X4P-20220518-small.pdf",
    "mobieye-700": r"MINDRAY\Mobile Radiography System\MobiEye_700_Brochure.pdf",
    "uct-780": r"UNITED IMAGING\CT Scan\Brochure_uCT 780_EN_email.pdf",
    "uct-960": r"UNITED IMAGING\CT Scan\Brochure_uCT 960+_EN_Email_2022_05_27.pdf",
    "udr-596i": r"UNITED IMAGING\Digital Radiography System\Brochure_uDR 596i_EN_email.pdf",
    "umammo-890i": r"UNITED IMAGING\Mammography System\uMammo 890i_brochure_EN_20220428-email.pdf",
    "umr-670": r"UNITED IMAGING\MRI\1.5T MRI_uMR 670 Brochure.pdf",
    "umr-680": r"UNITED IMAGING\MRI\uMR 680 Brochure.pdf",
    "umr-omega": r"UNITED IMAGING\MRI\3T_MRI_uMR_OMEGA_Brochure_revised.pdf",
    "umi-vista": r"UNITED IMAGING\PET-CT scan\PETCT_uMI Vista Brochure.pdf",
    "vet1120": r"Perlove\MTI - Veterinary Mobile Digital C-arm System Brochure_VET1120.pdf",
}


def analyze_pdf(path: Path) -> None:
    doc = fitz.open(path)
    print(f"  pages: {doc.page_count}")
    best = []
    for i, page in enumerate(doc):
        imgs = page.get_images(full=True)
        for img in imgs:
            xref = img[0]
            info = doc.extract_image(xref)
            area = info["width"] * info["height"]
            best.append((area, i, info["width"], info["height"], info["ext"], xref))
    best.sort(reverse=True)
    for area, page_i, w, h, ext, xref in best[:6]:
        print(f"    page {page_i}: {w}x{h} {ext} area={area}")
    doc.close()


def main() -> None:
    for pid, rel in PRODUCT_SOURCES.items():
        src = SOURCE / rel
        if not src.exists():
            print(f"\n{pid}: MISSING {src}")
            continue
        print(f"\n=== {pid} ===")
        if src.suffix.lower() == ".pdf":
            analyze_pdf(src)
        else:
            print(f"  image file: {src.name}")


if __name__ == "__main__":
    main()
