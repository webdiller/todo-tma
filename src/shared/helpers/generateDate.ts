import { addMinutes, addHours, addDays, addWeeks, addMonths, addYears } from "date-fns"

export type DateOptions = "30_minutes" | "2_hours" | "1_day" | "3_days" | "1_week" | "2_weeks" | "1_month" | "2_months" | "6_months" | "1_year"
export function generateDate(option: DateOptions): Date {
  const now = new Date()
  switch (option) {
    case "30_minutes":
      return addMinutes(now, 30)
    case "2_hours":
      return addHours(now, 2)
    case "1_day":
      return addDays(now, 1)
    case "3_days":
      return addDays(now, 3)
    case "1_week":
      return addWeeks(now, 1)
    case "2_weeks":
      return addWeeks(now, 2)
    case "1_month":
      return addMonths(now, 1)
    case "2_months":
      return addMonths(now, 2)
    case "6_months":
      return addMonths(now, 6)
    case "1_year":
      return addYears(now, 1)
    default:
      throw new Error("Invalid date option")
  }
}
