export type FileId =
  | 'README.md'
  | 'experiencia.json'
  | 'proyectos/destacados.tsx'
  | 'proyectos/vector_migration_cli.ts'
  | 'proyectos/dragonball_compose.yml'
  | 'ai_assistant.py'
  | 'contacto.env';

export interface FileItem {
  id: FileId;
  name: string;
  icon: string;
  colorClass: string;
}

export type ProjectFilter = 'all' | 'fullstack' | 'automation' | 'cli-data';
