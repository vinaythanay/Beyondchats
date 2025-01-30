import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
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
    // Trigger multiple confetti bursts for a more celebratory effect
    const triggerConfetti = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
      }, 250);

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
      }, 400);
    };

    triggerConfetti();
  }, []);

  const handleStartChat = () => {
    const chatButton = document.querySelector('.fixed.bottom-4.right-4 button') as HTMLButtonElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <div className="space-y-12">
      <div className="space-y-4 text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-primary-900 animate-scale-in">
          Setup Complete!
        </h1>
        <p className="text-gray-500 text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Your chatbot is ready to assist your customers
        </p>
      </div>

      <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <Button 
          className="w-full transform transition-all hover:scale-105 duration-300" 
          size="lg"
        >
          Explore Admin Panel
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full transform transition-all hover:scale-105 duration-300" 
              size="lg"
            >
              Start Talking to Your Chatbot
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] animate-scale-in">
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
                    <p className="text-sm text-primary-600">
                      Get details about features, pricing, and specifications
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary-50 text-primary-700">
                  <MessageCircle className="h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-medium">Customer Support</p>
                    <p className="text-sm text-primary-600">
                      Resolve common issues and get technical assistance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary-50 text-primary-700">
                  <MessageCircle className="h-5 w-5 mt-0.5" />
                  <div>
                    <p className="font-medium">General Inquiries</p>
                    <p className="text-sm text-primary-600">
                      Learn about our company, policies, and services
                    </p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-4" onClick={handleStartChat}>
                Start Chat
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex justify-center items-center gap-6 pt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="transform transition-all hover:scale-110 duration-300">
          <FacebookShareButton url={window.location.href}>
            <FacebookIcon size={48} round className="shadow-lg" />
          </FacebookShareButton>
        </div>
        <div className="transform transition-all hover:scale-110 duration-300">
          <TwitterShareButton url={window.location.href}>
            <TwitterIcon size={48} round className="shadow-lg" />
          </TwitterShareButton>
        </div>
        <div className="transform transition-all hover:scale-110 duration-300">
          <LinkedinShareButton url={window.location.href}>
            <LinkedinIcon size={48} round className="shadow-lg" />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
