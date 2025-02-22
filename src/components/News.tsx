import { AppCard } from "./ui";

interface NewsProps {
  title: string;
  children: React.ReactNode;
}

export const News = ({ title, children }: NewsProps) => {
  return <AppCard title={title}>{children}</AppCard>;
};
