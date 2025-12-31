import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import InputError from '../input-error';

export default function AddModalTribunal({ open, onOpenChange }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogTitle>Adicionar Tribunal</DialogTitle>
                    <DialogDescription>
                        Preencha os dados do novo tribunal. Todos os campos são obrigatórios.
                    </DialogDescription>
                    <Form
                        method="post"
                        resetOnSuccess
                        className="space-y-6"
                        onSuccess={() => onOpenChange(false)}
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-2">
                                    <Label htmlFor="nome">Nome</Label>
                                    <Input id="nome" name="nome" placeholder="Nome" />
                                    <InputError message={errors.nome} />

                                    <Label htmlFor="sigla">Sigla</Label>
                                    <Input id="sigla" name="sigla" placeholder="Sigla" />
                                    <InputError message={errors.sigla} />

                                    <Label htmlFor="api_endpoint">API Endpoint</Label>
                                    <Input id="api_endpoint" name="api_endpoint" placeholder="API Endpoint" />
                                    <InputError message={errors.api_endpoint} />
                                </div>
                                <DialogFooter>
                                    <Button type="submit" disabled={processing}>Salvar</Button>
                                    <DialogClose asChild>
                                        <Button variant="secondary" type="button">Cancelar</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </>
                        )}
                    </Form>
            </DialogContent>
        </Dialog>
    );
}