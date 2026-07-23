import { CVData } from "@/types/cv-data";

const STORAGE_KEY = "cvzonte-cv";

export function saveCV(cvData: CVData) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cvData)
    );
}

export function loadCV(): CVData | null {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
        return null;
    }

    return JSON.parse(data);
}

export function clearCV() {
    localStorage.removeItem(STORAGE_KEY);
}