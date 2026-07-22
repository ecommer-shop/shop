import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

/**
 * Estado vacío ilustrado compartido entre las páginas propias del dashboard.
 * Mantiene el mismo lenguaje visual que los estados vacíos de Cocreativo y
 * el de las tablas del core (scripts/patch-empty-states.mjs).
 */
export function EmptyState({
    icon: Icon,
    title,
    hint,
    action,
    className,
}: {
    icon: LucideIcon;
    title: string;
    hint?: string;
    action?: ReactNode;
    className?: string;
}) {
    return (
        <div className={`flex flex-col items-center justify-center gap-2 text-center py-10 ${className ?? ''}`}>
            <div className="h-11 w-11 rounded-full bg-muted flex items-center justify-center">
                <Icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="font-medium">{title}</p>
            {hint && <p className="text-sm text-muted-foreground max-w-sm">{hint}</p>}
            {action}
        </div>
    );
}
