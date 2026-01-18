// Supabase configuration
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface QueueItem {
  id: string;
  ticket_number: number;
  phone_number: string;
  status: 'waiting' | 'called' | 'completed';
  timestamp: string;
  created_at?: string;
}
