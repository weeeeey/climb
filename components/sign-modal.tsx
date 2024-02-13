'use client';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { useModalStore } from '@/lib/use-modal';
import { Logo } from './ui/logo';
import { SignIn } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

export function SignModal() {
    const { isOpen, onOpenClose } = useModalStore();
    const pathname = usePathname();

    if (!isOpen) {
        return;
    }

    return (
        <Dialog open={isOpen} onOpenChange={onOpenClose}>
            <DialogContent className="max-w-2xl mx-auto flex flex-col items-center justify-center py-10 md:py-20">
                <DialogHeader>
                    <Logo />
                </DialogHeader>
                <SignIn afterSignInUrl={pathname} afterSignUpUrl={pathname} />
            </DialogContent>
        </Dialog>
    );
}
