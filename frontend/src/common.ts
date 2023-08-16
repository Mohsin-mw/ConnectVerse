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
