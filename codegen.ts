import { CodegenConfig } from "@graphql-codegen/cli"
const config: CodegenConfig = {
  schema: "http://localhost:3030/graphql",
  documents: ["./graphql/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
}

export default config