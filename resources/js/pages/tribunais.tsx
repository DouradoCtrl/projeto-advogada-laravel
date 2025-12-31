
import AppLayout from '@/layouts/app-layout';
import { tribunais } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';
import Pagination from '@/components/ui/Pagination';

interface Tribunal {
    id: number;
    nome: string;
    sigla: string;
    api_endpoint: string;
    created_at: string;
    updated_at: string;
}

interface TribunaisProps {
    tribunais: {
        data: Tribunal[];
        links: { url: string | null; label: string; active: boolean }[];
    };
}

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
        title: 'Tribunais',
        href: tribunais().url,
    },
];

export default function Tribunais({ tribunais }: TribunaisProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tribunais" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {tribunais.data.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full rounded-xl overflow-hidden border border-sidebar-border/70 bg-background dark:bg-background-dark">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-b border-sidebar-border/70 text-left font-bold bg-muted dark:bg-muted-dark first:rounded-tl-xl">#</th>
                                    <th className="px-4 py-2 border-b border-sidebar-border/70 text-left font-bold bg-muted dark:bg-muted-dark">Nome</th>
                                    <th className="px-4 py-2 border-b border-sidebar-border/70 text-left font-bold bg-muted dark:bg-muted-dark">Sigla</th>
                                    <th className="px-4 py-2 border-b border-sidebar-border/70 text-left font-bold bg-muted dark:bg-muted-dark">API Endpoint</th>
                                    <th className="px-4 py-2 border-b border-sidebar-border/70 text-left font-bold bg-muted dark:bg-muted-dark">Criado em</th>
                                    <th className="px-4 py-2 border-b border-sidebar-border/70 text-left font-bold bg-muted dark:bg-muted-dark">Atualizado em</th>
                                    <th className="px-4 py-2 border-b border-sidebar-border/70 text-left font-bold bg-muted dark:bg-muted-dark">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tribunais.data.map((tribunal, idx) => (
                                    <tr key={tribunal.id} className="hover:bg-accent dark:hover:bg-accent-dark">
                                        <td className="px-4 py-2 border-b border-muted dark:border-muted-dark">{idx + 1}</td>
                                        <td className="px-4 py-2 border-b border-muted dark:border-muted-dark">{tribunal.nome}</td>
                                        <td className="px-4 py-2 border-b border-muted dark:border-muted-dark">{tribunal.sigla}</td>
                                        <td className="px-4 py-2 border-b border-muted dark:border-muted-dark break-all font-mono">{tribunal.api_endpoint}</td>
                                        <td className="px-4 py-2 border-b border-muted dark:border-muted-dark">{formatDate(tribunal.created_at || '')}</td>
                                        <td className="px-4 py-2 border-b border-muted dark:border-muted-dark">{formatDate(tribunal.updated_at || '')}</td>
                                        <td className="px-4 py-2 border-b border-muted dark:border-muted-dark">
                                            <Button variant="secondary" className="mr-2">Editar</Button>
                                            <Button variant="destructive" onClick={() => router.delete(`/tribunais/${tribunal.id}`)}>Excluir</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="w-full flex items-center gap-3 bg-red-50 dark:bg-red-900/40 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-100 rounded-lg p-4 mx-auto">
                        <Info className="w-6 h-6 flex-shrink-0 text-red-500 dark:text-red-300" />
                        <span className="font-medium">Nenhum tribunal cadastrado</span>
                    </div>
                )}

                <div className='flex justify-between items-center'>
                    <Button variant="default" className="self-start">Adicionar</Button>
                    <Pagination links={tribunais.links} />
                </div>
                
            </div>
        </AppLayout>
    );
}
