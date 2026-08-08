// Edit this file to update the text and links shown throughout the website.
export const portfolio = {
  name: "Diwakar Shukla",
  initials: "DS",
  role: "Materials & Process Engineer",
  tagline:
    "I develop and improve materials, semiconductor processes, and manufacturing systems through careful experimentation and practical engineering.",
  availability: "Open to materials, process, and semiconductor engineering roles",
  biography:
    "I am a Materials Science & Engineering graduate from Cornell University with experience spanning semiconductor fabrication, electrochemical characterization, advanced materials, and manufacturing process improvement. I enjoy turning complex technical problems into structured experiments, clear findings, and reliable processes.",
  email: "diwakarraj149@gmail.com",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/diwakar-shukla-b26a96239/",
    },
    {
      label: "GitHub",
      href: "https://github.com/diwakarshukla0904",
    },
  ],
  experiences: [
    {
      organization: "Universal Instruments Corporation",
      role: "Graduate Research Intern — Area Array Consortium",
      dates: "Aug 2025 — May 2026",
      description:
        "Developed an electrochemical approach to quantify oxidation on gallium-based liquid-metal thermal interface materials. Used potentiostatic testing, SEM/EDS, XRD, titration, and thermal cycling to study how surface chemistry relates to thermal performance.",
    },
    {
      organization: "Arora Iron & Steel Rolling Mills",
      role: "Quality Assurance Intern",
      dates: "Feb 2024 — Jun 2024",
      description:
        "Investigated billet surface defects and nitrogen pickup using microscopy, SEM/EDS, chemical analysis, and structured root-cause methods. Supported process improvements in a production steel environment.",
    },
    {
      organization: "Mishra Boilers",
      role: "Business Analyst Intern",
      dates: "Jun 2023 — Sep 2023",
      description:
        "Analyzed project and sales workflows, identified operational bottlenecks, and helped translate business data into practical process recommendations for an industrial engineering company.",
    },
  ],
  projects: [
    {
      name: "Liquid-Metal TIM Oxidation Study",
      description:
        "Designed a potentiostatic method to dissolve, re-plate, and quantify oxide on gallium-based liquid-metal thermal interface materials, with supporting materials characterization and thermal testing.",
      technologies: ["Electrochemistry", "SEM/EDS", "XRD", "DOE", "Thermal cycling"],
    },
    {
      name: "Ferroelectric Solid Electrolytes",
      description:
        "Synthesized and characterized lithium- and sodium-based anti-perovskite solid electrolytes, examining crystal phases, dielectric response, polarization behavior, and frequency-dependent conductivity.",
      technologies: ["Solid-state synthesis", "XRD", "Impedance spectroscopy", "P–E loops"],
    },
    {
      name: "Semiconductor Device Fabrication",
      description:
        "Completed cleanroom fabrication and characterization work involving photolithography, Ti/Au sputtering, wet etching, profilometry, 2D FETs, silicon solar cells, and GaN LEDs.",
      technologies: ["Photolithography", "Sputtering", "Wet etching", "Profilometry"],
    },
  ],
  education: [
    {
      school: "Cornell University",
      degree: "Master of Engineering, Materials Science & Engineering",
      dates: "2026",
      details:
        "Semiconductor-focused study in nanofabrication, thin-film deposition, semiconductor physics, materials design, and computational materials science.",
    },
    {
      school: "Punjab Engineering College",
      degree: "Bachelor of Technology, Metallurgical & Materials Engineering",
      details:
        "Foundation in physical metallurgy, materials characterization, manufacturing, and engineering design.",
    },
  ],
  skills: [
    {
      category: "Semiconductor Processing",
      items: ["Photolithography", "Thin-film deposition", "Sputtering", "Wet etching", "Vacuum & plasma tools"],
    },
    {
      category: "Materials Characterization",
      items: ["SEM/EDS", "XRD", "XPS", "Optical microscopy", "Profilometry", "Thermal analysis"],
    },
    {
      category: "Process & Quality",
      items: ["DOE", "SPC", "Root cause analysis", "PFMEA", "8D", "Process validation"],
    },
    {
      category: "Analysis & Design",
      items: ["Python", "R", "JMP/Minitab", "MATLAB", "SolidWorks", "ABAQUS"],
    },
  ],
} as const;
