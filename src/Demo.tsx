import { VStack, Center, Heading } from "@chakra-ui/react";
import { TextAudio } from "./component/TextAudio";

/**
 * Example of TextAudio components using voice clips during an Australian parliament debate.
 *
 */
export const Demo = () => {
  return (
    <VStack>
      <div>
        Demo of <a href="https://github.com/Moop204/textaudio">textaudio</a>{" "}
        component using an exerpt from this{" "}
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
          <div>
            {" "}
            Over the months leading up to this speech, Gillard had been
            criticised by parts of the Australian media and some members of the
            official Opposition Party based on her gender, that she was
            unmarried, her personal life, and that she was childless. One
            Liberal MP, Bill Heffernan, said she “was unfit for leadership
            because she was deliberately barren" and another Sophie Mirabella,
            said "You won't need his [ex-PM Kevin Rudd's] taxpayer-funded nanny,
            will you?" regarding her ousting of the previous Prime Minister.
          </div>
          <div>
            Gillard also faced criticism for her actions as leader, reportedly
            being “characterized as unseemly and unduly brutal for a woman”.
            Later she would reveal that she was also under constant attack by
            her predecessor, Kevin Rudd, saying "What shouldn't happen in
            politics is you shouldn't be dragged down by someone who is on your
            own side... When asked whether he had been involved in conversations
            undermining the Labor party and undermining the government, he
            refused to answer." There were also several instances of “sexist and
            hateful attacks from anonymous critics" and "a plethora of
            pornographic and degrading images of the prime minister circulated
            on web sites, e-mail, and social media”.
          </div>
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
              iconColour="#bbbb21"
              iconBgColour="#fb2221"
            />
          </div>
          <div>
            Within the speech, Gillard noted a number of statements Abbott had
            previously made. In an interview Abbott had stated, "If it's true,
            Stavros [the interviewer], that men have more power generally
            speaking than women, is that a bad thing?" When another person
            present at this interview stated they wanted their daughter to have
            as much opportunity as their son, Abbott responded, "Yeah, I
            completely agree, but what if men are by physiology or temperament,
            more adapted to exercise authority or to issue command?" Gillard
            also said that in March 2004, Abbott stated, "Abortion is the easy
            way out" and that he had stood next to a sign "ditch the witch" in
            reference to her political role.
          </div>
          <div>...</div>
        </VStack>
      </Center>
    </VStack>
  );
};
