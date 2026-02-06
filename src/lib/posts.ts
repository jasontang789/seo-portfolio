// Blog posts type definition
// Posts are fetched from Sanity CMS

export interface Post {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    featuredImage?: {
        asset: {
            _ref: string;
        };
        alt?: string;
    };
    content?: any[];
    publishedAt: string;
    categories?: {
        title: string;
        slug: string;
    }[];
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        ogImage?: {
            asset: {
                _ref: string;
            };
        };
    };
}

// Helper to format date
export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

// Calculate read time (rough estimate: 200 words per minute)
export function calculateReadTime(content: any[]): string {
    if (!content) return "3 min read";

    // Count words in portable text blocks
    const wordCount = content.reduce((count, block) => {
        if (block._type === 'block' && block.children) {
            const text = block.children
                .filter((child: any) => child._type === 'span')
                .map((span: any) => span.text)
                .join(' ');
            return count + text.split(/\s+/).length;
        }
        return count;
    }, 0);

    const minutes = Math.max(1, Math.ceil(wordCount / 200));
    return `${minutes} min read`;
}
