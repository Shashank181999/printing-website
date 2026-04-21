#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

const SRC = '/Users/shashanks/Downloads/all imgs 2/all imgs'
const DEST_ROOT = '/Users/shashanks/printing-website/public/products'

const FOLDERS = [
  { dir: '01 Offset and Digitel',            slug: 'offset-and-digital',       name: 'Offset & Digital Printing' },
  { dir: '02 Large Format Printing',         slug: 'large-format-printing',    name: 'Large Format Printing' },
  { dir: '3 Advertising And Marketing',      slug: 'advertising-and-marketing', name: 'Advertising & Marketing' },
  { dir: '4 Event Advertising',              slug: 'event-advertising',         name: 'Event Advertising' },
  { dir: '5 Corporate And Exhibition work',  slug: 'corporate-and-exhibition',  name: 'Corporate & Exhibition' },
  { dir: '6 Pop up materials',               slug: 'pop-up-materials',          name: 'Pop-Up Materials' },
  { dir: '7 Signages',                       slug: 'signages',                  name: 'Signages' },
  { dir: '8 Business Card',                  slug: 'business-cards',            name: 'Business Cards' },
  { dir: '9 Stickers and labels',            slug: 'stickers-and-labels',       name: 'Stickers & Labels' },
  { dir: '10 Types of Frost Film',           slug: 'frost-film',                name: 'Frost Film' },
  { dir: '11 Name Plate',                    slug: 'name-plates',               name: 'Name Plates' },
]

const IMG_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'])

const slugify = (s) => s
  .toLowerCase()
  .replace(/[\u2010-\u2015\u2212]/g, '-')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .replace(/-+/g, '-')

const titleize = (s) => s
  .replace(/[\u2010-\u2015\u2212]/g, '-')
  .replace(/_/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()

const descFor = (name, folderName) => {
  const n = name.toLowerCase()
  if (n.includes('business card')) return `Premium ${name} — finished to impress, built to last.`
  if (n.includes('banner') || n.includes('flag')) return `Eye-catching ${name} for storefronts, events and promotions.`
  if (n.includes('sticker') || n.includes('label')) return `Durable ${name} for product branding and compliance.`
  if (n.includes('box') || n.includes('packaging')) return `Custom ${name} designed to protect and showcase your product.`
  if (n.includes('envelope') || n.includes('letterhead')) return `Professionally printed ${name} for official correspondence.`
  if (n.includes('name plate') || n.includes('name plates')) return `Elegant ${name} for offices, desks and door signage.`
  if (n.includes('signage') || n.includes('letters')) return `Custom ${name} built to your spec with durable materials.`
  if (n.includes('frost film')) return `Privacy ${name} with optional branded graphics.`
  if (n.includes('booth') || n.includes('trade') || n.includes('exhibition')) return `Complete ${name} design, fabrication and setup.`
  if (n.includes('folder')) return `Premium ${name} built with quality stock and clean finishing.`
  if (n.includes('certificate')) return `Premium ${name} for awards, recognition and achievements.`
  if (n.includes('calendar')) return `Branded ${name} that keeps your company visible year-round.`
  if (n.includes('mug') || n.includes('bottle')) return `Custom branded ${name} for promotions and gifting.`
  if (n.includes('bag')) return `Branded ${name} for retail, events and corporate gifting.`
  if (n.includes('t-shirt') || n.includes('t‑shirt') || n.includes('hoodie') || n.includes('cap')) return `Custom ${name} for teams, staff and merchandise.`
  if (n.includes('lanyard') || n.includes('wrist band')) return `Custom ${name} for ID access, events and festivals.`
  if (n.includes('book') || n.includes('notebook') || n.includes('magazine')) return `${name} printed and bound in-house with precision finishing.`
  if (n.includes('mat')) return `Durable custom ${name} with branded designs and logos.`
  if (n.includes('award') || n.includes('trophy') || n.includes('medallion') || n.includes('badge')) return `Distinctive ${name} for recognition and achievements.`
  if (n.includes('brochure') || n.includes('profile') || n.includes('catalog') || n.includes('annual report')) return `High-end ${name} to showcase your brand story and capabilities.`
  return `${name} — premium quality, tailored finishes and fast UAE-wide delivery from Al Falah.`
}

// Clean destination
for (const f of FOLDERS) {
  const p = path.join(DEST_ROOT, f.slug)
  fs.mkdirSync(p, { recursive: true })
}

const products = []
const seenSlugs = new Set()

for (const f of FOLDERS) {
  const src = path.join(SRC, f.dir)
  if (!fs.existsSync(src)) {
    console.warn('Missing source folder:', src)
    continue
  }
  const files = fs.readdirSync(src)
    .filter(n => IMG_EXT.has(path.extname(n).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))

  for (const file of files) {
    const ext = path.extname(file).toLowerCase() === '.jpeg' ? '.jpg' : path.extname(file).toLowerCase()
    const base = path.basename(file, path.extname(file))
    const baseSlug = slugify(base)
    let slug = `${f.slug}-${baseSlug}`
    let i = 2
    while (seenSlugs.has(slug)) {
      slug = `${f.slug}-${baseSlug}-${i++}`
    }
    seenSlugs.add(slug)

    const destName = `${baseSlug}${ext}`
    let finalDestName = destName
    let j = 2
    while (fs.existsSync(path.join(DEST_ROOT, f.slug, finalDestName))) {
      finalDestName = `${baseSlug}-${j++}${ext}`
    }
    fs.copyFileSync(path.join(src, file), path.join(DEST_ROOT, f.slug, finalDestName))

    const displayName = titleize(base)
    products.push({
      slug,
      folder: f.slug,
      folderName: f.name,
      name: displayName,
      image: `/products/${f.slug}/${finalDestName}`,
      description: descFor(displayName, f.name)
    })
  }
}

// Write out products data JSON for reference
const outPath = '/Users/shashanks/printing-website/src/products-data.json'
fs.writeFileSync(outPath, JSON.stringify({
  folders: FOLDERS.map(f => ({ id: f.slug, name: f.name, count: products.filter(p => p.folder === f.slug).length })),
  products
}, null, 2))

console.log('Folders:')
for (const f of FOLDERS) {
  const c = products.filter(p => p.folder === f.slug).length
  console.log(`  ${f.slug.padEnd(30)} ${c}`)
}
console.log(`Total products: ${products.length}`)
console.log(`Data written: ${outPath}`)
