function Bubble({
  role,
  content,
  assistantName,
}: {
  role: string;
  content: string;
  assistantName: string;
}) {
  return (
    <div
      className={`my-2 rounded-lg flex flex-col text-pretty max-w-72 w-full ${role === "assistant" ? "bg-red-500" : "border border-red-500"} ${role === "assistant" ? "self-start" : "self-end"}`}>
        <div className="w-full rounded-t-xl bg-red-900 p-2">
          <p className={`font-bold text-white ${role === "user" ? "text-right" : "text-left"}`}>
            {role === "assistant" ? assistantName : "You"}
          </p>
        </div>
      <div className={`w-full rounded-b-xl p-2 ${role === "assistant" ? "text-white text-left" : "text-right"}`}>
        {content}
      </div>
    </div>
  );
}

export default Bubble;