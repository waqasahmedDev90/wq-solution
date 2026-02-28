import React from 'react';

// ==========================================
// 1. PRIMARY BUTTON (Shine Effect + Arrow Rotate)
// ==========================================
export const PrimaryButton = ({ 
  children,       
  href,           
  onClick,        
  className = "", 
  showIcon = true,
  iconClass = "icon-arrow-right" 
}) => {
  
  const content = (
    <>
      {/* Button Text */}
      <span className="relative z-10">{children}</span>
      
      {/* Icon with Rotate Animation */}
      {showIcon && (
        <div className="relative z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:-rotate-45">
          <i className={`${iconClass} text-[#6D00F1] text-lg font-bold`}></i>
        </div>
      )}

      {/* Glassmorphism Shine Animation on Hover */}
      <div className="absolute inset-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out z-0 pointer-events-none"></div>
    </>
  );

  const baseClasses = `group relative overflow-hidden inline-flex items-center justify-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-[#6D00F1] to-[#9700FC] shadow-[0_0_15px_rgba(109,0,241,0.3)] hover:shadow-[0_0_30px_rgba(151,0,252,0.6)] transition-all duration-300 ${className}`;

  if (href) {
    return <a href={href} className={baseClasses}>{content}</a>;
  }
  return <button onClick={onClick} className={baseClasses}>{content}</button>;
};


// ==========================================
// 2. SECONDARY BUTTON (Bg Fill + Arrow Slide)
// ==========================================
export const SecondaryButton = ({ 
  children, 
  href, 
  onClick, 
  className = "",
  showIcon = true,
  iconClass = "icon-arrow-right"
}) => {
  
  const content = (
    <>
      {/* Button Text */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      
      {/* Icon with Slide Right Animation */}
      {showIcon && (
         <i className={`${iconClass} relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1.5`}></i>
      )}

      {/* Background Fill Animation (Left to Right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6D00F1] to-[#9700FC] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>
    </>
  );

  // Border disappears when background fills
  const baseClasses = `group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-gray-300 font-semibold text-sm border border-white/30 transition-all duration-300 hover:border-transparent ${className}`;

  if (href) {
    return <a href={href} className={baseClasses}>{content}</a>;
  }
  return <button onClick={onClick} className={baseClasses}>{content}</button>;
};