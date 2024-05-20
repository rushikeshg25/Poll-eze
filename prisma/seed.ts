import { prisma } from "@/lib/db";

const totalVotes = 70;
const Options = [
  { title: "Chicken", votes: 24 },
  { title: "Egg", votes: 23 },
  { title: "Impossible to determine", votes: 8 },
  { title: "Happened simultaneously", votes: 15 },
];

async function seed() {
  const user = await prisma.user.create({
    data: {
      externalId: "user_2ecz8NE1oLCgmAxdmfxOvap68zz",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
    },
  });
  const newPoll = await prisma.poll.create({
    data: {
      PolltotalVotes: 70,
      title: "Which came first: the chicken or the egg?",
      Duration: 2342342,
      user: {
        connect: { externalId: "user_2ecz8NE1oLCgmAxdmfxOvap68zz" },
      },
    },
  });

  Options.map(
    async (option) =>
      await prisma.option.create({
        data: {
          totalVotes: totalVotes,
          title: option.title,
          PollId: newPoll.id,
          votes: option.votes,
        },
      })
  );
}

async function main() {
  try {
    await seed();
    console.log("Seeding done ☘️");
  } catch (Error) {
    console.log("Error while seeding", Error);
    throw Error;
  }
}
