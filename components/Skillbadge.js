export default function Skillbadge({ children }) {
  if (typeof children === 'string' && children.includes(',')) {
    return (
      <div className="flex flex-wrap gap-2">
        {children.split(',').map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill.trim()}
          </span>
        ))}
      </div>
    );
  }

  return <span className="skill-badge">{children}</span>;
};
