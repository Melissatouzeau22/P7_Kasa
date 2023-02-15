import React from "react";
import "../Tag/Tag.css";

const TagsLogement = (props) => {
  return props.tags.map((tags, index) => {
    return (
      <span className="logement_tag" key={index}>
        {" "}
        {tags}
      </span>
    );
  });
};
export default TagsLogement;
