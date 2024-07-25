import { Skeleton } from "./skeleton";

export default function LoadingBubble() {
  return (
    <section className="w-full max-w-[22rem] min-h-32 my-2 self-start flex flex-col gap-2 border-2 rounded-xl p-2">
      <span className="w-full h-auto flex items-center justify-start gap-2">
        <Skeleton className="w-40 h-10 rounded-xl" />
        <Skeleton className="w-14 h-10 rounded-xl" />
      </span>
      <Skeleton className="w-full h-32 rounded-xl" />
    </section>
  );
}
