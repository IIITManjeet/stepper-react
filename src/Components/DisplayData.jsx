import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
export const DisplayData = () => {
  const { finalData } = useContext(multiStepContext);
  return (
    <div>
      <table class="border-separate border border-slate-400 w-full">
        <thead>
          <tr className="bg-[#FFBF00]">
            <th class="border border-slate-300 p-[20px]">First Name</th>
            <th class="border border-slate-300 p-[20px]">Last Name</th>
            <th class="border border-slate-300 p-[20px]">Contact Number</th>
            <th class="border border-slate-300 p-[20px]">Email Address</th>
            <th class="border border-slate-300 p-[20px]">Country</th>
            <th class="border border-slate-300 p-[20px]">State</th>
            <th class="border border-slate-300 p-[20px]">City</th>
            <th class="border border-slate-300 p-[20px]">Landmark</th>
            <th class="border border-slate-300 p-[20px]">Postal Code</th>
          </tr>
        </thead>
        <tbody>
          {finalData.map((data) => (
            <tr key={data.email}>
              <td class="border border-slate-300 p-[20px]">{data.firstname}</td>
              <td class="border border-slate-300 p-[20px]">{data.lastname}</td>
              <td class="border border-slate-300 p-[20px]">
                {data.contactNumber}
              </td>
              <td class="border border-slate-300 p-[20px]">{data.email}</td>
              <td class="border border-slate-300 p-[20px]">{data.country}</td>
              <td class="border border-slate-300 p-[20px]">{data.state}</td>
              <td class="border border-slate-300 p-[20px]">{data.city}</td>
              <td class="border border-slate-300 p-[20px]">{data.landmark}</td>
              <td class="border border-slate-300 p-[20px]">
                {data.postalCode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
