import post from "./post";
import user from "./user";
import comment from "./comment";
import postedBy from "./postedBy";
import {defineConfig} from 'sanity'

export const schemaTypes = [
  post, user, comment, postedBy
]

export default defineConfig({
  schema: {
    types: schemaTypes
  }
})