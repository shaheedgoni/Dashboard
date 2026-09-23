import { primaryButtonProps } from "@/types/primaryButton";

export default function PrimaryButton({
  onClick,
  children,
}: primaryButtonProps) {
  return (
    <div
      onClick={onClick}
      className="relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer outline-2 outline-transparent hover:bg-gray-100 hover:outline-gray-300 active:bg-gray-200 transition-all"
    >
      {children}
    </div>
  );
}
