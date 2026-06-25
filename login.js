import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://xmrkbpnslyuxkcgxcoxc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtcmticG5zbHl1eGtjZ3hjb3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwMDg2NTYsImV4cCI6MjA5NzU4NDY1Nn0.tCHkFovr-SQFIsMl1f64lZP8jWJWUtOIor6jMDa_558')

async function signInWithEmail(emailAdd, pass) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'user@example.com',
    password: 'your-password',
  })
  
  if (error) console.error('Error logging in:', error.message)
  else console.log('Successfully logged in!', data)
}

