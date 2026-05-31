import { State, City } from "country-state-city";


export function createLocationslug(city, state) {
    if (!city || !state) return "";

  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const stateSlug = state.toLowerCase().replace(/\s+/g, '-');
  
  return `${citySlug}-${stateSlug}`;
}

export function parseLocationSlug(slug) {
  if(!slug || typeof slug !== 'string'){
    return { city: null, state: null, isValid: false };
  }

  const parts = slug.split('-');

  // Must Have at least 2 parts (city and state)
  if (parts.length < 2) {
    return { city: null, state: null, isValid: false };
  }

  // Parse city (first part)
  const cityName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);

  // Parse state (remaining parts)
  const stateName = parts
  .slice(1)
  .map((p)=> p.charAt(0).toUpperCase() + p.slice(1))
  .join(' ');

  // Get All Indian States for Validation
  const indianStates = State.getStatesOfCountry("IN");

  // Validate State
  const stateObj = indianStates.find(
    (s) => s.name.toLowerCase() === stateName.toLowerCase()
  );

  if (!stateObj) {
    return { city: null, state: null, isValid: false };
  }

  // Validate City (basic check for non-empty)
  const cities = City.getCitiesOfState("IN", stateObj.isoCode);
  const cityExists = cities.some(
    (c) => c.name.toLowerCase() === cityName.toLowerCase()
  );

  if (!cityExists) {
    return { city: null, state: null, isValid: false };
  }

  return { city: cityName, state: stateName, isValid: true };

}