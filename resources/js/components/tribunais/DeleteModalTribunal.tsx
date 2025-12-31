import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose, DialogTrigger} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';

export default function DeleteModalTribunal({ open, onOpenChange, tribunal }) {
    if (!tribunal) return null; // Não renderiza se não tiver tribunal selecionado

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogTitle>Confirmar exclusão</DialogTitle>
                <DialogDescription>
                    Tem certeza que deseja excluir o <b>{tribunal.nome}</b>?
                </DialogDescription>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancelar</Button>
                    </DialogClose>
                    <Button
                        variant="destructive"
                        onClick={() => {
                            router.delete(`/tribunais/${tribunal.id}`);
                            onOpenChange(false);
                        }}
                    >
                        Excluir
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}