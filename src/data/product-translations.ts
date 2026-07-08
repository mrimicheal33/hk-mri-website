import type { Locale } from "@/i18n/config";
import type { Product, ProductVideo } from "./products";

export interface ProductFeatureGroup {
  title: string;
  items: string[];
}

export interface ProductLocaleFields {
  tagline: string;
  description: string;
  highlights: string[];
  featureGroups?: ProductFeatureGroup[];
  videos?: ProductVideo[];
}

const en: Record<string, ProductLocaleFields> = {
  sonoeye: {
    tagline: "Pocket-sized professional ultrasound for diagnosis anywhere",
    description:
      "CHISON SonoEye is a revolutionary handheld ultrasound that connects to iOS and Android smartphones, tablets, and pads for a seamless Go Thumb-play experience. Ideal for ICU, general practice, chiropractic, and aesthetic medicine, with AI-assisted features including SonoMSK and SonoDiaph.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Performance & Medical Grade",
        items: [
          "Expert-grade imaging rated 4.1/5.0 by ultrasound specialists — on par with leading premium handheld systems",
          "Clinical-grade POCUS for ICU, emergency, GP, aesthetics, MSK, and diagnostic centers",
          "High-definition imaging quality comparable to larger cart-based systems",
        ],
      },
      {
        title: "Portability & Connectivity",
        items: [
          "Pocket-sized design with one-hand Go Thumb-play operation",
          "iOS and Android integration — connect to smartphone, tablet, or pad, ready on startup",
          "Wired USB connection for zero-latency, zero-interference scanning in high-density clinics",
          "No subscription fees — one-time purchase with full clinical functionality",
        ],
      },
      {
        title: "AI-Assisted Imaging",
        items: [
          "Super Needle guidance for filler safety and precise injections",
          "Auto-IMT, Auto-Bladder, and Auto-EF for streamlined cardiac and urology measurements",
          "SonoMSK musculoskeletal and SonoDiaph lung analysis",
        ],
      },
      {
        title: "Durability & Infection Control",
        items: [
          "IP67 waterproof and dustproof — immersion-ready for high-turnover sterilization",
          "MIL-STD-810G drop-tested for demanding clinical environments",
        ],
      },
      {
        title: "Regulatory & Safety Standards",
        items: [
          "FDA 510(k) cleared and CE marked (EU MDR 2017/745) — Class II diagnostic ultrasound",
          "IEC 60601-1 medical electrical safety standard",
          "CMD (NMPA), CSA (Canada), and KFDA (Korea) certified",
        ],
      },
    ],
  },
  "consona-n6": {
    tagline: "Concrete to Resonate — entry-level diagnostic ultrasound",
    description:
      "MINDRAY Consona N6 is the entry model in the Consona diagnostic ultrasound series — built on the ZST+ platform with ComboWave transducers for exceptional image quality and wide clinical coverage. With comprehensive clinical solutions, smart measurement tools, and ergonomic design, Consona N6 delivers reliable ultrasound diagnostics for hospitals, clinics, and primary care settings.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Wide clinical application coverage supporting extensive patient types and clinical scenarios",
          "Concrete solutions for smooth diagnoses — ideal for hospitals, clinics, and skill development",
          "Highly powerful tools to keep clinicians ahead across routine and advanced examinations",
        ],
      },
      {
        title: "ZST+ Imaging Platform",
        items: [
          "ZST+ platform transforms ultrasound from conventional beam-forming to channel data based processing",
          "Delivers exceptional image quality with continuous platform improvements",
          "ComboWave transducers enhance imaging sensitivity across clinical applications",
        ],
      },
      {
        title: "Advanced Imaging Technologies",
        items: [
          "PSH, Glazing Flow, NTE, iClear, HR Flow, and iBeam technologies",
          "HD-Scope and UWN+ Contrast Imaging for enhanced diagnostic confidence",
          "Real-time dynamic image optimization for clearer assessment",
        ],
      },
      {
        title: "Comprehensive Clinical Solutions",
        items: [
          "General Imaging Solution — smart tools for smooth everyday diagnosis",
          "Cardiovascular Solution — effective cardiovascular evaluation with dedicated tools",
          "Women's Health Solution — designed for efficiency and patient satisfaction",
        ],
      },
      {
        title: "Smart Measurement Tools",
        items: [
          "Smart HRI — automatic hepatic steatosis index calculation",
          "Smart Bladder — automatic bladder volume measurement",
          "Smart Calc — automatic trace, measurement, and calculation",
          "RIMT — RF-data based real-time IMT measurement",
          "AutoEF — automatic ejection fraction by diastole/systole frames",
          "TDI — myocardial movement display based on Doppler theory",
          "Smart Face — one-click automatic removal of occlusions over fetal face",
          "Glazing Flow — improved 3D presentation of fetal flow",
          "Smart OB — automatic measurement of fetal biometrics",
          "iTouch+ with HD Scope and NTE — improved ROI resolution and Shell quantitative stiffness assessment",
        ],
      },
      {
        title: "Workflow & Learning Tools",
        items: [
          "iScanHelper — step-by-step scanning guidance to practice and improve skills",
          "Smart Vue — automatic recognition and restoration of standard imaging planes",
          "iWorks — standardized step-by-step protocols to avoid plane omission",
        ],
      },
      {
        title: "Ergonomic Design & System Features",
        items: [
          "21.5\" full HD monitor and 13.3\" full HD touch screen",
          "Rotatable control panel with adjustable monitor viewing angle",
          "Adjustable height, integrated storage, and ease-of-transportation design",
          "Noise-reduced design with water and dust proof panel and built-in battery",
        ],
      },
    ],
  },
  "consona-n7": {
    tagline: "Concrete to Resonate — mid-range diagnostic ultrasound",
    description:
      "MINDRAY Consona N7 is the mid-tier model in the Consona diagnostic ultrasound series — built on the ZST+ platform with ComboWave transducers for exceptional image quality and broader clinical coverage. With Smart Scene 3D full-stack obstetric intelligence, comprehensive clinical solutions, smart measurement tools, and ergonomic design, Consona N7 meets the advanced diagnostic needs of hospitals and clinics.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Wide clinical application coverage supporting extensive patient types and clinical scenarios",
          "Concrete solutions for smooth diagnoses — ideal for hospitals, clinics, and skill development",
          "Highly powerful tools to keep clinicians ahead across routine and advanced examinations",
        ],
      },
      {
        title: "ZST+ Imaging Platform",
        items: [
          "ZST+ platform transforms ultrasound from conventional beam-forming to channel data based processing",
          "Delivers exceptional image quality with continuous platform improvements",
          "ComboWave transducers enhance imaging sensitivity across clinical applications",
        ],
      },
      {
        title: "Advanced Imaging Technologies",
        items: [
          "PSH, NTE, iClear, HR Flow, and iBeam technologies",
          "HD Scope for enhanced ROI resolution and clearer assessment",
          "Real-time dynamic image optimization via iTouch+",
        ],
      },
      {
        title: "Comprehensive Clinical Solutions",
        items: [
          "General Imaging Solution — smart tools for smooth everyday diagnosis",
          "Cardiovascular Solution — effective cardiovascular evaluation with dedicated tools",
          "Women's Health Solution — full-stack smartness based on Smart Scene 3D",
          "Full-stack smartness obstetric solution empowered by ZST+",
        ],
      },
      {
        title: "Smart Measurement Tools",
        items: [
          "Smart HRI — easy and fast liver steatosis assessment via hepatic steatosis index",
          "Smart Calc — automatic trace, measurement, and calculation",
          "RIMT — RF-data based real-time IMT measurement",
          "AutoEF — automatic ejection fraction by diastole/systole frames",
          "TTQA — myocardial synchronization evaluation with quantitative analysis",
          "NTE with Shell — ROI stiffness display with quantitative assessment",
          "Smart Face — one-click automatic removal of occlusions over fetal face",
          "Smart FLC 2D/3D — automatic follicle counting and measurement",
          "Smart OB — automatic measurement of fetal biometrics",
          "Smart Fetal HR, Smart Planes CNS — fetal heart and brain standard plane analysis",
          "Smart Scene 3D — innovation in fetal face, spine, and long bone presentation",
        ],
      },
      {
        title: "Workflow & Learning Tools",
        items: [
          "iScanHelper — step-by-step scanning guidance to practice and improve skills",
          "Smart Vue — automatic recognition and restoration of standard imaging planes",
          "iWorks — standardized step-by-step protocols to avoid plane omission",
        ],
      },
      {
        title: "Ergonomic Design & System Features",
        items: [
          "21.5\" full HD monitor with lifting monitor arm and 13.3\" full HD touch screen",
          "Rotatable control panel with adjustable height and integrated storage",
          "Ease-of-transportation design with noise-reduced operation",
          "Water and dust proof panel with built-in battery",
        ],
      },
    ],
  },
  "consona-n9": {
    tagline: "Concrete to Resonate — flagship diagnostic ultrasound",
    description:
      "MINDRAY Consona N9 is the flagship model in the Consona diagnostic ultrasound series — built on the ZST+ platform with Single-Crystal and ComboWave transducers for premium image quality and the broadest clinical coverage. With Smart Scene 3D full-stack intelligence, STE/STQ elastography, AI-assisted measurement tools, and dual-wing floating arm ergonomics, Consona N9 meets the advanced diagnostic demands of hospitals and imaging centres.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Wide clinical application coverage supporting extensive patient types and clinical scenarios",
          "Concrete solutions for smooth diagnoses — ideal for hospitals, clinics, and advanced imaging centres",
          "Highly powerful tools to keep clinicians ahead across routine and specialist examinations",
        ],
      },
      {
        title: "ZST+ Imaging Platform & Transducers",
        items: [
          "ZST+ platform transforms ultrasound from conventional beam-forming to channel data based processing",
          "Single-Crystal transducers provide deeper penetration with fine detail",
          "ComboWave transducers enhance imaging sensitivity — designed for comfortable gripping",
        ],
      },
      {
        title: "Advanced Imaging Technologies",
        items: [
          "PSH, Glazing Flow, NTE, iClear, HR Flow, STE/STQ, and iBeam technologies",
          "HD-Scope and UMW+ Contrast Imaging for enhanced diagnostic confidence",
          "Fetus 3D with iLive and real-time dynamic image optimization via iTouch+",
        ],
      },
      {
        title: "Comprehensive Clinical Solutions",
        items: [
          "General Imaging Solution — smart tools for smooth everyday diagnosis",
          "Cardiovascular Solution — effective cardiovascular evaluation with dedicated tools",
          "Women's Health Solution — full-stack smartness based on Smart Scene 3D",
          "Full-stack smartness obstetric solution empowered by ZST+",
        ],
      },
      {
        title: "Smart Measurement & AI Tools",
        items: [
          "Smart HRI — automatic liver and renal cortex recognition with brightness ratio calculation",
          "Smart Bladder — automatic three-diameter measurement and bladder volume calculation",
          "Smart Hip — automatic α/β angle measurement for Graf classification",
          "Smart B-line — automatic and rapid assessment of pulmonary edema",
          "Smart Calc — automatic trace, measurement, and calculation",
          "Smart Breast & Smart Thyroid — BI-RADS and TI-RADS analysis with efficient workflow",
          "RIMT, AutoEF, TTQA, and R-VQS — vascular hardness coefficient and pulse wave velocity (PWV)",
          "Smart Face, Smart FLC 2D/3D, Smart OB, Smart Fetal HR, Smart Planes CNS, and Smart Scene 3D",
        ],
      },
      {
        title: "Workflow & Learning Tools",
        items: [
          "iScanHelper — step-by-step scanning guidance to practice and improve skills",
          "Smart Vue — automatic recognition and restoration of standard imaging planes",
          "iWorks — standardized step-by-step protocols to avoid plane omission",
        ],
      },
      {
        title: "Ergonomic Design & System Features",
        items: [
          "Up to 23.8\" FHD monitor with dual-wing floating arm and up to 15.6\" touch screen",
          "Rotatable control panel with adjustable height and integrated storage",
          "Ease-of-transportation design with noise-reduced operation",
          "Water and dust proof panel with built-in battery",
        ],
      },
    ],
  },
  "digieye-330": {
    tagline: "Streamlined design for improved digital radiography efficiency",
    description:
      "MINDRAY DigiEye 330 Series is a floor-standing digital radiography (DR) system with streamlined ergonomic design, humanized workflow, and remote connectivity — built to fulfill diverse clinical scenarios from chest and spine to extremity imaging in primary care facilities, diagnostic centres, and high-throughput radiology departments.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Floor-standing digital radiography system for diverse clinical settings",
          "Fulfills a wide range of radiographic applications — chest, spine, extremities, and general exams",
          "Streamlined design for improved efficiency in busy radiology workflows",
          "Suitable for primary care facilities, outpatient clinics, and diagnostic imaging centres",
        ],
      },
      {
        title: "ErgoStream Design",
        items: [
          "360° touch unlockable handle for effortless positioning",
          "CNC aluminum alloy knob and streamlined edges for smooth operation",
          "Long and short track design to adapt to different room layouts",
          "Half-ring Bucky handle for easy detector positioning",
          "Separate flat, smooth patient table design for flexible patient positioning",
          "Stainless steel footrest for patient stability and durability",
        ],
      },
      {
        title: "Workflow & Diagnosis",
        items: [
          "Humanized workflow for smooth, hassle-free operation",
          "Console workstation with user-friendly diagnostic interface",
          "Dedicated diagnostic monitor for easier diagnosis (optional)",
          "One-click image upload and remote reporting",
        ],
      },
      {
        title: "Connectivity & Collaboration",
        items: [
          "Remote connectivity for networked imaging departments",
          "Real-time streaming consultation across facilities",
          "Training and education support via connected workflow",
          "Diagnosis and connectivity platform for collaborative care",
        ],
      },
    ],
  },
  "digieye-350": {
    tagline: "Next-generation floor-mounted DR — flowy to glory",
    description:
      "MINDRAY DigiEye 350 Series is a new-generation floor-mounted digital radiography system with Mindray's independent intellectual property across rack, high-voltage generator, flat-panel detector, and DROC imaging software — delivering proven image quality, progressive confidence, and high efficiency for radiography examination across diverse clinical scenarios.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Performance & Mindray Innovation",
        items: [
          "New-generation floor-mounted DR with a concrete, flowy solution for radiography examination",
          "Independent intellectual property and high compatibility for proven diagnostic image quality",
          "One brand, one solution — integrated Mindray rack, collimator, HV generator, and FPD platform",
          "DROC software & algorithm, M·Share, and M·DAP dose technology with patented innovations",
          "Continuous innovation since 2008 across rack system, collimator, generator, detector, and software",
        ],
      },
      {
        title: "ErgoStream Design",
        items: [
          "Bidirectional synchronization of the tube and Bucky for precise alignment",
          "360° touch unlockable handle, CNC aluminum alloy knob, and streamlined edges",
          "Long and short track design with horizontal track bearing more than 170 kg",
          "Light language guidance and half-ring Bucky handle for smooth operation",
          "Separate flat, smooth patient table with one-piece molding floating bed for easy positioning",
          "Stainless steel footrest and mobile FPD for greater versatility",
          "RF remote movement control — operate from the console room",
          "iStitch auto stitching function for extended field-of-view imaging",
        ],
      },
      {
        title: "Workflow & Diagnosis",
        items: [
          "12.3-inch slim touch-screen synchronized with the workstation",
          "Adaptive UI with intuitive design — obvious font for patient information confirmation before exposure",
          "Post-imaging review for image quality check; reduces visual fatigue for radiographers",
          "Humanized workflow for smooth, hassle-free operation",
          "Console workstation with dedicated diagnostic monitor for easier diagnosis (optional)",
          "One-click image upload and remote reporting",
        ],
      },
      {
        title: "Connectivity & Collaboration",
        items: [
          "Remote connectivity for networked imaging departments",
          "Real-time streaming consultation across facilities",
          "Training and education support via connected workflow",
          "Diagnosis and connectivity platform for collaborative care",
          "Fulfills diverse clinical scenarios with design for ease of use",
        ],
      },
    ],
  },
  "digieye-680": {
    tagline: "Ceiling-mounted flagship DR — compact footprint, dedicated patient care",
    description:
      "MINDRAY DigiEye 680 Series is a ceiling-mounted digital radiography system with a compact footprint — uniquely engineered mechanical structure and workflow programming improve operational efficiency, while Mindray self-made components help control costs. With mobile detector imaging, Level post-processing, iStitch panoramic imaging, and MiCo+ connectivity, it delivers a fast, smooth, and valuable examination and diagnostic experience for large hospitals and imaging centres.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Ceiling-mounted digital radiography system with a compact footprint",
          "Suitable for all examination types across diverse radiography applications",
          "Designed for large hospitals, imaging centres, and high-throughput radiology departments",
          "Mechanical structure and workflow programming uniquely designed to improve operational efficiency",
          "Mindray self-made components help save costs while maintaining diagnostic confidence",
        ],
      },
      {
        title: "Imaging Performance",
        items: [
          "Mobile imaging solution with ergonomic design for more patient-oriented applications",
          "360° dedicated patient care — flexible positioning around the patient",
          "Proven image quality with precise diagnosis support",
          "Unique Level post-processing software optimizes and enhances image details for clinical diagnosis",
          "Intuitive multilingual user interface and post-processing flow for efficient high-quality imaging",
          "Reduces retakes and associated time waste in busy radiology workflows",
        ],
      },
      {
        title: "ErgoStream Design & Patient Beds",
        items: [
          "Ceiling-mounted tube assembly with longitudinal rail movement for flexible room coverage",
          "Vertical Bucky stand with adjustable detector positioning for upright examinations",
          "Mobile patient bed option for versatile patient positioning",
          "Fixed floating patient bed for smooth tabletop movement during exams",
          "Elevated floating patient bed for enhanced accessibility and positioning flexibility",
        ],
      },
      {
        title: "Advanced Functions",
        items: [
          "iStitch advanced panoramic imaging — whole spine and long bone applications",
          "One-button automatic imaging process without additional manual operations",
          "M·Share shares a single detector among multiple Mindray DR machines for ultra-fast data transmission and quick imaging times",
        ],
      },
      {
        title: "Workflow & Diagnosis",
        items: [
          "Intuitive and multilingual user interface for efficient end-user operation",
          "Post-processing flow enables high-quality images without unnecessary retakes",
          "Console workstation with dedicated diagnostic monitor for easier diagnosis (optional)",
          "One-click image upload and remote reporting",
        ],
      },
      {
        title: "Connectivity & Collaboration",
        items: [
          "MiCo+ medical imaging IT solution connecting multiple modalities and medical institutions",
          "Dedicated applications for telemedicine, online education, and imaging quality control",
          "Connects equipment, medical professionals, and institutions for transboundary collaborative care",
          "Real-time streaming consultation across facilities",
          "Training and education support via connected workflow",
          "iSync and u-Link integration for networked imaging departments",
        ],
      },
    ],
  },
  "hepatus-5": {
    tagline: "Non-invasive and quantitative Fibrosis & Steatosis analysis",
    description:
      "MINDRAY Hepatus Series is a professional non-invasive diagnostic system for liver disease — delivering quantitative liver stiffness (E/kPa) and steatosis assessment via transient elastography and LiSA technology. With Advanced ViTE visual guidance, Q-Scan intelligent acquisition, and built-in quality control indices, Hepatus supports early screening, diagnosis, monitoring, and treatment evaluation of liver fibrosis and steatosis across a wide range of clinical indications.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Screening, diagnosis, monitoring, and treatment assessment of liver fibrosis and steatosis — especially at early, reversible stages",
          "Applicable to NAFLD, alcoholic liver disease, chronic hepatitis B/C, drug-induced liver injury, autoimmune liver disease, and biliary tract disease",
          "Non-invasive alternative to liver biopsy — reduces biopsy risk; simple, fast, safe, and economical with easy patient follow-up",
          "High sensitivity and accuracy for early fibrosis and fatty liver, supporting prevention before progression to cirrhosis or liver cancer",
        ],
      },
      {
        title: "Quantitative Measurement",
        items: [
          "Quantitative liver stiffness (E/kPa) and fibrosis staging (F0–F4) by transient elastography",
          "LiSA (Liver Ultra-Sound Attenuation) technology for quantitative steatosis evaluation",
          "Sensitive to mild–moderate hepatic fibrosis and early fatty liver — mature, guideline-backed diagnostic criteria",
          "Widely recommended by global liver disease guidelines as a preferred chronic liver disease examination method",
        ],
      },
      {
        title: "Advanced ViTE Technology",
        items: [
          "Advanced ViTE (Visualized Transient Elastography) under real-time 2D ultrasound guidance",
          "Avoid blood vessels and lesions to improve measurement accuracy and reliability",
          "Greatly reduces operator difficulty and improves repeatability vs conventional shear-wave systems",
        ],
      },
      {
        title: "Q-Scan & Quality Control",
        items: [
          "Q-Scan intelligent acquisition — 10 valid measurement groups auto-collected and screened with one button",
          "Results available within approximately 7 seconds after positioning — significantly faster workflow",
          "Pressure index (P) and motion stability index (m-STB) with color-coded guidance for examination quality control",
        ],
      },
      {
        title: "Integrated Probe & Workflow",
        items: [
          "Ultra-wideband multi-element integrated probe — covers all ages and body types without probe switching",
          "One-button acquisition with probe status light; streamlined, slip-resistant, fully sealed design for easy disinfection",
          "Smart trend analysis with batch data export — supports disease tracking, treatment evaluation, and research",
        ],
      },
      {
        title: "System Design & User Experience",
        items: [
          "Full touch-screen tablet interface; built-in battery for mobile and outreach applications",
          "Barcode patient ID input; flexible adjustable panel and excellent cable management",
          "Dual-probe sockets for fast switching; optional ultrasound for ascites, biopsy guidance, portal hemodynamics, and liver morphology",
        ],
      },
      {
        title: "Guidelines & Clinical Validation",
        items: [
          "Recommended by AASLD, EASL, APASL, CMA, WFUMB, and other global liver disease guidelines",
          "Clinical validation at leading centres including Beijing Ditan Hospital, Shanghai Ruijin Hospital, and Shenzhen Third People's Hospital",
        ],
      },
    ],
  },
  mini800: {
    tagline: "Compact, simple, fast — cost-effective solution for liver diagnosis",
    description:
      "iLivTouch Mini800 is a portable shear-wave quantificational ultrasound diagnostic system. Using vibration-controlled transient elastography (TE), it delivers quantitative liver stiffness (LSM) and ultrasound attenuation parameter (UAP) measurements — a cost-effective aid for non-invasive assessment of liver fibrosis, cirrhosis, and steatosis, supporting early screening, prevention, diagnosis, and treatment of chronic liver diseases.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Cost-effective solution for liver diagnosis",
          "Aid to overall assessment of fibrosis, cirrhosis, and steatosis",
          "Early screening, prevention, diagnosis, and treatment of chronic liver disease",
          "Non-invasive — ideal for regular monitoring and patient follow-up",
        ],
      },
      {
        title: "Technology & Measurement",
        items: [
          "Vibration-controlled transient elastography (TE) technology",
          "Quantitative LSM and UAP measurement",
          "Wideband fibrosis scanning probe",
          "Ultrasound B-mode imaging probe (optional)",
        ],
      },
      {
        title: "Portability & Workflow",
        items: [
          "Compact, simple, and fast operation",
          "Lightweight — easy to carry and transport",
          "Battery operated for flexible bedside and outreach use",
          "Rapid measurement with immediate results",
        ],
      },
      {
        title: "Regulatory & Safety Standards",
        items: [
          "U.S. FDA 510(k) clearance and CE marked",
        ],
      },
    ],
  },
  "mobieye-700": {
    tagline: "Intelligent mobile DR — insight with power and mobility",
    description:
      "MINDRAY MobiEye 700 is a new-era mobile digital radiography system — compact, lightweight, and designed for convenient bedside operation. With a unique bionic manipulator, intelligent speed regulation, 5G wireless MPX detector, and dual-mode power management, it delivers proven image quality and maximum examination coverage for ICU, emergency, and immobile patient imaging across diverse clinical environments.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Mobile digital radiography for ICU, emergency departments, and bedside imaging",
          "Designed for immobile and critically ill patients who cannot be transported to the radiology department",
          "Supports all types of clinical examinations with maximum adaptability",
          "Pediatric and orthopedic applications supported by the self-designed MPX detector",
          "Dispels the inefficiency of traditional bulky mobile DR systems in bedside X-ray workflows",
        ],
      },
      {
        title: "Mobility & Bionic Design",
        items: [
          "Unique bionic manipulator with eight high-flexibility mechanical joints for precise positioning",
          "Intelligent speed regulation and multiple control modes for complex operational environments",
          "360° rotation with single-hand operation — maximum width approximately 55 cm",
          "2.3 m maximum diagnostic height and 1.8 m SID for all regions of interest",
          "Crosses 2 cm vertical obstacles and climbs up to 12° slopes for hospital corridor mobility",
          "9 degrees of freedom in movement for maximum examination coverage",
          "RF remote control for advanced movement — reduces staff radiation exposure",
          "Ergonomic designed handle for comfortable operation",
        ],
      },
      {
        title: "Imaging Performance",
        items: [
          "Remarkable self-designed Mindray MPX flat-panel detector with proven image quality",
          "5G wireless detector for ultra-fast data transmission and quick imaging times",
          "Liquid and dust resistant — lighter and slimmer for bedside use",
          "Mindray self-manufactured high-voltage generator — 30 kW or 50 kW options, 460 kHz inverter frequency",
          "DROC software with classic configuration for stable system performance and efficient workflow",
        ],
      },
      {
        title: "Power & Battery Management",
        items: [
          "Superior battery capacity — up to 7 days operation, up to 700 exposures, up to 70 km travel distance",
          "Dual-mode power management for flexible clinical deployment",
          "Rapid charging function — 80% capacity in approximately 2 hours; 5 minutes charging for 20 exposures",
          "Patented electricity transmission technology to enhance power system life-span",
          "Detector auto-charging integrated into the mobile unit",
        ],
      },
      {
        title: "Safety & Innovation",
        items: [
          "Anti-collision design with 270° implanted sensors for emergency stop",
          "Double ultrasound sensors for motion buffering",
          "Detector security technology — holder activating sensor and detector lock on control panel",
          "Exposure status LED indicator displaying exposure and operational status",
          "Auto/Manual motion mode — manual mode ensures movement without power when needed",
        ],
      },
      {
        title: "Workflow & Connectivity",
        items: [
          "19-inch multi-touch display (1280 × 1024) for intuitive bedside operation",
          "Remote motion control and remote exposure control from a safe distance",
          "M·Share detector sharing within the Mindray DR family for unified radiology workflow",
          "Windows-based console — 128 GB SSD, 2.2 GHz CPU, 4 GB RAM",
          "One-click image upload and remote reporting",
        ],
      },
    ],
  },
  "uct-780": {
    tagline: "Precision and Speed — 128-slice premium CT",
    description:
      "United Imaging uCT 780 is a 128-slice premium CT system — built on \"Precision and Speed\" with fully integrated Z-Detector technology, 70 kV low-dose imaging, uDose intelligent dose modulation, 0.5 mm thin-slice reconstruction, and GWB acceleration board to deliver fast, low-dose, high-quality tomographic imaging for hospitals and imaging centres.",
    highlights: [],
    featureGroups: [
      {
        title: "System Overview",
        items: [
          "128-slice premium CT built on \"Precision and Speed\" for demanding clinical environments",
          "State-of-the-art detector, dose, and reconstruction technologies across the imaging chain",
          "Designed for hospitals and imaging centres requiring fast throughput with uncompromised image quality",
          "Comprehensive clinical applications from routine body imaging to advanced cardiac and vascular CTA",
        ],
      },
      {
        title: "Z-Detector & Precision Data Acquisition",
        items: [
          "Fully integrated Z-Detector — shortens transmission length from centimetre to micrometre scale",
          "Effective suppression of electromagnetic interference with increased X-ray utilisation",
          "Optimal 0.5 mm detector element size with 74,880 elements in the Z-plane for outstanding SNR",
          "Single-photon level electronic noise — >50% noise reduction at low mA for low-dose applications",
          "Improved grey-white matter differentiation and low-contrast detectability vs conventional detectors",
        ],
      },
      {
        title: "Low-Dose Imaging & uDose Modulation",
        items: [
          "70 kV scan mode — enhanced contrast for CTA, small lesions, and CTV imaging with significantly reduced dose",
          "Z-Detector maintains image quality at 70 kV — no significant difference vs 120 kV follow-up in lung screening",
          "uDose intelligent dose modulation — optimised dose distribution based on body shape, size, and attenuation",
          "Radiation modulation in X-Y and Z planes for targeted and precise dose distribution across body types",
          "Coronary CTA at 70 kV (0.7 mSv) vs 120 kV (4.8 mSv) — up to 85% radiation dose reduction with consistent quality",
        ],
      },
      {
        title: "High-Definition Image Reconstruction",
        items: [
          "0.5 mm thickness images in all FOVs and collimations — refined thin images for small tumour detection",
          "1024×1024 high-definition reconstruction matrix (optional) — IAC, small joints, and high-resolution lung imaging",
          "MAC metal artifact calibration (optional) — reduces metal artifacts while preserving surrounding structures",
          "0.25 mm isotropic spatial resolution with 0.5 mm minimum slice thickness for coronary stent evaluation",
          "Dedicated reconstruction filters for more image detail and fewer artifacts",
        ],
      },
      {
        title: "Cardiac CTA & Coronary Analysis",
        items: [
          "Consistent coronary CTA image quality across different kV settings for different body types",
          "Clear visualisation of CABG vessels and RAD stenosis with high-resolution 3D rendering",
          "Fast predictive coronary CTA workflow — 0-click extraction and automatic coronary arterial tree extraction",
          "Single-click CPR, atrioventricular segmentation, plaque analysis, and stenosis quantification",
          "Facilitates clinical evaluation of in-stent restenosis with clear coronary stent visualisation",
        ],
      },
      {
        title: "Coordinated Control & Reconstruction Platform",
        items: [
          "Versatile proprietary platform — 360 million voxel data acquisition with up to 60 IPS reconstruction speed",
          "Microsecond hardware synchronisation — precise dose control and 0.3 s high-speed gantry rotation",
          "Easy-Logic intelligent prediction — anticipates next user action and pre-prepares tube, generator, gantry, and data path",
          "Real-time system condition monitor — actively maintains stability, reliability, and serviceability",
          "GWB reconstruction acceleration board (optional) — massively parallel design for outstanding reconstruction performance",
        ],
      },
      {
        title: "Advanced Clinical Applications & Design",
        items: [
          "Fast precise large-range CTA — aorta dissection, peripheral occlusion, and plantar arch clarity",
          "Intelligent bone removal for carotid CTA; lung nodule assessment with detection, quantification, and follow-up tracking",
          "Comprehensive CT vessel analysis and virtual colonoscopy for polyp detection and colon inner visualisation",
          "70 kV enhanced contrast for upper extremity vessels, arteriovenous malformation, and portal vein imaging",
          "\"User in Mind\" design — eastern aesthetics with minimalism, ergonomic gantry controls, and integrated touchscreen",
        ],
      },
    ],
  },
  "uct-960": {
    tagline: "Attainable Intelligence. Simply Masterful. — 640-slice ultra-premium CT",
    description:
      "United Imaging uCT 960+ is a 640-slice ultra-premium CT flagship — built on \"Attainable Intelligence. Simply Masterful.\" with 16 cm Z-axis detector coverage, 320 rows, 0.25 s rotation speed, 82 cm ultra-wide bore, and uAI platform to deliver comprehensive cardiovascular, stroke, oncology, and trauma clinical solutions for hospitals and imaging centres.",
    highlights: [],
    featureGroups: [
      {
        title: "System Overview",
        items: [
          "640-slice ultra-premium CT — \"Attainable Intelligence. Simply Masterful.\" flagship platform",
          "16 cm Z-detector coverage, 320 rows, 640 slices, and 0.25 s rotation speed (optional)",
          "82 cm gantry aperture and 318 kg (700 lbs) table capacity for flexible patient positioning",
          "Industry-leading AI-empowered technologies across cardiovascular, stroke, oncology, and trauma",
        ],
      },
      {
        title: "16 cm Z-Detector & High-Speed Gantry",
        items: [
          "16 cm wide Z-detector with 0.5 mm acquisition across all FOVs — high resolution and ultra-low noise",
          "Through-silicon-via (TSV) technology for ultra-low electronic noise performance",
          "3D anti-scatter grid manufactured by 3D printing for precise scattered photon shielding",
          "Real 3D full reconstruction technology to mitigate cone beam artifacts",
          "0.25 s rotation speed with one-piece casted gantry and direct-drive motor to freeze cardiac motion",
        ],
      },
      {
        title: "uAI CardioCapture, uAI Vision & Dose Technologies",
        items: [
          "uAI CardioCapture — AI-empowered coronary artery algorithm with 25 ms temporal resolution and intelligent motion correction",
          "uAI Vision 3D Camera — captures patient shape, positioning, and height for fast, accurate, automatic positioning",
          "Plug-and-play AI computation on-board; trained on millions of patient datapoints with one-step self-calibration",
          "uAI Dose Modulation — AI-based automatic chest and abdomen recognition for optimised noise and dose (optional)",
          "ECG dose modulation, Auto ALARA kVp, KARL 3D iterative reconstruction, and 60 kV low-dose capability",
        ],
      },
      {
        title: "One-Beat Cardiovascular Imaging",
        items: [
          "One-beat coronary CTA — 160 mm whole-heart coverage with 0.25 s rotation for robust low-dose cardiac imaging",
          "CardioAssist — automatic gating from heart rate simulation; CardioXphase — best-phase reconstruction",
          "Real-time irregular beat detection with automatic rescan; addresses high heart rate, arrhythmia, and breath-hold limitations",
          "One-beat axial cardiac scan demonstrated at 52–238 bpm arrhythmia and high heart rate with myocardial bridges",
          "One-stop cardio-cerebral vascular and Triple Rule Out — coronary, pulmonary, and aorta evaluation in one acquisition",
        ],
      },
      {
        title: "One-Stop Stroke & Neurovascular Imaging",
        items: [
          "One-stop 4D stroke imaging — NCCT whole brain in single 16 cm scan, CTA, 4D dynamic CTA, and CTP perfusion",
          "4D dynamic vascular and cerebral perfusion with one injection — auto artery/vein extraction",
          "Automatic CBV, CBF, TTP, MTT, and Tmax with ROI time-density curves and one-click parameter generation",
          "One-stop low-dose whole brain perfusion — intelligent automatic multi-parameter acquisition in one click",
          "CSV export of ROI evaluation parameters for confident stroke mitigation and fastest care",
        ],
      },
      {
        title: "Oncology, Dual Energy & Emergency Trauma",
        items: [
          "Dual energy, stationary perfusion, and 40 cm dynamic helical perfusion for precise oncology diagnosis",
          "Dual-energy iodine quantification — spectral curves differentiate renal cancer vs cyst and characterise lesions",
          "Liver surgery planning — 3D hepatic vein, portal vein, and tumour visualisation for virtual resection planning",
          "Emergency trauma — brain scan in 0.5 s, chest in 1 s with auto rib marking, abdomen in 2 s at 440 mm/s",
          "Large-range scan in 3 s with fast helical mode for high-quality emergency whole-body coverage",
        ],
      },
      {
        title: "First-Class Experience & Design",
        items: [
          "60 kV scans lower radiation dose while improving image quality — demonstrated in low-dose cardiac axial protocols",
          "82 cm aperture and 318 kg maximum load for obese patients and flexible positioning",
          "Efficient workflow with minimised radiation dose and comfortable patient experience",
          "\"User in Mind\" design — modern aesthetics with minimalism, ergonomic controls, and integrated gantry touchscreen",
          "Sophisticated craftsmanship — lightweight precision design optimising comfort, safety, efficiency, and ease of use",
        ],
      },
    ],
  },
  "udr-596i": {
    tagline: "Performance within Reach — fully automatic floor-mounted DR",
    description:
      "United Imaging uDR 596i is a revolutionary automatic floor-mounted digital radiography system with wireless flat panel detector technology — combining Genius Detector, intelligent controls, automatic tube-detector tracking, and comprehensive advanced clinical applications to improve radiology workflow efficiency and diagnostic image quality.",
    highlights: [],
    featureGroups: [
      {
        title: "System Overview",
        items: [
          "Revolutionary automatic floor-mounted DR system with wireless flat panel detector",
          "Genius Detector, Intelligent Controls for Efficient Workflows, and Comprehensive Advanced Clinical Applications",
          "Built on UIH's continuous innovation in advanced medical imaging technology",
          "Designed for diverse radiography applications across busy radiology departments",
        ],
      },
      {
        title: "Genius Detector",
        items: [
          "17\"×17\" large-coverage HD wireless flat panel detector — customizable to wide imaging and positioning requirements",
          "Dual detector configuration available for flexible clinical deployment",
          "Built-in super capacitor eliminates frequent battery replacements — larger power storage and longer usage",
          "Built-in detector charging for easy access and consistent detector performance",
          "Slim, lightweight design for easy and safe handling",
        ],
      },
      {
        title: "Intelligent Controls & Workflow",
        items: [
          "Advanced and intuitive LCD touch screen — essential patient positioning and verification information at a glance",
          "Automatic light field collimator for rapid, precise irradiation field setup and reduced patient dose",
          "Automatic tube-detector tracking synchronizes movement to significantly reduce positioning time",
          "Collision warning for operator and patient safety",
          "All-in-one workstation with workflow-centred design for examinations and post-processing",
        ],
      },
      {
        title: "Advanced Clinical Applications",
        items: [
          "Comprehensive advanced clinical applications for diversified diagnosis and analysis",
          "Every application designed on the basis of streamlined productivity",
          "Automatic Smart Stitching Technology (optional) — high-quality panoramic imaging for orthopedic diagnosis",
          "Automatic Measurement Technology (optional) — assists preoperative and postoperative orthopedic surgical evaluation",
        ],
      },
      {
        title: "Imaging Quality",
        items: [
          "High-quality clinical images across chest, spine, extremity, and general radiography",
          "Large-coverage HD detector with latest wireless technology",
          "System automation and intelligent operation improve workflow efficiency and operational safety",
        ],
      },
      {
        title: "\"User in Mind\" Design",
        items: [
          "Aesthetic pleasure — eastern aesthetics integrated with minimalism for seamless traditional and modern styling",
          "User-friendly ergonomic design delivering comfort, safety, efficiency, and ease of use",
          "Optimizes patient comfort during every examination",
          "Sophisticated craftsmanship — lightweight, precision design fine-tuned in every technological detail",
        ],
      },
    ],
  },
  "umammo-890i": {
    tagline: "Pushing the Boundaries of Breast Imaging — low-dose 3D mammography",
    description:
      "United Imaging uMammo 890i is a low-dose 3D mammography system — built on \"Pushing the Boundaries of Breast Imaging\" with CMOS 3D imaging platform, intelligent U-View 2D mammography technology, and optional breast diagnostic workstation to deliver excellent fine-detail visualization at low dose with meticulous care in women's health.",
    highlights: [],
    featureGroups: [
      {
        title: "System Overview",
        items: [
          "Low-dose 3D mammography system — \"Pushing the Boundaries of Breast Imaging\"",
          "CMOS 3D imaging platform and intelligent U-View 2D mammography technology",
          "Excellent visualization of fine details with low dose for women's health screening and diagnosis",
          "Optional breast imaging workstation for comprehensive 2D/3D review and analysis",
        ],
      },
      {
        title: "CMOS 3D Imaging & Dual Angle Tomography",
        items: [
          "Reduces confounding effects of superimposed parenchyma — improves cancer detection and reduces recall rates",
          "Displays structures at different depths to help localise lesions within the breast",
          "Significantly improves visibility of lesions and involved margins",
          "Narrow angle 15° — quick screening mode; wide angle 40° — detailed diagnosis mode",
          "Flexible DBT modes match multiple clinical applications and requirements",
        ],
      },
      {
        title: "CMOS Detector Technology",
        items: [
          "49.5 µm pixel size with 27 million pixel matrix for exceptional spatial resolution",
          "Significantly enhances ability to identify micro-lesions vs conventional detectors",
          "High SNR and high DQE — reduces radiation dose without compromising image quality",
          "High electronic transmission efficiency — absence of image lag and other artifacts",
        ],
      },
      {
        title: "U-View 2D Mammography & Intelligent Low Dose",
        items: [
          "U-View synthetic 2D technology — intelligent reconstruction drives low-dose breast tomosynthesis",
          "Similar performance to FFDM 2D + tomosynthesis without separate FFDM acquisition or dose",
          "Eliminates FFDM radiation dose, reduces compression time, and improves patient comfort",
          "AEC automatic exposure control selects parameters based on breast radiological properties",
          "Tungsten/silver and tungsten/rhodium anode and filter combinations reduce dose while maintaining image quality",
        ],
      },
      {
        title: "Breast Diagnostic Workstation (Optional)",
        items: [
          "2D and 3D breast image processing — multiple hanging protocols and comprehensive review tools",
          "Smart user-friendly keypad for high-efficiency image review and manipulation",
          "Web-based configuration with shared database and instant access from any workstation",
          "Create, review, and archive annotations from any workstation on the network",
        ],
      },
      {
        title: "High-Quality Clinical Imaging",
        items: [
          "U-View 2D images demonstrate comparable diagnostic quality to conventional FFDM 2D",
          "DBT 3D slice review at multiple depths — localise lesions hidden in overlapping tissue on 2D views",
          "Combined FFDM, U-View synthetic 2D, and DBT workflow for screening and diagnostic confidence",
          "Clinical images validated across CC and MLO views for screening and diagnostic applications",
        ],
      },
      {
        title: "Human-Centered Design",
        items: [
          "Combines accurate operation with lightweight, artistic design — care, trust, and respect through design",
          "Pleasing aesthetics — oriental aesthetics integrated with minimalism for traditional and modern styling",
          "User-friendly ergonomic design delivering comfort, safety, efficiency, and ease of use",
          "Optimises patient comfort during examination with integrated gantry touchscreens and ergonomic handles",
          "Sophisticated craftsmanship — precision design fine-tuned in every technological detail",
        ],
      },
    ],
  },
  "umr-670": {
    tagline: "Freedom Experience · Expand MRI — 1.5T wide-bore MRI",
    description:
      "United Imaging uMR 670 is a uAIFI-powered 1.5T superconducting wide-bore MRI system built on the concept of \"3T Performance from 1.5T Wide-bore System\" — combining a 70 cm starlight wide bore, 48+ independent RF receiver channels, DeepRecon deep learning reconstruction, and EasySense/EasyScan/EasyPlan intelligent workflow to deliver near-3T image quality with a superior patient experience for general hospitals.",
    highlights: [],
    featureGroups: [
      {
        title: "System Overview",
        items: [
          "\"3T Performance from 1.5T Wide-bore System\" — high-performance hardware empowered by uAIFI Technology",
          "Leads a new era of 1.5T wide-bore MRI with 3T-like image quality",
          "Freedom Experience · Expand MRI — broader access to advanced MR diagnostics",
          "Designed for general hospitals and high-throughput imaging departments",
        ],
      },
      {
        title: "Wide Bore & Patient Experience",
        items: [
          "70 cm wide bore with unique starlight environment to ease patient anxiety",
          "Creates a less stressful scanning environment — pioneering the evolution of MRI care",
          "Human-centered design integrating oriental aesthetics with minimalism",
          "Ergonomic design delivering comfort, safety, efficiency, and ease of use",
        ],
      },
      {
        title: "Hardware Platform",
        items: [
          "Unmatched wide-bore magnet with remarkable homogeneity for outstanding image quality",
          "High-performance RF system with 48+ independent receiver channels",
          "New generation of high-density RF coils for rapid image acquisition",
          "High-performance hardware foundation for advanced clinical applications",
        ],
      },
      {
        title: "uAIFI DeepRecon & QScan",
        items: [
          "DeepRecon — deep learning-based reconstruction for intelligent denoising and K-space interpolation super-resolution",
          "Breaks traditional trade-offs — high resolution, high SNR, and high speed simultaneously",
          "3T-like imaging performance across body parts and a broad range of sequences",
          "QScan — up to 97% reduction in acoustic noise at source with optimised gradient waveforms",
          "Quiet scanning without compromise — QScan combined with DeepRecon and uCS",
        ],
      },
      {
        title: "Intelligent Workflow",
        items: [
          "EasySense — industry's first dual-source phased-array millimeter-wave radar for contactless respiratory motion sensing (0.1 mm resolution, 20 ms time resolution)",
          "EasyScan — one-click automatic positioning for head, shoulder, cardiac, abdomen, spine, and knee",
          "Cardiac EasyScan reduces positioning from 8 breath-holds to 1 breath-hold (~10 sec)",
          "EasyPlan — intelligent multi-bed and multi-protocol planning with automated bed adjustment and one-click whole-spine stitching",
        ],
      },
      {
        title: "Advanced Neuro & Vascular Imaging",
        items: [
          "BOLD functional imaging, DTI fiber tracking, MR spectroscopy, and CSF flow quantification",
          "High-resolution vessel wall imaging with uCS — 0.7 mm isotropic resolution",
          "Advanced post-processing for vascular analysis with automated obstruction detection",
          "Supports prevention, diagnosis, and prognostic assessment of cerebrovascular disease",
        ],
      },
      {
        title: "Advanced Cardiac & Body Imaging",
        items: [
          "uCS single breath-hold cardiac cine — reduces breath-holds from 10 to 1",
          "Intelligent cardiac function post-processing with automated ventricular contour extraction and bull's eye maps",
          "Cardiac flow quantitative analysis with forward/reverse flow volume measurement",
          "High-resolution whole-body DWI, UTE lung imaging, and MicroView DWI with EasyPlan",
        ],
      },
    ],
  },
  "umr-680": {
    tagline: "1.5T Wide Bore with 3.0T-like Performance",
    description:
      "United Imaging uMR 680 is an advanced uAIFI-powered 1.5T superconducting wide-bore MRI system — built on \"3.0T-like Performance\" with a 70 cm ultra-uniform wide bore, 45 mT/m gradient, 72+ RF receiver channels, uCS 2.0 ultra-fast reconstruction, and DeepRecon/EasySense/QScan intelligence to deliver near-3T image quality, workflow efficiency, and patient comfort for hospitals and imaging centres.",
    highlights: [],
    featureGroups: [
      {
        title: "System Overview",
        items: [
          "1.5T wide-bore system with \"3.0T-like\" performance empowered by uAIFI Technology",
          "High-performance hardware and software innovations for uncompromised clinical imaging",
          "Based on 3.0T-like hardware and uAIFI Technology — high-end clinical application solutions",
          "Designed for hospitals and imaging centres requiring advanced MR capability on 1.5T",
        ],
      },
      {
        title: "Ultra-uniform Wide Bore & Patient Experience",
        items: [
          "70 cm wide bore reduces claustrophobia — comfortable for children, pregnant women, and obese patients",
          "Ultra-uniform magnet design for accurate off-centre and high-resolution anatomical imaging",
          "Magnetic field homogeneity: @50 cm DSV 0.831 ppm, @30 cm DSV 0.033 ppm (typical)",
          "Human-centered design integrating oriental aesthetics with minimalism and ergonomic comfort",
        ],
      },
      {
        title: "3.0T-like Hardware Platform",
        items: [
          "45 mT/m gradient field strength and 200 T/m/s slew rate (simultaneous on each axis)",
          "2.05 MW high-performance gradient power amplifier (GPA)",
          "72+ independent RF receiver channels with new-generation high-density coils",
          "uCS 2.0 reconstruction — up to 16× acceleration, zero time-delay real-time reconstruction, 2.0 sec/phase temporal resolution",
        ],
      },
      {
        title: "uAIFI DeepRecon, uCS & QScan",
        items: [
          "DeepRecon — AI deep learning reconstruction for intelligent noise removal and fidelity imaging",
          "1.5T system with 3.0T-like performance — high resolution, high SNR, and high speed simultaneously",
          "uCS × DeepRecon 2.0 — high-quality clinical images in significantly less time",
          "QScan — up to 97% reduction in acoustic noise; uCS × QScan 2.0 for silent imaging at same or shorter scan time",
          "Zero-deformation high b-value DWI up to b10000 and 256-direction DTI",
        ],
      },
      {
        title: "Intelligent Workflow",
        items: [
          "EasySense — dual-source millimeter-wave radar for contactless respiratory motion sensing (0.1 mm, 20 ms)",
          "EasyScan — intelligent automatic positioning for head, shoulder, cardiac, spine, abdomen, and knee",
          "EasyPlan — one-click multi-step scan planning and whole-body image stitching",
          "\"PET-like\" whole-body DWI imaging with EasyPlan — 0.6×0.6×5 mm³ in ~2:08 min",
        ],
      },
      {
        title: "Advanced Neuro, Vascular & Body Imaging",
        items: [
          "High-resolution 3D isotropic intracranial vessel wall imaging — 0.7 mm³, uCS 2.0",
          "Intelligent vessel wall post-processing — automatic centerline extraction, stenosis analysis, structured reports",
          "Supports cerebrovascular disease prevention, diagnosis, and prognosis evaluation",
          "Advanced body imaging including whole-body DWI, STIR fusion, and high-SNR abdominal protocols",
        ],
      },
      {
        title: "Advanced Cardiac & Research Applications",
        items: [
          "EasyScan Cardiac — automatic 7 standard planes; reduces positioning from 10 breath-holds to 1",
          "uCS Cine — single breath-hold whole-heart cardiac cine (SAX 16.7 s)",
          "T1/T2 mapping, automated ventricular contour extraction, bull's eye maps, and flow quantification",
          "Scientific research support — DTI (256 directions), DKI, UTE lung imaging, and Multiband",
        ],
      },
    ],
  },
  "umr-omega": {
    tagline: "Think BIG — World's First 75 cm Ultra-Wide Bore 3T MRI",
    description:
      "United Imaging uMR OMEGA is a uAIFI-powered 3T ultra-wide bore MRI flagship — built on \"Think BIG\" with the world's first 75 cm ultra-wide bore 3T magnet, 310 kg table capacity, 3.5 MW gradient power amplifier, 60×60×50 cm field of view, and ACS/DeepRecon/EasySense/QScan intelligence to deliver exceptional image resolution, expanded patient access, and high-throughput workflow for hospitals and imaging centres.",
    highlights: [],
    featureGroups: [
      {
        title: "System Overview",
        items: [
          "Ultra-wide bore 3.0T MR flagship with uAIFI inside — innovative technology, new experience, full capability",
          "\"Think BIG\" platform designed to grow MRI utilisation by providing expanded access",
          "uCS 2.0 imaging techniques — 2D, 3D, and 4D acquisitions across all anatomy with up to 16× acceleration",
          "Built for hospitals and imaging centres seeking flagship 3T performance with unmatched patient access",
        ],
      },
      {
        title: "75 cm Ultra-Wide Bore & Patient Experience",
        items: [
          "World's first 75 cm ultra-wide bore 3T MRI — 25% extra space for a more comfortable experience",
          "Industry-leading table weight capacity of 310 kg (680 lbs) for bariatric and larger patients",
          "Starlight design with calming bore lighting to ease anxiety and reduce claustrophobic feeling",
          "Human-centered design integrating oriental aesthetics with minimalism — care, trust, and respect through design",
          "Helps recapture lost revenue from halted and missed exams due to anxiety and claustrophobia",
        ],
      },
      {
        title: "Innovative Magnet & Gradient Technology",
        items: [
          "New 3T magnet design with 60×60×50 cm max FOV and world-class homogeneity across the wide bore",
          "Uniform magnet homogeneity: 4.40 ppm @ 60×60×50 cm, 2.00 ppm @ 55×55×50 cm, 0.029 ppm @ 30×30×30 cm (typical)",
          "World's first 3.5 MW gradient power amplifier (GPA) for high-performance gradient delivery",
          "45 mT/m gradient amplitude and 200 mT/m/s slew rate with 60 cm FOV imaging in the 75 cm bore",
        ],
      },
      {
        title: "uAIFI ACS, DeepRecon & QScan",
        items: [
          "ACS (AI-assisted compressed sensing) — combines AI, compressed sensing, parallel imaging, and partial-k for CT-like MR speed",
          "Improve image quality without increasing time, or reduce scan time without sacrificing quality — full-body coverage in under 100 seconds per region",
          "DeepRecon — deep learning reconstruction for intelligent noise reduction and fidelity imaging with higher SNR and sharpness",
          "QScan — up to 97% reduction in sound pressure through optimised gradient waveforms; quiet scanning across 2D/3D, DWI, SWI, and MRS",
          "ACS × QScan — quiet scanning without compromising speed (e.g. brain protocol 8:18 → 5:20 min; body protocol 13:26 → 5:38 min)",
        ],
      },
      {
        title: "EasySense & SuperFlex Coils",
        items: [
          "EasySense — industry's first contactless dual-source phased-array millimeter-wave radar for respiratory-triggered scans",
          "Free-breathing scanning without respiratory belt or navigator setup — equivalent quality for 3D MRCP and abdominal T2W FS",
          "SuperFlex Coil — soft, comfortable, form-fitting conductive polymer composite with flexible body-contour adaptation",
          "New decoupling technology for high-density coil arrangement; integrated preamplifier for reduced power and thickness",
          "Extended Body Array Coil — 24 channels with 70×50 cm coverage designed for large body sizes and bariatric imaging",
        ],
      },
      {
        title: "Intelligent Workflow",
        items: [
          "EasyScan — intelligent automatic positioning for head, shoulder, cardiac, spine, abdomen, knee, and whole body",
          "EasyPlan — one-click automatic multi-step scan planning and whole-body image stitching",
          "EasyScan Cardiac — one 3D breath-hold scout for 7 standard cardiac views",
          "EasyProcess — one-click intelligent post-processing for vessel wall analysis and PlaqueTool plaque identification",
        ],
      },
      {
        title: "Expanded Capacity & Advanced Clinical Imaging",
        items: [
          "Expanded bariatric imaging — 75 cm bore, 310 kg table, and 60×60×50 cm FOV for a more complete anatomical picture",
          "Off-centre exams with comfortable anatomical alignment — shoulder, hip, and knee positioning in the 75 cm aperture",
          "Expanded special positioning — lateral spine, flexed elbow, and external shoulder joint protocols with sub-millimetre resolution",
          "High-quality imaging demonstrated across MSK, neuro, body, and vascular applications — uMR Omega is your platform for growth",
        ],
      },
    ],
  },
  "umi-vista": {
    tagline: "Clarity. Profound. — digital PET-CT system",
    description:
      "United Imaging uMI Vista is a digital PET-CT system — built on \"Clarity. Profound.\" with Integrated-Light-Guide digital PET technology, 160-slice CT, 300 ps TOF, 24 cm axial FOV, and HYPER DPR deep learning reconstruction to deliver high-quality functional and anatomical imaging with comprehensive applications in oncology, neurology, and cardiology.",
    highlights: [],
    featureGroups: [
      {
        title: "System Overview",
        items: [
          "Digital PET-CT — \"Clarity. Profound.\" combining functional PET with fine anatomical CT visualization",
          "Integrated-Light-Guide digital PET technology with 160-slice CT system",
          "Access to digital technology · imaging empowered by artificial intelligence · expand system utilization",
          "Comprehensive applications in oncology, neurology, and cardiology for diagnostic precision",
        ],
      },
      {
        title: "Integrated-Light-Guide Digital Detector",
        items: [
          "LYSO-based digital SiPM detector — breakthroughs in resolution and sensitivity for molecular imaging",
          "Integrated-Light-Guide improves light collection efficiency and spatial resolution for exceptional image quality",
          "Ultra-fine high-precision crystal and SiPM technology for enhanced photoelectric conversion",
          "High-level modular design for remarkable system reliability and serviceability",
        ],
      },
      {
        title: "High-Precision Crystal & Clarity Imaging Chain",
        items: [
          "Patented SSS (Slab-Sandwich-Slide) technology with 2.76 mm crystals — 30% finer element size vs 4 mm",
          "Industry-leading 2.9 mm NEMA resolution with point-spread-function (PSF) reconstruction",
          "Clarity imaging chain from data acquisition to reconstruction for improved lesion localisation",
          "Small lesion detectability down to 1.9–2.2 mm demonstrated in 10-minute whole-body clinical scans",
        ],
      },
      {
        title: "Time-of-Flight & 24 cm Axial FOV",
        items: [
          "300 ps time-of-flight timing resolution — better contrast, reduced noise, and faster image convergence",
          "TOF significantly improves SNR for challenging anatomy — demonstrated at BMI 40.3 in 10-minute scans",
          "24 cm PET axial FOV — whole-body scan in 4 bed positions within 8 minutes vs 7 beds on conventional PET-CT",
          "High system sensitivity enables low-dose PET scans and increased patient throughput",
        ],
      },
      {
        title: "HYPER DPR AI Reconstruction",
        items: [
          "HYPER DPR (Deep Progressive Reconstruction) — AI-powered iterative reconstruction in OSEM with progressive CNNs",
          "32% noise reduction, 66% image contrast improvement, and 2.5× CNR improvement vs conventional methods",
          "Trained on 160,000+ uEXPLORER images for robust deep learning iterative reconstruction",
          "0.03 mCi/kg low tracer dose imaging and 6-minute whole-body scans with superior SNR and SUVmax",
          "Enhanced metastasis detection, brain visualisation, and cardiovascular imaging vs OSEM",
        ],
      },
      {
        title: "uCare iQC Source-Free QC & 160-Slice CT",
        items: [
          "Source-free quality control using natural 176Lu decay in LYSO detectors — zero radiation and zero recurring source cost",
          "uCare iQC — automatic daily and weekly QC without radioactive source preparation or phantom scans",
          "160-slice high-performance CT — 0.3 s rotation, 0.5 mm acquisition element, 70 kV low-dose mode",
          "1024×1024 reconstruction matrix for high spatial resolution and comprehensive CT applications",
          "Expands clinical spectrum beyond PET with high-quality diagnostic CT imaging",
        ],
      },
      {
        title: "Clinical Applications & Human-Centered Design",
        items: [
          "Oncology, neurology, and cardiology — functional PET fused with fine anatomical CT structure",
          "Low-dose and fast whole-body, brain, and cardiac PET protocols for routine and challenging cases",
          "Human-centered design — oriental aesthetics with minimalism, care, trust, and respect through design",
          "User-friendly ergonomic design optimising comfort, safety, efficiency, and patient experience",
          "Sophisticated craftsmanship — lightweight precision design with integrated gantry touchscreen controls",
        ],
      },
    ],
  },
  vet1120: {
    tagline: "Veterinary mobile digital C-arm system",
    description:
      "PERLOVE VET1120 is a compact mobile digital C-arm for real-time fluoroscopic guidance in veterinary orthopedics, trauma, and soft-tissue surgery — combining 5.0 kW imaging power, an integrated workstation, and a space-saving footprint tailored to modern clinic environments.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Real-time fluoroscopy for precise intraoperative guidance in orthopedic and trauma surgery",
          "Supports accurate implant placement — helps reduce surgical time and improve outcomes",
          "5.0 kW generator suitable for large-breed dogs (e.g. German Shepherds, Labradors) where lower-power units lose penetration",
          "Automatic, manual, and pulse fluoroscopy modes for flexible surgical workflow",
        ],
      },
      {
        title: "Imaging Technology",
        items: [
          "Japanese Toshiba image intensifier for high-resolution fluoroscopic clarity",
          "Digital imaging chain designed for precision in orthopedic and trauma interventions",
          "High-power X-ray tube delivering reliable penetration for veterinary anatomy",
        ],
      },
      {
        title: "Space-Saving Mobile Design",
        items: [
          "Integrated workstation eliminates the need for a separate monitor cart — saves critical OR floor space",
          "Compact mobile C-arm footprint for tight operating theaters and urban clinics",
          "Flexible movement and positioning for diverse clinical layouts",
        ],
      },
      {
        title: "Ergonomics & Ease of Use",
        items: [
          "Humanized hand controller for intuitive operation within the sterile field",
          "Surgeon can adjust imaging without leaving the operating table",
          "Streamlined workflow for daily high-throughput veterinary surgery",
        ],
      },
      {
        title: "Regulatory & Quality Standards",
        items: [
          "EU MDR CE certified to international medical device safety standards",
          "Premium core components with value-focused positioning for strong clinical ROI",
        ],
      },
    ],
  },
  vf1: {
    tagline: "Next-generation veterinary dynamic digital radiography system",
    description:
      "VETOO VF1 is an animal-specific Dynamic DR system for intelligent pet imaging — 30 fps dynamic imaging, up to 15-minute fluoroscopy, and optional DSA for interventional procedures. Covers esophageal, pulmonary, and joint guidance, contrast studies, and more. Features a 17×17\" flat panel detector, 32kW generator (125kV / 400mA), and veterinary-specific software.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Dynamic observation of motor organs — esophagus, lungs, diaphragm, intestine, and trachea",
          "Orthopedic surgery support: joint placement, nail changes, and bone localization",
          "Gastrointestinal contrast studies — esophageal peristalsis, gastric emptying, and barium meal evaluation",
          "Cardiac and pulmonary assessment with contrast agents; optional DSA for interventional procedures",
          "Extended dynamic video helps reduce misdiagnosis when pets are nervous, trembling, or short of breath",
        ],
      },
      {
        title: "Dynamic DR Technology",
        items: [
          "Converts digital X-ray data into both still images and smooth video — beyond static DR alone",
          "30 fps dynamic imaging with full static DR high-definition images and advanced measurement tools",
          "Up to 15 minutes continuous dynamic video mode per session for difficult surgeries and extended observation",
          "Optional DSA module for angiography-assisted interventional use",
          "Broader clinical scenarios and higher diagnostic value compared with conventional static DR",
        ],
      },
      {
        title: "Imaging Performance",
        items: [
          "17×17\" flat panel detector with cesium iodide evaporation — low radiation, high DQE (~80%), 3.6 Lp/mm limiting resolution",
          "32 kW high-power generator (125 kV / 400 mA) — reliable penetration for both large and small pets",
          "0.6 / 1.2 mm small focal spot for high-resolution imaging suited to cats, dogs, and other companion animals",
          "DAEC technology for automatic exposure parameter selection during radiography",
        ],
      },
      {
        title: "Software & Ease of Use",
        items: [
          "HD touch screen with intuitive, veterinary-specific software workflow",
          "Automatic exposure parameter selection — imaging parameters clearly visible and adjustable in real time",
          "Full-function measurement and imaging tools tailored to veterinary clinical characteristics",
          "User-friendly interface designed for efficient daily clinic operation",
        ],
      },
      {
        title: "Installation & Site Requirements",
        items: [
          "Main unit approximately 205 × 151 × 95 cm; weight 120 kg",
          "Minimum radiation room size 2 × 1.5 m; door width minimum 65 cm",
          "220 V single-phase three-wire power supply with dedicated high-voltage line recommended",
        ],
      },
      {
        title: "Quality & Support",
        items: [
          "From Vetoo Med — professional veterinary DR manufacturer with strong independent R&D and national invention patents",
          "Strict supplier management and quality control with comprehensive pre-sales and after-sales service",
          "Proven market track record with over 2,800 units installed in China",
        ],
      },
    ],
  },
};

const zh: Record<string, ProductLocaleFields> = {
  sonoeye: {
    tagline: "口袋大小的專業超聲波，隨時隨地精準診斷",
    description:
      "CHISON SonoEye 是一款革命性的手持超聲波設備，可連接 iOS 及 Android 智能手機、平板或 Pad，實現「一指操作 (Go Thumb-play)」的流暢體驗。適用於 ICU、普通科、脊醫、醫美等多個臨床場景，支援 SonoMSK、SonoDiaph 等 AI 輔助功能。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床性能與醫療級別",
        items: [
          "超聲專家評級 4.1/5.0 專家級影像 — 媲美頂級手持超聲波系統",
          "臨床級床旁超聲波（POCUS），適用 ICU、急症、普通科、醫美、肌骨及診斷中心",
          "高清晰度影像，媲美大型推車式超聲波系統",
        ],
      },
      {
        title: "便攜性與連接",
        items: [
          "口袋大小設計，單手 Go Thumb-play 操作",
          "iOS 及 Android 整合 — 連接智能手機、平板或 Pad，開機即用",
          "有線 USB 連接，零延遲、零干擾，適合高密度診所環境",
          "無訂閱費用 — 一次購買，享有完整臨床功能",
        ],
      },
      {
        title: "AI 輔助成像",
        items: [
          "Super Needle 導引，提升填充劑注射及穿刺安全性",
          "Auto-IMT、Auto-Bladder、Auto-EF 心臟及泌尿系統自動測量",
          "SonoMSK 肌骨系統及 SonoDiaph 肺部分析",
        ],
      },
      {
        title: "耐用性與感控",
        items: [
          "IP67 防水防塵 — 可浸沒消毒，適合高周轉感染控制（如急症室）",
          "MIL-STD-810G 軍規跌落測試，適應嚴苛臨床環境",
        ],
      },
      {
        title: "法規與安全標準",
        items: [
          "美國 FDA 510(k) 及 CE 標誌（EU MDR 2017/745）— Class II 診斷超聲波",
          "IEC 60601-1 醫療電氣安全標準",
          "CMD（NMPA）、CSA（加拿大）及 KFDA（韓國）認證",
        ],
      },
    ],
    videos: [
      { youtubeId: "qxoAgtkjUqQ", title: "CHISON SonoEye" },
      {
        youtubeId: "pbaLXwrEeXA",
        title: "SonoEye 直播節目",
        start: 936,
      },
    ],
  },
  "digieye-330": {
    tagline: "流線型設計，提升數位放射攝影效率",
    description:
      "MINDRAY DigiEye 330 系列為落地式數位放射攝影（DR）系統，以流線型人體工學設計、人性化工作流程及遠程連接功能，滿足多樣化臨床場景的 X 光檢查需求 — 適合基層醫療機構、診斷中心及高周轉放射科使用。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "落地式數位放射攝影系統，適用多樣化臨床場景",
          "涵蓋胸部、脊柱、四肢及一般放射檢查應用",
          "流線型設計提升繁忙放射科的工作效率",
          "適合基層醫療機構、門診診所及影像診斷中心",
        ],
      },
      {
        title: "ErgoStream 人體工學設計",
        items: [
          "360° 觸控解鎖手柄，輕鬆定位",
          "CNC 鋁合金旋鈕及流線型邊緣，操作順暢",
          "長短軌道設計，適應不同機房佈局",
          "半環形 Bucky 手柄，方便探測器定位",
          "獨立平順檢查床設計，靈活擺位",
          "不鏽鋼腳踏板，穩固耐用",
        ],
      },
      {
        title: "工作流程與診斷",
        items: [
          "人性化工作流程，操作流暢簡便",
          "一體化控制台工作站，診斷介面易用",
          "專用診斷顯示器，提升判讀效率（可選）",
          "一鍵上傳影像及遠程報告",
        ],
      },
      {
        title: "連接與協作",
        items: [
          "遠程連接，支援科室及院內網絡化應用",
          "即時串流會診，跨機構協作診斷",
          "支援遠程培訓及教學",
          "診斷與連接平台，促進協同醫療",
        ],
      },
    ],
  },
  "digieye-350": {
    tagline: "新一代落地式 DR — 流暢操作，卓越影像",
    description:
      "MINDRAY DigiEye 350 系列為新一代落地式數位放射攝影（DR）系統，融合 Mindray 自主研發的機架、高壓發生器、平板探測器及 DROC 影像算法，提供流暢高效的放射檢查方案 — 配備雙向同步、移動式 FPD、iStitch 自動拼接及人性化觸控工作流程，滿足多樣化臨床場景。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床性能與 Mindray 創新",
        items: [
          "新一代落地式 DR，提供流暢高效的放射檢查整體方案",
          "自主知識產權及高兼容性，確保可靠診斷影像品質",
          "一體化 Mindray 方案 — 整合機架、準直器、高壓發生器及平板探測器平台",
          "DROC 軟件及算法、M·Share 及 M·DAP 劑量技術，具專利創新",
          "自 2008 年起持續創新 — 涵蓋機架、準直器、發生器、探測器及軟件",
        ],
      },
      {
        title: "ErgoStream 人體工學設計",
        items: [
          "球管與 Bucky 雙向同步，精準對位",
          "360° 觸控解鎖手柄、CNC 鋁合金旋鈕及流線型邊緣",
          "長短軌道設計，水平軌道承重超過 170 kg",
          "光語言提示及半環形 Bucky 手柄，操作順暢",
          "獨立平順檢查床，一體成型浮動床面，擺位輕鬆",
          "不鏽鋼腳踏板及移動式 FPD，應用更靈活",
          "RF 遙控移動 — 可在控制室操作",
          "iStitch 自動拼接功能，擴展成像視野",
        ],
      },
      {
        title: "工作流程與診斷",
        items: [
          "12.3 吋超薄觸控屏，與工作站同步操作",
          "自適應介面及直觀設計 — 曝光前清晰確認患者資訊",
          "拍攝後影像回顧，便於質量檢查；減輕放射技師視覺疲勞",
          "人性化工作流程，操作流暢簡便",
          "控制台工作站，可選專用診斷顯示器",
          "一鍵上傳影像及遠程報告",
        ],
      },
      {
        title: "連接與協作",
        items: [
          "遠程連接，支援科室及院內網絡化應用",
          "即時串流會診，跨機構協作診斷",
          "支援遠程培訓及教學",
          "診斷與連接平台，促進協同醫療",
          "滿足多樣化臨床場景，設計以易用為本",
        ],
      },
    ],
  },
  "digieye-680": {
    tagline: "吊架式旗艦 DR — 緊湊佔地，全方位患者關懷",
    description:
      "MINDRAY DigiEye 680 系列為吊架式數位放射攝影（DR）系統，緊湊佔地設計 — 獨特的機械結構及工作流程編程提升操作效率，Mindray 自主研發組件有助控制成本。配備移動式探測器成像、Level 後處理軟件、iStitch 全景成像及 MiCo+ 遠程連接，為大型醫院及影像中心提供快速、流暢、高價值的檢查與診斷體驗。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "吊架式數位放射攝影系統，緊湊佔地設計",
          "適用各類檢查，涵蓋多樣化放射攝影應用",
          "適合大型醫院、影像中心及高周轉放射科",
          "獨特機械結構及工作流程編程，提升操作效率",
          "Mindray 自主研發組件，有助節省成本並維持診斷信心",
        ],
      },
      {
        title: "影像性能",
        items: [
          "移動式成像方案，人體工學設計，更貼近患者導向應用",
          "360° 全方位患者關懷 — 靈活圍繞患者擺位",
          "可靠影像品質，支援精準診斷",
          "獨特 Level 後處理軟件，優化及增強影像細節，支援臨床診斷",
          "直觀多語言用戶介面及後處理流程，高效獲取高品質影像",
          "減少重拍及相關時間浪費，提升繁忙放射科效率",
        ],
      },
      {
        title: "ErgoStream 設計與檢查床",
        items: [
          "吊架式球管組件，縱向軌道移動，靈活覆蓋機房範圍",
          "立式 Bucky 架，探測器垂直可調，支援站立檢查",
          "移動式檢查床選項，靈活患者擺位",
          "固定浮動檢查床，床面平順移動，擺位輕鬆",
          "升降浮動檢查床，提升可及性及擺位靈活性",
        ],
      },
      {
        title: "進階功能",
        items: [
          "iStitch 進階全景成像 — 全脊柱及長骨應用",
          "一鍵自動完成整個成像流程，無需額外手動操作",
          "M·Share 於多台 Mindray DR 設備間共享單一探測器，實現超快數據傳輸及快速成像",
        ],
      },
      {
        title: "工作流程與診斷",
        items: [
          "直觀多語言用戶介面，操作高效簡便",
          "後處理流程助獲取高品質影像，減少不必要重拍",
          "控制台工作站，可選專用診斷顯示器",
          "一鍵上傳影像及遠程報告",
        ],
      },
      {
        title: "連接與協作",
        items: [
          "MiCo+ 醫療影像 IT 方案，連接多種影像設備及醫療機構",
          "專用應用支援遠程醫療、在線教育及影像質量控制",
          "連接設備、醫護人員及機構，促進跨機構協作醫療",
          "即時串流會診，跨機構協作診斷",
          "支援遠程培訓及教學",
          "iSync 及 u-Link 整合，支援科室及院內網絡化應用",
        ],
      },
    ],
  },
  "mobieye-700": {
    tagline: "智能移動 DR — 強大動力，靈活機動",
    description:
      "MINDRAY MobiEye 700 為新一代移動式數位放射攝影（DR）系統，緊湊輕便、操作便捷 — 配備獨特仿生機械臂、智能速度調控、5G 無線 MPX 探測器及雙模式電源管理，為 ICU、急診及行動不便患者床邊攝影提供卓越影像品質與最大檢查覆蓋範圍。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "移動式數位放射攝影，適用 ICU、急診及床邊攝影",
          "專為無法運送至放射科的重症及行動不便患者設計",
          "最大適應性，支援各類臨床檢查",
          "自主研發 MPX 探測器支援兒科及骨科應用",
          "打破傳統笨重移動 DR 床邊 X 光檢查效率低下的局限",
        ],
      },
      {
        title: "機動性與仿生設計",
        items: [
          "獨特仿生機械臂，八個高靈活機械關節，精準定位",
          "智能速度調控及多種控制模式，適應複雜操作環境",
          "360° 單手旋轉操作 — 最大寬度約 55 cm",
          "最大診斷高度 2.3 m，SID 1.8 m，覆蓋所有感興趣區域",
          "可跨越 2 cm 垂直障礙，爬坡度達 12°，適應醫院走廊移動",
          "九自由度運動，實現最大檢查覆蓋範圍",
          "RF 遙控移動，減少醫護人員輻射暴露",
          "人體工學設計手柄，操作舒適",
        ],
      },
      {
        title: "影像性能",
        items: [
          "Mindray 自主研發 MPX 平板探測器，可靠影像品質",
          "5G 無線探測器，超快數據傳輸及快速成像",
          "防液防塵 — 更輕更薄，適合床邊使用",
          "Mindray 自主研發高壓發生器 — 30 kW 或 50 kW 可選，460 kHz 逆變頻率",
          "DROC 軟件經典配置，系統穩定、工作流程高效",
        ],
      },
      {
        title: "電源與電池管理",
        items: [
          "超大電池容量 — 最長 7 天運行，最多 700 次曝光，行駛距離達 70 km",
          "雙模式電源管理，靈活適應臨床部署",
          "快速充電 — 約 2 小時充至 80%；充電 5 分鐘可拍攝 20 次",
          "專利電力傳輸技術，延長電源系統使用壽命",
          "移動機組內建探測器自動充電",
        ],
      },
      {
        title: "安全與創新",
        items: [
          "防撞設計，270° 內置感應器緊急停止",
          "雙超聲波感應器緩衝運動",
          "探測器安全技術 — 支架啟動感應器及控制台探測器鎖定",
          "曝光狀態 LED 指示燈，顯示曝光及運行狀態",
          "自動/手動運動模式 — 手動模式確保無電力時仍可移動",
        ],
      },
      {
        title: "工作流程與連接",
        items: [
          "19 吋多點觸控顯示屏（1280 × 1024），直觀床邊操作",
          "遙控移動及遙控曝光，保持安全距離",
          "M·Share 於 Mindray DR 系列間共享探測器，統一放射工作流程",
          "Windows 控制台 — 128 GB SSD、2.2 GHz CPU、4 GB RAM",
          "一鍵上傳影像及遠程報告",
        ],
      },
    ],
  },
  "uct-780": {
    tagline: "Precision and Speed — 128 層高端 CT",
    description:
      "UNITED IMAGING uCT 780 為 128 層高端 CT 系統 — 以「Precision and Speed」為核心理念，結合 Z-Detector 一體化探測器、70 kV 低劑量成像、uDose 智能劑量調控、0.5 mm 薄層重建及 GWB 加速重建板，為醫院及影像中心提供快速、低劑量、高品質的斷層影像。",
    highlights: [],
    featureGroups: [
      {
        title: "系統概述",
        items: [
          "128 層高端 CT — 以「Precision and Speed」為核心理念，適合高要求臨床環境",
          "涵蓋探測器、劑量及重建的全鏈路先進成像技術",
          "適合需要快速通量且不犧牲影像品質的醫院及影像中心",
          "涵蓋常規體部成像至進階心臟及血管 CTA 的全面臨床應用",
        ],
      },
      {
        title: "Z-Detector 及精準數據採集",
        items: [
          "一體化 Z-Detector — 將傳輸路徑由厘米級縮短至微米級",
          "有效抑制電磁干擾，提升 X 射線利用率",
          "最佳 0.5 mm 探測器元件，Z 平面 74,880 個元件，信噪比表現卓越",
          "單光子級電子噪聲 — 低 mA 下噪聲降低超過 50%，支持低劑量應用",
          "相比傳統探測器，灰白質分辨及低對比度檢出能力更佳",
        ],
      },
      {
        title: "低劑量成像及 uDose 調控",
        items: [
          "70 kV 掃描模式 — 增強 CTA、小病灶及 CTV 成像對比度，同時顯著降低劑量",
          "Z-Detector 在 70 kV 下維持影像品質 — 肺部篩查 120 kV 與 70 kV 隨訪無明顯差異",
          "uDose 智能劑量調控 — 依體型、大小及衰減生成最優劑量分布計劃",
          "X-Y 及 Z 平面輻射調制，針對不同體型及部位精準分配劑量",
          "冠狀動脈 CTA：70 kV（0.7 mSv）對比 120 kV（4.8 mSv）— 劑量最高降低 85%，品質一致",
        ],
      },
      {
        title: "高分辨率影像重建",
        items: [
          "所有視野及準直下 0.5 mm 薄層影像 — 更易檢出小腫瘤",
          "1024×1024 高分辨率重建矩陣（可選）— 內聽道、小關節及高分辨率肺部成像",
          "MAC 金屬偽影校正（可選）— 降低金屬偽影，保留周圍結構",
          "0.25 mm 各向同性空間分辨率及 0.5 mm 最小層厚，支持冠狀支架評估",
          "專用重建濾波器 — 更多影像細節，更少偽影",
        ],
      },
      {
        title: "心臟 CTA 及冠狀動脈分析",
        items: [
          "不同 kV 設置下冠狀動脈 CTA 影像品質一致，適應不同體型",
          "CABG 血管及 RAD 狹窄清晰可視，高分辨率 3D 渲染",
          "快速預測性冠狀 CTA 工作流 — 0 鍵提取及自動冠狀動脈樹提取",
          "一鍵 CPR、房室分割、斑塊分析及狹窄定量",
          "冠狀支架清晰可視，支持支架內再狹窄的臨床評估",
        ],
      },
      {
        title: "協同控制及重建平台",
        items: [
          "自主平台 — 3.6 億體素數據採集，重建速度最高 60 IPS",
          "微秒級硬件同步 — 精準劑量控制及 0.3 秒高速機架旋轉",
          "Easy-Logic 智能預測 — 預判下一步操作，預先準備球管、發生器、機架及數據通路",
          "實時系統狀態監控 — 主動維持穩定性、可靠性及可維護性",
          "GWB 重建加速板（可選）— 大規模並行設計，重建性能卓越",
        ],
      },
      {
        title: "進階臨床應用及設計",
        items: [
          "快速精準大範圍 CTA — 主動脈夾層、外周閉塞及足弓血管清晰可視",
          "智能去骨冠狀 CTA；肺結節評估 — 檢出、定量及隨訪追蹤",
          "全面 CT 血管分析及虛擬結腸鏡 — 息肉檢出及結腸內視圖可視化",
          "70 kV 增強對比 — 上肢血管、動靜脈畸形及門靜脈成像",
          "「以人為本」設計 — 東方美學與極簡主義，人體工學機架控制及集成觸控屏",
        ],
      },
    ],
  },
  "uct-960": {
    tagline: "Attainable Intelligence. Simply Masterful. — 640 層超高端 CT",
    description:
      "UNITED IMAGING uCT 960+ 為 640 層超高端 CT 旗艦系統 — 以「Attainable Intelligence. Simply Masterful.」為核心理念，結合 16 cm Z 軸探測器覆蓋、320 排 640 層、0.25 秒旋轉速度、82 cm 超寬孔徑及 uAI 智能平台，為醫院及影像中心提供心血管、卒中、腫瘤及創傷等全面臨床解決方案。",
    highlights: [],
    featureGroups: [
      {
        title: "系統概述",
        items: [
          "640 層超高端 CT —「Attainable Intelligence. Simply Masterful.」旗艦平台",
          "16 cm Z 軸探測器覆蓋、320 排 640 層及 0.25 秒旋轉速度（可選）",
          "82 cm 機架孔徑及 318 kg（700 lbs）檢查床承重，靈活患者定位",
          "業界領先 uAI 賦能技術，涵蓋心血管、卒中、腫瘤及創傷全面臨床解決方案",
        ],
      },
      {
        title: "16 cm Z 探測器及高速機架",
        items: [
          "16 cm 寬 Z 探測器 — 所有視野 0.5 mm 採集，高分辨率及超低噪聲",
          "矽通孔（TSV）技術實現超低電子噪聲",
          "3D 打印製造 3D 防散射栅，精準屏蔽散射光子",
          "Real 3D 全重建技術，減輕錐束偽影",
          "0.25 秒旋轉速度 — 一體鑄造機架及直驅電機，凍結心臟運動",
        ],
      },
      {
        title: "uAI CardioCapture、uAI Vision 及劑量技術",
        items: [
          "uAI CardioCapture — AI 賦能冠狀動脈算法，25 ms 時間分辨率及智能運動校正",
          "uAI Vision 3D 相機 — 捕捉患者體型、位置及高度，實現快速精準自動定位",
          "即插即用板載 AI 運算；百萬級患者數據訓練，一步自校準",
          "uAI Dose Modulation — AI 自動識別胸腹部，優化噪聲與劑量（可選）",
          "ECG 劑量調制、Auto ALARA kVp、KARL 3D 迭代重建及 60 kV 低劑量能力",
        ],
      },
      {
        title: "單搏動心血管成像",
        items: [
          "One-beat 冠狀 CTA — 160 mm 全心覆蓋及 0.25 秒旋轉，穩健低劑量心臟成像",
          "CardioAssist — 心率模擬自動門控；CardioXphase — 最佳相位重建",
          "實時異常搏動檢測及自動重掃；應對高心率、心律不整及屏氣困難",
          "單搏動軸位心臟掃描 — 52–238 bpm 嚴重心律不整及心肌橋高心率案例驗證",
          "一站式心腦血管及 Triple Rule Out — 一次採集評估冠狀、肺動脈及主動脈",
        ],
      },
      {
        title: "一站式卒中及神經血管成像",
        items: [
          "一站式 4D 卒中成像 — 16 cm 單次全腦 NCCT、CTA、4D 動態 CTA 及 CTP 灌注",
          "單次注射 4D 動態血管及腦灌注 — 自動動靜脈提取",
          "自動 CBV、CBF、TTP、MTT 及 Tmax，ROI 時間-密度曲線及一鍵參數生成",
          "一站式低劑量全腦灌注 — 一鍵智能自動多參數採集",
          "ROI 評估參數 CSV 導出，支持快速卒中處置及自信診斷",
        ],
      },
      {
        title: "腫瘤、雙能量及創傷急診",
        items: [
          "雙能量、固定灌注及 40 cm 動態螺旋灌注，精準腫瘤診斷",
          "雙能量碘定量 — 光譜曲線區分腎癌與囊腫，病灶特徵分析",
          "肝臟手術規劃 — 3D 肝靜脈、門靜脈及腫瘤可視化，虛擬切除規劃",
          "創傷急診 — 0.5 秒腦部掃描、1 秒胸部自動肋骨標記、2 秒腹部（440 mm/s）",
          "3 秒大範圍快速螺旋掃描，急診高品質全身覆蓋",
        ],
      },
      {
        title: "一流體驗及設計",
        items: [
          "60 kV 掃描降低輻射劑量同時提升影像品質 — 低劑量心臟軸位協議驗證",
          "82 cm 孔徑及 318 kg 最大承重，適合肥胖患者及靈活定位",
          "高效工作流程，最小化輻射劑量，舒適患者體驗",
          "「以人為本」設計 — 現代美學與極簡主義，人體工學控制及集成機架觸控屏",
          "精湛工藝 — 輕量化精密設計，優化舒適度、安全性、效率及易用性",
        ],
      },
    ],
  },
  "udr-596i": {
    tagline: "Performance within Reach — 全自動落地式 DR 系統",
    description:
      "UNITED IMAGING uDR 596i 為革命性全自動落地式數位放射攝影（DR）系統，配備無線高清平板探測器 — 結合 Genius Detector、智能控制、全自動管球-探測器追蹤及綜合進階臨床應用，提升放射科工作流程效率及影像品質。",
    highlights: [],
    featureGroups: [
      {
        title: "系統概述",
        items: [
          "革命性全自動落地式 DR 系統，配備無線平板探測器",
          "Genius Detector、智能控制及綜合進階臨床應用",
          "基於 UIH 持續創新的先進醫學影像技術",
          "適合繁忙放射科多樣化攝影應用",
        ],
      },
      {
        title: "Genius Detector",
        items: [
          "17\"×17\" 大範圍高清無線平板探測器 — 可定制以滿足廣泛成像及定位需求",
          "可選雙探測器配置，靈活部署",
          "內建超級電容，無需頻繁更換電池 — 更大儲能及更長使用時間",
          "內建探測器充電，方便取用，保持穩定性能",
          "輕薄設計，易於安全搬運",
        ],
      },
      {
        title: "智能控制及工作流程",
        items: [
          "先進直觀 LCD 觸控屏 — 一次顯示患者定位及核對所需資訊",
          "自動光野限束器 — 快速精準設定照射野，降低患者劑量",
          "自動管球-探測器追蹤 — 同步移動，大幅縮短定位時間",
          "碰撞警告，保障操作者及患者安全",
          "一體化工作站，以工作流程為中心的設計",
        ],
      },
      {
        title: "進階臨床應用",
        items: [
          "綜合進階臨床應用，提供多元化診斷及分析方案",
          "各應用均基於精簡高效的工作流程設計",
          "Automatic Smart Stitching Technology（可選）— 高品質全景成像，適用骨科診斷",
          "Automatic Measurement Technology（可選）— 輔助骨科手術術前及術後評估",
        ],
      },
      {
        title: "影像品質",
        items: [
          "胸部、脊柱、四肢及一般攝影均具高品質臨床影像",
          "大範圍高清探測器配合最新無線技術",
          "系統自動化及智能操作，提升工作效率及操作安全",
        ],
      },
      {
        title: "「以用戶為本」設計",
        items: [
          "美學享受 — 東方美學與極簡主義融合",
          "人性化人體工學設計 — 舒適、安全、高效、易用",
          "優化每次檢查的患者舒適度",
          "精湛工藝 — 輕量化精密設計，每個技術細節均經精心調校",
        ],
      },
    ],
  },
  "umammo-890i": {
    tagline: "Pushing the Boundaries of Breast Imaging — 低劑量 3D 乳腺攝影",
    description:
      "UNITED IMAGING uMammo 890i 為低劑量 3D 乳腺攝影系統 — 以「Pushing the Boundaries of Breast Imaging」為核心理念，結合 CMOS 3D 成像平台、U-View 2D 智能乳腺攝影技術及可選乳腺診斷工作站，以低劑量實現精細結構的卓越可視化，為女性健康提供細緻關懷。",
    highlights: [],
    featureGroups: [
      {
        title: "系統概述",
        items: [
          "低劑量 3D 乳腺攝影系統 —「Pushing the Boundaries of Breast Imaging」",
          "CMOS 3D 成像平台及 U-View 2D 智能乳腺攝影技術",
          "以低劑量實現精細結構的卓越可視化，為女性健康篩查及診斷提供細緻關懷",
          "可選乳腺影像工作站，支持全面 2D/3D 閱片及分析",
        ],
      },
      {
        title: "CMOS 3D 成像及雙角度斷層",
        items: [
          "減輕重疊腺體組織的干擾 — 提高癌變檢出率並降低召回率",
          "顯示不同深度的結構，協助定位乳腺內病灶",
          "顯著提升病灶及受累邊緣的可視性",
          "窄角度 15° — 快速篩查模式；寬角度 40° — 精細診斷模式",
          "靈活 DBT 模式，匹配多種臨床應用及需求",
        ],
      },
      {
        title: "CMOS 探測器技術",
        items: [
          "49.5 µm 像素尺寸及 2700 萬像素矩陣，空間分辨率卓越",
          "相比傳統探測器，顯著提升微病灶識別能力",
          "高信噪比及高量子檢出效率（DQE）— 降低輻射劑量而不犧牲影像品質",
          "高電子傳輸效率 — 無影像滯後及其他偽影",
        ],
      },
      {
        title: "U-View 2D 乳腺攝影及智能低劑量",
        items: [
          "U-View 合成 2D 技術 — 智能重建驅動低劑量乳腺斷層成像",
          "性能接近 FFDM 2D + 斷層，無需單獨 FFDM 採集及劑量",
          "消除 FFDM 輻射劑量，縮短加壓時間，提升患者舒適度",
          "AEC 自動曝光控制 — 依乳腺放射學特性自動選擇曝光參數",
          "鎢/銀及鎢/銠陽極濾過組合 — 降低劑量同時維持優異影像品質",
        ],
      },
      {
        title: "乳腺診斷工作站（可選）",
        items: [
          "2D 及 3D 乳腺影像處理 — 多種懸掛協議及全面閱片工具",
          "智能人性化鍵盤 — 高效閱片及影像操作",
          "基於 Web 的配置 — 共享數據庫，任意工作站即時存取",
          "可在網絡任意工作站創建、閱片及歸檔標註",
        ],
      },
      {
        title: "高品質臨床影像",
        items: [
          "U-View 2D 影像與傳統 FFDM 2D 診斷品質相當",
          "DBT 3D 多深度切片閱片 — 定位 2D 視圖中重疊組織隱藏的病灶",
          "FFDM、U-View 合成 2D 及 DBT 綜合工作流，支持篩查及診斷信心",
          "CC 及 MLO 視圖臨床影像驗證，適用篩查及診斷應用",
        ],
      },
      {
        title: "以人為本的設計",
        items: [
          "精準操作與輕量化藝術設計結合 — 以設計傳遞關懷、信任與尊重",
          "悅目美學 — 東方美學與極簡主義融合，傳統與現代風格無縫結合",
          "人性化人體工學設計 — 舒適、安全、高效、易用",
          "集成機架觸控屏及人體工學扶手，優化檢查期間患者舒適度",
          "精湛工藝 — 精密設計，每個技術細節均經精心調校",
        ],
      },
    ],
  },
  "umr-670": {
    tagline: "Freedom Experience · Expand MRI — 1.5T 超導寬孔徑 MRI",
    description:
      "UNITED IMAGING uMR 670 為 uAIFI 賦能的 1.5T 超導寬孔徑 MRI 系統，以「3T Performance from 1.5T Wide-bore System」為核心理念 — 結合 70 cm 星輝環境寬孔徑磁體、48+ 獨立接收通道 RF 系統、DeepRecon 深度學習重建及 EasySense/EasyScan/EasyPlan 智能工作流，為綜合醫院提供接近 3T 的影像品質與更佳患者體驗。",
    highlights: [],
    featureGroups: [
      {
        title: "系統概述",
        items: [
          "「3T Performance from 1.5T Wide-bore System」— uAIFI 賦能的高性能硬件平台",
          "引領 1.5T 寬孔徑 MRI 新時代，提供類 3T 影像品質",
          "Freedom Experience · Expand MRI — 拓展先進 MR 診斷的可及性",
          "適合綜合醫院及高吞吐量影像科室",
        ],
      },
      {
        title: "寬孔徑及患者體驗",
        items: [
          "70 cm 寬孔徑配合獨特星輝環境，緩解患者焦慮",
          "營造更低壓力的檢查環境 — 引領 MRI 關懷新方向",
          "以人為本的設計，融合東方美學與極簡主義",
          "人體工學設計 — 舒適、安全、高效、易用",
        ],
      },
      {
        title: "硬件平台",
        items: [
          "卓越寬孔徑磁體，磁場均勻度出眾，影像品質優異",
          "高性能 RF 系統，48+ 獨立接收通道",
          "新一代高密度 RF 線圈，加速影像採集",
          "為進階臨床應用奠定高性能硬件基礎",
        ],
      },
      {
        title: "uAIFI DeepRecon 及 QScan",
        items: [
          "DeepRecon — 深度學習重建，智能降噪及 K 空間插值超分辨率",
          "突破傳統權衡 — 同時實現高分辨率、高信噪比及高速度",
          "跨全身及多序列提供類 3T 成像性能",
          "QScan — 源頭降噪最高達 97%，優化梯度波形",
          "無妥協靜音掃描 — QScan 配合 DeepRecon 及 uCS",
        ],
      },
      {
        title: "智能工作流程",
        items: [
          "EasySense — 業界首創雙源相控陣毫米波雷達非接觸式呼吸監測（0.1 mm 分辨率，20 ms 時間分辨率）",
          "EasyScan — 一鍵自動定位頭部、肩部、心臟、腹部、脊柱及膝部",
          "心臟 EasyScan 將定位從 8 次屏氣縮減至 1 次（約 10 秒）",
          "EasyPlan — 智能多床及多協議規劃，自動床位移動及一鍵全脊柱拼接",
        ],
      },
      {
        title: "進階神經及血管成像",
        items: [
          "BOLD 功能成像、DTI 纖維追蹤、MR 波譜及腦脊液流量定量",
          "uCS 高分辨率血管壁成像 — 0.7 mm 各向同性分辨率",
          "血管分析進階後處理，自動狹窄檢測",
          "支援腦血管疾病預防、診斷及預後評估",
        ],
      },
      {
        title: "進階心臟及體部成像",
        items: [
          "uCS 單次屏氣心臟電影 — 屏氣次數由 10 次減至 1 次",
          "智能心功能後處理 — 自動心室輪廓提取及牛眼圖",
          "心臟血流定量分析 — 正向/逆向流量測量",
          "高分辨率全身 DWI、UTE 肺部成像及 MicroView DWI（配合 EasyPlan）",
        ],
      },
    ],
  },
  "umr-680": {
    tagline: "1.5T 超導寬孔徑 — 3.0T-like Performance",
    description:
      "UNITED IMAGING uMR 680 為 uAIFI 賦能的進階 1.5T 超導寬孔徑 MRI 系統 — 以「3.0T-like Performance」為核心理念，結合 70 cm 超均勻寬孔徑磁體、45 mT/m 梯度、72+ RF 接收通道、uCS 2.0 超高速重建及 DeepRecon/EasySense/QScan 智能技術，為醫院及影像中心提供接近 3T 的影像品質、工作流程效率及患者舒適度。",
    highlights: [],
    featureGroups: [
      {
        title: "系統概述",
        items: [
          "1.5T 寬孔徑系統，uAIFI 賦能「3.0T-like」性能",
          "高性能硬件及軟件創新，提供不妥協的臨床成像",
          "基於 3.0T-like 硬件及 uAIFI 技術 — 高端臨床應用解決方案",
          "適合需要 1.5T 平台上進階 MR 能力的醫院及影像中心",
        ],
      },
      {
        title: "超均勻寬孔徑及患者體驗",
        items: [
          "70 cm 寬孔徑減輕幽閉恐懼 — 適合兒童、孕婦及肥胖患者",
          "超均勻磁體設計，支持偏中心及高分辨率解剖成像",
          "磁場均勻度：@50 cm DSV 0.831 ppm，@30 cm DSV 0.033 ppm（典型值）",
          "以人為本的設計，融合東方美學、極簡主義及人體工學舒適度",
        ],
      },
      {
        title: "3.0T-like 硬件平台",
        items: [
          "45 mT/m 梯度場強及 200 T/m/s 爬升率（各軸同時）",
          "2.05 MW 高性能梯度功率放大器（GPA）",
          "72+ 獨立 RF 接收通道及新一代高密度線圈",
          "uCS 2.0 重建 — 最高 16× 加速、零延遲即時重建、2.0 秒/期時間分辨率",
        ],
      },
      {
        title: "uAIFI DeepRecon、uCS 及 QScan",
        items: [
          "DeepRecon — AI 深度學習重建，智能降噪及保真成像",
          "1.5T 系統實現 3.0T-like 性能 — 高分辨率、高信噪比及高速度並行",
          "uCS × DeepRecon 2.0 — 更短時間獲得高品質臨床影像",
          "QScan — 聲壓最高降低 97%；uCS × QScan 2.0 實現相同或更短時間的靜音掃描",
          "零變形高 b 值 DWI 最高 b10000 及 256 方向 DTI",
        ],
      },
      {
        title: "智能工作流程",
        items: [
          "EasySense — 雙源毫米波雷達非接觸式呼吸監測（0.1 mm，20 ms）",
          "EasyScan — 頭部、肩部、心臟、脊柱、腹部及膝部智能自動定位",
          "EasyPlan — 一鍵多步掃描規劃及全身影像拼接",
          "「PET-like」全身 DWI 成像（配合 EasyPlan）— 0.6×0.6×5 mm³，約 2:08 min",
        ],
      },
      {
        title: "進階神經、血管及體部成像",
        items: [
          "高分辨率 3D 各向同性顱內血管壁成像 — 0.7 mm³，uCS 2.0",
          "智能血管壁後處理 — 自動中心線提取、狹窄分析、結構化報告",
          "支援腦血管疾病預防、診斷及預後評估",
          "進階體部成像，包括全身 DWI、STIR 融合及高信噪比腹部協議",
        ],
      },
      {
        title: "進階心臟及科研應用",
        items: [
          "EasyScan Cardiac — 自動 7 個標準切面；屏氣次數由 10 次減至 1 次",
          "uCS Cine — 單次屏氣全心電影（SAX 16.7 秒）",
          "T1/T2 Mapping、自動心室輪廓提取、牛眼圖及血流定量",
          "科研應用支援 — DTI（256 方向）、DKI、UTE 肺部成像及 Multiband",
        ],
      },
    ],
  },
  "umi-vista": {
    tagline: "Clarity. Profound. — 數位 PET-CT 系統",
    description:
      "UNITED IMAGING uMI Vista 為數位 PET-CT 系統 — 以「Clarity. Profound.」為核心理念，結合 Integrated-Light-Guide 數位 PET 技術、160 層 CT、300 ps TOF、24 cm 軸向視野及 HYPER DPR 深度學習重建，為腫瘤、神經及心臟等領域提供高品質功能與解剖影像及全面臨床應用。",
    highlights: [],
    featureGroups: [
      {
        title: "系統概述",
        items: [
          "數位 PET-CT —「Clarity. Profound.」結合功能 PET 與精細解剖 CT 可視化",
          "Integrated-Light-Guide 數位 PET 技術及 160 層 CT 系統",
          "數位技術准入 · 人工智能賦能成像 · 擴展系統利用率",
          "涵蓋腫瘤、神經及心臟等領域的全面臨床應用，提升診斷精準度",
        ],
      },
      {
        title: "Integrated-Light-Guide 數位探測器",
        items: [
          "LYSO 基數位 SiPM 探測器 — 分子成像分辨率及靈敏度突破",
          "Integrated-Light-Guide 提升光收集效率及空間分辨率，影像品質卓越",
          "超精細高精度晶體及 SiPM 技術，增強光電轉換效率",
          "高級模組化設計 — 系統可靠性及可維護性出色",
        ],
      },
      {
        title: "高精度晶體及 Clarity 成像鏈",
        items: [
          "專利 SSS（Slab-Sandwich-Slide）技術及 2.76 mm 晶體 — 較 4 mm 元件細 30%",
          "業界領先 2.9 mm NEMA 分辨率及 PSF（點擴展函數）重建",
          "Clarity 成像鏈 — 從數據採集到重建，改善病灶定位",
          "微病灶檢出能力 — 10 分鐘全身掃描中驗證 1.9–2.2 mm 病灶檢出",
        ],
      },
      {
        title: "飛行時間（TOF）及 24 cm 軸向視野",
        items: [
          "300 ps 飛行時間分辨率 — 更高對比度、更低噪聲及更快影像收斂",
          "TOF 顯著提升 SNR — BMI 40.3 患者 10 分鐘全身掃描驗證",
          "24 cm PET 軸向視野 — 8 分鐘全身 4 床位掃描，傳統 PET-CT 需 7 床位",
          "高系統靈敏度支持低劑量 PET 掃描及更高患者通量",
        ],
      },
      {
        title: "HYPER DPR 人工智能重建",
        items: [
          "HYPER DPR（深度漸進重建）— OSEM 迭代中 AI 驅動的漸進式 CNN 重建",
          "噪聲降低 32%、影像對比度提升 66%、CNR 提升 2.5 倍",
          "基於 160,000+ 張 uEXPLORER 影像訓練，深度學習迭代重建穩健可靠",
          "0.03 mCi/kg 低示踪劑劑量成像及 6 分鐘全身掃描 — SNR 及 SUVmax 優於 OSEM",
          "轉移灶檢出、腦部可視化及心血管成像較 OSEM 顯著提升",
        ],
      },
      {
        title: "uCare iQC 無源質控及 160 層 CT",
        items: [
          "無源質控 — 利用 LYSO 探測器中 176Lu 自然衰變，零輻射及零重複源成本",
          "uCare iQC — 無需放射性源準備或模體掃描的自動日/週質控",
          "160 層高性能 CT — 0.3 秒旋轉、0.5 mm 採集元件、70 kV 低劑量模式",
          "1024×1024 重建矩陣 — 高空間分辨率及全面 CT 應用",
          "擴展 PET 以外臨床光譜，提供高品質診斷 CT 成像",
        ],
      },
      {
        title: "臨床應用及以人為本的設計",
        items: [
          "腫瘤、神經及心臟 — 功能 PET 與精細解剖 CT 結構融合",
          "低劑量及快速全身、腦部及心臟 PET 協議，適應常規及挑戰性病例",
          "以人為本的設計 — 東方美學與極簡主義，以設計傳遞關懷、信任與尊重",
          "人性化人體工學設計 — 優化舒適度、安全性、效率及患者體驗",
          "精湛工藝 — 輕量化精密設計及集成機架觸控屏控制",
        ],
      },
    ],
  },
  "umr-omega": {
    tagline: "Think BIG — 全球首款 75 cm 超寬孔徑 3T MRI",
    description:
      "UNITED IMAGING uMR OMEGA 為 uAIFI 賦能的 3T 超寬孔徑 MRI 旗艦系統 — 以「Think BIG」為核心理念，結合全球首款 75 cm 超寬孔徑 3T 磁體、310 kg 承重檢查床、3.5 MW 梯度功率放大器、60×60×50 cm 視野及 ACS/DeepRecon/EasySense/QScan 智能技術，為醫院及影像中心提供極致影像解析度、擴展患者准入及高效工作流程。",
    highlights: [],
    featureGroups: [
      {
        title: "系統概述",
        items: [
          "uAIFI 賦能的超寬孔徑 3.0T MR 旗艦 — 創新技術、全新體驗、全面能力",
          "「Think BIG」平台 — 以擴展准入提升 MRI 利用率",
          "uCS 2.0 成像技術 — 全解剖 2D、3D 及 4D 採集，最高 16× 加速",
          "適合追求旗艦 3T 性能及無可比擬患者准入能力的醫院及影像中心",
        ],
      },
      {
        title: "75 cm 超寬孔徑及患者體驗",
        items: [
          "全球首款 75 cm 超寬孔徑 3T MRI — 額外 25% 空間，更舒適的檢查體驗",
          "業界領先 310 kg（680 lbs）檢查床承重，適合肥胖及體型較大患者",
          "Starlight 星輝環境設計 — 柔和孔徑照明，減輕焦慮及幽閉恐懼",
          "以人為本的設計，融合東方美學與極簡主義 — 以設計傳遞關懷、信任與尊重",
          "有助挽回因焦慮及幽閉恐懼而中止或錯失的檢查所損失的收入",
        ],
      },
      {
        title: "創新磁體及梯度技術",
        items: [
          "全新 3T 磁體設計 — 60×60×50 cm 最大視野，超寬孔徑內世界級均勻度",
          "磁場均勻度：@60×60×50 cm 4.40 ppm，@55×55×50 cm 2.00 ppm，@30×30×30 cm 0.029 ppm（典型值）",
          "全球首款 3.5 MW 梯度功率放大器（GPA）",
          "45 mT/m 梯度強度及 200 mT/m/s 爬升率 — 75 cm 孔徑內實現 60 cm 視野成像",
        ],
      },
      {
        title: "uAIFI ACS、DeepRecon 及 QScan",
        items: [
          "ACS（AI 輔助壓縮感知）— 結合 AI、壓縮感知、並行成像及部分 k 空間，實現接近 CT 的 MR 速度",
          "在不增加時間下提升影像品質，或不犧牲品質下縮短掃描時間 — 各部位全覆蓋掃描低於 100 秒",
          "DeepRecon — 深度學習重建，智能降噪及保真成像，同時提升信噪比與銳利度",
          "QScan — 優化梯度波形，聲壓最高降低 97%；支援 2D/3D、DWI、SWI 及 MRS 靜音掃描",
          "ACS × QScan — 靜音掃描不犧牲速度（如腦部協議 8:18 → 5:20 min；體部協議 13:26 → 5:38 min）",
        ],
      },
      {
        title: "EasySense 及 SuperFlex 線圈",
        items: [
          "EasySense — 業界首款非接觸式雙源相控陣毫米波雷達，用於呼吸觸發掃描",
          "無需呼吸帶或導航設置的自由呼吸掃描 — 3D MRCP 及腹部 T2W FS 品質等效",
          "SuperFlex 線圈 — 柔軟、舒適、貼合的導電聚合物複合材料，靈活適應體型輪廓",
          "新型去耦技術支持高密度線圈排列；集成前置放大器降低功耗及厚度",
          "Extended Body Array 線圈 — 24 通道、70×50 cm 覆蓋範圍，專為大体型及肥胖患者設計",
        ],
      },
      {
        title: "智能工作流程",
        items: [
          "EasyScan — 頭部、肩部、心臟、脊柱、腹部、膝部及全身智能自動定位",
          "EasyPlan — 一鍵自動多步掃描規劃及全身影像拼接",
          "EasyScan Cardiac — 單次 3D 屏氣定位 7 個標準心臟切面",
          "EasyProcess — 一鍵智能後處理，包括血管壁分析及 PlaqueTool 斑塊識別",
        ],
      },
      {
        title: "擴展容量及進階臨床成像",
        items: [
          "擴展肥胖成像能力 — 75 cm 孔徑、310 kg 檢查床及 60×60×50 cm 視野，獲得更完整的解剖影像",
          "偏中心檢查舒適定位 — 75 cm 孔徑內肩部、髖部及膝部舒適對位",
          "擴展特殊體位 — 側臥脊柱、屈肘及外展肩關節協議，亞毫米級分辨率",
          "涵蓋肌骨、神經、體部及血管應用的高品質成像 — uMR Omega 是您的成長平台",
        ],
      },
    ],
  },
  mini800: {
    tagline: "緊湊、簡便、快速 — 經濟實惠的肝臟診斷方案",
    description:
      "iLivTouch Mini800 便攜式剪切波定量超聲波診斷系統，採用振動控制瞬時彈性成像（TE）技術，提供肝硬度（LSM）及超聲衰減參數（UAP）定量測量，輔助肝纖維化、肝硬化及脂肪肝的非侵入性全面評估，支援慢性肝病的早期篩查、預防、診斷及治療。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "經濟實惠的肝臟診斷方案",
          "輔助評估肝纖維化、肝硬化及脂肪肝",
          "支援慢性肝病早期篩查、預防、診斷及治療",
          "非侵入性 — 適合定期監測及患者隨訪",
        ],
      },
      {
        title: "技術與測量",
        items: [
          "振動控制瞬時彈性成像（TE）技術",
          "LSM 及 UAP 定量測量",
          "闊頻纖維化掃描探頭",
          "超聲波 B-mode 影像探頭（可選）",
        ],
      },
      {
        title: "便攜性與工作流程",
        items: [
          "緊湊、簡便、快速操作",
          "輕巧便攜，易於搬運",
          "電池供電，適合床邊及外展篩查",
          "快速測量，即時結果",
        ],
      },
      {
        title: "法規與安全標準",
        items: [
          "美國 FDA 510(k) 及 CE 認證",
        ],
      },
    ],
  },
  "consona-n6": {
    tagline: "Concrete to Resonate — 入門級診斷超聲波系統",
    description:
      "MINDRAY Consona N6 為 Consona 系列入門型診斷超聲波系統，搭載 ZST+ 超聲平台及 ComboWave 探頭，提供卓越影像品質及廣泛臨床應用覆蓋 — 結合綜合臨床解決方案、智能測量工具及人體工學設計，支援醫院、診所及基層醫療的可靠超聲診斷。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "廣泛臨床應用覆蓋，支援多種患者類型及臨床場景",
          "提供具體可靠的診斷方案 — 適合醫院、診所及技能提升培訓",
          "強大工具支援日常及進階檢查，助臨床人員保持領先",
        ],
      },
      {
        title: "ZST+ 超聲平台",
        items: [
          "ZST+ 平台將超聲指標從傳統波束合成提升至通道數據處理",
          "提供卓越影像品質，平台持續優化升級",
          "ComboWave 探頭提升成像靈敏度，覆蓋更廣臨床應用",
        ],
      },
      {
        title: "先進成像技術",
        items: [
          "PSH、Glazing Flow、NTE、iClear、HR Flow 及 iBeam 技術",
          "HD-Scope 及 UWN+ 造影成像，提升診斷信心",
          "即時動態影像優化，影像更清晰易判讀",
        ],
      },
      {
        title: "綜合臨床解決方案",
        items: [
          "General Imaging Solution — 智能工具支援流暢日常診斷",
          "Cardiovascular Solution — 有效心血管評估及專用工具",
          "Women's Health Solution — 提升效率及患者滿意度",
        ],
      },
      {
        title: "智能測量工具",
        items: [
          "Smart HRI — 自動計算肝脂肪變性指數（HRI）",
          "Smart Bladder — 自動膀胱容量測量",
          "Smart Calc — 自動描記、測量及計算",
          "RIMT — 基於 RF 數據的即時 IMT 測量",
          "AutoEF — 依舒張/收縮幀自動計算射血分數",
          "TDI — 基於都卜勒理論顯示心肌運動",
          "Smart Face — 一鍵自動去除胎兒面部遮擋",
          "Glazing Flow — 改善胎兒血流 3D 呈現",
          "Smart OB — 自動測量胎兒生物測量參數",
          "iTouch+ 配合 HD Scope 及 NTE — 提升 ROI 解析度及 Shell 定量硬度評估",
        ],
      },
      {
        title: "工作流程及學習工具",
        items: [
          "iScanHelper — 逐步掃描引導，助操作者練習及提升技能",
          "Smart Vue — 自動識別及還原標準切面",
          "iWorks — 標準化逐步掃描協議，避免切面遺漏",
        ],
      },
      {
        title: "人體工學設計及系統配置",
        items: [
          "21.5 吋全高清顯示器及 13.3 吋全高清觸控屏",
          "可旋轉控制面板，顯示器視角可調",
          "高度可調、整合收納空間及易於搬運設計",
          "降噪設計，防水防塵面板及內建電池",
        ],
      },
    ],
  },
  "consona-n7": {
    tagline: "Concrete to Resonate — 中階診斷超聲波系統",
    description:
      "MINDRAY Consona N7 為 Consona 系列中階診斷超聲波系統，搭載 ZST+ 超聲平台及 ComboWave 探頭，提供卓越影像品質及更廣泛臨床覆蓋 — 結合 Smart Scene 3D 全棧智能婦產解決方案、綜合臨床工具及人體工學設計，滿足醫院及診所的中高階超聲診斷需求。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "廣泛臨床應用覆蓋，支援多種患者類型及臨床場景",
          "提供具體可靠的診斷方案 — 適合醫院、診所及技能提升培訓",
          "強大工具支援日常及進階檢查，助臨床人員保持領先",
        ],
      },
      {
        title: "ZST+ 超聲平台",
        items: [
          "ZST+ 平台將超聲指標從傳統波束合成提升至通道數據處理",
          "提供卓越影像品質，平台持續優化升級",
          "ComboWave 探頭提升成像靈敏度，覆蓋更廣臨床應用",
        ],
      },
      {
        title: "先進成像技術",
        items: [
          "PSH、NTE、iClear、HR Flow 及 iBeam 技術",
          "HD Scope 提升 ROI 解析度，影像更清晰易判讀",
          "iTouch+ 即時動態影像優化",
        ],
      },
      {
        title: "綜合臨床解決方案",
        items: [
          "General Imaging Solution — 智能工具支援流暢日常診斷",
          "Cardiovascular Solution — 有效心血管評估及專用工具",
          "Women's Health Solution — 基於 Smart Scene 3D 的全棧智能方案",
          "ZST+ 賦能的全棧智能婦產解決方案",
        ],
      },
      {
        title: "智能測量工具",
        items: [
          "Smart HRI — 快速簡便的肝脂肪變性指數（HRI）評估",
          "Smart Calc — 自動描記、測量及計算",
          "RIMT — 基於 RF 數據的即時 IMT 測量",
          "AutoEF — 依舒張/收縮幀自動計算射血分數",
          "TTQA — 心肌同步化定量分析評估",
          "NTE 配合 Shell — ROI 定量硬度評估",
          "Smart Face — 一鍵自動去除胎兒面部遮擋",
          "Smart FLC 2D/3D — 自動卵泡計數及測量",
          "Smart OB — 自動測量胎兒生物測量參數",
          "Smart Fetal HR、Smart Planes CNS — 胎兒心臟及腦部標準切面分析",
          "Smart Scene 3D — 創新呈現胎兒面部、脊柱及長骨",
        ],
      },
      {
        title: "工作流程及學習工具",
        items: [
          "iScanHelper — 逐步掃描引導，助操作者練習及提升技能",
          "Smart Vue — 自動識別及還原標準切面",
          "iWorks — 標準化逐步掃描協議，避免切面遺漏",
        ],
      },
      {
        title: "人體工學設計及系統配置",
        items: [
          "21.5 吋全高清顯示器配合升降臂及 13.3 吋全高清觸控屏",
          "可旋轉控制面板，高度可調及整合收納空間",
          "易於搬運設計及降噪運行",
          "防水防塵面板及內建電池",
        ],
      },
    ],
  },
  "consona-n9": {
    tagline: "Concrete to Resonate — 旗艦診斷超聲波系統",
    description:
      "MINDRAY Consona N9 為 Consona 系列旗艦診斷超聲波系統，搭載 ZST+ 超聲平台、Single-Crystal 及 ComboWave 探頭，提供頂級影像品質及最廣泛臨床覆蓋 — 結合 Smart Scene 3D 全棧智能方案、STE/STQ 彈性成像、AI 輔助測量工具及雙翼浮動臂人體工學設計，滿足大型醫院及影像中心的高階診斷需求。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "廣泛臨床應用覆蓋，支援多種患者類型及臨床場景",
          "提供具體可靠的診斷方案 — 適合醫院、診所及進階影像中心",
          "強大工具支援日常及專科檢查，助臨床人員保持領先",
        ],
      },
      {
        title: "ZST+ 超聲平台及探頭",
        items: [
          "ZST+ 平台將超聲指標從傳統波束合成提升至通道數據處理",
          "Single-Crystal 探頭提供更深度穿透及精細細節",
          "ComboWave 探頭提升成像靈敏度 — 人體工學握持設計",
        ],
      },
      {
        title: "先進成像技術",
        items: [
          "PSH、Glazing Flow、NTE、iClear、HR Flow、STE/STQ 及 iBeam 技術",
          "HD-Scope 及 UMW+ 造影成像，提升診斷信心",
          "Fetus 3D with iLive 及 iTouch+ 即時動態影像優化",
        ],
      },
      {
        title: "綜合臨床解決方案",
        items: [
          "General Imaging Solution — 智能工具支援流暢日常診斷",
          "Cardiovascular Solution — 有效心血管評估及專用工具",
          "Women's Health Solution — 基於 Smart Scene 3D 的全棧智能方案",
          "ZST+ 賦能的全棧智能婦產解決方案",
        ],
      },
      {
        title: "智能測量及 AI 工具",
        items: [
          "Smart HRI — 自動識別肝臟及腎皮質並計算亮度比值",
          "Smart Bladder — 自動測量三徑及膀胱容量",
          "Smart Hip — 自動測量髖關節 α/β 角，支援 Graf 分類",
          "Smart B-line — 自動快速評估肺水腫",
          "Smart Calc — 自動描記、測量及計算",
          "Smart Breast 及 Smart Thyroid — BI-RADS 及 TI-RADS 分析，高效工作流程",
          "RIMT、AutoEF、TTQA 及 R-VQS — 血管硬度係數及脈搏波速度（PWV）",
          "Smart Face、Smart FLC 2D/3D、Smart OB、Smart Fetal HR、Smart Planes CNS 及 Smart Scene 3D",
        ],
      },
      {
        title: "工作流程及學習工具",
        items: [
          "iScanHelper — 逐步掃描引導，助操作者練習及提升技能",
          "Smart Vue — 自動識別及還原標準切面",
          "iWorks — 標準化逐步掃描協議，避免切面遺漏",
        ],
      },
      {
        title: "人體工學設計及系統配置",
        items: [
          "最高 23.8 吋全高清顯示器配合雙翼浮動臂及最高 15.6 吋觸控屏",
          "可旋轉控制面板，高度可調及整合收納空間",
          "易於搬運設計及降噪運行",
          "防水防塵面板及內建電池",
        ],
      },
    ],
  },
  "hepatus-5": {
    tagline: "非侵入性定量肝纖維化及脂肪肝分析",
    description:
      "MINDRAY Hepatus 系列為專業非侵入性肝臟疾病診斷系統，透過瞬時彈性成像及 LiSA 技術提供肝硬度（E/kPa）及脂肪肝定量評估。結合 Advanced ViTE 視覺化引導、Q-Scan 智能採集及內建質控指標，支援肝纖維化及脂肪肝的早期篩查、診斷、監測及治療評估。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "適用於肝纖維化及脂肪肝的篩查、診斷、監測及治療評估 — 尤其早期可逆階段",
          "涵蓋非酒精性脂肪肝、酒精性肝病、慢性乙型/丙型肝炎、藥物性肝損傷、自體免疫性肝病及膽道疾病",
          "非侵入性替代肝活檢 — 降低活檢風險；操作簡便、快速、安全、經濟，易於患者隨訪",
          "對早期肝纖維化及脂肪肝具高靈敏度及準確度，有助在演變為肝硬化或肝癌前介入",
        ],
      },
      {
        title: "定量測量",
        items: [
          "瞬時彈性成像定量測量肝硬度（E/kPa）及肝纖維化分期（F0–F4）",
          "LiSA（Liver Ultra-Sound Attenuation）技術定量評估脂肪肝程度",
          "對輕中度肝纖維化及早期脂肪肝敏感 — 診斷標準成熟，獲全球指南廣泛推薦",
          "慢性肝病首選檢查方法之一",
        ],
      },
      {
        title: "Advanced ViTE 技術",
        items: [
          "Advanced ViTE（Visualized Transient Elastography）配合即時二維超聲引導",
          "避開血管及病灶，提升測量準確度及可靠性",
          "大幅降低操作難度，改善定量測量的可重複性",
        ],
      },
      {
        title: "Q-Scan 及質量控制",
        items: [
          "Q-Scan 智能採集 — 一鍵自動連續採集並篩選 10 組有效數據",
          "定位後約 7 秒內即可獲得有效結果 — 顯著提升檢查效率",
          "壓力指數（P）及運動穩定性指數（m-STB），以顏色提示輔助質控",
        ],
      },
      {
        title: "整合探頭及工作流程",
        items: [
          "超寬頻多陣元整合探頭 — 涵蓋不同年齡及體型，無需更換探頭",
          "一鍵採集配合探頭狀態指示燈；流線型防滑全密封設計，易於清潔消毒",
          "智能趨勢分析支援批量數據導出 — 方便疾病追蹤、治療評估及科研",
        ],
      },
      {
        title: "系統設計及使用體驗",
        items: [
          "全觸控平板介面；內建電池，適合移動及外展應用",
          "條碼掃描輸入患者資料；面板可靈活調節，線材管理完善",
          "雙探頭接口快速切換；可選超聲功能支援腹水、穿刺引導、門脈血流及形態評估",
        ],
      },
      {
        title: "指南認可及臨床驗證",
        items: [
          "獲 AASLD、EASL、APASL、CMA、WFUMB 等全球肝病指南推薦",
          "於北京地壇醫院、上海瑞金醫院、深圳第三人民醫院等中心完成臨床驗證",
        ],
      },
    ],
    videos: [{ title: "操作影片", src: "/videos/hepatus-operation-video.mp4" }],
  },
  vet1120: {
    tagline: "獸醫移動式數位 C-arm 系統",
    description:
      "PERLOVE VET1120 為緊湊型移動式數位 C-arm，提供獸醫骨科、創傷及軟組織手術的即時透視導引 — 結合 5.0 kW 成像功率、整合式工作站及節省空間的設計，適合現代診所環境。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "即時透視影像，支援骨科及創傷手術的術中精準導引",
          "協助準確植入物定位 — 有助縮短手術時間並改善臨床成效",
          "5.0 kW 發生器適用大型犬（如德國牧羊犬、拉布拉多），低功率機型難以穿透的部位亦可清晰成像",
          "自動、手動及脈衝透視模式，配合不同手術流程",
        ],
      },
      {
        title: "成像技術",
        items: [
          "日本 Toshiba 影像增強器，提供高解像度透視影像",
          "數位成像鏈專為骨科及創傷介入的精準度而設",
          "高功率 X 光管，為獸醫解剖結構提供可靠穿透力",
        ],
      },
      {
        title: "節省空間的移動設計",
        items: [
          "整合式工作站，無需另設顯示器推車 — 節省寶貴的手術室空間",
          "緊湊移動式 C-arm 機身，適合狹小手術室及市區診所",
          "靈活移動及定位，適應不同臨床布局",
        ],
      },
      {
        title: "人體工學與易用性",
        items: [
          "人性化手控器，可在無菌區內直觀操作",
          "外科醫生無需離開手術台即可調整影像",
          "簡化日常工作流程，適合高周轉獸醫外科",
        ],
      },
      {
        title: "法規與品質標準",
        items: [
          "EU MDR CE 認證，符合國際醫療器械安全標準",
          "採用優質核心部件，以具競爭力的定位提供強勁臨床投資回報",
        ],
      },
    ],
  },
  vf1: {
    tagline: "新一代獸醫動態數位放射影像系統",
    description:
      "VETOO VF1 專為智能寵物影像設計的動態 DR 系統，支援 30 fps 動態成像、最長 15 分鐘透視錄影及可選 DSA 模組，涵蓋食道/肺部/關節定位、造影及介入等臨床應用。配備 17×17 吋平板探測器、32kW 高壓發生器（125kV / 400mA）及獸醫專用軟件。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "動態觀察運動器官 — 食道、肺部、橫膈膜、腸道及氣管",
          "骨科手術支援：關節置換、釘板調整及骨骼定位",
          "消化道造影 — 食道蠕動、胃排空及鋇餐檢查，提供診斷依據",
          "心臟及肺部造影評估；可選 DSA 模組支援介入手術",
          "長時間動態錄影有助減少寵物緊張、顫抖或呼吸急促造成的誤診",
        ],
      },
      {
        title: "動態 DR 技術",
        items: [
          "將數位 X 光資料轉換為靜態影像及流暢視頻 — 超越傳統靜態 DR",
          "30 fps 動態成像，兼備靜態 DR 高清影像及進階測量功能",
          "每次最長 15 分鐘連續動態透視模式，適合複雜手術及長時間觀察",
          "可選 DSA 模組，支援血管造影輔助介入治療",
          "臨床應用場景更廣，診斷價值高於傳統靜態 DR",
        ],
      },
      {
        title: "成像性能",
        items: [
          "17×17 吋平板探測器，採用碘化銫蒸發技術 — 低輻射、高 DQE（約 80%）、極限解析度 3.6 Lp/mm",
          "32 kW 高功率發生器（125 kV / 400 mA）— 大小型寵物均可獲得可靠穿透力",
          "0.6 / 1.2 mm 小焦點，高解像度成像，適合貓、狗及其他寵物",
          "DAEC 自動曝光控制技術，透視時自動選擇最佳曝光參數",
        ],
      },
      {
        title: "軟件與易用性",
        items: [
          "高清觸控螢幕，配備直觀的獸醫專用軟件工作流程",
          "自動曝光參數選擇 — 成像參數清晰可見，可即時調整",
          "完整測量及成像工具，專為獸醫臨床特點而設",
          "友善操作介面，適合日常高周轉診所使用",
        ],
      },
      {
        title: "安裝及場地要求",
        items: [
          "主機尺寸約 205 × 151 × 95 cm；重量 120 kg",
          "最小輻射房尺寸 2 × 1.5 m；門寬最少 65 cm",
          "220 V 單相三線電源，建議配置獨立高壓電源線",
        ],
      },
      {
        title: "品質與支援",
        items: [
          "Vetoo Med 專業獸醫 DR 製造商，具備強大自主研發能力及多項國家發明專利",
          "嚴格供應商管理及品質控制，提供完善的售前及售後服務",
          "中國市場累計裝機量超過 2,800 台，獲用戶廣泛好評",
        ],
      },
    ],
  },
};

export function getLocalizedProduct(
  product: Product,
  locale: Locale
): Product & ProductLocaleFields {
  if (locale === "en" && en[product.id]) {
    return { ...product, ...en[product.id] };
  }
  if (locale === "zh" && zh[product.id]) {
    return { ...product, ...zh[product.id] };
  }
  return {
    ...product,
    tagline: product.tagline,
    description: product.description,
    highlights: product.highlights,
  };
}
