
import { Inngest } from "inngest";
import connectDB from "./db";
import { User as ClerkUser } from "@clerk/nextjs/server"; // Renamed to ClerkUser
import User from "../models/User"; // Your local User model

// Create a client to send and receive events
export const inngest = new Inngest({ id: "QuickCart" });

// inngest function to save user data into database
export const syncUserCreation = inngest.createFunction(
  {
    id: 'sync-user-from-clerk',
  },
  {
    event: 'clerk.user.created'
  },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;
    const userData = {
      _id: id,
      email: email_addresses[0]?.email_address,
      name: first_name + ' ' + last_name,
      imageUrl: image_url,
    };

    await connectDB();
    await new User(userData).save();
  }
);