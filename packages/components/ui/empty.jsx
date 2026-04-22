import React from "react";

const Empty = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-6 border rounded-lg bg-white ${className}`}
    >
      {children}
    </div>
  );
};


const EmptyHeader = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col items-center gap-2 mb-4 ${className}`}>
      {children}
    </div>
  );
};


const EmptyMedia = ({ children, variant = "icon", className = "" }) => {
  const variants = {
    icon: "h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-600",
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};


const EmptyTitle = ({ children, className = "" }) => {
  return (
    <h3 className={`text-lg font-semibold ${className}`}>
      {children}
    </h3>
  );
};


const EmptyDescription = ({ children, className = "" }) => {
  return (
    <p className={`text-sm text-gray-500 max-w-sm ${className}`}>
      {children}
    </p>
  );
};


const EmptyContent = ({ children, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 mt-4 ${className}`}>
      {children}
    </div>
  );
};


export{
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
};