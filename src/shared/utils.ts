import { Item, List } from "@/App"
import { Category } from "@/constants/categories"

export const getWeekNumber = (date: Date): number => {
  const startOfYear = new Date(date.getFullYear(), 0, 1)
  return Math.ceil((((date.getTime() - startOfYear.getTime()) / 86400000) + startOfYear.getDay() + 1) / 7)
}

export const generateUniqueListName = (lists: { name: string }[], baseName: string): string => {
  let name = baseName
  let suffix = 1

  while(lists.some(list => list.name === name)) {
    suffix += 1
    name = `${baseName}.${suffix}`
  }

  return name
}

export const groupItemsByCategory = (list: List) => {
  const groupedItems: Record<Category, Item[]> = {
    [Category.Fruits]: [],
    [Category.Vegetables]: [],
    [Category.Dairy]: [],
    [Category.Meat]: [],
    [Category.Bakery]: [],
    [Category.Snacks]: [],
    [Category.Beverages]: [],
    [Category.Household]: [],
    [Category.None]: []
  }

  list.items.forEach(item => {
    const category = item.category || Category.None
    groupedItems[category].push(item)
  })

  return groupedItems
}
