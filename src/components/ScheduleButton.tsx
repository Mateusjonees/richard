import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface ScheduleButtonProps {
  variant?: "default" | "blue" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  showIcon?: boolean;
}

export function ScheduleButton({
  variant = "blue",
  size = "default",
  className = "",
  showIcon = true,
}: ScheduleButtonProps) {
  const handleSchedule = () => {
    // Abre o Calendly em uma nova aba
    // IMPORTANTE: Substitua "seu-link-calendly" com seu link do Calendly
    window.open(
      "https://calendly.com/seu-link-calendly",
      "_blank",
      "width=800,height=600"
    );
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleSchedule}
      className={className}
    >
      {showIcon && <Calendar className="mr-2 h-4 w-4" />}
      Agendar Consulta
    </Button>
  );
}
