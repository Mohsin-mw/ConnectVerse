// Servers Type
export interface Server {
  channels: Array<{ channelName: string }>;
  members: string[];
  owner: string;
  pic: string;
  serverName: string;
  _id: string;
}

// User Type

export interface User {
  name: string;
  email: string;
  pic: string;
  _id: string;
}

// Direct Messages Type

export interface DirectMessages {
  name: string;
  pic: string;
}

// Status
type Status = "online" | "offline" | "busy";

// Friend Type
export interface Friend {
  name: string;
  emial: string;
  pic: string;
  //eslint-disable-next-line
  status: Status | (string & {});
  user: string;
  _id: string;
}

export interface ExploreServer {
  Image: string;
  Icon: string;
  Name: string;
  Url: string;
  Description: string;
  membersOnline: string;
  membersTotal: string;
}

// FriendRequest Type
export interface FriendRequest {
  userName: string;
  avatar: string;
  status: "accepted" | "declined";
  date: string;
}

// ---- TYPE HELPERS
/**
 * Extracts keys as a union from a type
 * @example
 * interface Variant{
 *  solid:string
 *  outline:string
 * }
 * type VariantKeys = ExtractKeys<Variant>
 * @returns
 * From example : "solid" | "outline"
 */
export type ExtractKeys<T> = keyof T;
