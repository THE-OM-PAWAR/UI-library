import {cn, Badge } from "@repo/components";

export default function BadgeCustomColors() {
  return (
    <div className="flex flex-wrap gap-2">  
      <Badge className="bg-blue-500 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
        Blue
      </Badge>
      <Badge className="bg-green-500 text-green-700 dark:bg-green-950 dark:text-green-300">
        Green
      </Badge>
      <Badge className="bg-sky-500 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
        Sky
      </Badge>
      <Badge className="bg-purple-500 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
        Purple
      </Badge>
      <Badge className="bg-red-500 text-red-700 dark:bg-red-950 dark:text-red-300">
        Red
      </Badge>
    </div>
  )
}
