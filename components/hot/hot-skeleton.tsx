import { Skeleton } from '@/components/ui/skeleton';

export function HotSkeleton() {
    return (
        <div className="flex flex-col space-y-3 bg-gradient-to-r from-primary-foreground">
            <Skeleton className="h-36 w-72 rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-56" />
                <Skeleton className="h-4 w-48" />
            </div>
        </div>
    );
}
