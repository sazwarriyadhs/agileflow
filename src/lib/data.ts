export type UserStory = {
  id: string;
  title: string;
  description: string;
  status: 'Todo' | 'In Progress' | 'Done' | 'Backlog';
  points: number;
  assignee?: string;
  epic?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  avatar: string;
};

export type Sprint = {
  id: string;
  name: string;
  goal: string;
  startDate: string;
  endDate: string;
  stories: UserStory[];
};

export const teamMembers: TeamMember[] = [
  { id: 'usr-1', name: 'Alice', avatar: '/avatars/01.png' },
  { id: 'usr-2', name: 'Bob', avatar: '/avatars/02.png' },
  { id: 'usr-3', name: 'Charlie', avatar: '/avatars/03.png' },
  { id: 'usr-4', name: 'Diana', avatar: '/avatars/04.png' },
];

export const userStories: UserStory[] = [
  { id: 'AG-1', title: 'User Authentication', description: 'Implement email/password login.', status: 'Done', points: 5, assignee: 'usr-1', epic: 'Core Features' },
  { id: 'AG-2', title: 'Create Product Backlog Page', description: 'Users should be able to see and manage the product backlog.', status: 'In Progress', points: 8, assignee: 'usr-2', epic: 'Core Features' },
  { id: 'AG-3', title: 'Design Kanban Board UI', description: 'Create the UI for the drag-and-drop Kanban board.', status: 'Todo', points: 5, assignee: 'usr-3', epic: 'Core Features' },
  { id: 'AG-4', title: 'Setup Database Schema', description: 'Use Prisma to define the initial database schema.', status: 'Done', points: 3, assignee: 'usr-1' },
  { id: 'AG-5', title: 'AI Assistant Integration', description: 'Integrate the GenAI flow for daily notes.', status: 'Todo', points: 8, assignee: 'usr-4', epic: 'AI Features' },
  { id: 'AG-6', title: 'Implement Velocity Chart', description: 'Display team velocity using Recharts.', status: 'Backlog', points: 5, epic: 'Reporting' },
  { id: 'AG-7', title: 'Implement Burndown Chart', description: 'Display sprint burndown chart.', status: 'Backlog', points: 5, epic: 'Reporting' },
  { id: 'AG-8', title: 'User Profile Page', description: 'Allow users to view and edit their profile.', status: 'Backlog', points: 3 },
  { id: 'AG-9', title: 'Team Invitation System', description: 'Allow scrum masters to invite team members.', status: 'Backlog', points: 8, epic: 'Team Management' },
  { id: 'AG-10', title: 'Retrospective Board', description: 'Implement a collaborative board for retrospectives.', status: 'Todo', points: 5, assignee: 'usr-3', epic: 'Core Features' },
];

export const sprints: Sprint[] = [
  {
    id: 'sprint-1',
    name: 'Sprint 1 - Foundation',
    goal: 'Build the core infrastructure and authentication.',
    startDate: '2024-07-01',
    endDate: '2024-07-14',
    stories: userStories.filter(s => ['AG-1', 'AG-4'].includes(s.id)),
  },
  {
    id: 'sprint-2',
    name: 'Sprint 2 - Core Features MVP',
    goal: 'Launch the main features: Backlog, Kanban, and Sprint Planning.',
    startDate: '2024-07-15',
    endDate: '2024-07-28',
    stories: userStories.filter(s => ['AG-2', 'AG-3', 'AG-10'].includes(s.id)),
  },
];
