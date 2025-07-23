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

DIFF BW 
WEBSOCKETS-BINANCE TRADING,WHATSAPP UI SYSTEM BI COMMUNICATE NO REGULAR INTERVAL
API POLLING-GMAIL,CRICBUZZ COMMENTARY ONE WAY LINE ,LIVE CHAT YOUTUBE

////
📌 useMemo Hook in React
🔍 What is useMemo?
useMemo is a React Hook that memoizes a computed value, recomputing it only when its dependencies change. This helps optimize performance by preventing expensive recalculations on every render.

🧠 Syntax
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
computeExpensiveValue is a function whose result will be memoized.

[a, b] is the dependency array: recompute only if any of these change.

memoizedValue holds the cached result.

////
📌 useCallback Hook in React
🔍 What is useCallback?
useCallback memoizes a function, so it doesn’t get recreated on every render unless its dependencies change — useful when passing callbacks to optimized child components.

🧠 Syntax
const memoizedCallback = useCallback(() => {
  // function logic
}, [dependencies]);

////
📌 useRef Hook in React
🔍 What is useRef?
useRef gives you a mutable reference that persists between renders — useful for DOM access, storing instance variables, or keeping previous state.

🧠 Syntax
const myRef = useRef(initialValue);
