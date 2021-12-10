import "./App.css";
import { TextAudio } from "./component/TextAudio";
import { Demo } from "./Demo";

function App() {
  return (
    <p style={{ paddingLeft: "40px" }}>
      First sentence.
      <TextAudio audioPath="">
        They said to check out this ChakraUI component
      </TextAudio>
      . Here it is! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. {/* <Demo /> */}
    </p>
  );
}

export default App;
