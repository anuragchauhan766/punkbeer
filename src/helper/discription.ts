export function para(para: string, MaxLength: number) {
  if (!para) return null;
  if (para.length > MaxLength) {
    return para.substring(0, MaxLength) + "...";
  }
  return para;
}
