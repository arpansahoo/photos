import { z } from "zod";

export const insertImageSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  imageUrl: z.string().url("Must be a valid URL"),
  alt: z.string().min(1, "Alt text is required"),
  description: z.string().optional(),
});

export type InsertImage = z.infer<typeof insertImageSchema>;

export interface Image extends InsertImage {
  id: string;
}

export const insertVideoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.string().min(1, "Category is required"),
  youtubeId: z.string().min(1, "YouTube ID is required"),
  description: z.string().optional(),
});

export type InsertVideo = z.infer<typeof insertVideoSchema>;

export interface Video extends InsertVideo {
  id: string;
}