import { AppCard } from "./ui";

interface NewsProps {
  title: string;
  children: React.ReactNode;
}

export const News = ({ title, children }: NewsProps) => {
  return (
    <div className="flex-col gap-4">
      <AppCard title={title}>{children}</AppCard>
    </div>
  );
};
