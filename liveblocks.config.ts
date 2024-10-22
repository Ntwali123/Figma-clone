import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

// Initialize the Liveblocks client with the public API key
const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!, // Use the key from environment variables
});

// Define the Liveblocks types in a more specific way
interface MyLiveblocks {
  // Define the presence data structure 
  
  Presence: {
    cursor?: { x: number; y: number }; // Example: cursor coordinates
  };

  // Define the storage structure
  Storage: {
    animals?: LiveList<string>; // Example: a list of animals
  };

  // Define custom user metadata
  UserMeta: {
    id: string; // User ID
    info: {
      name?: string; // Example: user's name
      avatar?: string; // Example: user's avatar
    };
  };

  // Define custom events
  RoomEvent: 
    | { type: "PLAY" } 
    | { type: "REACTION"; emoji: string }; // Example events with union types

  // Define thread metadata structure
  ThreadMetadata: {
    x?: number; // X-coordinate
    y?: number; // Y-coordinate
  };

  // Define room info structure
  RoomInfo: {
    title?: string; // Room title
    url?: string;   // Room URL
  };
}

// Create the room context using the specific types for Liveblocks
const { RoomProvider, useMyPresence, useOthers, useMutation } = createRoomContext<MyLiveblocks>({
  client,
});

// Export the necessary components
export { RoomProvider, useMyPresence, useOthers, useMutation };
