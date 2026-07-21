"use client";

import { useRef } from "react";

import CVForm from "@/components/cvform";
import CVPreview from "@/components/cvpreview";


import { professions } from "@/data/professions";
import { useCVData } from "@/hooks/useCVData";


export default function CreateCVPage() {
 const {
  cvData,

  updatePersonalInfo,
  updateSummary,
  updateSkills,

  addExperience,
  removeExperience,
  updateExperience,

  addEducation,
  removeEducation,
  updateEducation,

  addLanguage,
  removeLanguage,
  updateLanguage,

  resetCVData,
} = useCVData();

const previewRef = useRef<HTMLDivElement>(null);

  async function handleDownloadPDF() {
    if (!previewRef.current) return;

    const html2canvas = (await import("html2canvas")).default;
    const jsPDF = (await import("jspdf")).default;

    const canvas = await html2canvas(previewRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = 
    (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(
      imgData, 
      "PNG", 
      0, 
      0, 
      pdfWidth, 
      pdfHeight
    );

    pdf.save("curriculo.pdf");
  }

  const selectedProfession = professions.find((profession) => {
    const search = cvData.personalInfo.desiredRole
      .toLowerCase()
      .trim();

    return (
      profession.role.toLowerCase() === search ||
      profession.aliases.some(
        (alias) => alias.toLowerCase() === search
      )
    );
  });

  return (
    <main className="min-h-screen p-6 flex gap-6">
      <CVForm
        name={cvData.personalInfo.name}
        email={cvData.personalInfo.email}
        desiredRole={cvData.personalInfo.desiredRole}
        summary={cvData.summary}
        skills={cvData.skills}
        selectedProfession={selectedProfession}
        experiences={cvData.experiences}
        education={cvData.education}
        languages={cvData.languages}
        onNameChange={(value) =>
          updatePersonalInfo("name", value)
        }
        onEmailChange={(value) =>
          updatePersonalInfo("email", value)
        }
        onDesiredRoleChange={(value) =>
          updatePersonalInfo("desiredRole", value)
        }
        onSummaryChange={updateSummary}
        onSkillsChange={updateSkills}
        onAddExperience={addExperience}
        onRemoveExperience={removeExperience}
        onExperienceChange={updateExperience}
        onAddEducation={addEducation}
        onRemoveEducation={removeEducation}
        onEducationChange={updateEducation}
        onAddLanguage={addLanguage}
        onRemoveLanguage={removeLanguage}
        onLanguageChange={updateLanguage}
        onDownloadPDF={handleDownloadPDF}

        onReset={resetCVData}
      />

      <CVPreview
        ref={previewRef}
        name={cvData.personalInfo.name}
        email={cvData.personalInfo.email}
        desiredRole={cvData.personalInfo.desiredRole}
        summary={cvData.summary}
        skills={cvData.skills}
        experiences={cvData.experiences}
        education={cvData.education}
        languages={cvData.languages}
      />
    </main>
  );
}

 