import { FunctionComponent, useState } from "react";
import { PauseButtonIcon } from "./PauseButtonIcon";
import { Howl } from "howler";
import { PlayButtonIcon } from "./PlayButtonIcon";

interface TextAudioParam {
  text: string;
  audioPath: string;
  textColour?: string;
  bgColour?: string;
  children?: any;
}
const TextAudio: FunctionComponent<TextAudioParam> = ({
  text = "default",
  textColour = "#000000",
  bgColour = "#ffa033",
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
    <span
      style={{ lineHeight: "32px" }}
      onClick={() => {
        pauseSound();
        setPlaying(false);
      }}
    >
      <PauseButtonIcon />
    </span>
  ) : (
    <span
      style={{ lineHeight: "32px" }}
      onClick={() => {
        playSound();
        setPlaying(true);
      }}
    >
      <PlayButtonIcon />
    </span>
  );

  return (
    <span
      style={{
        borderRadius: "4px",
        paddingLeft: "8px",
        paddingRight: "8px",
        paddingBottom: "6px",
        paddingTop: "2px",
        color: textColour,
        background: bgColour,
      }}
    >
      {icon}
      <span
        style={{
          paddingLeft: "8px",
          textIndent: "800px",
        }}
      >
        {text}
      </span>
    </span>
  );
};

const Demo = () => {
  return (
    <div>
      So then he said
      <TextAudio
        audioPath="./song18.mp3"
        text="Hello there everyone Hello there everyone Hello there everyone Hello there everyone Hello there everyone Hello there everyone Hello there everyone Hello there everyone"
      ></TextAudio>
      wowsers what a line that was
    </div>
  );
};
