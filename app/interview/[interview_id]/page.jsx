"use client";
import React, { useContext, useEffect, useState } from "react";
import InterviewHeader from "../_components/InterviewHeader";
import Image from "next/image";
import { Clock1, Info, Loader2Icon, VideoIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { supabase } from "@/services/supabaseClient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { InterviewDataContext } from "@/context/InterviewDataContext";
import QuestionList from "@/app/(main)/dashboard/create-interview/_components/QuestionList";

function Interview() {
  const { interview_id } = useParams();
  console.log(interview_id);
  const [interviewData, setInterviewData] = useState();
  const [userName, setUserName] = useState();
  const [loading, setLoading] = useState(false);
  const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext);

  const router = useRouter();
  useEffect(() => {
    interview_id && GetInterviewDetails();
  }, [interview_id]);

  const GetInterviewDetails = async () => {
    setLoading(true);
    try {
      let { data: interviews, error } = await supabase
        .from("interviews")
        .select("jobPosition, jobDescription, duration, type")
        .eq("interview_id", interview_id);
      setInterviewData(interviews[0]);
      setLoading(false);
      if (interviews?.length === 0) {
        toast("No interview found");
        return;
      }
    } catch (e) {
      setLoading(false);
      toast("Error fetching interview details");
    }
  };
  const onJoinInterview = async () => {
    setLoading(true);

    let { data: interviews, error } = await supabase
      .from("interviews")
      .select("*")
      .eq("interview_id", interview_id);
    console.log(interviews[0]);
    setInterviewInfo({
      userName:userName,
      interviewData:interviews[0]
    });
    router.push("/interview/" + interview_id + "/start");
    setLoading(false);
  };

  return (
    <div className="px-10 md:px-28 lg:px-36 xl:px-48 mt-7   ">
      <div className="flex flex-col items-center justify-center border rounded-lg bg-blue-50 p-7 lg:px-33 xl:px-52 mb-20">
        <Image
          src={"/icon.png"}
          alt="icon"
          width={100}
          height={100}
          className="w-[140px]"
        />
        <h2 className="mt-3">AI Powered Interview Platform!</h2>
        <Image
          src={"/interview_icon.png"}
          alt="interview"
          width={400}
          height={400}
          className="w-[250px]  my-5 "
        />
        <h2 className="font-bold text-xl">{interviewData?.jobPosition}</h2>
        <h2 className="flex gap-2 items-center text-gray-600 mt-3">
          <Clock1 />
          {interviewData?.duration}
        </h2>

        <div className="w-full">
          <h2>Enter Your Full Name</h2>
          <Input
            placeholder="John Doe"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <Info className="mt-3 text-blue-500" />
        <div>
          <h2>Before You Begin-</h2>
          <ul>
            <li className="text-sm text-primary">
              -Ensure you have a quiet space for the interview.
            </li>
            <li className="text-sm text-primary">
              -Test your microphone and camera beforehand.
            </li>
            <li className="text-sm text-primary">
              -Have a stable internet connection.
            </li>
          </ul>
        </div>
        <Button
          className="mt-5 w-full text-bold"
          disabled={loading || !userName}
          onClick={() => onJoinInterview()}
        >
          <VideoIcon />
          {loading && <Loader2Icon />} Join Interview
        </Button>
      </div>
    </div>
  );
}

export default Interview;
