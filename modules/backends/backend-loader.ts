import { environment } from "@zuplo/runtime"
import prod from "./data/prod";
import test from "./data/test";
import { BackendCatalog } from "./types";

export function getBackendCatalog(): BackendCatalog {
  if (environment.IS_PROD === "true") {
    return prod;
  }
  return test;
}