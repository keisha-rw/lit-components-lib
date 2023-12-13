interface FileStateConfig {
  status?: string;
  statusText?: string;
}

export type FilesStateConfig = FileStateConfig & File;
