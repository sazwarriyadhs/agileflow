'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function Dashboard() {
  const [messages, setMessages] = useState([
    { sender: "Alice", text: "Hey team, daily standup at 9 AM." },
    { sender: "Bob", text: "Noted, thanks Alice!" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { sender: "You", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Project Overview */}
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Sprint 5 is in progress. Focus on finalizing the authentication
            module and integrating payment gateway.
          </p>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>✅ Login feature completed by Alice</li>
            <li>🚧 Payment API integration in progress</li>
            <li>📌 New backlog item added: "Export reports"</li>
          </ul>
        </CardContent>
      </Card>

      {/* Sprint Stats */}
      <div className="col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Backlog</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">32</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">14</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">18</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Velocity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">25 pts</p>
          </CardContent>
        </Card>
      </div>

      {/* Floating Chat Personnel */}
      <div className="fixed bottom-4 right-4 w-80">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-sm">Team Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-48 pr-2">
              <div className="space-y-2 text-sm">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded-lg ${
                      msg.sender === "You"
                        ? "bg-primary text-primary-foreground ml-auto w-fit"
                        : "bg-muted w-fit"
                    }`}
                  >
                    <strong>{msg.sender}: </strong>
                    {msg.text}
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="flex mt-2 space-x-2">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}