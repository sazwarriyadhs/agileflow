'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ChatPersonnelPage() {
  const personnel = [
    { id: 'usr-1', name: 'Alice', online: true },
    { id: 'usr-2', name: 'Bob', online: false },
    { id: 'usr-3', name: 'Charlie', online: true },
    { id: 'usr-4', name: 'Diana', online: true },
  ];

  const [selectedPersonnel, setSelectedPersonnel] = useState(personnel[0]);

  const [messages, setMessages] = useState([
    { sender: 'Alice', text: 'Hey, how is the integration task coming along?' },
    { sender: 'You', text: "I'm almost done, just finalizing the tests." },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { sender: 'You', text: newMessage }]);
    setNewMessage('');
  };

  return (
    <div className="grid grid-cols-4 h-[calc(100vh-8rem)] gap-6">
      <Card className="col-span-1 flex flex-col">
        <CardHeader>
          <CardTitle>Team</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow p-2">
          <ScrollArea className="h-full">
            <div className="space-y-2">
              {personnel.map((p) => (
                <Button
                  key={p.id}
                  variant={selectedPersonnel.id === p.id ? 'secondary' : 'ghost'}
                  className="w-full justify-start h-14"
                  onClick={() => setSelectedPersonnel(p)}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`https://picsum.photos/seed/${p.id}/100`} data-ai-hint="person" />
                        <AvatarFallback>{p.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {p.online && (
                        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
                      )}
                    </div>
                    <span>{p.name}</span>
                  </div>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card className="col-span-3 flex flex-col">
        <CardHeader className="flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={`https://picsum.photos/seed/${selectedPersonnel.id}/100`}
                data-ai-hint="person"
              />
              <AvatarFallback>
                {selectedPersonnel.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <CardTitle>{selectedPersonnel.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <ScrollArea className="flex-grow p-4 pr-2 -mx-4">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-end gap-2 ${
                    msg.sender === 'You' ? 'justify-end' : ''
                  }`}
                >
                  {msg.sender !== 'You' && (
                    <Avatar className="h-8 w-8">
                       <AvatarImage
                        src={`https://picsum.photos/seed/${selectedPersonnel.id}/100`}
                        data-ai-hint="person"
                      />
                      <AvatarFallback>
                        {selectedPersonnel.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`p-3 rounded-lg max-w-md ${
                      msg.sender === 'You'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                   {msg.sender === 'You' && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://picsum.photos/100" data-ai-hint="person" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="flex mt-4 space-x-2 border-t pt-4">
            <Input
              placeholder={`Message ${selectedPersonnel.name}...`}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
