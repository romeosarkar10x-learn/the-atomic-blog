import { faker } from "@faker-js/faker";
import { Post } from "../types/post";

export function createRandomPost(): Post {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
    };
}
