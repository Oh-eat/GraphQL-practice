const Wang = {
  name: "wang",
  desc: "wangwang!"
};

const resolvers = {
  Query: {
    name: () => Wang
  }
};

module.exports = resolvers;
