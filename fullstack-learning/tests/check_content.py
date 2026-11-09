"""Dependency-free checks for the static learning materials."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import unittest
ROOT = Path(__file__).resolve().parents[1]

class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.ids, self.links, self.chapters, self.codes = [], [], [], 0
        self.feed(text)
    def handle_starttag(self, tag, pairs):
        a = dict(pairs)
        if 'id' in a: self.ids.append(a['id'])
        if tag == 'section' and 'chapter' in a.get('class', '').split(): self.chapters.append(a['id'])
        if tag == 'code': self.codes += 1
        for field in ('href','src'):
            if field in a: self.links.append(a[field])

class ContentTests(unittest.TestCase):
    def test_substantial_guide_and_hub(self):
        for rel in ('index.html','java/index.html'):
            self.assertTrue((ROOT/rel).exists(), f'Missing {rel}')
        guide = (ROOT/'java/index.html').read_text()
        doc = Document(guide)
        self.assertGreaterEqual(len(doc.chapters),21)
        self.assertGreaterEqual(doc.codes,60)
        self.assertGreater(len(guide),70000)
        self.assertIn('lang="zh-CN"',guide)
        self.assertIn('name="viewport"',guide)
    def test_ids_and_local_links(self):
        files=list(ROOT.rglob('*.html'))
        self.assertTrue(files, 'No HTML content exists')
        for file in files:
            doc = Document(file.read_text())
            self.assertEqual(len(doc.ids),len(set(doc.ids)),f'Duplicate ids: {file}')
            for link in doc.links:
                url=urlsplit(link)
                if url.scheme or url.netloc: continue
                target=(file.parent/unquote(url.path)) if url.path else file
                if target.is_dir(): target=target/'index.html'
                self.assertTrue(target.exists(),f'Missing target {file}: {link}')
                if url.fragment and target.suffix=='.html':
                    self.assertIn(url.fragment,Document(target.read_text()).ids,link)
    def test_print_hides_enhanced_toolbar_and_empty_notice(self):
        css=(ROOT/'assets/guide.css').read_text().split('@media print')[1]
        self.assertIn('.js .reader-tools.js-only',css)
        self.assertIn('#no-results',css)

    def test_offline_assets(self):
        for file in ROOT.rglob('*.html'):
            doc=Document(file.read_text())
            self.assertNotIn('unpkg.com',file.read_text())
            self.assertNotIn('cdn.jsdelivr.net',file.read_text())
        for path in ('assets/guide.css','assets/guide.js','java/examples/StudyTasks.java','java/examples/StudyTasksTest.java'):
            self.assertTrue((ROOT/path).exists(),path)

if __name__ == '__main__': unittest.main()
