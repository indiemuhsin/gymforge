import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const screenshotDir = join(__dirname, '..', 'docs', 'screenshots');
mkdirSync(screenshotDir, { recursive: true });

const URL = 'http://localhost:3099';

async function takeScreenshots() {
  const browser = await chromium.launch({ headless: true });

  // Desktop screenshots (1440x900)
  const desktopCtx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const desktopPage = await desktopCtx.newPage();
  await desktopPage.goto(URL, { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(1000);

  // Hero
  await desktopPage.evaluate(() => window.scrollTo(0, 0));
  await desktopPage.waitForTimeout(300);
  await desktopPage.screenshot({ path: join(screenshotDir, 'hero-desktop.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
  console.log('✅ hero-desktop.png');

  // Categories section
  const catSection = desktopPage.locator('#categories, section:has(h2:text("Everything"))').first();
  if (await catSection.count()) {
    await catSection.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(300);
    const catBox = await catSection.boundingBox();
    if (catBox) {
      await desktopPage.screenshot({ path: join(screenshotDir, 'categories-desktop.png'), clip: { x: 0, y: catBox.y, width: 1440, height: Math.min(catBox.height, 900) } });
      console.log('✅ categories-desktop.png');
    }
  }

  // Why Choose Us + Stats
  const whySection = desktopPage.locator('section:has(h2:text("Partner")), section:has(h2:text("Why"))').first();
  if (await whySection.count()) {
    await whySection.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(300);
    const whyBox = await whySection.boundingBox();
    if (whyBox) {
      await desktopPage.screenshot({ path: join(screenshotDir, 'features-desktop.png'), clip: { x: 0, y: whyBox.y, width: 1440, height: Math.min(whyBox.height, 900) } });
      console.log('✅ features-desktop.png');
    }
  }

  // Contact section
  const contactSection = desktopPage.locator('section:has(h2:text("Ready")), section:has(h2:text("Contact")), #contact').first();
  if (await contactSection.count()) {
    await contactSection.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(300);
    const contactBox = await contactSection.boundingBox();
    if (contactBox) {
      await desktopPage.screenshot({ path: join(screenshotDir, 'contact-desktop.png'), clip: { x: 0, y: contactBox.y, width: 1440, height: Math.min(contactBox.height, 900) } });
      console.log('✅ contact-desktop.png');
    }
  }

  // Full page desktop
  await desktopPage.evaluate(() => window.scrollTo(0, 0));
  await desktopPage.waitForTimeout(300);
  await desktopPage.screenshot({ path: join(screenshotDir, 'full-page-desktop.png'), fullPage: true });
  console.log('✅ full-page-desktop.png');

  await desktopCtx.close();

  // Mobile screenshot (375x812 - iPhone)
  const mobileCtx = await browser.newContext({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2 });
  const mobilePage = await mobileCtx.newPage();
  await mobilePage.goto(URL, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1000);

  await mobilePage.evaluate(() => window.scrollTo(0, 0));
  await mobilePage.waitForTimeout(300);
  await mobilePage.screenshot({ path: join(screenshotDir, 'hero-mobile.png'), clip: { x: 0, y: 0, width: 375, height: 812 } });
  console.log('✅ hero-mobile.png');

  await mobileCtx.close();
  await browser.close();
  console.log('\n🎉 All screenshots captured!');
}

takeScreenshots().catch(console.error);
