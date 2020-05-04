import { Dispatch } from "react";

export interface ILoadingAction {
    type: string,
    payload: boolean
}

export type IRequest = Dispatch<{type: string; payload: string | boolean}>;