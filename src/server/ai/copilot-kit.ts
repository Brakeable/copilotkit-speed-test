import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNodeHttpEndpoint,
} from "@copilotkit/runtime";
import { CopilotKit } from "wasp/server/api";

export const copilotKit: CopilotKit = async (req, res, context) => {
  const handleRequest = copilotRuntimeNodeHttpEndpoint({
    runtime: new CopilotRuntime(),
    serviceAdapter: new OpenAIAdapter({ model: "gpt-4o" }),
    endpoint: "/api/copilot-kit",
  });

  return handleRequest(req, res, context);
};
