const messages = [
  { id: "1", text: "Olá, doutor!", sender: "Paciente" },
  { id: "2", text: "Olá, como posso ajudar?", sender: "Profissional" }
];

export function MessageList() {
  return (
    <div className="space-y-3">
      {messages.map((message) => (
        <div key={message.id} className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
          <span className="font-semibold text-slate-900">{message.sender}: </span>
          {message.text}
        </div>
      ))}
    </div>
  );
}
