// please create next componente template

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import NavigationBar from "./navbar/NavigationBar";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <>
      <NavigationBar />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </div>
    </>
  );
}
