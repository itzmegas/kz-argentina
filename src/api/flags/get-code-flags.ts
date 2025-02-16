// import { API_FLAGS_URL } from "astro:env/server";
import { get } from "../base";

type GetCodeFlagsResponse = {
  codes: string;
};

export const getCodeFlags = async () => {
  const response = await get<GetCodeFlagsResponse>(`/en/codes.json`);
};
