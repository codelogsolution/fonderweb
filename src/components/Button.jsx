import { cn } from "../utils/cn";

export default function Button({
  as: Tag = "button",
  variant = "brand",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "btn",
        variant === "brand" ? "btn-brand" : "btn-ghost",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
