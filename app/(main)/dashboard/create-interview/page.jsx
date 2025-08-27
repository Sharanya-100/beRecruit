"use client";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import FormContainer from "./_components/FormContainer";
import QuestionList from "./_components/QuestionList";
import { toast } from "sonner";

function CreateInterview() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState();
  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    console.log("FormData", formData);
  };

  const onGoToNext = () => {
    if (
      !formData?.jobPosition ||
      !formData?.jobDescription ||
      !formData?.interviewDuration ||
      !formData?.type
    ) {
      toast("Please fill all the fields!");
      return;
    }
    setStep(step + 1);
  };
  return (
    <div className="mt-10 px-10 md:px-24 lg:px-44 xl:px-56">
      <div className="flex gap-5 items-center">
        <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />
        <h2 className="text-2xl font-bold">Create New Interview</h2>
      </div>
      <Progress value={step * 33.33} className="my-5" />
      {step == 1 ? (
        <FormContainer
          onHandleInputChange={onHandleInputChange}
          GoToNext={() => onGoToNext()}
        />
      ) : step == 2 ? (
        <QuestionList formData={formData} />
      ) : null}
    </div>
  );
}

export default CreateInterview;
