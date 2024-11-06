import { useState, useEffect } from "react";
import { getArticle } from "../../api";
import { updatedVotes } from "../../api";

function Voting({ article_id, initialVotes }) {
  const [votes, setVotes] = useState(initialVotes);
  const [isLoading, setIsLoading] = useState(true);
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(
    () => {
      getArticle(article_id).then(fetchedArticle => {
        setVotes(fetchedArticle.votes);
        setIsLoading(false);
      });
    },
    [article_id]
  );

  const sendAVote = () => {
    if (hasVoted) {
      return;
    }
    setVotes(votes => votes + 1);
    setHasVoted(true);
    setError(null);

    updatedVotes(article_id, 1)
      .then(updatedVotesTotal => {
        setVotes(updatedVotesTotal);
      })
      .catch(err => {
        setVotes(votes => votes - 1);
        setHasVoted(false);
        setError("Your votes was not sucessful, Please try again!");
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button onClick={sendAVote}>
        {" "}Votes: {votes}
      </button>
      {error
        ? <p>
            {error}
          </p>
        : null}
    </div>
  );
}

export default Voting;
