import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type Props = {
  icon?: LucideIcon;
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export const SectionHeading = ({ icon: Icon, eyebrow, title, description, centered = true, className }: Props) => (
  <div className={cn("space-y-3", centered && "text-center max-w-2xl mx-auto", className)}>
    {Icon && (
      <div className={cn("size-12 rounded-2xl bg-accent text-primary grid place-items-center", centered && "mx-auto")}>
        <Icon className="size-6" />
      </div>
    )}
    {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-glow">{eyebrow}</p>}
    <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    {description && <p className="text-muted-foreground text-base md:text-lg">{description}</p>}
  </div>
);