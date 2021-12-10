import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Demo } from "./Demo";

function App() {
  return (
    <ChakraProvider>
      <p style={{ paddingLeft: "40px" }}>
        {" "}
        wubadub
        <Demo />{" "}
      </p>
    </ChakraProvider>
  );
}

export default App;
