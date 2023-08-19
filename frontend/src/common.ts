// Servers Type
export interface Servers {
  name: string;
  icon: string;
}

// User Type

export interface User {
  name: string;
  userName: string;
  avatar: string;
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
export interface FriendRequest extends Pick<User, "userName" | "avatar"> {
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
