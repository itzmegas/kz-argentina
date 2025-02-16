import { transformItems, transformItemsAsync } from "@/utils";
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

export const adaptTopFive = (data: TopFiveResponse) => {
  const { playerTop5, countryTop5 } = data;

  /*  let requiredFlags: string[] = [];

  for (const f of playerTop5) {
    if (!requiredFlags.some((flag) => flag === f.country)) {
      requiredFlags.push(f.country);
    }
  }

  for (const f of countryTop5) {
    if (!requiredFlags.some((flag) => flag === f.country)) {
      requiredFlags.push(f.country);
    }
  } */

  return {
    playerTop5: transformItems(playerTop5, adaptTopFivePlayer),
    countryTop5: transformItems(countryTop5, adaptTopFiveCountry),
  };
};
