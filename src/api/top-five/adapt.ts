import { transformItemsAsync } from "@/utils";
import type { AdaptedTopFiveResponse, TopFiveResponse } from "./types";
import type { TopPlayer, TopCountry } from "@/models";

const adaptTopFivePlayer = (playerTop: TopPlayer) => {
  const { playerName, ...rest } = playerTop;
  return {
    ...rest,
    name: playerName,
  };
};

const adaptTopFiveCountry = (countryTop: TopCountry) => {
  const { countryName, numberOfCountryRecords, ...rest } = countryTop;
  return {
    ...rest,
    name: countryName,
    numberOfRecords: numberOfCountryRecords,
  };
};

export const adaptTopFive = async (data: TopFiveResponse) => {
  const { playerTop5, countryTop5 } = data;

  return {
    playerTop5: await transformItemsAsync(playerTop5, adaptTopFivePlayer),
    countryTop5: await transformItemsAsync(countryTop5, adaptTopFiveCountry),
  };
};
