import React, { FunctionComponent, useState } from "react";
import { PauseButtonIcon } from "./icons/PauseButtonIcon";
import { Howl } from "howler";
import { PlayButtonIcon } from "./icons/PlayButtonIcon";

interface TextAudioParam {
  text: string;
  audioPath: string;
  textColour?: string;
  bgColour?: string;
  children?: any;
}

export const TextAudio: FunctionComponent<TextAudioParam> = ({
  text = "default",
  textColour = "#000000",
  bgColour = "#ffa033",
  // iconColour = "#000000",
  audioPath,
  children,
}) => {
  const [sound, setSound] = useState(
    new Howl({
      src: [audioPath],
      onplay: () => {
        console.log("I am being played");
      },
    })
  );
  const [playing, setPlaying] = useState(false);
  const playSound = () => {
    sound.play();
  };
  const pauseSound = () => {
    sound.pause();
  };

  const icon = playing ? (
    <PauseButtonIcon
      onClick={() => {
        pauseSound();
        setPlaying(false);
      }}
      lineHeight="32px"
    />
  ) : (
    <PlayButtonIcon
      onClick={() => {
        playSound();
        setPlaying(true);
      }}
      lineHeight="32px"
    />
  );

  return (
    <span
      style={{
        borderRadius: "4px",
        paddingLeft: "8px",
        paddingRight: "8px",
        paddingBottom: "4px",
        paddingTop: "2px",
        color: textColour,
        background: bgColour,
      }}
    >
      {icon}
      <span
        style={{
          paddingLeft: "8px",
          textIndent: "8px",
        }}
      >
        {text}
      </span>
    </span>
  );
};