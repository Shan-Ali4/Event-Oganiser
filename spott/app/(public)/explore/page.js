"use client"

import { api } from "@/convex/_generated/api";
import { useQuery } from 'convex/react';
import React from 'react'

const ExplorePage   = () => {
    const data = useQuery(api.events.getFeaturedEvents);

    
  return (
    <div>
      <h1>Explore Events</h1>
    </div>
  )
}

export default ExplorePage
