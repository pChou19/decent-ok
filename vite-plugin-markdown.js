import { parse } from 'yaml'

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/

export default function markdownPlugin() {
  return {
    name: 'vite-plugin-markdown',
    transform(code, id) {
      if (!id.endsWith('.md')) return null

      const match = code.match(FRONTMATTER_RE)
      const data = match ? (parse(match[1]) ?? {}) : {}
      const content = match ? code.slice(match[0].length) : code

      return {
        code: `export const frontmatter = ${JSON.stringify(data)};
export const content = ${JSON.stringify(content.trim())};
export default { frontmatter, content };`,
        map: null
      }
    }
  }
}
