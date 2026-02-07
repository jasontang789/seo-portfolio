# Building an SEO Portfolio: Why I Switched from WordPress to Astro, Tailwind & Sanity

**SEO Strategy:**
*   **Primary Keyword:** `SEO Portfolio Website`
*   **Keyword Variations:** `Astro for SEO`, `Headless CMS vs WordPress`, `Technical SEO Portfolio`, `Building a fast website`
*   **Semantic Keywords:** `Core Web Vitals`, `Islands Architecture`, `Zero-JS`, `Static Site Generator (SSG)`, `Structured Content`, `Content Delivery Network (CDN)`, `Hydration`, `First Contentful Paint (FCP)`
*   **Entities:** `Google`, `Astro`, `Sanity`, `Tailwind CSS`, `Cloudflare`, `React`, `Lighthouse`
*   **NLP Phrases:** "Why is my WordPress site slow?", "How to get a perfect Lighthouse score", "Best tech stack for technical SEOs", "Modern web development for marketers"

---

## Key Takeaways

*   **Architecture Matters:** True SEO starts with the code. Zero-JS frameworks provide a massive head start.
*   **Structured Data Wins:** Headless CMS (Sanity) forces you to think in "Entities" rather than just "Pages."
*   **Speed is Trust:** A sub-second load time is the first promise you keep to your user.

## Introduction: The "WordPress Paradox"

For years, I've noticed SEO professionals stuck in a paradox. I know that **Core Web Vitals** form the foundation of user trust and retention. A slow site isn't just a bounce rate statistic to me; it's a lost opportunity to connect. Yet, many portfolios are built on heavy WordPress themes, weighed down by 20+ plugins just to achieve basic functionality.

I decided to break this cycle.

As a **Technical SEO Specialist**, I wanted my personal site to be a case study in performance. I didn't just want to *talk* about speed; I wanted to demonstrate it.

This is the story of how I built an SEO-first portfolio using **Astro**, **Sanity CMS**, and **Tailwind CSS**—achieving a perfect **100/100 Lighthouse Score** and sub-second load times globally.

## Why Astro? The "Zero-JavaScript" Engine

Most modern frameworks (like React or Next.js) send a large JavaScript bundle to the browser just to render a simple page. This is called "Hydration," and it kills your **Time to Interactive (TTI)** metrics.

**Astro** is different. It uses a **"Zero-JS By Default"** approach. It strips away all the JavaScript during the build process, sending only lightweight, static HTML to the user.

### Key SEO Benefits:
*   **Instant Load Times:** HTML is parsed immediately by the browser.
*   **Perfect Core Web Vitals:** No layout shifts (CLS) or blocking time (TBT).
*   **Islands Architecture:** If I need interactivity (like a dark mode toggle), Astro only loads the script for *that specific button*, leaving the rest of the page static.

## Why Sanity? "Content as Data" vs. "Pages"

In WordPress, content is often trapped in inconsistent HTML blobs mixed with shortcodes. Moving it is a nightmare.

**Sanity** is a **Headless CMS**. It treats content as structured data, not just text on a page. I defined a schema for my "Projects" and "Blog Posts," ensuring every piece of content has clear fields for **Title**, **Slug**, **SEO Description**, and **OG Image**.

This **API-first approach** means my content is decoupled from the design. I can redesign the entire site without touching a single blog post. Plus, the GROQ query language lets me fetch *exactly* the data I need, reducing payload size.

## The Migration: From Vanilla CSS to Tailwind v4

Initially, I wrote standard CSS for full control. But as the site grew, managing styles became complex.

I migrated to **Tailwind CSS v4** to enforce a unified design system.
*   **Utility-First:** No more "dead CSS" files blocking rendering.
*   **Maintainability:** Colors, spacing, and typography are defined in one config.
*   **Performance:** Tailwind scans your HTML and generates *only* the CSS classes you use. The final CSS file is tiny (often <10kb).

## Global Delivery: Cloudflare Pages

Finally, a fast site needs a fast network. I deployed this portfolio on **Cloudflare Pages**.

Unlike traditional hosting, Cloudflare pushes my static HTML to the **Edge**—hundreds of servers around the world. Whether a visitor is in New York, London, or Singapore, they load the site from a server near them. This dramatically reduces **Time to First Byte (TTFB)**, a critical metric for Google rankings.

## The Result: SEO You Can Feel

The result isn't just a number in a tool; it's a user experience that feels instant.
*   **Mobile Performance:** 100/100
*   **Accessibility:** 100/100
*   **Best Practices:** 100/100
*   **SEO:** 100/100

By choosing a modern stack (**Astro + Sanity + Tailwind**), I've not only built a portfolio but also a proof of concept. Technical SEO isn't just about fixing meta tags; it's about architectural decisions that build a foundation for success.

---
**Ready to audit your own site?** Check out my [Services](/services) or [Contact Me](/contact) to discuss your technical SEO strategy.
