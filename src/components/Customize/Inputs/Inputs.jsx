import React, { useState } from "react";
import Section from "../Section/Section";
import TextInputWithBtn from "./TextInputWithBtn/TextInputWithBtn";
import Select from "./TextInputWithBtn/Select";
import { reactions } from "@huddle01/iframe/types";
import Button from "./TextInputWithBtn/Button";
import { iframeApi, useEventListener } from "@huddle01/iframe";

function Inputs() {
  const [isRoomJoined, setIsRoomJoined] = useState(false);

  const [inputs, setInputs] = useState({
    redirectURLOnLeave: "",
    backgroundURL: "",
    avatarURL: "",
    logoURL: "",
  });

  const keys = {
    redirectURLOnLeave: "redirectUrlOnLeave",
    backgroundURL: "background",
    logoURL: "logoUrl",
  };

  const [reaction, setReaction] = useState("🎉");

  const onTextChange = (e) =>
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onReactionChange = (e) => setReaction(e.target.value);

  useEventListener("room:joined", () => {
    setIsRoomJoined(true);
  });

  return (
    <Section title="Inputs">
      {Object.keys(inputs).map((key) => (
        <TextInputWithBtn
          key={key}
          name={key}
          placeholder={`Paste ${key}`}
          value={inputs[key]}
          onChange={onTextChange}
          onClick={() => {
            if (key === "avatarURL") {
              return iframeApi.changeAvatarUrl(inputs.avatarURL);
            }

            iframeApi.initialize({
              [keys[key]]: inputs[key],
            });
          }}
        />
      ))}

      <div className="flex mt-3">
        <Select
          disabled={!isRoomJoined}
          value={reaction}
          options={reactions}
          onChange={onReactionChange}
        />
        <Button
          disabled={!isRoomJoined}
          onClick={() => isRoomJoined && iframeApi.sendReaction(reaction)}
        >
          Send Emoji
        </Button>
      </div>
    </Section>
  );
}

export default Inputs;
