import AppLayout from '@/layouts/app-layout';
import { cnjToken } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

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
                                        #
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
                                {tokens.map((token, idx) => (
                                    <tr key={token.id} className="hover:bg-accent dark:hover:bg-accent-dark">
                                        <td className="px-4 py-2 border-b border-muted dark:border-muted-dark">
                                            {idx + 1}
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
                                                onClick={() => {/* Lógica para editar o token */}}
                                            >
                                                Editar
                                            </Button>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        variant="destructive"
                                                        onClick={() => {/* Lógica para excluir o token */}}
                                                    >
                                                        Excluir
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogTitle>
                                                        Confirmar exclusão
                                                    </DialogTitle>
                                                    <DialogDescription>
                                                        Tem certeza de que deseja excluir este token? Esta ação não pode ser desfeita.
                                                    </DialogDescription>
                                                    <DialogFooter>
                                                        <DialogClose asChild>
                                                            <Button variant="secondary">
                                                                Cancelar
                                                            </Button>
                                                        </DialogClose>
                                                        <Button
                                                            variant="destructive"
                                                            onClick={() => {
                                                                router.delete(`/cnj-token/${token.id}`);
                                                            }}
                                                        >
                                                            Excluir
                                                        </Button>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="w-full flex items-center gap-3 bg-red-50 dark:bg-red-900/40 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-100 rounded-lg p-4 mx-auto">
                        <Info className="w-6 h-6 flex-shrink-0 text-red-500 dark:text-red-300" />
                        <span className="font-medium">Nenhum token adicionado</span>
                    </div>
                )}

                <Button 
                    variant="default" 
                    className="self-start"
                    onClick={() => {/* Lógica para adicionar um novo token */}}
                >
                    Adicionar
                </Button>
            </div>
        </AppLayout>
    );
}
