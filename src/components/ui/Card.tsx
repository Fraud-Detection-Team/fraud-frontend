import type { CSSProperties } from 'react';
import './Card.css'; // Create this file (see CSS below)

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  className = '', 
  style 
}) => {
  return (
    <div className={`card ${className}`} style={style}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};