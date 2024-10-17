export default function get(selector) {
  const element = document.querySelector(selector)
  if (element) {
    return element
  }
  throw new Error('No element selected')
}
