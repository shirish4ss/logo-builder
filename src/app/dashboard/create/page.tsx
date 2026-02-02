"use client";

import React, { useState } from "react";
import { LogoWizard } from "@/components/LogoWizard";
import { SVGEditor } from "@/components/SVGEditor";

export default function CreateLogoPage() {
  const [step, setStep] = useState<"wizard" | "editor">("wizard");
  const [logoData, setLogoData] = useState<any>(null);

  const handleFinishWizard = (data: any) => {
    setLogoData(data);
    setStep("editor");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {step === "wizard" ? (
        <LogoWizard onFinish={handleFinishWizard} />
      ) : (
        <div className="p-10">
           <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Refine Your Logo</h1>
              <button
                onClick={() => setStep("wizard")}
                className="text-gray-500 hover:text-gray-700 font-medium"
              >
                Back to Wizard
              </button>
           </div>
           <SVGEditor initialSvg={logoData?.suggestedLogo || ""} />
        </div>
      )}
    </div>
  );
}
