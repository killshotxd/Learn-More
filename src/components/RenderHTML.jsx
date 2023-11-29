import React from "react";

const RenderHTML = ({ htmlContent }) => {
  return (
    <div className="mt-4" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default RenderHTML;
