import { faker } from '@faker-js/faker';

type Category = 'Grammar' | 'Word bank' | 'Vocabulary' | 'Pronunciation' | 'Tips'

type Content = {
  id: string;
  title: string;
  image: string;
  category: Category;
  createdAt: Date;
}

export const contents: Content[] = Array.from({ length: 10 }).map(() => {
  return {
    id: faker.string.uuid(),
    createdAt: faker.date.recent({ days: 30 }),
    title: faker.lorem.sentence({ min: 3, max: 7 }),
    image: faker.image.urlPicsumPhotos({ height: 248 }),
    category: faker.helpers.arrayElement(['Grammar', 'Word bank', 'Vocabulary', 'Pronunciation', 'Tips']),
  }
})