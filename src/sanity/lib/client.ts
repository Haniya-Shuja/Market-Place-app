// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  
// })


import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skkwNOzJTMuO9D2PXS2QPWIjHKyokhIy3GX8GYBIGW6IKzw7OhgkqFX9eB81BbgZMAXoRJipftEO6wWAJDcRqAy9w2kHItHPQmK56Oo6DQzqek3oYviyrtHrspiZ59DD3JD06pBUTlTxkXXz3F8ESUCGFVgrfFbniySbbOXAZaYBqtRpEdGC"})