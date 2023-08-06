import { environment } from "@zuplo/runtime";
import { BackendCatalog } from "../types";

const data: BackendCatalog = {
  "backend-1": {
    url: "https://echo.zuplo.io/test/backend-1",
    headers: {
      "x-api-key": "hardcoded-key"
    }
  },
  "backend-2": {
    url: "https://echo.zuplo.io/test/backend-2",
    headers: {
      authorization: "Bearer TEST"
    }
  }
}

export default data;