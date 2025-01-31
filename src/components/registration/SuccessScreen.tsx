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
import WebsiteScraping from "./WebsiteScraping";

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
      </div>

      <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <WebsiteScraping onNext={() => {}} onBack={() => {}} />
      </div>

      <div className="flex justify-center items-center gap-6 pt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
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