import { Experience } from "./experience"; 
import { Education } from "./education";
import { Language } from "./language";

export type CVData = {
   personalInfo:{
     name: string;
     email: string;
     desiredRole: string;
   };
   summary: string;
   skills: string;

   experiences: Experience[];
   education: Education[];
   languages: Language[];
};

export interface SavedCV {
  id: string;
  title: string;
  data: CVData;
}