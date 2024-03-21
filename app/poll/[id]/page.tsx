import { fetchPoll } from "@/lib/fetchPoll";

export default async function Page({ params }: { params: { id: string } }) {
  const poll = await fetchPoll("08e3679b-64b4-4fdd-acca-a44c8fe6ef33");
  console.log(poll);
  return (
    <>
      <div>My Post: {params.id}</div>
    </>
  );
}
