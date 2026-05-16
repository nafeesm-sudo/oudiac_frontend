import { CheckCircle } from "lucide-react";

const Toast = ({ toast }) => {
  if (!toast) return null;

  return (
    <div className="fixed bottom-8 right-8 bg-black text-white px-6 py-4 rounded shadow-2xl flex items-center gap-3 z-50">
      <CheckCircle className="text-[#c9a961]" />
      {toast}
    </div>
  );
};

export default Toast;