"use client"

import { useRouter } from 'next/navigation';
import React from 'react'



const SearchLocationBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  return <div>Search Location Bar</div>
  
}

export default SearchLocationBar
