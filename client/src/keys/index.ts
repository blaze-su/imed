import getConfig from "next/config";
import path from "path";

const { publicRuntimeConfig } = getConfig();
const {
    PROCESS_ENV_NODE_ENV,
    PROCESS_ENV_HOST_API,
    PROCESS_ENV_HOST_IMAGE
} = publicRuntimeConfig;

// console.log("publicRuntimeConfig v3", publicRuntimeConfig)
// console.log("process", process)

export const NODE_ENV = PROCESS_ENV_NODE_ENV;
export const HOST_API = PROCESS_ENV_HOST_API || "";
export const HOST_IMAGE = PROCESS_ENV_HOST_IMAGE;
export const HOST_IMAGE_RESIZE = path.join(HOST_API, "/images/")
export const YANDEX_METRIKA_ID = 54319167
