import { useState } from "react";
import type {
  AdaptedTopFiveResponse,
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

type TopFiveProps = {
  data: AdaptedTopFiveResponse;
};

export const TopFive = (props: TopFiveProps) => {
  const { data } = props;

  const [top, setTop] = useState(data.playerTop5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Players</CardTitle>
      </CardHeader>
      <CardContent>
        {top.map((item) => (
          <p key={item.playerId}>{item.name}</p>
        ))}
      </CardContent>
    </Card>
  );
};
