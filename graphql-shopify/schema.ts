import { makeSchema } from 'nexus'
import path from 'path';
import * as types from './types'

export const schema = makeSchema({
  types,
  // plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: path.join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated', 'schema.graphql')
  },
  contextType: {
    module: path.join(process.cwd(), 'graphql-shopify', 'context.ts'),
    export: 'Context'
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: "prisma",
      }
    ],

  },
})