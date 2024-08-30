"use client";

import React from "react";
import Icon from "~/components/Icon";
import { styles } from "~/components/styles/Searchbar.css";
import { SearchField, Input } from "react-aria-components";

const Searchbar = () => {
  const { searchWrapper, mobile } = styles;

  return (
    <>
      <Icon icon="search" size="md" color="primary" className={mobile} />
      <SearchField className={searchWrapper}>
        <Icon icon="search" color="primary" />
        <Input type="text" placeholder="search" />
      </SearchField>
    </>
  );
};

export default Searchbar;
