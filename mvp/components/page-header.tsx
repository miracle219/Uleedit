interface PageHeaderProps {
  className?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}

export default function PageHeader({
  className,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-10 ${className || ""}`}>
      {title}
      {description}
    </div>
  );
}
