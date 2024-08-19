import React, { useState } from "react";
import { Button, TextInput, Inline } from "@sanity/ui";
import { nanoid } from "nanoid";

export const PostIdInput = ({ value, ...props }) => {
  const [generatedId, setGeneratedId] = useState("");

  const handleGenerateId = () => {
    const newId = nanoid();

    setGeneratedId(newId);
  };

  return (
    <Inline space={[3, 3, 4, 5]}>
      <TextInput value={generatedId} {...props} />
      <Button
        fontSize={[1]}
        padding={[3]}
        mode="ghost"
        text="Generate"
        onClick={handleGenerateId}
      />
    </Inline>
  );
};
