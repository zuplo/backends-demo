import { ZuploContext, ZuploRequest } from "@zuplo/runtime";
import { getBackendCatalog } from "./backend-loader";

type BackendPolicyOptions = {
  backend: string;
};

export default async function (
  request: ZuploRequest,
  context: ZuploContext,
  options: BackendPolicyOptions,
  policyName: string
) {

  const catalog = getBackendCatalog();
  const backend = catalog[options.backend];

  context.custom.backend = {
    url: backend.url
  }

  const headers = new Headers(request.headers);

  Object.keys(backend.headers).forEach(key => {
    headers.set(key, backend.headers[key]);
  });

  return new Request(request, {
    headers
  });
}
