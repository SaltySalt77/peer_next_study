import { setupWorker } from "msw";
import { handlers } from "./handelers"

export const worker = setupWorker({...handlers})