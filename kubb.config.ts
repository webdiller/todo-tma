import { defineConfig } from "@kubb/core"
import { pluginZod } from "@kubb/swagger-zod"
import { pluginTs } from "@kubb/swagger-ts"
import { pluginClient } from "@kubb/swagger-client"
import { pluginTanstackQuery } from "@kubb/swagger-tanstack-query"
import { pluginOas } from "@kubb/plugin-oas"

export default defineConfig(async () => {
  return {
    root: ".",
    logLevel: true,
    input: {
      path: "http://localhost:3001/docs/json",
    },
    output: {
      path: "./src/shared/http",
      clean: false,
    },
    hooks: {
      // done: ['prettier --write "**/*.{ts,tsx}"', "eslint --fix ./src/gen"],
    },
    plugins: [
      pluginOas({
        output: false,
        validate: true,
      }),
      pluginZod({
        output: {
          path: "./zod",
        },
        group: {
          type: "tag",
        },
        transformers: {
          name: (name) => {
            let parsedName = name
            if (parsedName.length > 1) {
              parsedName = name[0].toUpperCase() + name.slice(1)
            }
            return `zod${parsedName}`
          },
        },
      }),
      pluginTs({
        output: {
          path: "./types",
        },
        group: {
          type: "tag",
        },
      }),
      pluginClient({
        output: {
          path: "./clients/axios",
          exportAs: "apiService",
        },
        group: { type: "tag", output: "./clients/axios/{{tag}}Service" },

        client: {
          importPath: "@/shared/utils/kubb-clients/axios-client",
        },
        dataReturnType: "full",
        pathParamsType: "object",
      }),
      pluginTanstackQuery({
        output: {
          path: "./clients/hooks",
          exportAs: "apiHooks",
        },
        exclude: [
          {
            type: "tag",
            pattern: "store",
          },
        ],
        group: { type: "tag" },
        client: {
          importPath: "@/shared/utils/kubb-clients/axios-client",
        },
        infinite: {},
        dataReturnType: "full",
      }),
    ],
  }
})
