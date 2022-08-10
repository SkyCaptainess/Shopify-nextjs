import { objectType } from "nexus"




export const FieldResponse = objectType({
    name: 'FieldResponse',
    definition(t) {
      t.boolean('success')
      t.string('message')
      t.string('data')
    },
})