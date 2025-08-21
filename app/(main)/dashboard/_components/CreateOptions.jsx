import { Phone, Video } from "lucide-react";
import React from "react";

function CreateOptions() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <Video className="p-3 text-primary bg-blue-100 rounded-lg h-12 w-12 mb-3" />
        <h2 className="font-bold">Create AI Interviews</h2>
        <p className="text-grey-500">
          Create AI Interviews and Schedule with Candidates.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <Phone className="p-3 text-primary bg-blue-100 rounded-lg h-12 w-12 mb-3" />
        <h2 className="font-bold">Create Phone Screening Call</h2>
        <p className="text-grey-500">
          Create Phone Screening Calls and Schedule with Candidates.
        </p>
      </div>
    </div>
  );
}

export default CreateOptions;
