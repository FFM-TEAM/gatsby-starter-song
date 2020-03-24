/**
 * Parses heading for building TOC
 * @param html
 */
export function parseHeadings(html: string) {
  if (typeof document !== `undefined`) {
    const div = document.createElement('div');
    div.innerHTML = html;

    const elements = Array.from(div.children);

    const headings = elements.filter(el => el.tagName.match(/H([1-3])/));

    const headingsInfo = headings.map(heading => ({
      id: heading.id,
      text: heading.textContent,
      level: parseInt(heading.tagName.replace('H', ''), 10),
    }));

    const minLevel = Math.min(
      ...Array.from(headingsInfo.map(info => info.level)),
    );

    headingsInfo.forEach(info => {
      info.level -= minLevel;
    });

    return headingsInfo;
  }
}
