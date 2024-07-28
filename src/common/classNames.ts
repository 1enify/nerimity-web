export function classNames(...args: Array<string | undefined>): string {
  return args.filter(Boolean).join(" ");
}

export const cn = classNames;
export function conditionalClass(condition: any, className?: string): string {
  return condition ? className || "" : "";
}
