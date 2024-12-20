interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-amber-200 text-lg font-semibold uppercase tracking-wider">
        {title}
      </h3>
      {children}
    </div>
  );
}
