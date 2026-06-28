const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY";

// Initialize client
const supa = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);