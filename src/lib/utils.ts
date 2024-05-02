import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const testimonials = [
    {
        name: "Alice Johnson",
        rating: 4.5,
        comment: "CogniDoc has greatly improved our team's efficiency with its intuitive interface and powerful document collaboration features.",
    },
    {
        name: "Bob Smith",
        rating: 5,
        comment: "I've tried many document management platforms, but CogniDoc stands out for its ease of use and robust functionality. Highly recommended!",
    },
    {
        name: "Emily Davis",
        rating: 4,
        comment: "With CogniDoc, document sharing and collaboration have become a breeze. It has truly transformed how we work together as a team.",
    },
    {
        name: "Michael Brown",
        rating: 4.8,
        comment: "CogniDoc's DocChat feature has revolutionized the way we review and discuss documents. It's a game-changer for our business!",
    },
    {
        name: "Sarah Wilson",
        rating: 4.2,
        comment: "I love how CogniDoc simplifies document conversion and sharing. It's made my workflow much smoother and more efficient.",
    },
    {
        name: "James Thompson",
        rating: 4.6,
        comment:
            "CogniDoc has been instrumental in streamlining our document management process. The user-friendly interface and reliable performance make it a top choice for our team.",
    },
    {
        name: "Linda Miller",
        rating: 4.7,
        comment:
            "As a freelancer, CogniDoc has been a lifesaver for managing client documents. The ability to interact with PDFs and collaborate seamlessly has elevated my productivity.",
    },
    {
        name: "David Clark",
        rating: 4.3,
        comment:
            "CogniDoc offers everything we need for efficient document management. It's intuitive, feature-rich, and has significantly improved our workflow.",
    },
    {
        name: "Jennifer Lee",
        rating: 4.9,
        comment: "I can't imagine working without CogniDoc now. Its versatility and reliability have made it an indispensable tool for our organization.",
    },
    {
        name: "Kevin Turner",
        rating: 4.4,
        comment:
            "CogniDoc has simplified document collaboration for our remote team. It's intuitive, secure, and helps us stay organized even when working from different locations.",
    },
];
export function absoluteUrl(path: string) {
    if (typeof window !== "undefined") return path;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`;
    return `http://localhost:${process.env.PORT ?? 3000}${path}`;
}
