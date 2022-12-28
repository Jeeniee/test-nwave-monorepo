import { ReactNode } from "react";

export const TestButton = ({
  children,
  onClick,
}: {
  children: string | ReactNode;
  onClick?: () => void;
}) => {
  return <button onClick={onClick}>{children} for test</button>;
};
