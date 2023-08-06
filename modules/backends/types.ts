export interface Backend {
  url: string,
  headers: Record<string, string>
}

export type BackendCatalog = Record<string, Backend>;