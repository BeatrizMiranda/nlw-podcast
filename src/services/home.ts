import { api } from "./api";

export const getEpisodes = (params) => api.get("episodes", { params });
