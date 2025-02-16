import type { TopCountry, TopPlayer } from "@/models";

export type TopFiveResponse = {
  playerTop5: TopPlayer[];
  countryTop5: TopCountry[];
};

type AdaptedTop = {
  country: string;
  numberOfRecords: number;
  name: string;
};

export type AdaptedTopPlayer = AdaptedTop & {
  playerId: number;
};

export type AdaptedTopCountry = AdaptedTop;

export type AdaptedTopFiveResponse = {
  playerTop5: AdaptedTopPlayer[];
  countryTop5: AdaptedTopCountry[];
};
