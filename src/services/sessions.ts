import { api } from "./";

export const setEvaluation = async (formData: any, evaluation: any) => {
  const response = await api.post("/avaliacao", {
    name: formData.name,
    comments: formData.comments,
    evaluation: evaluation,
  });
  return response;
};
