-- Migração: registrar autor das movimentações no histórico.
-- Rode no SQL Editor do Supabase.

alter table public.movimentacoes
  add column if not exists movimentado_por text,
  add column if not exists movimentado_nome text;

create index if not exists idx_movimentacoes_movimentado_por
  on public.movimentacoes (movimentado_por);
