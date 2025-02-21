import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";

interface AppCardProps extends React.HTMLAttributes<HTMLDivElement> {
  headerChildren?: React.ReactElement;
}

export const AppCard = (props: AppCardProps) => {
  const { children, headerChildren, title } = props;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {headerChildren}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
