
import { Role } from '@prisma/client';

export const ROLES = {
  SCRUM_MASTER: Role.scrum_master,
  PROJECT_MANAGER: Role.project_manager,
  DEVELOPER: Role.developer,
  USER: Role.user,
};
