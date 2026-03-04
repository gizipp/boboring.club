// src/pages/api/keystatic/[...slug].ts
import { KeystaticAPIRoute } from '@keystatic/astro/api';

export const prerender = false;
export const all = KeystaticAPIRoute;
