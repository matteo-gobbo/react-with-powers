export function clsx(
  args: string | Array<string> | Record<string, boolean>
): string {
  let classes: Array<string> = [];
  if (typeof args === "string") {
    classes.push(args);
  } else if (Array.isArray(args)) {
    classes = [...args];
  } else {
    for (const [key, value] of Object.entries(args)) {
      if (value) classes.push(key);
    }
  }
  const str = classes.join(" ");
  return str;
}

export default clsx;
