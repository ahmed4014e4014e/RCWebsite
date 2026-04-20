import { isSupabaseConfigured, supabase } from "./supabase";

function ensureSupabase() {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase is not configured yet.");
  }
}

export async function createContactMessage(payload) {
  ensureSupabase();

  const { error } = await supabase.from("contact_messages").insert(payload);

  if (error) {
    throw error;
  }
}

export async function fetchContactMessages() {
  ensureSupabase();

  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data ?? [];
}
