export function SonoEyePromoTagline({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-sm sm:text-base leading-snug antialiased ${className}`}
    >
      <span className="font-bold not-italic text-[#1a1a1a]">Sono</span>
      <span className="font-bold not-italic text-[#0056b3]">Eye</span>
      <span className="italic text-[#4a5568]">
        {" "}
        — An extension of the doctor&apos;s senses to{" "}
      </span>
      <span className="font-bold not-italic text-[#0056b3]">See</span>
      <span className="italic text-[#4a5568]"> More.</span>
    </p>
  );
}
