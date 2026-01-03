import events from "./categories/events";
import inter_fractional_events from "./categories/inter-fractional-events";
import lectures from "./categories/lectures";
import trainings from "./categories/trainings";

export type DataItem = {
  [key: string]: string[];
};

interface Data {
  [category: string]: DataItem
}

export const data: Data = {
  lectures: lectures,
  trainings: trainings,
  events: events,
  inter_fractional_events: inter_fractional_events,
};

interface Translation {
  [key: string]: string;
}

export const translation: Translation = {
  lectures: "Лекции",
  trainings: "Тренировки",
  events: "Мероприятия",
  inter_fractional_events: "МФ Мероприятия",
};
