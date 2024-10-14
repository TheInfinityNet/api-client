import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginClient } from '@kubb/swagger-client'
import { pluginTanstackQuery } from '@kubb/swagger-tanstack-query'
import { pluginTs } from '@kubb/swagger-ts'
import { pluginZod } from '@kubb/swagger-zod'

export default defineConfig(() => {
  return [
    {
      root: '.',
      input: {
        path: './openapi.json',
      },
      hooks: {
        done: [
          'prettier --write src/generated/*.ts',
        ],
      },
      output: {
        path: './src/generated',
        clean: true,
      },
      plugins: [
        pluginOas({
          validate: true,
        }),
        pluginClient({
          client: {
            importPath: '../../lib/client.ts',
          },
          output: {
            path: './clients/axios',
          },
          group: {
            type: 'tag',
            output: './clients/axios/{{tag}}Service',
          },
          pathParamsType: 'object',
          dataReturnType: 'full',
        }),
        pluginTs({
          output: {
            path: './models',
            exportAs: 'models',
          },
          group: {
            output: './clients/types/{{tag}}Service',
            type: 'tag',
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
        pluginTanstackQuery({
          output: {
            path: 'hooks',
            exportAs: './hooks',
          },
          group: { type: 'tag', output: './hooks/{{tag}}Hooks' },
        }),
      ],
    },
  ]
})
