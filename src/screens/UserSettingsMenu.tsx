"use client";

import { User } from "next-auth";
import React from "react";
import { ListBox, ListBoxItem } from "react-aria-components";
import Icon from "~/components/Icon";
import { IconDefinition } from "~/components/icon/index";
import { useAuth } from "~/context/AuthContext";

type Props = {
  user: User;
};

type UserSettingsMenuItem = { icon?: IconDefinition; text: string };

const UserSettingsMenu = ({ user }: Props) => {
  const userSettings: UserSettingsMenuItem[][] = [
    [
      { icon: "darkMode", text: "Profile" },
      { icon: "darkMode", text: "Library" },
      { icon: "darkMode", text: "Stories" },
      { icon: "darkMode", text: "Stats" },
    ],
    [
      { text: "Settings" },
      { text: "Refine recomendations" },
      { text: "Manage Publications" },
      { text: "Help" },
    ],
    [{ text: "Beome a member" }, { text: "Gift a membership" }],
    [{ text: "Sign out" }],
  ];

  const { showUserSettings } = useAuth();

  if (!showUserSettings) {
    return <></>;
  }

  return (
    <div>
      <ListBox>
        {userSettings.map((group, index) => {
          console.log(group.length);
          return (
            <ListBoxItem key={index}>
              <div key={index}>
                {group.map(({ text, icon }, index) => {
                  console.log(index, group.length - 1);
                  return (
                    <div key={index}>
                      {icon && <Icon icon={icon} size={"sm"} />}
                      <span>{text}</span>
                    </div>
                  );
                })}
                {index !== userSettings.length - 1 && <hr />}
              </div>
            </ListBoxItem>
          );
        })}
      </ListBox>
    </div>
  );
};

export default UserSettingsMenu;
