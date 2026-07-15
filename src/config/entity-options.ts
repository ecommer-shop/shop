import { DefaultMoneyStrategy, VendureConfig } from "@vendure/core";

class TwoDecimalMoneyStrategy extends DefaultMoneyStrategy {
    readonly precision = 2;
    round(value: number, quantity?: number): number {
        // Redondea SIEMPRE a 2 decimales antes de convertir a entero
        return Math.round(Number((value * (quantity ?? 1)).toFixed(2)));
    }
}

export const entityOptions: VendureConfig['entityOptions'] = {
    moneyStrategy: new TwoDecimalMoneyStrategy(),
};