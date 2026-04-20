drop policy if exists "Authenticated users can read their own contact messages" on public.contact_messages;

create policy "Admins can read contact messages"
on public.contact_messages
for select
using (
  exists (
    select 1
    from public.profiles
    where profiles.id = auth.uid()
      and profiles.role = 'admin'
  )
);
