import { useEffect, useState } from "react";
import type {
  AdaptedTopFiveResponse,
  AdaptedTopCountry,
  AdaptedTopPlayer,
  TopFiveResponse,
} from "@/api/top-five/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { API_FLAGS_URL } from "astro:env/client";
import { isOddNumber } from "@/utils";

type TopFiveProps = {
  data: AdaptedTopFiveResponse;
};

export const TopFive = (props: TopFiveProps) => {
  const { data } = props;
  const [top, setTop] = useState<AdaptedTopPlayer[] | AdaptedTopCountry[]>(
    data.playerTop5,
  );

  setInterval(
    () => setTop(top === data.countryTop5 ? data.playerTop5 : data.countryTop5),
    1000 * 10,
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Players</CardTitle>
      </CardHeader>
      <CardContent className="grid justify-center items-center gap-2">
        {top.map((item, i) => {
          const isPlayer = item.hasOwnProperty("playerId");
          return (
            <div
              key={
                isPlayer ? (item as AdaptedTopPlayer).playerId : item.country
              }
              className={`flex justify-between items-center min-w-52 text-sm ${isOddNumber(i) ? "bg-transparent" : "bg-slate-300"}`}
            >
              <div>
                <img
                  src={`${API_FLAGS_URL}/w20/${item.country}.png`}
                  width="20"
                  alt={`flag of ${item.country}`}
                />
              </div>
              <p>{item.name}</p>
              <p>{item.numberOfRecords}</p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
