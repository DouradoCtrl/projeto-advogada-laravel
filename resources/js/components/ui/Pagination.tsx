import { router } from '@inertiajs/react';

interface PaginationProps {
    links: { url: string | null; label: string; active: boolean }[];
}

export default function Pagination({ links }: PaginationProps) {
    return (
        <nav className="flex gap-1">
            {links.map((link, idx) => (
                <button
                    key={idx}
                    disabled={!link.url}
                    className={`px-3 py-1 rounded transition-colors ${
                        link.active 
                            ? 'bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground' 
                            : 'bg-muted text-muted-foreground dark:bg-muted-dark dark:text-foreground-dark hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent-dark dark:hover:text-accent-foreground'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                    onClick={() => link.url && router.visit(link.url)}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </nav>
    );
}
