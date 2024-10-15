import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
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
        path: './src',
        clean: true,
      },
      plugins: [
        pluginOas({
          validate: true,
        }),
        pluginTs({
          output: {
            path: './models',
            exportAs: 'models',
          },
          enumType: 'asConst',
          dateType: 'string',
        }),
        pluginZod({
          output: {
            path: './zod',
            exportAs: 'schemas',
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
