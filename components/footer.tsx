import Link from "next/link";

export const Footer = () => {
    const navigationItems = [
        {
            title: "Portfolio",
            items: [
                {
                    title: "Projects",
                    href: "/projects",
                },
                {
                    title: "Blog",
                    href: "/blog",
                },
                {
                    title: "About Me",
                    href: "/about",
                },
            ],
        },
        {
            title: "Connect",
            items: [
                {
                    title: "LinkedIn",
                    href: "https://linkedin.com/in/your-profile",
                },
                {
                    title: "GitHub",
                    href: "https://github.com/your-profile",
                },
                {
                    title: "Twitter",
                    href: "https://twitter.com/your-profile",
                },
            ],
        },
        {
            title: "Contact",
            description: "Feel free to reach out for collaborations or just a friendly chat.",
            items: [
                {
                    title: "Email",
                    href: "mailto:your-email@example.com",
                },
                {
                    title: "Phone",
                    href: "tel:+1234567890",
                },
            ],
        },
    ];

    return (
        <div className="w-full py-10 lg:py-20 bg-foreground text-background">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="flex gap-8 flex-col items-start">
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left">
                               Hasnath Ahmed Tamim
                            </h2>
                            <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                                A passionate developer crafting digital experiences with elegance and precision.
                            </p>
                        </div>
                        <div className="flex gap-20 flex-row">
                            <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                                <p>123 Creative Street</p>
                                <p>Innovation City</p>
                                <p>Country 56789</p>
                            </div>
                            <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                                <Link href="/terms">Terms of Service</Link>
                                <Link href="/privacy">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-10 items-start">
                        {navigationItems.map((item) => (
                            <div
                                key={item.title}
                                className="flex text-base gap-1 flex-col items-start"
                            >
                                <div className="flex flex-col gap-2">
                                    <p className="text-xl">{item.title}</p>
                                    {item.items &&
                                        item.items.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                href={subItem.href}
                                                className="flex justify-between items-center"
                                                target={subItem.href.startsWith("http") ? "_blank" : "_self"}
                                                rel={subItem.href.startsWith("http") ? "noopener noreferrer" : ""}
                                            >
                                                <span className="text-background/75">{subItem.title}</span>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
