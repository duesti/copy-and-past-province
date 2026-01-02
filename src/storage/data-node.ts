import type { Lectures } from "./categories/lectures";
import lectures from "./categories/lectures";

import type { Training } from "./categories/trainings";
import trainings from "./categories/trainings";

interface Data {
  lectures: Lectures;
  trainings: Training;
}

export const data: Data = {
  lectures: lectures,
  trainings: trainings,
};

interface Translation {
  lectures: string;
  trainings: string;
}

export const translation: Translation = {
  lectures: "Лекции",
  trainings: "Тренировки",
};
