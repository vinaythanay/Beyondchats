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
    confetti();
  }, []);

  const handleStartChat = () => {
    // Close the dialog and trigger the chat widget
    const chatButton = document.querySelector('.fixed.bottom-4.right-4 button') as HTMLButtonElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-primary-900">Setup Complete!</h1>
        <p className="text-gray-500">
          Your chatbot is ready to assist your customers
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

      <div className="space-y-4">
        <FacebookShareButton url={window.location.href}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={window.location.href}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={window.location.href}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default SuccessScreen;
