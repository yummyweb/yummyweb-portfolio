export type TagsType = Array<string>

export type Meta = {
    og: string
    image: string
    publishedAt: string
    updatedAt?: string
    readingTime: {
      text: string
      minutes: number
      time: number
      words: number
    }
    author: string
    authorImage: string
    summary: string
    title: string
    slug: string
    tags: TagsType
}