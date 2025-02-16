interface AdminHeadingProps {
  title: string;
  description: string;
  className?: string;
}

const AdminHeading = ({ title, description, className }: AdminHeadingProps) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default AdminHeading;
