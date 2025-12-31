import AppLayout from '@/layouts/app-layout';
import { cnjToken } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

function formatDate(dateString: string) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'CNJ Token',
        href: cnjToken().url,
    },
];

interface Token {
    id: number;
    token: string;
    created_at: string;
    updated_at: string;
}

interface CnjTokenProps {
    tokens: Token[];
}

export default function CnjToken({ tokens }: CnjTokenProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="CNJ Token" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {tokens.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full rounded-xl overflow-hidden border border-sidebar-border/70 bg-background dark:bg-background-dark">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-b border-sidebar-border/70 text-left font-bold bg-muted dark:bg-muted-dark first:rounded-tl-xl">
                                        ID
                                    </th>
                                    <th className="px-4 py-2 border-b border-sidebar-border/70 text-left font-bold bg-muted dark:bg-muted-dark">
                                        Token
                                    </th>
                                    <th className="px-4 py-2 border-b border-sidebar-border/70 text-left font-bold bg-muted dark:bg-muted-dark">
                                        Criado em
                                    </th>
                                    <th className="px-4 py-2 border-b border-sidebar-border/70 text-left font-bold bg-muted dark:bg-muted-dark">
                                        Atualizado em
                                    </th>
                                    <th className="px-4 py-2 border-b border-sidebar-border/70 text-left font-bold bg-muted dark:bg-muted-dark">
                                        Ações
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tokens.map((token) => (
                                    <tr key={token.id} className="hover:bg-accent dark:hover:bg-accent-dark">
                                        <td className="px-4 py-2 border-b border-muted dark:border-muted-dark">
                                            {token.id}
                                        </td>
                                        <td className="px-4 py-2 border-b border-muted dark:border-muted-dark break-all font-mono">
                                            {token.token}
                                        </td>
                                        <td className="px-4 py-2 border-b border-muted dark:border-muted-dark">
                                            {formatDate(token.created_at)}
                                        </td>
                                        <td className="px-4 py-2 border-b border-muted dark:border-muted-dark">
                                            {formatDate(token.updated_at)}
                                        </td>
                                        <td className="px-4 py-2 border-b border-muted dark:border-muted-dark">
                                            <Button
                                                variant="secondary"
                                                className="mr-2"
                                            >
                                                Editar
                                            </Button>
                                            <Button
                                                variant="destructive"
                                            >
                                                Excluir
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="max-w-xl w-full flex items-center gap-3 bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-100 rounded-lg p-4 mx-auto">
                        <Info className="w-6 h-6 flex-shrink-0 text-blue-500 dark:text-blue-300" />
                        <span className="font-medium">Nenhum token adicionado</span>
                    </div>
                )}

                <Button variant="default" className="self-start">
                    Adicionar
                </Button>
            </div>
        </AppLayout>
    );
}
