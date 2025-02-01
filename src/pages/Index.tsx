import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RegistrationForm from "@/components/registration/RegistrationForm";
import OrganizationSetup from "@/components/registration/OrganizationSetup";
import WebsiteScraping from "@/components/registration/WebsiteScraping";
import ChatbotIntegration from "@/components/registration/ChatbotIntegration";
import SuccessScreen from "@/components/registration/SuccessScreen";
import { Progress } from "@/components/ui/progress";

const steps = [
  "Registration",
  "Organization Setup",
  "Website Analysis",
  "Integration",
  "Success",
];

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const progress = ((currentStep + 1) / steps.length) * 100;

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-900 mb-4">
            {steps[currentStep]}
          </h1>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            {steps.map((step, index) => (
              <span
                key={step}
                className={`${
                  index <= currentStep ? "text-primary-600" : "text-gray-400"
                }`}
              >
                Step {index + 1}
              </span>
            ))}
          </div>
        </div>

        <Card className="p-6 shadow-lg animate-fade-in">
          {currentStep === 0 && <RegistrationForm onNext={nextStep} />}
          {currentStep === 1 && (
            <OrganizationSetup onNext={nextStep} onBack={prevStep} />
          )}
          {currentStep === 2 && (
            <WebsiteScraping onNext={nextStep} onBack={prevStep} />
          )}
          {currentStep === 3 && (
            <ChatbotIntegration onNext={nextStep} onBack={prevStep} />
          )}
          {currentStep === 4 && <SuccessScreen />}
        </Card>
      </div>
    </div>
  );
};

export default Index;