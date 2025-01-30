import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import {
  TwitterShareButton,
  LinkedinShareButton,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

const SuccessScreen = () => {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        particleCount,
        spread: randomInRange(60, 100),
        origin: { x: randomInRange(0.1, 0.9), y: randomInRange(0.1, 0.9) },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const shareUrl = "https://beyondchats.com";
  const shareTitle = "I just set up my AI chatbot with BeyondChats! 🤖✨";

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-primary-600">
          🎉 Setup Complete! 🎉
        </h2>
        <p className="text-gray-600">
          Your chatbot is now ready to assist your customers
        </p>
      </div>

      <div className="space-y-4">
        <Button className="w-full" size="lg">
          Explore Admin Panel
        </Button>
        <Button variant="outline" className="w-full" size="lg">
          Start Talking to Your Chatbot
        </Button>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-gray-500">Share your success!</p>
        <div className="flex justify-center gap-4">
          <TwitterShareButton url={shareUrl} title={shareTitle}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl} title={shareTitle}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;