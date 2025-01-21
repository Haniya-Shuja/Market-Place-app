// import { type SchemaTypeDefinition } from 'sanity'

// import {blockContentType} from './blockContentType'
// import {categoryType} from './categoryType'
// import {postType} from './postType'
// import {authorType} from './authorType'

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [blockContentType, categoryType, postType, authorType,],
// }
import { type SchemaTypeDefinition } from 'sanity';

// Import your schema types
import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { authorType } from './authorType';
import { product } from './product';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, product],
};
