import { forwardRef } from "react";
import { Experience } from "@/types/experience";
import { Education } from "@/types/education";
import { Language } from "@/types/language";

type CVPreviewProps = {
  name: string;
  email: string;
  desiredRole: string;
  summary: string;
  skills: string;
  experiences: Experience[];
  education: Education[];
  languages: Language[];
};

const CVPreview = forwardRef<HTMLDivElement, CVPreviewProps>(
  (
    {
      name,
      email,
      desiredRole,
      summary,
      skills,
      experiences,
      education,
      languages,
    },
    ref
  ) => {
    return (
      
<div
  ref={ref}
  className="w-[794px] min-h-[1123px] bg-white mx-auto rounded-lg shadow-2xl p-12 border border-gray-200"
>

  {/* HEADER */}
<div className="border-b-2 border-gray-900 pb-8 mb-8">

  <h1 className="text-5xl font-extrabold uppercase tracking-wide text-gray-900">
  {name || "Seu Nome"}
</h1>

<p className="text-lg text-gray-500 mt-2">
  {desiredRole || "Cargo desejado"}
</p>

  <div className="flex flex-wrap gap-6 mt-5 text-sm text-gray-700">

    <span>
      📧 {email || "email@exemplo.com"}
    </span>

    <span>
      📍 Brasil
    </span>

    <span>
      💼 LinkedIn
    </span>

    <span>
      💻 GitHub
    </span>

  </div>

</div>

  {summary && (
  <section className="mb-6">
    <h2 className="text-xl font-bold border-b pb-1 mb-2">
      Resumo Profissional
    </h2>

    <p className="text-gray-700 leading-relaxed">
      {summary}
    </p>
  </section>
)}

  {/* EXPERIÊNCIA */}
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-3">
      Experiência Profissional
    </h2>

    <div className="space-y-4">
  {experiences.map((exp, index) => (
    <div key={index}>
      <p className="font-semibold">
        {exp.role || "Cargo"} - {exp.company || "Empresa"}
      </p>

      <p className="text-sm text-gray-500">
  {exp.startDate || "Início"} - {exp.endDate || "Fim"}
</p>

      <p className="text-gray-700 whitespace-pre-line">
        {exp.description || "Descrição da experiência..."}
      </p>
    </div>
  ))}
</div>
  </div>

{/* FORMAÇÃO */}
<div className="mb-8">
  <h2 className="text-xl font-semibold mb-3">
    Formação Acadêmica
  </h2>

  <p className="font-semibold">
    {education[0].course || "Curso"}
  </p>

  <p className="text-gray-700">
    {education[0].institution || "Instituição"}
  </p>

  <p className="text-sm text-gray-500">
    {education[0].startDate || "Início"} - {education[0].endDate || "Fim"}
  </p>
</div>

<div className="mb-8">
  <h2 className="text-xl font-semibold mb-3">
    Idiomas
  </h2>

  {languages.map((lang, index) => (
    <div key={index} className="mb-3">
      <p className="font-semibold">
        {lang.name || "Idioma"}
      </p>

      <p className="text-gray-600">
        {lang.level || "Nível"}
      </p>
    </div>
  ))}
</div>

  {/* SKILLS */}
  <div>
    <h2 className="text-xl font-semibold mb-3">
      Skills
    </h2>

    <div className="flex flex-wrap gap-2">
      {(skills
        ? skills.split(",")
        : ["React", "Next.js", "JavaScript"]
      ).map((skill, i) => (
        <span
          key={i}
          className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm"
        >
          {skill.trim()}
        </span>
      ))}
    </div>
  </div>

</div>
    );
  }
);

CVPreview.displayName = "CVPreview";

export default CVPreview;