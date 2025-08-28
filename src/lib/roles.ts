import { Role } from '@prisma/client';

export const ROLES = {
  SCRUM_MASTER: Role.scrum_master,
  PROJECT_MANAGER: Role.project_manager,
  DEVELOPER: Role.developer,
  USER: Role.user,
};

export const USER_STORY_STATUS = {
    BACKLOG: 'Backlog',
    TODO: 'Todo',
    IN_PROGRESS: 'InProgress',
    DONE: 'Done'
};
