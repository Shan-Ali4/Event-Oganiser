import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    //Users Table
    users: defineTable({
        name: v.string(),
        tokenIdentifier: v.string(), // Cleark user ID for Auth
        email: v.string(),
        imageUrl: v.optional(v.string()),

        //Onboarding
        hasCompletedOnboarding: v.boolean(),
        
        location: v.optional(
            v.object({
                city: v.string(),
                state: v.optional(v.string()),
                country: v.string(),
            })
        ),
        interests: v.optional(v.array(v.string())), // Array of interest IDs Min 3 Val

        // Organizer tracking (User Subscriptions)
        freeEventsCreated: v.number(), // Number of free events created

        // Timestamps
        createdAt: v.number(),
        updatedAt: v.number(),
    }).index("by_token", ["tokenIdentifier"], { unique: true }),
})
