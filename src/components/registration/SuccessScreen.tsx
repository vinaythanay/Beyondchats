import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import {
  TwitterShareButton,
  LinkedinShareButton,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";

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
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full" size="lg">
              Start Talking to Your Chatbot
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-primary-600">
                <MessageCircle className="h-5 w-5" />
                Chatbot Assistant
              </DialogTitle>
              <DialogDescription>
                Your AI assistant is ready to help! Ask anything about:
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary-50 text-primary-700">
                  <MessageCircle className="h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-medium">Product Information</p>
                    <p className="text-sm text-primary-600">Get details about features, pricing, and specifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary-50 text-primary-700">
                  <MessageCircle className="h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-medium">Customer Support</p>
                    <p className="text-sm text-primary-600">Resolve common issues and get technical assistance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary-50 text-primary-700">
                  <MessageCircle className="h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-medium">General Inquiries</p>
                    <p className="text-sm text-primary-600">Learn about our company, policies, and services</p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4">
                Start Chat
              </Button>
            </div>
          </DialogContent>
        </Dialog>
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