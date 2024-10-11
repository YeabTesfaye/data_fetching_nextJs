export function formatDate(date: string | number | Date|undefined): string {
   if(date === undefined)
    return "Invalid date";
    return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}
