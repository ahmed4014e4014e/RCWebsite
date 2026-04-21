import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { isSupabaseConfigured, supabase } from "../lib/supabase";
import { getUserRole } from "../lib/authRouting";

const AuthContext = createContext(null);

function createMetadataProfile(authUser) {
  if (!authUser?.id) {
    return null;
  }

  return {
    id: authUser.id,
    full_name: authUser.user_metadata?.full_name ?? null,
    role: getUserRole(null, authUser, null),
    institute: authUser.user_metadata?.institute ?? null,
    email: authUser.email ?? null,
  };
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = async (authUser) => {
    if (!isSupabaseConfigured || !supabase || !authUser?.id) {
      setProfile(null);
      return null;
    }

    const metadataProfile = createMetadataProfile(authUser);

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", authUser.id)
      .maybeSingle();

    if (error) {
      setProfile(metadataProfile);
      return metadataProfile;
    }

    const shouldSyncProfile =
      !data ||
      (!data.full_name && metadataProfile.full_name) ||
      (!data.institute && metadataProfile.institute) ||
      (!data.email && metadataProfile.email);

    if (!shouldSyncProfile) {
      setProfile(data ?? null);
      return data ?? null;
    }

    const profilePayload = {
      id: authUser.id,
      full_name: data?.full_name || metadataProfile.full_name,
      role: data?.role || metadataProfile.role || "student",
      institute: data?.institute || metadataProfile.institute,
      email: data?.email || metadataProfile.email,
    };

    const { data: syncedProfile, error: syncError } = await supabase
      .from("profiles")
      .upsert(profilePayload)
      .select("*")
      .single();

    if (syncError) {
      setProfile(data ?? metadataProfile);
      return data ?? metadataProfile;
    }

    setProfile(syncedProfile);
    return syncedProfile;
  };

  useEffect(() => {
    let mounted = true;

    const bootstrapAuth = async () => {
      try {
        if (!isSupabaseConfigured || !supabase) {
          return;
        }

        const {
          data: { session: currentSession },
        } = await supabase.auth.getSession();

        if (!mounted) return;

        setSession(currentSession ?? null);
        setUser(currentSession?.user ?? null);

        if (currentSession?.user) {
          setProfile(createMetadataProfile(currentSession.user));
          await loadProfile(currentSession.user);
        } else {
          setProfile(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    bootstrapAuth();

    if (!isSupabaseConfigured || !supabase) {
      return () => {
        mounted = false;
      };
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, nextSession) => {
      try {
        if (!mounted) return;

        setSession(nextSession ?? null);
        setUser(nextSession?.user ?? null);

        if (nextSession?.user) {
          setProfile(createMetadataProfile(nextSession.user));
          await loadProfile(nextSession.user);
        } else {
          setProfile(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    if (isSupabaseConfigured && supabase) {
      await supabase.auth.signOut();
    }

    setSession(null);
    setUser(null);
    setProfile(null);
  };

  const value = useMemo(
    () => ({
      session,
      user,
      profile,
      loading,
      signOut,
      refreshProfile: () => loadProfile(user),
      isSupabaseConfigured,
    }),
    [session, user, profile, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider.");
  }

  return context;
}
