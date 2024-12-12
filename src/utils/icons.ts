import icons from '../icons.json'
export function getIcon(iconId: string) {
  return icons.find((i) => i.id === iconId.toLowerCase())
}