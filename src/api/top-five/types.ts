import type { TopCountry, TopPlayer } from "@/models";

export type TopFiveResponse = {
  playerTop5: TopPlayer[];
  countryTop5: TopCountry[];
};

type AdaptedTopPlayer = {
  playerId: number;
  country: string;
  numberOfRecords: number;
  name: string;
};

type AdaptedTopCountry = {
  country: string;
  name: string;
  numberOfRecords: number;
};

export type AdaptedTopFiveResponse = {
  playerTop5: AdaptedTopPlayer[];
  countryTop5: AdaptedTopCountry[];
};
