"use client";

import { User } from "next-auth";
import React from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { ListBox, ListBoxItem } from "react-aria-components";
import Icon from "~/components/Icon";
import Text from "~/components/Text";
import { IconDefinition } from "~/components/icon/index";
import { useAuth } from "~/context/AuthContext";
import { styles } from "~/screens/Settings.css";
import { sprinkles } from "~/styles/sprinkles.css";
import { spacing } from "~/styles/variables.css";

type Props = {
  user: User;
};

type UserSettingsMenuItem = { icon?: IconDefinition; text: string };

const UserSettingsMenu = ({ user }: Props) => {
  const searchParams = useSearchParams();
  const settings = searchParams.get("user_settings");

  const userSettings: UserSettingsMenuItem[][] = [
    [
      { icon: "profile", text: "Profile" },
      { icon: "bookmark", text: "Library" },
      { icon: "story", text: "Stories" },
      { icon: "stats", text: "Stats" },
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

  return (
    <>
      {settings && (
        <div>
          <ListBox className={styles.userSettingsContainer}>
            {userSettings.map((group, index) => {
              return (
                <ListBoxItem key={index}>
                  <div className={styles.settingGroup} key={index}>
                    {group.map(({ text, icon }, index) => {
                      return (
                        <div key={index} className={styles.settingItem}>
                          {icon && (
                            <Icon icon={icon} size={"sm"} color="primary" />
                          )}
                          <Text variant="subtitle">{text}</Text>
                        </div>
                      );
                    })}
                  </div>
                  {index !== userSettings.length - 1 && (
                    <hr
                      className={sprinkles({
                        my: "s1",
                      })}
                    />
                  )}
                </ListBoxItem>
              );
            })}
          </ListBox>
        </div>
      )}
    </>
  );
};

export default UserSettingsMenu;
