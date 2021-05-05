import { format, parseISO } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

export const convertTimeStampToTimeString = (duration: number) => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const final = [hours, minutes, seconds].map((unit) => String(unit).padStart(2, "0")).join(":");

  return final;
};

export const formatDateTime = (value: Date | string, expectedFormat: string) => {
  const valueToFormat = typeof value === "string" ? parseISO(value) : value;
  return format(valueToFormat, expectedFormat, { locale: ptBr });
};
