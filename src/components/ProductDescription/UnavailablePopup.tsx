import React from "react";

interface PopupProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

const UnavailablePopup: React.FC<PopupProps> = ({ show, onClose, onSubmit }) => {
  const [email, setEmail] = React.useState<string>("");

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Notify Me</h2>
        <p className="mb-4">
          The size you selected is currently unavailable. Enter your email to get notified when it's back in stock.
        </p>
        <div className="flex flex-col gap-2">
          <input
            type="email"
            className="border p-2 rounded w-full"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-black text-white py-2 rounded"
            onClick={() => {
              onSubmit(email);
              setEmail(""); // Clear the input after submission
            }}
          >
            Notify Me
          </button>
          <button className="text-gray-500 underline" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnavailablePopup;
