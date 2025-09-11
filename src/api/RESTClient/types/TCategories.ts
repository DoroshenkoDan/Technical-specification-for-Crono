import { TCategory } from 'types/TCategory';

// 📌 Запит на створення категорії
export interface TCreateCategory {
  name: string;
  slug: string;
  title: string;
  description: string;
  is_active: boolean;
  is_hidden: boolean;
}

// 📌 Список категорій (з пагінацією)
export interface TListCategories {
  count: number;
  next: string | null;
  previous: string | null;
  page: number;
  pageSize: number;
  results: TCategory[];
}

// Оновлення даних категорії
export type TUpdateCategory = Pick<
  TCategory,
  'name' | 'slug' | 'title' | 'description' | 'is_active' | 'is_hidden'
>;

// Часткове оновлення даних категорії
export type TUpdateCategoryPartial = Partial<TUpdateCategory>;
