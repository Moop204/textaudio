import { Icon, IconProps } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface PauseButtonType extends IconProps {
  onClick: () => void;
  lineHeight: string;
}

/**
 * Icon shown when the TextAudio is being played.
 *
 */
export const PauseButtonIcon: FunctionComponent<PauseButtonType> = (props) => {
  return (
    <span style={{ lineHeight: props.lineHeight }} onClick={props.onClick}>
      <Icon viewBox="0 0 512 512" color="red.500" {...props}>
        <path d="M0 0h512v512H0z" fill="#000" fill-opacity="1" />
        <path
          d="M120.16 45A20.162 20.162 0 0 0 100 65.16v381.68A20.162 20.162 0 0 0 120.16 467h65.68A20.162 20.162 0 0 0 206 446.84V65.16A20.162 20.162 0 0 0 185.84 45h-65.68zm206 0A20.162 20.162 0 0 0 306 65.16v381.68A20.162 20.162 0 0 0 326.16 467h65.68A20.162 20.162 0 0 0 412 446.84V65.16A20.162 20.162 0 0 0 391.84 45h-65.68z"
          fill="#fff"
        />
      </Icon>
    </span>
  );
};
