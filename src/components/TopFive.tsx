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
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/shadcn/button";

type TopFiveProps = {
  data: AdaptedTopFiveResponse;
};

export const TopFive = (props: TopFiveProps) => {
  const { data } = props;
  const [top, setTop] = useState<AdaptedTopPlayer[] | AdaptedTopCountry[]>(
    data.playerTop5,
  );

  const isCountry = top === data.countryTop5;

  /*  setInterval(
    () => setTop(isCountry ? data.playerTop5 : data.countryTop5),
    1000 * 10,
  ); */

  return (
    <Card className="min-w-64">
      <CardHeader>
        <CardTitle className="flex items-center justify-center gap-5">
          {isCountry ? "Países" : "Jugadores"}
          <Button
            variant="ghost"
            size="icon"
            className="p-2 rounded-2xl hover:bg-card hover:text-black"
            onClick={() =>
              setTop(isCountry ? data.playerTop5 : data.countryTop5)
            }
          >
            <ChevronRight />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-col justify-center items-center p-0">
        {top.map((item, i) => {
          const isPlayer = item.hasOwnProperty("playerId");
          return (
            <div
              key={
                isPlayer ? (item as AdaptedTopPlayer).playerId : item.country
              }
              className={`flex justify-between items-center text-sm px-4 py-1 ${isOddNumber(i) ? "bg-transparent" : "bg-striped"}`}
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
