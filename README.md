✅ 1. Debouncing Logic (Explanation)
If delay between keystrokes > 200ms → fire API call.

If user types fast (i.e., < 200ms between keystrokes) → skip API calls.

This avoids overloading your app and reduces rate limits from YouTube API.

CACHING

Purpose:
The searchSlice manages caching of search suggestions to avoid repeated API calls for the same query, improving performance and user experience.

Structure & Initial State:
It uses an empty object ({}) as the initial state, where each key will be a search query, and the value will be the list of suggestions returned from the API.

Reducer Logic - cacheResults:
The cacheResults reducer merges new cache entries into the current state using Object.assign(state, action.payload), enabling multiple query results to be cached without overwriting existing ones.