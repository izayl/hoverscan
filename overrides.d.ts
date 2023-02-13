declare var process: {
  env: {
    NODE_ENV: "development" | "production" | "test"
    TEST_JSON_RPC_URL?: string
    [key: string]: string
  }
}
