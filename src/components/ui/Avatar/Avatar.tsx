import {
  Avatar as ShadcnAvatar,
  AvatarFallback,
  AvatarImage,
} from "../shadcn/avatar";

export const Avatar = () => (
  <ShadcnAvatar>
    <AvatarFallback>asd</AvatarFallback>
    <AvatarImage />
  </ShadcnAvatar>
);
