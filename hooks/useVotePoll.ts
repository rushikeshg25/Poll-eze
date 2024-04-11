const useVotePoll = (optionId: string, pollId: string) => {
  localStorage.setItem(pollId, optionId);
};

export default useVotePoll;
