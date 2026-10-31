import TweetCard from '../components/TweetCard';
import getFeedTweets from '../getFeedTweets';
import sortTweetsByNewest from '../sortTweetsByNewst';
import Pagination from '../../ui/Pagination';
import { usePagination } from '../../ui/usePagination';
import { currentUser } from '../../users/currentUser';
import getUserById from '../../users/getUserById';

export default function FeedPage() {
  const tweets = sortTweetsByNewest(getFeedTweets(currentUser));
  const { pageItems, page, totalPages, hasPrevious, hasNext, previous, next } = usePagination(tweets);

  return (
    <section className="min-h-full">
      <h1 className="border-b border-slate-200 px-4 py-4 text-xl font-extrabold sm:px-6 sm:text-2xl">Feed</h1>
      {pageItems.map((tweet) => {
        const author = getUserById(tweet.authorId);

        return author && <TweetCard key={tweet.id} tweet={tweet} author={author} />;
      })}
      <Pagination
        page={page}
        totalPages={totalPages}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
        previous={previous}
        next={next}
      />
    </section>
  );
}