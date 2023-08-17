// Servers Type
export interface Servers {
  name: string;
  icon: string;
}

// Direct Messages Type

export interface DirectMessages {
  userName: string;
  avatar: string;
}

// Status
type Status = "online" | "offline" | "busy";

// Friend Type
export interface Friend extends DirectMessages {
  activity: string;
  status: Status;
}

// User Type

export interface User {
  name: string;
  userName: string;
  avatar: string;
}

export interface ExploreServer {
  Image: string;
  Icon: string;
  Name: string;
  Description: string;
  membersOnline: string;
  membersTotal: string;
}
