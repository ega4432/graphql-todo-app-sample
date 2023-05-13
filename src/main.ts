import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const tasks = [
  {
    title: 'todo1',
    description: 'hoge hoge'
  },
  {
    title: 'todo2',
    description: 'fuga fuga'
  }
];

const main = async () => {
  const typeDefs = `#graphql
    type Task {
      title: String
      description: String
    }

    type Query {
      tasks: [Task]
    }
  `;

  const resolvers = {
    Query: {
      tasks: () => tasks
    }
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  const { url } = await startStandaloneServer(server);

  console.log(`Listening local server: ${url} ...`);
};

main().catch((e) => console.error(e));
