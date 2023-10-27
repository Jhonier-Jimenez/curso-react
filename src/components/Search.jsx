import { memo } from "react";

const Search = ({ onChange }) => {
  console.log("SEARCH COMPONENT RENDERED");

  return (
    <input
      type="text"
      placeholder="Search users"
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default memo(Search);
