import { RawChannel, RawFriend, RawInboxWithoutChannel, RawPresence, RawServer, RawServerMember, RawServerRole, RawUserNotificationSettings, RawUser, RawUserConnection, RawVoice } from "../RawData";

export interface AuthenticatedPayload {
  user: SelfUser;
  servers: RawServer[];
  serverMembers: RawServerMember[];
  messageMentions: MessageMention[]
  channels: RawChannel[];
  serverRoles: RawServerRole[];
  notificationSettings: RawUserNotificationSettings[];
  presences: RawPresence[];
  friends: RawFriend[];
  inbox: RawInboxWithoutChannel[];
  lastSeenServerChannelIds: Record<string, number>; // { [channelId]: timestamp }
  voiceChannelUsers: RawVoice[];
}

interface MessageMention {
  mentionedById: string;
  mentionedBy: RawUser;
  count: number;
  serverId?: string;
  channelId: string
  createdAt: number;
}

export enum DmStatus {
  OPEN = 0,
  FRIENDS_AND_SERVERS = 1,
  FRIENDS = 2,
}
export enum FriendRequestStatus {
  OPEN = 0,
  SERVERS = 1,
  CLOSED = 2,
}


export interface SelfUser {
  id: string;
  email: string;
  username: string;
  hexColor: string;
  avatar?: string;
  banner?: string;
  badges: number;
  tag: string;
  customStatus?: string;
  orderedServerIds: string[]
  dmStatus: DmStatus
  friendRequestStatus: FriendRequestStatus
  emailConfirmed: boolean
  connections: RawUserConnection[]
}