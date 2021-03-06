export const trimHash = (hash: string, keep = 10) => {
  const start = hash.substring(0, keep)
  const end = hash.substring(hash.length - keep)
  return `${start}...${end}`
}

export const isValidElrondAddress = (val: string) => /erd1[a-z0-9]{58}/g.test(val)

export const sanitizeAlphanumeric = (val: string) => val.replace(/[^a-z0-9]/gi, '')

export const sanitizeNumeric = (val: string): string => {
  const sanitizedDots = val.split('.').length > 2 && val.endsWith('.') ? val.slice(0, -1) : val
  return sanitizedDots.replace(/[^0-9\.]+/g, '')
}

export const capitalizeFirstLetter = (val: string) => (val ? val.charAt(0).toUpperCase() + val.slice(1) : '')

export const abbreviateNumber = (val: number) => {
  var SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E']
  var tier = (Math.log10(Math.abs(val)) / 3) | 0
  if (tier == 0) return val
  var suffix = SI_SYMBOL[tier]
  var scale = Math.pow(10, tier * 3)
  var scaled = val / scale
  return scaled.toFixed(1) + suffix
}

export const classNames = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ')

export const isFileFormatImage = (filename: string | null) => {
  if (!filename) return false
  return filename.endsWith('png') || filename.endsWith('jpeg') || filename.endsWith('jpg') || filename.endsWith('gif')
}

export const isFileFormatVideo = (filename: string | null) => {
  if (!filename) return false
  return filename.endsWith('mov') || filename.endsWith('quicktime') || filename.endsWith('mp4') || filename.endsWith('webm')
}

export const isFileFormatAudio = (filename: string | null) => {
  if (!filename) return false
  return filename.endsWith('acc') || filename.endsWith('flac') || filename.endsWith('m4a') || filename.endsWith('mp3') || filename.endsWith('wav')
}
