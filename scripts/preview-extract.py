"""Preview candidate product images before final extraction."""

from pathlib import Path
import fitz
from PIL import Image
import io

SOURCE = Path(r"d:\sonar\source")
PREVIEW = Path(r"d:\sonar\website\public\images\products-preview")
PREVIEW.mkdir(parents=True, exist_ok=True)

# product_id -> (rel_path, page, strategy)
# strategy: "largest_on_page" | "page_render"
RULES: dict[str, tuple[str, int, str]] = {
    "sonoeye": (r"CHISON SonoEye\CHISON SonoEye Introduction 2026-01-16.pdf", 4, "largest_on_page"),
    "consona-n6": (r"MINDRAY\Consona Diagnostic Ultrasound System\Brochure ENG-Consona N6-210285X8P-20221202-small.pdf", 1, "largest_on_page"),
    "consona-n7": (r"MINDRAY\Consona Diagnostic Ultrasound System\ENG-Consona N7-210285X8P-20221202-small.pdf", 2, "largest_on_page"),
    "consona-n9": (r"MINDRAY\Consona Diagnostic Ultrasound System\ENG-Consona N9 catalog.pdf", 2, "largest_on_page"),
    "digieye-330": (r"MINDRAY\Digital Radiography System\DigiEye_330_series_brochure.pdf", 0, "largest_on_page"),
    "digieye-350": (r"MINDRAY\Digital Radiography System\DigiEye 350 series brochure.pdf", 2, "largest_on_page"),
    "digieye-680": (r"MINDRAY\Digital Radiography System\ENG-DigiEye 680 series brochure.pdf", 0, "largest_on_page"),
    "hepatus-5": (r"MINDRAY\Liver Fibrosis Scanner\ENG-Hepatus 5-210285X4P-20220518-small.pdf", 0, "largest_on_page"),
    "mobieye-700": (r"MINDRAY\Mobile Radiography System\MobiEye_700_Brochure.pdf", 1, "largest_on_page"),
    "uct-780": (r"UNITED IMAGING\CT Scan\Brochure_uCT 780_EN_email.pdf", 0, "largest_on_page"),
    "uct-960": (r"UNITED IMAGING\CT Scan\Brochure_uCT 960+_EN_Email_2022_05_27.pdf", 0, "largest_on_page"),
    "udr-596i": (r"UNITED IMAGING\Digital Radiography System\Brochure_uDR 596i_EN_email.pdf", 0, "largest_on_page"),
    "umammo-890i": (r"UNITED IMAGING\Mammography System\uMammo 890i_brochure_EN_20220428-email.pdf", 2, "largest_on_page"),
    "umr-670": (r"UNITED IMAGING\MRI\1.5T MRI_uMR 670 Brochure.pdf", 0, "largest_on_page"),
    "umr-680": (r"UNITED IMAGING\MRI\uMR 680 Brochure.pdf", 0, "largest_on_page"),
    "umr-omega": (r"UNITED IMAGING\MRI\3T_MRI_uMR_OMEGA_Brochure_revised.pdf", 0, "largest_on_page"),
    "umi-vista": (r"UNITED IMAGING\PET-CT scan\PETCT_uMI Vista Brochure.pdf", 0, "largest_on_page"),
    "vet1120": (r"Perlove\MTI - Veterinary Mobile Digital C-arm System Brochure_VET1120.pdf", 0, "largest_on_page"),
}


def largest_image_on_page(doc: fitz.Document, page_i: int) -> tuple[bytes, str, int, int]:
    page = doc[page_i]
    best = None
    for img in page.get_images(full=True):
        info = doc.extract_image(img[0])
        area = info["width"] * info["height"]
        if best is None or area > best[0]:
            best = (area, info["image"], info["ext"], info["width"], info["height"])
    if best is None:
        raise ValueError(f"No images on page {page_i}")
    return best[1], best[2], best[3], best[4]


def save_jpeg(data: bytes, ext: str, out: Path, max_w: int = 1400) -> None:
    img = Image.open(io.BytesIO(data))
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    if img.width > max_w:
        ratio = max_w / img.width
        img = img.resize((max_w, int(img.height * ratio)), Image.Resampling.LANCZOS)
    img.save(out, "JPEG", quality=88, optimize=True)


def main() -> None:
    for pid, (rel, page_i, _) in RULES.items():
        src = SOURCE / rel
        doc = fitz.open(src)
        data, ext, w, h = largest_image_on_page(doc, page_i)
        doc.close()
        out = PREVIEW / f"{pid}.jpg"
        save_jpeg(data, ext, out)
        print(f"{pid}: page {page_i} -> {w}x{h} -> {out.name}")


if __name__ == "__main__":
    main()
