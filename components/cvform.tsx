import { Experience } from "@/types/experience";
import { Profession } from "@/types/profession";
import { Education } from "@/types/education";
import { Language } from "@/types/language";

type CVFormProps = {
  name: string;
  email: string;
  desiredRole: string;
  summary: string;
  skills: string;
  selectedProfession?: Profession;
  experiences: Experience[];
  education: Education[];
  languages: Language[];
  
  onReset: () => void;

  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onDesiredRoleChange: (value: string) => void;
  onSummaryChange: (value: string) => void;
  onSkillsChange: (value: string) => void;
  onAddExperience: () => void;
  onRemoveExperience: (index: number) => void;
  onExperienceChange: (
    index: number,
    field: keyof Omit<Experience, "id">,
    value: string
  ) => void;

  onAddEducation: () => void;
  onRemoveEducation: (index: number) => void;
  onEducationChange: (
    index: number,
    field: keyof Omit<Education, "id">,
    value: string
  ) => void;
  
  onAddLanguage: () => void;
  onRemoveLanguage: (index: number) => void;
  onLanguageChange: (
    index: number,
    field: keyof Omit<Language, "id">,
    value: string
  ) => void;
  
  onDownloadPDF: () => void;

  

};

export default function CVForm({
  name,
  email,
  desiredRole,
  summary,
  skills,
  selectedProfession,
  experiences,
  education,
  languages,

  onNameChange,
  onEmailChange,
  onDesiredRoleChange,
  onSummaryChange,
  onSkillsChange,

  onAddExperience,
  onRemoveExperience,
  onExperienceChange,

  onAddEducation,
  onRemoveEducation,
  onEducationChange,

  onAddLanguage,
  onRemoveLanguage,
  onLanguageChange,

  onReset,
  onDownloadPDF,
}: CVFormProps) {
  function addSkill(skill: string) {
    const currentSkills = skills
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (!currentSkills.includes(skill)) {
      onSkillsChange([...currentSkills, skill].join(", "));
    }
  }

  function addAllSkills() {
    if (!selectedProfession) return;

    const currentSkills = skills
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const allSkills = [
      ...new Set([...currentSkills, ...selectedProfession.skills]),
    ];

    onSkillsChange(allSkills.join(", "));
  }

  return (
    <div className="w-1/2 space-y-4">
      <h1 className="text-2xl font-bold">
        Criar Currículo - {name || "Novo"}
      </h1>

      <input
        className="w-full rounded border p-3"
        placeholder="Nome"
        value={name}
        onChange={(event) => onNameChange(event.target.value)}
      />

      <input
        className="w-full rounded border p-3"
        placeholder="Email"
        value={email}
        onChange={(event) => onEmailChange(event.target.value)}
      />

      <div>
        <label className="mb-1 block font-medium">
          Cargo desejado
        </label>

        <input
          type="text"
          value={desiredRole}
          onChange={(event) =>
            onDesiredRoleChange(event.target.value)
          }
          placeholder="Ex: Desenvolvedor Front-end"
          className="w-full rounded-lg border p-2"
        />

        {selectedProfession && (
          <div className="mt-3 rounded-lg border bg-gray-50 p-4">
            <h3 className="mb-2 font-semibold">
              Skills sugeridas
            </h3>

            <div>
              {selectedProfession.skills.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => addSkill(skill)}
                  className="mb-2 mr-2 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 transition hover:bg-blue-200"
                >
                  + {skill}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={addAllSkills}
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              + Adicionar todas as skills
            </button>
          </div>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium">
          Resumo profissional
        </label>

        <textarea
          value={summary}
          onChange={(event) =>
            onSummaryChange(event.target.value)
          }
          placeholder="Conte um pouco sobre seu perfil profissional..."
          rows={5}
          className="w-full rounded-lg border p-3"
        />

        {selectedProfession && (
          <button
            type="button"
            onClick={() =>
              onSummaryChange(selectedProfession.summary)
            }
            className="mt-2 rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
          >
            ✨ Usar resumo sugerido
          </button>
        )}
      </div>

        <h2 className="text-lg font-semibold">
  Experiência Profissional
</h2>

{experiences.map((experience, index) => (
  <div
    key={experience.id}
    className="space-y-3 rounded-lg border p-4"
  >
    <div className="flex items-center justify-between">
      <h3 className="font-semibold">
        Experiência {index + 1}
      </h3>

      {experiences.length > 1 && (
        <button
          type="button"
          onClick={() => onRemoveExperience(index)}
          className="rounded bg-red-500 px-3 py-1 text-sm text-white"
        >
          Remover
        </button>
      )}
    </div>

    <input
      className="w-full rounded border p-3"
      placeholder="Empresa"
      value={experience.company}
      onChange={(event) =>
        onExperienceChange(
          index,
          "company",
          event.target.value
        )
      }
    />

    <input
      className="w-full rounded border p-3"
      placeholder="Cargo"
      value={experience.position}
      onChange={(event) =>
        onExperienceChange(
          index,
          "position",
          event.target.value
        )
      }
    />

    <input
      className="w-full rounded border p-3"
      placeholder="Data de início"
      value={experience.startDate}
      onChange={(event) =>
        onExperienceChange(
          index,
          "startDate",
          event.target.value
        )
      }
    />

    <input
      className="w-full rounded border p-3"
      placeholder="Data de término"
      value={experience.endDate}
      onChange={(event) =>
        onExperienceChange(
          index,
          "endDate",
          event.target.value
        )
      }
    />

    <textarea
      className="w-full rounded border p-3"
      placeholder="Descrição da experiência"
      value={experience.description}
      onChange={(event) =>
        onExperienceChange(
          index,
          "description",
          event.target.value
        )
      }
    />
  </div>
))}

<button
  type="button"
  onClick={onAddExperience}
  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
  + Adicionar experiência
</button>

<h2 className="text-lg font-semibold">
  Formação Acadêmica
</h2>

{education.map((educationItem, index) => (
  <div
    key={educationItem.id}
    className="space-y-3 rounded-lg border p-4"
  >
    <div className="flex items-center justify-between">
      <h3 className="font-semibold">
        Formação {index + 1}
      </h3>

      {education.length > 1 && (
        <button
          type="button"
          onClick={() => onRemoveEducation(index)}
          className="rounded bg-red-500 px-3 py-1 text-sm text-white"
        >
          Remover
        </button>
      )}
    </div>

    <input
      className="w-full rounded border p-3"
      placeholder="Instituição"
      value={educationItem.institution}
      onChange={(event) =>
        onEducationChange(
          index,
          "institution",
          event.target.value
        )
      }
    />

    <input
      className="w-full rounded border p-3"
      placeholder="Curso"
      value={educationItem.course}
      onChange={(event) =>
        onEducationChange(
          index,
          "course",
          event.target.value
        )
      }
    />

    <input
      className="w-full rounded border p-3"
      placeholder="Data de início"
      value={educationItem.startDate}
      onChange={(event) =>
        onEducationChange(
          index,
          "startDate",
          event.target.value
        )
      }
    />

    <input
      className="w-full rounded border p-3"
      placeholder="Data de término"
      value={educationItem.endDate}
      onChange={(event) =>
        onEducationChange(
          index,
          "endDate",
          event.target.value
        )
      }
    />
  </div>
))}

<button
  type="button"
  onClick={onAddEducation}
  className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
>
  + Adicionar formação
</button>

<h2 className="text-lg font-semibold">
  Idiomas
</h2>

{languages.map((language, index) => (
  <div
    key={language.id}
    className="space-y-3 rounded-lg border p-4"
  >
    <div className="flex items-center justify-between">
      <h3 className="font-semibold">
        Idioma {index + 1}
      </h3>

      {languages.length > 1 && (
        <button
          type="button"
          onClick={() => onRemoveLanguage(index)}
          className="rounded bg-red-500 px-3 py-1 text-sm text-white"
        >
          Remover
        </button>
      )}
    </div>

    <input
      className="w-full rounded border p-3"
      placeholder="Idioma"
      value={language.name}
      onChange={(event) =>
        onLanguageChange(
          index,
          "name",
          event.target.value
        )
      }
    />

    <input
      className="w-full rounded border p-3"
      placeholder="Nível"
      value={language.level}
      onChange={(event) =>
        onLanguageChange(
          index,
          "level",
          event.target.value
        )
      }
    />
  </div>
))}

<button
  type="button"
  onClick={onAddLanguage}
  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
  + Adicionar idioma
</button>

      <button
        type="button"
        onClick={onReset}
        className="rounded-lg border px-4 py-2 font-medium"
       >
        Limpar currículo
      </button>

      <button 
        type="button"
        onClick={onDownloadPDF}
        className="w-full rounde bg-black py-3 text-white"
      >
        Baixar PDF
      </button>

      <input
        className="w-full rounded border p-3"
        placeholder="Skills (separadas por vírgula)"
        value={skills}
        onChange={(event) =>
          onSkillsChange(event.target.value)
        }
      />
    </div>
  );
}