import { environment } from "@zuplo/runtime";
import { BackendCatalog } from "../types";

const data: BackendCatalog = {
  "backend-1": {
    url: "https://echo.zuplo.io/prod/backend-1",
    headers: {
      "x-api-key": environment.X_API_KEY
    }
  },
  "backend-2": {
    url: "https://echo.zuplo.io/prod/backend-2",
    headers: {
      authorization: `Bearer ${environment.BACKEND_2_AUTH_HEADER}`
    }
  }
}

export default data;