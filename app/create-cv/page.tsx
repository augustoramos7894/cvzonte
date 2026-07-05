"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function CreateCVPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desiredRole, setDesiredRole] = useState("");
  const [skills, setSkills] = useState("");
  const [experiences, setExperiences] = useState<
  {
    company: string;
    role: string;
    period: string;
    description: string;
  }[]
>([
  {
    company: "",
    role: "",
    period: "",
    description: "",
  },
]);
  
const [education, setEducation] = useState([
  {
    institution: "",
    course: "",
    period: "",
  },
]);

const [languages, setLanguages] = useState([
  {
    language: "",
    level: "",
  },
]);

  const previewRef = useRef<HTMLDivElement>(null);

  function addExperience() {
  setExperiences([
    ...experiences,
    {
      company: "",
      role: "",
      period: "",
      description: "",
    },
  ]);
}
function removeExperience(index: number) {
  const updated = experiences.filter((_, i) => i !== index);
  setExperiences(updated);
}

function addEducation() {
  setEducation([
    ...education,
    {
      institution: "",
      course: "",
      period: "",
    },
  ]);
}

function removeEducation(index: number) {
  const updated = education.filter((_, i) => i !== index);
  setEducation(updated);
}

function addLanguage() {
  setLanguages([
    ...languages,
    {
      language: "",
      level: "",
    },
  ]);
}

function removeLanguage(index: number) {
  const updated = languages.filter((_, i) => i !== index);
  setLanguages(updated);
}

  async function handleDownloadPDF() {
    if (!previewRef.current) return;

    const canvas = await html2canvas(previewRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("curriculo.pdf");
  }

  return (
    <main className="min-h-screen p-6 flex gap-6">

      {/* FORM */}
      <div className="w-1/2 space-y-4">
        <h1 className="text-2xl font-bold">Criar Currículo</h1>

        <input
          className="w-full border p-3 rounded"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>
  <label className="block mb-1 font-medium">
    Cargo desejado
  </label>

  <input
    type="text"
    value={desiredRole}
    onChange={(e) => setDesiredRole(e.target.value)}
    placeholder="Ex: Desenvolvedor Front-end"
    className="w-full border rounded-lg p-2"
  />
</div>

        <h2 className="text-lg font-semibold">Experiência Profissional</h2>

{experiences.map((exp, index) => (
  <div key={index} className="space-y-3 rounded-lg border p-4">
    <div className="flex items-center justify-between">
  <h3 className="font-semibold">
    Experiência {index + 1}
  </h3>

  {experiences.length > 1 && (
  <button
    type="button"
    onClick={() => removeExperience(index)}
    className="rounded bg-red-500 px-3 py-1 text-sm text-white"
  >
    Remover
  </button>
)}
</div>

    <input
      className="w-full border p-3 rounded"
      placeholder="Empresa"
      value={exp.company}
      onChange={(e) => {
        const updated = [...experiences];
        updated[index].company = e.target.value;
        setExperiences(updated);
      }}
    />

    <input
      className="w-full border p-3 rounded"
      placeholder="Cargo"
      value={exp.role}
      onChange={(e) => {
        const updated = [...experiences];
        updated[index].role = e.target.value;
        setExperiences(updated);
      }}
    />

    <input
      className="w-full border p-3 rounded"
      placeholder="Período"
      value={exp.period}
      onChange={(e) => {
        const updated = [...experiences];
        updated[index].period = e.target.value;
        setExperiences(updated);
      }}
    />

    <textarea
      className="w-full border p-3 rounded"
      placeholder="Descrição da experiência"
      value={exp.description}
      onChange={(e) => {
        const updated = [...experiences];
        updated[index].description = e.target.value;
        setExperiences(updated);
      }}
    />
  </div>
))}

        <button
  type="button"
  onClick={addExperience}
  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
  + Adicionar experiência
  
</button>

  <h2 className="text-lg font-semibold">Formação Acadêmica</h2>

{education.map((edu, index) => (
  <div key={index} className="space-y-3 rounded-lg border p-4">
    <div className="flex items-center justify-between">
  <h3 className="font-semibold">
    Formação {index + 1}
  </h3>

  {education.length > 1 && (
    <button
      type="button"
      onClick={() => removeEducation(index)}
      className="rounded bg-red-500 px-3 py-1 text-sm text-white"
    >
      Remover
    </button>
  )}
</div>

    <input
      className="w-full border p-3 rounded"
      placeholder="Instituição"
      value={edu.institution}
      onChange={(e) => {
        const updated = [...education];
        updated[index].institution = e.target.value;
        setEducation(updated);
      }}
    />

    <input
      className="w-full border p-3 rounded"
      placeholder="Curso"
      value={edu.course}
      onChange={(e) => {
        const updated = [...education];
        updated[index].course = e.target.value;
        setEducation(updated);
      }}
    />

    <input
      className="w-full border p-3 rounded"
      placeholder="Período"
      value={edu.period}
      onChange={(e) => {
        const updated = [...education];
        updated[index].period = e.target.value;
        setEducation(updated);
      }}
      />
  </div>
))}


<button
  type="button"
  onClick={addEducation}
  className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
>
  + Adicionar formação
</button>

<h2 className="text-lg font-semibold">Idiomas</h2>

{languages.map((lang, index) => (
  <div key={index} className="space-y-3 rounded-lg border p-4">

    <div className="flex items-center justify-between">
      <h3 className="font-semibold">
        Idioma {index + 1}
      </h3>

      {languages.length > 1 && (
        <button
          type="button"
          onClick={() => removeLanguage(index)}
          className="rounded bg-red-500 px-3 py-1 text-sm text-white"
        >
          Remover
        </button>
      )}
    </div>

    <input
      className="w-full border p-3 rounded"
      placeholder="Idioma"
      value={lang.language}
      onChange={(e) => {
        const updated = [...languages];
        updated[index].language = e.target.value;
        setLanguages(updated);
      }}
    />

    <input
      className="w-full border p-3 rounded"
      placeholder="Nível"
      value={lang.level}
      onChange={(e) => {
        const updated = [...languages];
        updated[index].level = e.target.value;
        setLanguages(updated);
      }}
    />

  </div>
))}

<button
  type="button"
  onClick={addLanguage}
  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
  + Adicionar idioma
</button>

        <input
          className="w-full border p-3 rounded"
          placeholder="Skills (separadas por vírgula)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <button
          onClick={handleDownloadPDF}
          className="w-full bg-black text-white py-3 rounded"
        >
          Baixar PDF
        </button>
      </div>

      {/* PREVIEW */}
<div
  ref={previewRef}
  className="w-[794px] min-h-[1123px] bg-white mx-auto rounded-lg shadow-2xl p-12 border border-gray-200"
>

  {/* HEADER */}
<div className="border-b-2 border-gray-900 pb-8 mb-8">

  <h1 className="text-5xl font-extrabold uppercase tracking-wide text-gray-900">
    {name || "Seu Nome"}
  </h1>

  <p className="text-lg text-gray-500 mt-2">
    Desenvolvedor Full Stack
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
        {exp.period || "Período"}
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
    {education[0].period || "Período"}
  </p>
</div>

<div className="mb-8">
  <h2 className="text-xl font-semibold mb-3">
    Idiomas
  </h2>

  {languages.map((lang, index) => (
    <div key={index} className="mb-3">
      <p className="font-semibold">
        {lang.language || "Idioma"}
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

    </main>
  );
}