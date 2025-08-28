
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function Dashboard() {
  const [messages, setMessages] = useState([
    { sender: "Alice", text: "Halo tim, bagaimana progres hari ini?" },
    { sender: "Bob", text: "Sudah 70% selesai di modul API." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { sender: "You", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
      {/* Project Overview */}
      <Card className="lg:col-span-2 shadow-md rounded-2xl border-l-4 border-primary">
        <CardHeader>
          <CardTitle className="text-primary font-semibold">Project Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>📌 Total Projects: 8</li>
            <li>✅ Completed: 5</li>
            <li>🚧 In Progress: 2</li>
            <li>🕒 Pending: 1</li>
          </ul>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="lg:col-span-2 shadow-md rounded-2xl border-l-4 border-primary">
        <CardHeader>
          <CardTitle className="text-primary font-semibold">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>🔹 John updated the API documentation</li>
            <li>🔹 Maria completed UI design</li>
            <li>🔹 Sprint 5 started yesterday</li>
          </ul>
        </CardContent>
      </Card>

      {/* Sprint Statistics */}
      <Card className="lg:col-span-2 shadow-md rounded-2xl border-l-4 border-primary">
        <CardHeader>
          <CardTitle className="text-primary font-semibold">Sprint Statistics</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-xl text-center">
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm">Backlog Items</p>
          </div>
          <div className="p-4 bg-muted rounded-xl text-center">
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm">In Progress</p>
          </div>
          <div className="p-4 bg-muted rounded-xl text-center">
            <p className="text-2xl font-bold">18</p>
            <p className="text-sm">Completed</p>
          </div>
          <div className="p-4 bg-muted rounded-xl text-center">
            <p className="text-2xl font-bold">32</p>
            <p className="text-sm">Sprint Velocity</p>
          </div>
        </CardContent>
      </Card>

      {/* Chat Personel */}
      <Card className="lg:col-span-2 flex flex-col shadow-md rounded-2xl border-l-4 border-primary">
        <CardHeader>
          <CardTitle className="text-primary font-semibold">Team Chat</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto max-h-64 space-y-2">
          <ScrollArea className="h-full pr-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg mb-2 ${
                  msg.sender === "You"
                    ? "bg-primary text-primary-foreground ml-auto w-fit"
                    : "bg-muted w-fit"
                }`}
              >
                <span className="font-semibold">{msg.sender}:</span> {msg.text}
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <div className="flex gap-2 p-4 border-t">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </Card>
    </div>
  );
}
