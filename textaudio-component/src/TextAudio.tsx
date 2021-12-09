import React, { FunctionComponent, useState } from "react";
import { PauseButtonIcon } from "./PauseButtonIcon";
import { Howl } from "howler";
import { PlayButtonIcon } from "./PlayButtonIcon";
import { Center, Heading, VStack } from "@chakra-ui/react";
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
    <VStack>
      <div>
        Demo of <a href="https://github.com/Moop204/textaudio">textaudio</a>{" "}
        component using an exerpt from a{" "}
        <a href="https://en.wikipedia.org/wiki/Misogyny_Speech">
          wikipedia article
        </a>
        .
      </div>
      <Center paddingLeft="20%" paddingRight="20%">
        <VStack>
          <Heading>Misogyny Speech</Heading>
          <div>...</div>
          <Heading
            as="h3"
            size="lg"
            alignSelf={"start"}
            textDecoration="underline"
          >
            Background
          </Heading>
          <div>...</div>
          <div>
            Her speech was part of the no confidence motion to have Peter
            Slipper removed as Speaker over crude and sexist texts sent to his
            aide.
            <TextAudio
              audioPath="./abbott-comment.mp3"
              text={
                'Abbott stated that every day Gillard supported Slipper was "another day of shame for a government which should already have died of shame"'
              }
            />
            . Gillard made statements in support of Slipper and linked Abbott's
            motion to remarks made by Alan Jones in the then-recent Alan Jones
            shame controversy where the broadcaster said that Julia Gillard's
            father had died of shame because of his daughter's lies. Gillard
            said that
            <TextAudio
              audioPath="./gillard-speech.mp3"
              text={
                '"every day in every way" Abbott was sexist and misogynist.'
              }
            />
          </div>
          <div>...</div>
        </VStack>
      </Center>
    </VStack>
  );
};
