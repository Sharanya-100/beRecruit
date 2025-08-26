import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';
import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InterviewType } from '@/services/Constants';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

function FormContainer({onHandleInputChange}) {
    const [interviewType, setInterviewType] = useState([]);

    useEffect(()=>{
        if(interviewType){
            onHandleInputChange('type', interviewType)
        }
    },[interviewType])

    const AddInterviewType=(type)=>{
     const data=interviewType.includes(type);
     if(!data){
        setInterviewType(prev=>[...prev,type])
     }else{
        const result = interviewType.filter(item=>item!=type);
        setInterviewType(result);
     }
    }
  return (
    <div className="p-5 bg-white rounded-xl">
      <div>
        <h2 className="text-sm font-medium">Job Position</h2>
        <Input
          placeholder="e.g-React Developer"
          className="mt-2"
          onChange={(event) =>
            onHandleInputChange("jobPosition", event.target.value)
          }
        />
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Job Description</h2>
        <Textarea
          placeholder="Enter Detailed job Description"
          className="h-[200px] mt-2"
          onChange={(event) =>
            onHandleInputChange("jobDescription", event.target.value)
          }
        />
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview Duration</h2>
        <Select onValueChange={(value) => onHandleInputChange("interviewDuration", value)}>
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="30m">1 minutes</SelectItem>
            <SelectItem value="30m">30 minutes</SelectItem>
            <SelectItem value="1h">1 hour</SelectItem>
            <SelectItem value="2h">2 hours</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview Type</h2>
        <div className="flex gap-3 flex-wrap mt-2">
          {InterviewType.map((type, index) => (
            <div
              key={index}
              className={`flex items-center cursor-pointer gap-2 p-1 px-2 bg-white-50 border border-gray-300 rounded-2xl hover:bg-primary ${interviewType.includes(type.title)&&'bg-blue-50 text-primary'}`}
            onClick={()=>AddInterviewType(type.title)}>
              <type.icon className="h-4 w-4" />
              <span>{type.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-end">
        <Button>
          Generate Questions <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default FormContainer