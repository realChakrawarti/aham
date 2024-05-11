export default function Tag({ label }: { label: string }) {
  return (
    <span key={label} className="px-2 border text-default border-excerpt ">
      {label.toLowerCase()}
    </span>
  );
}
