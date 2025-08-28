'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  BarChart2,
  BotMessageSquare,
  ClipboardList,
  LayoutGrid,
  Layers,
  Settings,
  Users,
  ClipboardCheck,
  MessageSquare,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard' , icon: LayoutGrid},
  { href: '/dashboard/backlog', icon: Layers, label: 'Product Backlog' },
  { href: '/dashboard/sprint', icon: ClipboardList, label: 'Sprint Planning' },
  { href: '/dashboard/board', icon: LayoutGrid, label: 'Kanban Board' },
  { href: '/dashboard/chat-personnel', icon: MessageSquare, label: 'Chat Personnel' },
  { href: '/dashboard/assistant', icon: BotMessageSquare, label: 'Daily Assistant' },
  { href: '/dashboard/retrospectives', icon: Users, label: 'Retrospectives' },
  { href: '/dashboard/reports', icon: BarChart2, label: 'Reports' },
  { href: '/dashboard/summary', icon: ClipboardCheck, label: 'Sprint Summary' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider defaultOpen>
      <div className="flex h-screen">
        <Sidebar>
          <SidebarHeader className="p-4">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" width={32} height={32} alt="AgileFlow logo" />
              <span className="text-xl font-semibold text-primary group-data-[collapsible=icon]:hidden">
                AgileFlow
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior={false} passHref>
                    <SidebarMenuButton
                      isActive={pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))}
                      tooltip={item.label}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="justify-start w-full p-2 h-auto">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://picsum.photos/100" alt="User" data-ai-hint="person" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="text-left group-data-[collapsible=icon]:hidden">
                      <p className="font-medium">Scrum Master</p>
                      <p className="text-xs text-muted-foreground">
                        user@agileflow.com
                      </p>
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Scrum Master</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      user@agileflow.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
            <SidebarTrigger className="md:hidden" />
            <div className="flex-1">
              <h1 className="text-lg font-semibold capitalize">
                {pathname.split('/').pop()?.replace('-', ' ') || 'Dashboard'}
              </h1>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
