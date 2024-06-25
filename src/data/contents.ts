import { faker } from '@faker-js/faker';

type Category = 'Grammar' | 'Word bank' | 'Vocabulary' | 'Pronunciation' | 'Tips'

type Content = {
  id: string;
  text: string;
  title: string;
  image: string;
  avatar: string;
  author: string;
  publishedAt: Date;
  category: Category;
}

export const contents: Content[] = Array.from({ length: 10 }).map(() => {
  return {
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    author: faker.person.fullName(),
    text: faker.lorem.paragraphs({ min: 10, max: 20 }),
    publishedAt: faker.date.recent({ days: 30 }),
    title: faker.lorem.sentence({ min: 3, max: 4 }),
    image: faker.image.urlPicsumPhotos({ height: 288, width: 1248 }),
    category: faker.helpers.arrayElement(['Grammar', 'Word bank', 'Vocabulary', 'Pronunciation', 'Tips']),
  }
})