import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const {
    PROCESS_ENV_NODE_ENV,
    PROCESS_ENV_HOST_API,
    PROCESS_ENV_HOST_IMAGE,
} = publicRuntimeConfig;

export const NODE_ENV = PROCESS_ENV_NODE_ENV;
export const HOST_API = PROCESS_ENV_HOST_API;
export const HOST_IMAGE = PROCESS_ENV_HOST_IMAGE;
