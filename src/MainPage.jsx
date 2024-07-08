import waspLogo from "./waspLogo.png";
import "./Main.css";
import {
  useCopilotChat,
  useCopilotAction,
  CopilotKit,
} from "@copilotkit/react-core";
import { TextMessage, MessageRole } from "@copilotkit/runtime-client-gql";

const Child = () => {
  const { appendMessage } = useCopilotChat({});
  useCopilotAction({
    name: "setNameForPet",
    description: "Sets the name for the pet animal",
    parameters: [
      {
        name: "name",
        type: "string",
        description: "The name of the pet animal",
      },
    ],
    handler: async ({ name }) => {
      console.log("ai suggestion is", name);
    },
  });

  const handleClick = async () => {
    console.log("ai starting");
    await appendMessage(
      new TextMessage({
        role: MessageRole.User,
        content: `Please come up with a name for a pet animal and set it.`,
      })
    );
    console.log("ai is finished");
  };

  return <button onClick={handleClick}>Generate Animal Name</button>;
};

export const MainPage = () => {
  return (
    <CopilotKit runtimeUrl={"//localhost:3001/api/copilot-kit"}>
      <Child></Child>
    </CopilotKit>
  );
};
