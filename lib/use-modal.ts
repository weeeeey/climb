import { create } from 'zustand';

type State = {
    isOpen: boolean;
};

type Actions = {
    onOpen: () => void;
    onClose: () => void;
    onOpenClose: (p: boolean) => void;
};

export const useModalStore = create<State & Actions>((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true })),
    onClose: () => set(() => ({ isOpen: false })),
    onOpenClose: () => set((p) => ({ isOpen: !p })),
}));
