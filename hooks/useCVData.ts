"use client";

import { useState } from "react";

import { CVData } from "@/types/cv-data";
import { Experience } from "@/types/experience";
import { Education } from "@/types/education";
import { Language } from "@/types/language";

const initialCVData: CVData = {
  personalInfo: {
    name: "",
    email: "",
    desiredRole: "",
  },

  summary: "",
  skills: "",

  experiences: [
    {
      id: "experience-1",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],

  education: [
    {
      id: "education-1",
      institution: "",
      course: "",
      startDate: "",
      endDate: "",
    },
  ],

  languages: [
    {
      id: "language-1",
      name: "",
      level: "",
    },
  ],
};

export function useCVData() {
  const [cvData, setCvData] = useState<CVData>(initialCVData);

  function updatePersonalInfo(
    field: keyof CVData["personalInfo"],
    value: string
  ) {
    setCvData((currentData) => ({
      ...currentData,

      personalInfo: {
        ...currentData.personalInfo,
        [field]: value,
      },
    }));
  }

  function updateSummary(value: string) {
    setCvData((currentData) => ({
      ...currentData,
      summary: value,
    }));
  }

  function updateSkills(value: string) {
    setCvData((currentData) => ({
      ...currentData,
      skills: value,
    }));
  }

  function addExperience() {
    setCvData((currentData) => ({
      ...currentData,

      experiences: [
        ...currentData.experiences,
        {
          id: crypto.randomUUID(),
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  }

  function removeExperience(index: number) {
    setCvData((currentData) => ({
      ...currentData,

      experiences: currentData.experiences.filter(
        (_, currentIndex) => currentIndex !== index
      ),
    }));
  }

  function updateExperience(
    index: number,
    field: keyof Omit<Experience, "id">,
    value: string
  ) {
    setCvData((currentData) => ({
      ...currentData,

      experiences: currentData.experiences.map(
        (experience, currentIndex) =>
          currentIndex === index
            ? {
                ...experience,
                [field]: value,
              }
            : experience
      ),
    }));
  }

  function addEducation() {
    setCvData((currentData) => ({
      ...currentData,

      education: [
        ...currentData.education,
        {
          id: crypto.randomUUID(),
          institution: "",
          course: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  }

  function removeEducation(index: number) {
    setCvData((currentData) => ({
      ...currentData,

      education: currentData.education.filter(
        (_, currentIndex) => currentIndex !== index
      ),
    }));
  }

  function updateEducation(
    index: number,
    field: keyof Omit<Education, "id">,
    value: string
  ) {
    setCvData((currentData) => ({
      ...currentData,

      education: currentData.education.map(
        (educationItem, currentIndex) =>
          currentIndex === index
            ? {
                ...educationItem,
                [field]: value,
              }
            : educationItem
      ),
    }));
  }

  function addLanguage() {
    setCvData((currentData) => ({
      ...currentData,

      languages: [
        ...currentData.languages,
        {
          id: crypto.randomUUID(),
          name: "",
          level: "",
        },
      ],
    }));
  }

  function removeLanguage(index: number) {
    setCvData((currentData) => ({
      ...currentData,

      languages: currentData.languages.filter(
        (_, currentIndex) => currentIndex !== index
      ),
    }));
  }

  function updateLanguage(
    index: number,
    field: keyof Omit<Language, "id">,
    value: string
  ) {
    setCvData((currentData) => ({
      ...currentData,

      languages: currentData.languages.map(
        (language, currentIndex) =>
          currentIndex === index
            ? {
                ...language,
                [field]: value,
              }
            : language
      ),
    }));
  }

  function resetCVData() {
    setCvData(initialCVData)
  }

  return {
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
  };
}