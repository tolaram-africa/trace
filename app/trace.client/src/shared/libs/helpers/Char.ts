/** Character Text manipulation helpers */

export function caseReplacer(str: String, charType: String) {
  if (str !== str.toLowerCase()) {
    str = str.replace(/[A-Z]/g, (m) => charType + m.toLowerCase())
  }
  return str
}

export function camelToDash(str: String) {
  return caseReplacer(str, '-')
}

export function camelToDot(str: String) {
  return caseReplacer(str, '.').replace('-', '.')
}
