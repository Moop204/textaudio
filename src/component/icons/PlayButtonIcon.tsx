import { Icon, IconProps } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface PlayButtonType extends IconProps {
  onClick: () => void;
  lineHeight: string;
}

/**
 * Icon shown when the TextAudio is not being played.
 *
 */
export const PlayButtonIcon: FunctionComponent<PlayButtonType> = (props) => {
  return (
    <span style={{ lineHeight: props.lineHeight }} onClick={props.onClick}>
      <Icon viewBox="0 0 512 512" color="red.500" {...props}>
        <path d="M0 0h512v512H0z" fill="#000" fill-opacity="1" />{" "}
        <path
          d="M106.854 106.002a26.003 26.003 0 0 0-25.64 29.326c16 124 16 117.344 0 241.344a26.003 26.003 0 0 0 35.776 27.332l298-124a26.003 26.003 0 0 0 0-48.008l-298-124a26.003 26.003 0 0 0-10.136-1.994z"
          fill="#fff"
        />
      </Icon>
    </span>
  );
};
