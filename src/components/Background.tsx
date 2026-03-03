export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Soft blurred gradient circles - light blue from logo */}
      <div className="animate-bg-float absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-sky-200/30 blur-[120px]" />
      <div className="animate-bg-float-delayed absolute -right-20 top-1/4 h-[450px] w-[450px] rounded-full bg-sky-300/20 blur-[120px]" />
      <div className="animate-bg-float-slow absolute bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-[100px]" />
      <div className="animate-bg-float absolute -bottom-20 right-1/4 h-[350px] w-[350px] rounded-full bg-sky-200/25 blur-[100px]" />

      {/* Subtle amber accent circles */}
      <div className="animate-bg-float-delayed absolute right-1/3 top-1/3 h-[250px] w-[250px] rounded-full bg-amber-200/15 blur-[80px]" />
      <div className="animate-bg-float-slow absolute bottom-1/3 left-1/5 h-[200px] w-[200px] rounded-full bg-amber-100/10 blur-[80px]" />
    </div>
  );
}
