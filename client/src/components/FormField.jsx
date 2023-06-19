import React from "react";

const FormField = ({
  LabelName,
  type,
  name,
  value,
  handleChange,
  isSurpriseMe,
  handleSurprise,
  placeholder,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurprise}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        id={name}
        value={value}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-3 focus:ring-[#4649ff] focus:border-[#4649ff] "
      />
    </div>
  );
};

export default FormField;
