"use client";

import { Post } from "@prisma/client";
import React from "react";
import { ListBox, ListBoxItem } from "react-aria-components";
import Icon from "~/components/Icon";
import { PostsQueryResult } from "~/sanity/types";
import { Categories, Category, Posts } from "~/types";
import { styles } from "~/components/styles/Tags.css";

type Props = {
  categories: Categories;
};

const ChevronIcon = () => {
  const { icon } = styles;

  return <Icon icon="chevron" color="primary" size="xs" className={icon} />;
};

const Tags = ({ categories }: Props) => {
  const { tags, listBox, listItem } = styles;

  return (
    <div className={tags}>
      <ChevronIcon />
      <ListBox
        aria-label="Filtered category"
        className={listBox}
        selectionMode="single"
      >
        {categories.map((category) => (
          <ListBoxItem className={listItem}>{category.title}</ListBoxItem>
        ))}
      </ListBox>
      <ChevronIcon />
    </div>
  );
};

export default Tags;
