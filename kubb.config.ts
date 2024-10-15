import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginClient } from '@kubb/swagger-client'
import { pluginTs } from '@kubb/swagger-ts'
import { pluginZod } from '@kubb/swagger-zod'

export default defineConfig(() => {
  return [
    {
      root: '.',
      input: {
        path: './openapi.json',
      },
      output: {
        path: './src/generated',
        clean: true,
      },
      plugins: [
        pluginOas({
          validate: true,
        }),
        pluginTs({
          output: {
            path: './models',
          },
          enumType: 'asConst',
        }),
        pluginClient({
          output: {
            path: './clients',
          },
          client: {
            importPath: 'client',
          },
        }),
        pluginZod({
          output: {
            path: './zod',
          },
          typed: true,
          typedSchema: true,
          dateType: 'string',
          coercion: true,
        }),
      ],
    },
  ]
})
