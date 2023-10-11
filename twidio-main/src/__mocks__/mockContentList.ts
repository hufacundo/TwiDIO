import { v4 as uuid } from 'uuid'
import { Post } from '../entities/Post'

export const getMockContentList = (): Post[] => ([
  {
    post_id: uuid(),
    author: 'outro@email.com',
    content: 'Digite algum conteudo'
  },
  {
    post_id: uuid(),
    author: 'outro@author.net',
    content: 'Digite algum conteudo'
  }
])
