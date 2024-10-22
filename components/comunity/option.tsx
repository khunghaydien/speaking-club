import React from "react";
import Button from "@/components/button";
import {
  IconApplication,
  IconCoffee,
  IconFacebook,
  IconPlus,
  IconPrivacy,
} from "@/components/icon";

type ButtonAction = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: "default" | "outline" | "destructive" | "secondary" | "ghost";
};

function OptionCommunity() {
  const buttonActions: ButtonAction[] = [
    {
      icon: <IconCoffee size="none" variant="none" />,
      label: "Buy me a coffee",
      onClick: () => {},
      variant: "default",
    },
    {
      icon: <IconPlus size="none" variant="none" />,
      label: "Create a new room",
      onClick: () => {},
      variant: "outline",
    },
    {
      icon: <IconApplication size="none" variant="none" />,
      label: "Speaking club app",
      onClick: () => {},
      variant: "outline",
    },
    {
      icon: <IconPrivacy size="none" variant="none" />,
      label: "Privacy policy",
      onClick: () => {},
      variant: "outline",
    },
    {
      icon: <IconFacebook size="none" variant="none" />,
      label: "Fanpage",
      onClick: () => {},
      variant: "outline",
    },
  ];
  return (
    <div className="flex items-center gap-3">
      {buttonActions.map((option, index) => (
        <Button
          key={index}
          className="flex gap-2 items-center flex-grow"
          variant={option.variant}
          onClick={option.onClick}
        >
          {option.icon} {option.label}
        </Button>
      ))}
    </div>
  );
}

export default OptionCommunity;
