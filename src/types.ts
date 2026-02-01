export interface Player {
    id: string;
    name: string;
    image: string;
    pickedBy: string[]; // Array of Team IDs that picked this player
}

export interface Team {
    id: string;
    name: string;
    members: string[]; // Array of Player IDs
}

export type TeamCount = 6 | 8;
