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
    videos: [{ youtubeId: "zPa64aWNBiw", title: "iLivTouch Mini800" }],
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
  "navigator-3000a": {
    tagline: "Care Your Concern — 3rd-generation 3D tomosynthesis digital mammography",
    description:
      "SINO MDT Navigator 3000A (Navigator Star Series) is a 3rd-generation high-end digital mammography system — with elegant streamline design and humanized ergonomics, offering 2D, 3D tomosynthesis, and 2D+3D combo exposure modes, TIDE low-dose imaging, and AI-assisted analysis to deliver higher imaging resolution with reduced radiation dose for breast screening and diagnosis.",
    highlights: [],
    featureGroups: [
      {
        title: "System Overview & Heritage",
        items: [
          "3rd Generation Navigator Star Series digital mammography — \"Care Your Concern\"",
          "SINO Medical-Device Technology — national high-tech enterprise and R&D specialist in breast imaging",
          "China's first registered digital mammography system (August 2011); national key new product award",
          "Shenzhen Science and Technology Progress Award; drafting unit of national mammography industry standards",
          "15+ years of technical accumulation with 1,000+ mammography installations worldwide in 90+ countries",
          "ISO 9001 and ISO 13485 certified — suitable for hospital and mobile vehicle deployment",
        ],
      },
      {
        title: "Imaging Modes & Tomosynthesis",
        items: [
          "2D, 3D tomosynthesis, and 2D+3D combo exposure modes — reduces radiation dose vs separate acquisitions",
          "FFDM 2D images, TOMO-synthesized 2D images, and TOMO-synthesized 3D images",
          "Dual angle range exposure — ±7.5° fast screening mode and ±20° fine diagnosis mode",
          "Rich image layers lead to clearer lesion shape visualization",
          "2D biopsy mode, Spot/Mag spot exposure mode for early-stage cancer and microcalcification detection",
          "Biopsy location exposure mode for targeted interventional guidance",
          "Higher resolution suitable for breast disease inspection; shortens outpatient scanning and compression time",
        ],
      },
      {
        title: "TIDE Low-Dose Imaging",
        items: [
          "TIDE imaging technology — high resolution with low radiation dose",
          "T-I-D-E technology reduces dose by up to 55% compared with traditional molybdenum exposure",
          "Tungsten target tube with high-performance full-field dynamic flat panel detector",
          "Excellent image post-processing system for clinical diagnostic confidence",
          "Intelligent automatic exposure control (AEC) — RCC and LCC standard views",
        ],
      },
      {
        title: "Ergonomic Design & Workflow",
        items: [
          "Unique streamline appearance design — elegant and modern clinical aesthetics",
          "Humanized ergonomic design with one-click positioning for fast experiences",
          "10.1\" dual-side large touch screen with quick set of customized parameters",
          "Base display screen and compression paddle display — four-screen synchronization, everything under control",
          "Rich portfolio of compression paddles with arc streamlined design",
          "Multi-level intelligent flexible compression system with micro-adjustment knob",
          "Auxiliary exposure mode — unique side movement up to 20 mm for armpit and hard-to-reach areas",
        ],
      },
      {
        title: "Advanced Visualization & AI",
        items: [
          "Unique pseudo-color innovative technology — visualizes tiny calcifications and clearly shows mass edges",
          "High-density tissue and surrounding tissue distinguished by color highlighting",
          "Intelligent analysis of mammography images with auto-generated structured reports",
          "AI report with lump location, type, BI-RADS grade, and benign/malignant prediction",
          "Accurate measurement of lesions and calcifications — detection accuracy up to 90%",
          "Low false positive rate with LMO-CC bit accurate registration",
        ],
      },
      {
        title: "Connectivity & Cloud Services",
        items: [
          "Cloud diagnosis services for remote collaborative review",
          "AI smart intelligence facilitates remote diagnosis meetings",
          "Supports integrated breast health workflow from screening to structured reporting",
        ],
      },
    ],
  },
  "vinno-a3": {
    tagline: "Expect More With Less — compact portable colour Doppler ultrasound",
    description:
      "VINNO A3 is a compact portable colour Doppler ultrasound system built on VINNO’s proprietary RF platform. It combines high image quality with a simplified workflow, fast boot, built-in battery, and height-adjustable trolley options — ideal for clinics, hospitals, and specialty practices needing reliable imaging wherever care is delivered.",
    highlights: [],
    featureGroups: [
      {
        title: "Imaging Platform",
        items: [
          "VINNO RF platform captures and processes full radio-frequency data for enhanced resolution and contrast",
          "Comprehensive modes including B, M, Color, Power, PW, CW, and Duplex imaging",
          "One-key image optimisation and customisable presets for faster daily scanning",
          "Strong penetration with clear visualisation of superficial and deeper structures",
        ],
      },
      {
        title: "Portability & Workflow",
        items: [
          "Compact, lightweight laptop-style console for flexible mobility between rooms or sites",
          "Fast boot feature — ready to scan when time matters",
          "Built-in battery for confident scanning at critical moments",
          "Height-adjustable trolley option for comfortable viewing height",
          "Noiseless design for a quieter clinical environment",
          "Durable trolley case option to keep accessories organised on the move",
        ],
      },
      {
        title: "Clinical Applications",
        items: [
          "General imaging and point-of-care ultrasound (POCUS)",
          "Musculoskeletal (MSK) and sports medicine assessments",
          "Obstetrics & gynecology",
          "Urology and small-parts imaging",
          "Vascular and routine cardiac screening workflows",
        ],
      },
      {
        title: "Connectivity",
        items: [
          "DICOM support with flexible data export options",
          "Modern connectivity for seamless patient data management",
        ],
      },
    ],
  },
  vinno10: {
    tagline: "Premium compact ultrasound wherever you need it",
    description:
      "VINNO 10 is VINNO’s flagship portable ultrasound system powered by the VLucid / VLucid+ platform. With Zone Imaging, Pure Wave probe technology, adaptive beam correction, and smart automation tools, it delivers best-in-class image quality for critical care, emergency, anesthesia, and general imaging.",
    highlights: [],
    featureGroups: [
      {
        title: "VLucid Platform & Beamforming",
        items: [
          "VLucid / VLucid+ second-generation platform with advanced adaptive beam synthesis",
          "Zone Imaging for more uniform energy distribution and improved resolution across the field",
          "High-precision beamforming with adaptive noise suppression for clearer tissue boundaries",
          "Up to 2× SNR enhancement at higher frame rates with efficient processing architecture",
        ],
      },
      {
        title: "Probe & Flow Technologies",
        items: [
          "Pure Wave single-crystal probe technology for improved sensitivity and detail",
          "VFlow+ adaptive colour-flow filtering for enhanced detection of tiny vessels",
          "Auto needle enhancement for clearer visualisation during steep-angled procedures",
          "Optional shear-wave elastography (VShear / SWEI) for stiffness assessment in breast, liver, MSK, thyroid, and prostate",
        ],
      },
      {
        title: "Smart Automation & AI Tools",
        items: [
          "VAid Thyroid — real-time detection and TI-RADS-oriented nodule assessment",
          "VAid Liver — one-button detection support for common focal and diffuse liver findings",
          "Auto IMT and other automation tools to accelerate standardised measurements",
          "Easy Compare for before/after exam review",
        ],
      },
      {
        title: "Ergonomics & Mobility",
        items: [
          "15.6\" high-resolution monitor with 8\" touch screen for intuitive control",
          "Built-in camera and microphone for remote ultrasound workflows (Flyinsono)",
          "Built-in ECG port and multi-probe holders for versatile clinical setups",
          "Battery packs supporting extended scanning away from fixed power outlets",
          "USB and Type-C connectivity for flexible data exchange",
        ],
      },
      {
        title: "Clinical Focus",
        items: [
          "Critical care, emergency, and anesthesia point-of-care imaging",
          "General imaging, vascular, cardiac, OB/GYN, MSK, and small-parts applications",
          "Designed for premium portable performance across hospital and clinic environments",
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
      { youtubeId: "W2et0Uaa8BQ", title: "SonoEye 操作指南" },
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
  "navigator-3000a": {
    tagline: "Care Your Concern — 第三代 3D 斷層合成數位乳腺攝影",
    description:
      "SINO MDT Navigator 3000A（Navigator Star 系列）為第三代高端數位乳腺攝影系統 — 以優雅流線型外觀及人性化設計，配備 2D、3D 斷層合成及 2D+3D 組合曝光模式、TIDE 低劑量成像技術及 AI 智能分析，為乳腺篩查及診斷提供更高解析度影像與更低輻射劑量。",
    highlights: [],
    featureGroups: [
      {
        title: "系統概述與品牌實力",
        items: [
          "第三代 Navigator Star 系列數位乳腺攝影 —「Care Your Concern」",
          "深圳醫療器械科技（SINO MDT）— 國家級高新技術企業，乳腺影像研發領導者",
          "中國首款註冊數位乳腺攝影系統（2011 年 8 月）；國家重點新產品",
          "深圳市科技進步獎；國家乳腺攝影行業標準起草單位",
          "15 年以上技術積累，全球 1,000+ 台乳腺攝影裝機，覆蓋 90 多個國家及地區",
          "通過 ISO 9001 及 ISO 13485 認證 — 適合醫院及移動體檢車部署",
        ],
      },
      {
        title: "成像模式與斷層合成",
        items: [
          "2D、3D 斷層合成及 2D+3D 組合曝光模式 — 較分開採集降低輻射劑量",
          "FFDM 2D 影像、TOMO 合成 2D 影像及 TOMO 合成 3D 影像",
          "雙角度範圍曝光 — ±7.5° 快速篩查模式及 ±20° 精細診斷模式",
          "豐富影像層次，病灶形狀顯示更清晰",
          "2D 活檢模式、點片/放大點片曝光模式 — 早期癌變及微鈣化檢出",
          "活檢定位曝光模式，支援介入導引",
          "更高解析度，適合乳腺疾病檢查；縮短門診掃描及加壓時間",
        ],
      },
      {
        title: "TIDE 低劑量成像",
        items: [
          "TIDE 成像技術 — 高解析度、低輻射劑量",
          "T-I-D-E 技術較傳統鉬靶曝光劑量降低最高達 55%",
          "鎢靶球管配合高性能全視野動態平板探測器",
          "卓越影像後處理系統，支援臨床診斷信心",
          "智能自動曝光控制（AEC）— 支援 RCC 及 LCC 標準體位",
        ],
      },
      {
        title: "人體工學設計與工作流程",
        items: [
          "獨特流線型外觀設計 — 優雅現代臨床美學",
          "人性化人體工學設計，一鍵定位，操作快速便捷",
          "10.1 吋雙側大尺寸觸控屏，快速設定自訂參數",
          "機座顯示屏及加壓板顯示屏 — 四屏同步，一切盡在掌握",
          "豐富加壓板組合，弧形流線型加壓板及檢查床設計",
          "多級智能柔性加壓系統，配備微調旋鈕",
          "輔助曝光模式 — 獨特側向移動最高達 20 mm，覆蓋腋下等易漏檢區域",
        ],
      },
      {
        title: "進階可視化與 AI",
        items: [
          "獨特偽彩創新技術 — 可視化微小鈣化，清晰顯示腫塊邊緣",
          "高密度組織與周圍組織以色彩高亮區分",
          "乳腺影像智能分析及自動生成結構化報告",
          "AI 報告含腫塊定位、類型、BI-RADS 分級及良惡性預測",
          "病灶及鈣化精準測量 — 良惡性檢出準確率最高達 90%",
          "低假陽性率，LMO-CC 位精準配準",
        ],
      },
      {
        title: "連接與雲端服務",
        items: [
          "雲端診斷服務，支援遠程協作閱片",
          "AI 智能促進遠程會診",
          "支援從篩查到結構化報告的整合乳腺健康工作流",
        ],
      },
    ],
  },
  "vinno-a3": {
    tagline: "Expect More With Less — 輕巧便攜彩色多普勒超聲波",
    description:
      "VINNO A3 為緊湊型便攜彩色多普勒超聲波系統，建基於 VINNO 專有 RF 平台。結合高影像質素、簡化工作流程、快速開機、內置電池及可調高度推車選配，適合診所、醫院及專科執業，於不同場景提供可靠診斷影像。",
    highlights: [],
    featureGroups: [
      {
        title: "成像平台",
        items: [
          "VINNO RF 平台擷取並處理完整射頻數據，提升解析度與對比度",
          "全面成像模式，包括 B、M、彩色、能量、PW、CW 及 Duplex",
          "一鍵影像優化及可自訂預設，加快日常掃描",
          "優良穿透力，清晰顯示表淺及深層結構",
        ],
      },
      {
        title: "便攜性與工作流程",
        items: [
          "輕巧筆記型主機設計，方便跨診室或外勤移動",
          "快速開機，爭取關鍵掃描時間",
          "內置電池，於關鍵時刻提供可靠操作信心",
          "可調高度推車選配，配合舒適觀看高度",
          "靜音設計，營造更安靜的臨床環境",
          "耐用推車箱選配，外出時整理配件更有序",
        ],
      },
      {
        title: "臨床應用",
        items: [
          "一般影像及床邊超聲波（POCUS）",
          "肌骨（MSK）及運動醫學評估",
          "婦產科",
          "泌尿科及小器官影像",
          "血管及常規心臟篩查流程",
        ],
      },
      {
        title: "連接性",
        items: [
          "支援 DICOM 及靈活數據匯出",
          "現代化連接方案，方便患者資料管理",
        ],
      },
    ],
  },
  vinno10: {
    tagline: "Premium Compact Ultrasound Wherever You Need It — 旗艦便攜超聲波",
    description:
      "VINNO 10 為 VINNO 旗艦便攜超聲波系統，搭載 VLucid / VLucid+ 平台。結合 Zone Imaging、Pure Wave 探頭技術、自適應波束校正及智能自動化工具，為重症、急診、麻醉及一般影像提供卓越影像質素。",
    highlights: [],
    featureGroups: [
      {
        title: "VLucid 平台與波束成形",
        items: [
          "VLucid / VLucid+ 第二代平台，配備進階自適應波束合成",
          "Zone Imaging 均勻能量分布，提升全視野解析度",
          "高精度波束成形及自適應降噪，組織邊界更清晰",
          "於更高幀率下最高可達約 2 倍訊噪比提升，處理架構高效",
        ],
      },
      {
        title: "探頭與血流技術",
        items: [
          "Pure Wave 單晶探頭技術，提升靈敏度與細節表現",
          "VFlow+ 自適應彩色血流濾波，加強微細血管偵測",
          "自動針道增強，於大角度穿刺時仍清晰顯示針尖",
          "可選剪切波彈性成像（VShear / SWEI），適用乳腺、肝臟、肌骨、甲狀腺及前列腺硬度評估",
        ],
      },
      {
        title: "智能自動化與 AI 工具",
        items: [
          "VAid Thyroid — 即時偵測並提供 TI-RADS 導向結節評估",
          "VAid Liver — 一鍵輔助偵測常見局灶及瀰漫性肝臟表現",
          "Auto IMT 等自動化工具，加快標準化測量",
          "Easy Compare 方便檢查前後對比",
        ],
      },
      {
        title: "人體工學與機動性",
        items: [
          "15.6 吋高解像度顯示屏配合 8 吋觸控屏，操作直觀",
          "內置鏡頭及咪高峰，支援遠程超聲波工作流（Flyinsono）",
          "內置 ECG 接口及多探頭支架，適應多元臨床配置",
          "電池組支援離開固定電源後延長掃描時間",
          "USB 及 Type-C 連接，方便數據交換",
        ],
      },
      {
        title: "臨床重點",
        items: [
          "重症、急診及麻醉床邊影像",
          "一般影像、血管、心臟、婦產、肌骨及小器官應用",
          "為醫院及診所環境提供旗艦級便攜表現",
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
    videos: [{ youtubeId: "zPa64aWNBiw", title: "iLivTouch Mini800" }],
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
