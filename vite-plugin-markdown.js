import matter from 'gray-matter'

export default function markdownPlugin() {
  return {
    name: 'vite-plugin-markdown',
    transform(code, id) {
      if (!id.endsWith('.md')) return null

      const { data, content } = matter(code)

      return {
        code: `export const frontmatter = ${JSON.stringify(data)};
export const content = ${JSON.stringify(content.trim())};
export default { frontmatter, content };`,
        map: null
      }
    }
  }
}
