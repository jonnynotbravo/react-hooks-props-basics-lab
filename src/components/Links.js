import React from "react";

const Links = (prop) => {
  return (
    <>
      <h3>Links</h3>
          <a href={prop.github}>{prop.github}</a>
          <a href={prop.linkedin}>{prop.linkedin}</a>
    </>
  );
};

export default Links;
