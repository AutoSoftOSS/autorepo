import { autorepo } from "@autosoft/autorepo-api";

autorepo
  .version(import.meta.url)
  .parse();
