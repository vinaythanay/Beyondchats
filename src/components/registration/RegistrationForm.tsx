import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { FcGoogle } from "react-icons/fc";

interface RegistrationFormProps {
  onNext: () => void;
}

const RegistrationForm = ({ onNext }: RegistrationFormProps) => {
  const [step, setStep] = useState<"details" | "verification">("details");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "details") {
      // Simulate sending verification code
      toast({
        title: "Verification code sent!",
        description: "Please check your email for the verification code.",
      });
      setStep("verification");
    } else {
      // Simulate verification success
      toast({
        title: "Verification successful!",
        description: "Your email has been verified.",
      });
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center">
          {step === "details"
            ? "Create your account"
            : "Verify your email address"}
        </h2>
        <p className="text-gray-500 text-center">
          {step === "details"
            ? "Get started with BeyondChats"
            : "Enter the code sent to your email"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === "details" ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                className="w-full"
                placeholder="••••••••"
              />
            </div>
          </>
        ) : (
          <div className="space-y-2">
            <Label htmlFor="code">Verification Code</Label>
            <Input
              id="code"
              placeholder="Enter 6-digit code"
              required
              className="w-full text-center text-2xl tracking-widest"
              maxLength={6}
            />
          </div>
        )}

        <Button type="submit" className="w-full">
          {step === "details" ? "Continue" : "Verify Email"}
        </Button>
      </form>

      {step === "details" && (
        <>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              toast({
                title: "Google Sign In",
                description: "This feature is not implemented in the demo.",
              });
            }}
          >
            <FcGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>
        </>
      )}
    </div>
  );
};

export default RegistrationForm;