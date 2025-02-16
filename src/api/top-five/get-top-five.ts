import { API_BASE_URL } from "astro:env/server";
import { get } from "../base";
import { adaptTopFive } from "./adapt";
import type { TopFiveResponse } from "./types";

export const getTopFive = async () => {
  const response = await get<TopFiveResponse>("/record/top5");
  const adaptResponse = adaptTopFive(response);

  return adaptResponse;
};
