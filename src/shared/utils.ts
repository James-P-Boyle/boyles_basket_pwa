import { useNavigate } from "react-router-dom"

import { Item, List } from "@/App"
import { Category } from "@/constants/categories"

export const getWeekNumber = (date: Date): number => {
  const startOfYear = new Date(date.getFullYear(), 0, 1)
  return Math.ceil((((date.getTime() - startOfYear.getTime()) / 86400000) + startOfYear.getDay() + 1) / 7)
}

export const generateUniqueListName = (lists: Partial<List>[], baseName: string): string => {
  let name = baseName
  let suffix = 1

  while(lists && lists.some(list => list.name === name)) {
    suffix += 1
    name = `${baseName}.${suffix}`
  }

  return name
}

//REDUCE FN ??
export const groupItemsByCategory = (items: Item[]) => {

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

  items.forEach(item => {
    const category = item.category || Category.None
    groupedItems[category].push(item)
  })

  return groupedItems
}

export const delayedNavigate = (url: string, delay: number = 0) => {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate(url)
  }, delay)
}

export const areStringsEqual = (str1: string, str2: string): boolean => {
  if (!str1 || !str2) return false
  return str1.toLowerCase().trim() === str2.toLowerCase().trim()
}

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}