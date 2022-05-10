import { format } from "date-fns"

const STANDARD_FORMAT = "LLL yyyy"

export const formatDate = (date: string) => {
  return format(new Date(date), STANDARD_FORMAT)
}
