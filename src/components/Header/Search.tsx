import React from "react";
import Icon from "../Icon";
import { colorPalette } from "~/styles/variables.css";

type Props = {};

const Search = (props: Props) => {
  return (
    <div>
      <Icon icon="search" height="lg" color={colorPalette.btnPrimary} />
    </div>
  );
};

export default Search;
