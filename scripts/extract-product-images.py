"""
Extract product images from source PDFs / images.

Strategy: pull the largest embedded image from the best page in each brochure,
not a full-page render (which often captures title slides or wrong content).
"""

from pathlib import Path
import fitz
from PIL import Image
import io

SOURCE = Path(r"d:\sonar\source")
OUTPUT = Path(r"d:\sonar\website\public\images\products")
OUTPUT.mkdir(parents=True, exist_ok=True)

# product_id -> config
# page: 0-based PDF page with the best product photo
# crop: optional post-crop — "right" keeps product on brochure right side
PRODUCT_RULES: dict[str, dict] = {
    "sonoeye": {
        "src": r"CHISON SonoEye\CHISON SonoEye Introduction 2026-01-16.pdf",
        "page": 4,
    },
    "consona-n6": {
        "src": r"MINDRAY\Consona Diagnostic Ultrasound System\Brochure ENG-Consona N6-210285X8P-20221202-small.pdf",
        "page": 1,
    },
    "consona-n7": {
        "src": r"MINDRAY\Consona Diagnostic Ultrasound System\ENG-Consona N7-210285X8P-20221202-small.pdf",
        "page": 2,
    },
    "consona-n9": {
        "src": r"MINDRAY\Consona Diagnostic Ultrasound System\ENG-Consona N9 catalog.pdf",
        "page": 2,
    },
    "digieye-330": {
        "src": r"MINDRAY\Digital Radiography System\DigiEye_330_series_brochure.pdf",
        "page": 0,
    },
    "digieye-350": {
        "src": r"MINDRAY\Digital Radiography System\DigiEye 350 series brochure.pdf",
        "page": 2,
    },
    "digieye-680": {
        "src": r"MINDRAY\Digital Radiography System\ENG-DigiEye 680 series brochure.pdf",
        "page": 0,
    },
    "hepatus-5": {
        "src": r"MINDRAY\Liver Fibrosis Scanner\ENG-Hepatus 5-210285X4P-20220518-small.pdf",
        "page": 0,
    },
    "mobieye-700": {
        "src": r"MINDRAY\Mobile Radiography System\MobiEye_700_Brochure.pdf",
        "page": 1,
    },
    "uct-780": {
        "src": r"UNITED IMAGING\CT Scan\Brochure_uCT 780_EN_email.pdf",
        "page": 0,
        "crop": "right",
    },
    "uct-960": {
        "src": r"UNITED IMAGING\CT Scan\Brochure_uCT 960+_EN_Email_2022_05_27.pdf",
        "page": 0,
        "crop": "right",
    },
    "udr-596i": {
        "src": r"UNITED IMAGING\Digital Radiography System\Brochure_uDR 596i_EN_email.pdf",
        "page": 0,
    },
    "umammo-890i": {
        "src": r"UNITED IMAGING\Mammography System\uMammo 890i_brochure_EN_20220428-email.pdf",
        "page": 2,
    },
    "umr-670": {
        "src": r"UNITED IMAGING\MRI\1.5T MRI_uMR 670 Brochure.pdf",
        "page": 0,
        "crop": "right",
    },
    "umr-680": {
        "src": r"UNITED IMAGING\MRI\uMR 680 Brochure.pdf",
        "page": 0,
        "crop": "right",
    },
    "umr-omega": {
        "src": r"UNITED IMAGING\MRI\3T_MRI_uMR_OMEGA_Brochure_revised.pdf",
        "page": 0,
        "crop": "right",
    },
    "umi-vista": {
        "src": r"UNITED IMAGING\PET-CT scan\PETCT_uMI Vista Brochure.pdf",
        "page": 0,
        "crop": "right",
    },
    "vet1120": {
        "src": r"Perlove\MTI - Veterinary Mobile Digital C-arm System Brochure_VET1120.pdf",
        "page": 0,
    },
}


def largest_image_on_page(doc: fitz.Document, page_i: int) -> Image.Image:
    page = doc[page_i]
    best = None
    for img in page.get_images(full=True):
        info = doc.extract_image(img[0])
        area = info["width"] * info["height"]
        if best is None or area > best[0]:
            best = (area, info["image"], info["ext"])
    if best is None:
        raise ValueError(f"No embedded images on page {page_i}")
    img = Image.open(io.BytesIO(best[1]))
    return img.convert("RGB")


def apply_crop(img: Image.Image, mode: str) -> Image.Image:
    w, h = img.size
    if mode == "right":
        left = int(w * 0.42)
        return img.crop((left, 0, w, h))
    return img


def save_product_image(img: Image.Image, out: Path, max_w: int = 1400) -> None:
    if img.width > max_w:
        ratio = max_w / img.width
        img = img.resize((max_w, int(img.height * ratio)), Image.Resampling.LANCZOS)
    img.save(out, "JPEG", quality=88, optimize=True)


def extract_from_pdf(src: Path, page_i: int, crop: str | None) -> Image.Image:
    doc = fitz.open(src)
    img = largest_image_on_page(doc, page_i)
    doc.close()
    if crop:
        img = apply_crop(img, crop)
    return img


def main() -> None:
    print("Extracting product images from source PDFs...")
    for product_id, rule in PRODUCT_RULES.items():
        src = SOURCE / rule["src"]
        out = OUTPUT / f"{product_id}.jpg"

        if not src.exists():
            print(f"  SKIP {product_id}: missing {src}")
            continue

        try:
            if rule.get("type") == "image":
                img = Image.open(src).convert("RGB")
            else:
                img = extract_from_pdf(src, rule["page"], rule.get("crop"))

            save_product_image(img, out)
            print(f"  OK {product_id}.jpg ({img.width}x{img.height})")
        except Exception as exc:
            print(f"  FAIL {product_id}: {exc}")

    print("Done.")


if __name__ == "__main__":
    main()
