
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';

export function TeamChat() {
  const [messages, setMessages] = useState([
    { sender: 'Alice', text: 'Halo tim, bagaimana progres hari ini?' },
    { sender: 'Bob', text: 'Sudah 70% selesai di modul API.' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { sender: 'You', text: newMessage }]);
    setNewMessage('');
  };

  return (
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
                msg.sender === 'You'
                  ? 'bg-primary text-primary-foreground ml-auto w-fit'
                  : 'bg-muted w-fit'
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
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </Card>
  );
}
