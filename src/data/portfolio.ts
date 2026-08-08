export type PortfolioLink = {
  label: string;
  href: string;
};

export type ProjectStep = {
  label: string;
  title: string;
  description: string;
};

export type FeaturedProject = {
  number: string;
  eyebrow: string;
  title: string;
  summary: string;
  context: string;
  contribution: string;
  outcome: string;
  methods: readonly string[];
  steps: readonly ProjectStep[];
  visual: "interface" | "wafer" | "steel";
};

export type PortfolioData = {
  name: string;
  initials: string;
  role: string;
  descriptor: string;
  headline: string;
  introduction: string;
  biography: readonly string[];
  email: string;
  resumeHref: string;
  socialLinks: readonly PortfolioLink[];
  experiences: readonly {
    organization: string;
    role: string;
    dates: string;
    description: string;
  }[];
  projects: readonly FeaturedProject[];
  additionalProjects: readonly {
    title: string;
    description: string;
    methods: string;
  }[];
  education: readonly {
    school: string;
    degree: string;
    dates: string;
    details: string;
  }[];
  capabilities: readonly {
    category: string;
    items: readonly string[];
  }[];
};

// Edit this object to update the personal content shown throughout the site.
export const portfolio = {
  name: "Diwakar Shukla",
  initials: "DS",
  role: "Materials & Process Engineer",
  descriptor: "Materials science · semiconductor processing · manufacturing",
  headline: "Materials tell the story. Process makes it repeatable.",
  introduction:
    "I connect materials behavior with process conditions—using fabrication, characterization, and structured experimentation to make technical systems more reliable.",
  biography: [
    "My work sits where material response meets manufacturing reality. At Universal Instruments, I developed electrochemical methods to study oxidation in gallium-based thermal interface materials and connect surface chemistry with thermal performance and reliability.",
    "That work builds on semiconductor fabrication training at the Cornell NanoScale Facility and earlier quality engineering experience in steel and industrial manufacturing. Across those environments, my approach is consistent: isolate the variables, measure what matters, and turn the evidence into a process decision.",
  ],
  email: "diwakarraj149@gmail.com",
  resumeHref: "/diwakar-shukla-resume.pdf",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/diwakar-shukla-b26a96239/",
    },
    {
      label: "Medium",
      href: "https://medium.com/@diwakarshukla0409",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/diwakarshuklaa?igsh=d29iYTRxZTZyNDNx",
    },
  ],
  experiences: [
    {
      organization: "Universal Instruments Corporation",
      role: "Co-Op",
      dates: "Aug 2025 — May 2026",
      description:
        "Developed potentiostatic electrochemical methods to quantify oxide in gallium-based liquid-metal thermal interface materials, supported by SEM imaging and XRD under controlled environmental conditions.",
    },
    {
      organization: "Cornell NanoScale Science & Technology Facility",
      role: "Apprentice",
      dates: "Jan 2026 — Apr 2026",
      description:
        "Built cleanroom process experience across photolithography, sputtering, e-beam evaporation, profilometry, Hall-effect measurement, and four-point-probe characterization.",
    },
    {
      organization: "Arora Iron & Steel Rolling Mills",
      role: "Quality Assurance Intern",
      dates: "Jan 2024 — Jun 2024",
      description:
        "Investigated billet and bloom streaks, seam defects, and nitrogen pickup using non-destructive testing and root-cause analysis; corrective actions contributed to a 25% improvement in mill efficiency.",
    },
    {
      organization: "Mishra Boiler Pvt. Ltd.",
      role: "Summer Intern",
      dates: "Jun 2023 — Sep 2023",
      description:
        "Studied welding-related defects in AISI 304 components and supported a maintenance reduction of 30%; also evaluated rivet-based edge joining using AutoCAD and ABAQUS.",
    },
  ],
  projects: [
    {
      number: "01",
      eyebrow: "Surface chemistry · thermal reliability",
      title: "Quantifying oxidation in liquid-metal thermal interfaces",
      summary:
        "A measurement problem at the intersection of electrochemistry, materials characterization, and electronics reliability.",
      context:
        "Gallium-based liquid metals can provide high-performance thermal contact, but oxide formation changes how the material behaves at an interface. A useful process needs a repeatable way to measure that oxide—not just observe it.",
      contribution:
        "At Universal Instruments, I developed potentiostatic methods to dissolve, re-plate, and quantify oxide, then used microscopy and diffraction to examine the material under controlled environmental conditions.",
      outcome:
        "The work established an experimental route for relating oxide content to thermal performance and long-term reliability, giving the broader study a more measurable process variable.",
      methods: ["Potentiostatic electrochemistry", "SEM", "XRD", "Thermal performance", "Environmental control"],
      steps: [
        {
          label: "Control",
          title: "Prepare the material condition",
          description: "Control exposure and handling so oxide formation can be compared across samples.",
        },
        {
          label: "Measure",
          title: "Convert surface oxide into a signal",
          description: "Use potentiostatic electrochemistry to dissolve and re-plate oxide in a quantifiable workflow.",
        },
        {
          label: "Correlate",
          title: "Connect chemistry to performance",
          description: "Pair SEM and XRD observations with thermal behavior to examine reliability implications.",
        },
      ],
      visual: "interface",
    },
    {
      number: "02",
      eyebrow: "Cleanroom · semiconductor process flow",
      title: "From patterned wafer to electrical measurement",
      summary:
        "Hands-on nanofabrication training across pattern transfer, thin-film deposition, metrology, and electrical characterization.",
      context:
        "Semiconductor work depends on the full process chain: each fabrication step creates requirements for the next, and small deviations become visible in metrology or device measurements.",
      contribution:
        "During my apprenticeship at the Cornell NanoScale Facility, I worked through that chain using the SUSS MA6, AJA sputtering, Angstrom e-beam evaporation, KLA-Tencor profilometry, and electrical measurement tools.",
      outcome:
        "The apprenticeship developed practical fluency in how lithography, deposition, film geometry, and electrical response fit together as one controlled fabrication process.",
      methods: ["SUSS MA6", "AJA sputtering", "E-beam evaporation", "P-7 profilometry", "Hall & four-point probe"],
      steps: [
        {
          label: "Pattern",
          title: "Define device geometry",
          description: "Use photolithography and the SUSS MA6 to establish the patterned process layer.",
        },
        {
          label: "Deposit",
          title: "Build the thin-film stack",
          description: "Apply sputtering and e-beam evaporation with attention to material and process conditions.",
        },
        {
          label: "Verify",
          title: "Measure structure and response",
          description: "Use profilometry, Hall effect, and four-point probe measurements to evaluate the result.",
        },
      ],
      visual: "wafer",
    },
    {
      number: "03",
      eyebrow: "Quality engineering · steel processing",
      title: "Turning recurring steel defects into process action",
      summary:
        "A production-quality investigation spanning defect detection, metallurgy, and corrective action in a rolling-mill environment.",
      context:
        "Streaks, seams, and nitrogen pickup in billets and blooms can carry defects downstream. The challenge was to separate symptoms from process causes while production continued.",
      contribution:
        "At Arora Iron & Steel Rolling Mills, I combined visual and non-destructive inspection with root-cause analysis to trace defect patterns and support corrective actions in the mill process.",
      outcome:
        "The resulting process improvements contributed to a 25% increase in mill efficiency while strengthening the connection between quality evidence and operating decisions.",
      methods: ["MPI", "Liquid penetrant testing", "X-ray", "Ultrasonic testing", "Root-cause analysis"],
      steps: [
        {
          label: "Detect",
          title: "Map the defect signature",
          description: "Use complementary NDT methods to locate surface and internal discontinuities.",
        },
        {
          label: "Diagnose",
          title: "Trace likely process causes",
          description: "Relate seam and streak patterns and nitrogen pickup to upstream process conditions.",
        },
        {
          label: "Improve",
          title: "Translate evidence into action",
          description: "Support corrective measures that could be applied and evaluated on the mill floor.",
        },
      ],
      visual: "steel",
    },
  ],
  additionalProjects: [
    {
      title: "Ferroelectric solid electrolytes",
      description:
        "Synthesized and characterized Li₂.₉₉Ba₀.₀₀₅ClO and Li₃ClO anti-perovskite solid-electrolyte compositions.",
      methods: "Solid-state synthesis · XRD · impedance spectroscopy · polarization behavior",
    },
    {
      title: "Injection-molded product design",
      description:
        "Selected polymers and developed specifications, mold considerations, and failure analyses for an injection-molded product concept.",
      methods: "ANSYS EduPack · DFMEA · PFMEA · durability considerations",
    },
    {
      title: "Computational blast mechanics",
      description:
        "Compared SPH and CEL approaches in ABAQUS for modeling structural response under blast loading.",
      methods: "ABAQUS · SPH · CEL · simulation comparison",
    },
  ],
  education: [
    {
      school: "Cornell University",
      degree: "Master of Engineering, Materials Science & Engineering",
      dates: "Aug 2025 — May 2026",
      details: "GPA 3.6 / 4.0 · Semiconductor processing, nanofabrication, and advanced materials.",
    },
    {
      school: "Punjab Engineering College",
      degree: "Bachelor of Technology, Metallurgical & Materials Engineering",
      dates: "Aug 2021 — May 2025",
      details: "CGPA 7.5 / 10 · Physical metallurgy, characterization, manufacturing, and engineering design.",
    },
  ],
  capabilities: [
    {
      category: "Fabrication",
      items: ["Photolithography", "SUSS MA6", "AJA sputtering", "E-beam evaporation", "Thin-film processing"],
    },
    {
      category: "Characterization",
      items: ["SEM / EDS", "XRD", "FTIR", "Optical microscopy", "KLA-Tencor P-7 profilometry"],
    },
    {
      category: "Electrical & electrochemical",
      items: ["Potentiostatic methods", "Impedance spectroscopy", "Hall effect", "Four-point probe"],
    },
    {
      category: "Process & quality",
      items: ["Root-cause analysis", "Failure analysis", "NDT", "DFMEA / PFMEA", "Process improvement"],
    },
  ],
} as const satisfies PortfolioData;
