import { MikroORM } from "@mikro-orm/core";
import path from "path";

import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "AdminManager",
  type: "mongo",
  clientUrl: "mongodb+srv://graphqlUser:reXqfscYIz3sEdw0@main.u5tdl.mongodb.net/AdminManager?retryWrites=true&w=majority",
  ensureIndexes: true,
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];