create table if not exists public.usuarios (
  id text primary key,
  nome text not null,
  usuario text not null unique,
  senha text not null,
  cargo text not null,
  ccs jsonb not null default '[]'::jsonb,
  permissions jsonb not null default '{}'::jsonb,
  ativo boolean not null default true,
  must_change_password boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists idx_usuarios_usuario on public.usuarios (usuario);
