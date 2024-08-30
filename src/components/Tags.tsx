"use client";

import React, { useRef, useEffect, useState } from "react";
import { Post } from "@prisma/client";
import { ListBox, ListBoxItem } from "react-aria-components";
import Icon from "~/components/Icon";
import { PostsQueryResult } from "~/sanity/types";
import { Categories, Category, Posts } from "~/types";
import { styles } from "~/components/styles/Tags.css";
import clsx from "clsx";
import { sprinkles } from "~/styles/sprinkles.css";

type Props = {
  categories: Categories;
};

type ChevronIconProps = {
  className?: string;
  onSlide: () => void;
};

const ChevronIcon = ({ className, onSlide }: ChevronIconProps) => {
  const { icon, chevron } = styles;

  return (
    <Icon
      icon="chevron"
      color="primary"
      size="xs"
      className={clsx(icon, chevron, className)}
      onClick={onSlide}
    />
  );
};

const Tags = ({ categories }: Props) => {
  const [hasSlid, setHasSlid] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);
  const firstItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasSlid(!entry.isIntersecting);
      },
      { threshold: 1 },
    );

    if (firstItemRef.current) {
      observer.observe(firstItemRef.current);
    }

    return () => {
      if (firstItemRef.current) {
        observer.unobserve(firstItemRef.current);
      }
    };
  }, []);

  const { tags, listBoxWrapper, listBox, listItem, icon } = styles;

  const slideForward = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const slideBack = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  return (
    <div className={tags}>
      <ChevronIcon
        onSlide={slideBack}
        className={sprinkles({
          display: hasSlid ? "block" : "none",
        })}
      />
      <Icon
        icon="plus"
        color="primary"
        size="xs"
        className={clsx(
          icon,
          sprinkles({
            display: hasSlid ? "none" : "block",
          }),
        )}
      />
      <div className={listBoxWrapper}>
        <ListBox
          selectionMode="single"
          ref={ref}
          aria-label="Filtered category"
          className={listBox}
        >
          {categories.map((category, index) => (
            <ListBoxItem
              ref={index == 0 ? firstItemRef : null}
              className={listItem}
            >
              {category.title}
            </ListBoxItem>
          ))}
        </ListBox>
      </div>
      <ChevronIcon onSlide={slideForward} />
    </div>
  );
};

export default Tags;
