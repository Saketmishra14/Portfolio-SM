import { useEffect, useState } from 'react';
import { Star } from "@mui/icons-material";

const TweetEmbed = ({ tweetId }) => {
  return (
    <div className="w-full max-w-md">
      
    </div>
  );
};

const SocialPostsSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const tweetIds = [
    '1950946258128097541', // LinkedIn post
    '1888901852944621634'  // Hackathon post
  ];

  return (


      <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-8 px-4 w-full">
        {isClient && tweetIds.map((tweetId) => (
          <TweetEmbed key={tweetId} tweetId={tweetId} />
        ))}
      </div>
    
  );
};

export default SocialPostsSection;
