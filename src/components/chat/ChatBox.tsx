import { MessageInput } from "@/components/chat/MessageInput";
import { MessageList } from "@/components/chat/MessageList";

export function ChatBox() {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <MessageList />
      <MessageInput />
    </div>
  );
}
