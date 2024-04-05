export default function usePublicHasVoted({ pollid }: { pollid: string }) {
  const optionId = localStorage.getItem(pollid);

  if (!optionId) {
    return null;
  }
  return optionId;
}
