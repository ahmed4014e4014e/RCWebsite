drop policy if exists "Admins can read all profiles" on public.profiles;
create policy "Admins can read all profiles"
on public.profiles
for select
using (
  exists (
    select 1
    from public.profiles as admin_profile
    where admin_profile.id = auth.uid()
      and admin_profile.role = 'admin'
  )
);

drop policy if exists "Admins can read tutoring requests" on public.tutoring_requests;
create policy "Admins can read tutoring requests"
on public.tutoring_requests
for select
using (
  exists (
    select 1
    from public.profiles
    where profiles.id = auth.uid()
      and profiles.role = 'admin'
  )
);
