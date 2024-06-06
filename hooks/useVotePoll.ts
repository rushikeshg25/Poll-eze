const useVotePoll = (optionId: string, pollId: string) => {
  localStorage.setItem(
    pollId,
    JSON.stringify({ optionId: optionId, voteTime: new Date() })
  );
};

export default useVotePoll;
