import React from "react";

const FormPlaceholder = ({ type }) => {
  return (
    <div className="text-sm bg-yellow-100 text-yellow-800 p-3 rounded-xl">
      This is a placeholder for the <b>{type}</b> form. You’ll be able to submit it once backend is ready.
    </div>
  );
};

export default FormPlaceholder;
// This component serves as a placeholder for the complaint and feedback forms
// It can be used to indicate that the form is not yet functional or ready for submission   
// while still providing a user-friendly message to the user.
// The `type` prop allows for customization of the message based on the form type,