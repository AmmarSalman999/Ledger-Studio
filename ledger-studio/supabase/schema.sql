-- Ledger Studio Database Schema
-- Run this in the Supabase SQL Editor

-- 1. Enable UUID extension
create extension if not exists "uuid-ossp";

-- 2. Create Enums
create type lead_status as enum ('New', 'Qualifying', 'Proposal', 'Negotiation', 'Won', 'Lost');
create type service_type as enum ('Audit', 'Retainer', 'CFO');
create type project_status as enum ('Active', 'Paused', 'Completed');

-- 3. Leads Table (The Core CRM Data)
create table leads (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  company_name text not null,
  contact_person text not null,
  email text not null,
  annual_revenue text,
  service_interest service_type,
  status lead_status default 'New',
  notes text
);

-- 4. Secure RLS Policies (Row Level Security)
alter table leads enable row level security;

-- Allow public to INSERT new leads (Contact Form)
create policy "Allow public insert to leads"
on leads for insert
to anon
with check (true);

-- Allow admins to VIEW/EDIT leads
-- (In a real app, you would verify 'auth.uid()' roles here)
create policy "Allow authenticated view leads"
on leads for select
to authenticated
using (true);

-- 5. Clients Table (Converted Leads)
create table clients (
  id uuid primary key default uuid_generate_v4(),
  lead_id uuid references leads(id),
  onboarding_status text default 'Pending',
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- 6. Automations (Saved Workflows)
create table automations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  flow_config jsonb, -- Stores ReactFlow nodes
  is_active boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
