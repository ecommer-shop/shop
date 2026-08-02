// [patch-money-input] Versión adaptada para COP (ver scripts/patch-money-input.mjs).
// Para monedas sin decimales en la práctica (COP): solo dígitos, formato de miles
// en vivo ("2500000" → "2.500.000"), campo vacío cuando el precio es 0 y
// select-all al enfocar. Otras monedas conservan el comportamiento original.
import { useLocalFormat } from '@/vdb/hooks/use-local-format.js';
import { useEffect, useMemo, useRef, useState } from 'react';
import { AffixedInput } from './affixed-input.js';

import { DashboardFormComponentProps } from '@/vdb/framework/form-engine/form-engine-types.js';
import { isFieldDisabled } from '@/vdb/framework/form-engine/utils.js';
import { useChannel } from '@/vdb/hooks/use-channel.js';
import { useDisplayLocale } from '@/vdb/hooks/use-display-locale.js';

const ZERO_DECIMAL_UI_CURRENCIES = ['COP'];

export interface MoneyInputProps extends DashboardFormComponentProps {
    currency?: string;
}

/**
 * @description
 * A component for displaying a money value. The `currency` can be specified, but otherwise
 * will be taken from the active channel's default currency.
 *
 * @docsCategory form-components
 * @docsPage MoneyInput
 */
export function MoneyInput(props: Readonly<MoneyInputProps>) {
    const { value, onChange, currency, ...rest } = props;
    const { activeChannel } = useChannel();
    const activeCurrency = currency ?? activeChannel?.defaultCurrencyCode;
    const readOnly = isFieldDisabled(props.disabled, props.fieldDef);
    const { bcp47Tag } = useDisplayLocale();
    const { toMajorUnits, toMinorUnits } = useLocalFormat();
    const zeroDecimalUi = ZERO_DECIMAL_UI_CURRENCIES.includes(activeCurrency ?? '');

    const formatWhole = (major: number): string => {
        const rounded = Math.round(major);
        return rounded > 0 ? rounded.toLocaleString('es-CO') : '';
    };

    const toDisplay = (minorUnits: number): string =>
        zeroDecimalUi ? formatWhole(toMajorUnits(minorUnits)) : toMajorUnits(minorUnits).toFixed(2);

    const [displayValue, setDisplayValue] = useState(() => toDisplay(value));
    const isFocused = useRef(false);

    // Update display value when prop value changes externally (but not while the user is typing)
    useEffect(() => {
        if (!isFocused.current) {
            setDisplayValue(toDisplay(value));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, toMajorUnits, zeroDecimalUi]);

    // Determine if the currency symbol should be a prefix based on locale
    const shouldPrefix = useMemo(() => {
        if (!activeCurrency) {
            return false;
        }
        const parts = new Intl.NumberFormat(bcp47Tag, {
            style: 'currency',
            currency: activeCurrency,
            currencyDisplay: 'symbol',
        }).formatToParts();
        const NaNString = parts.find(p => p.type === 'nan')?.value ?? 'NaN';
        const localised = new Intl.NumberFormat(bcp47Tag, {
            style: 'currency',
            currency: activeCurrency,
            currencyDisplay: 'symbol',
        }).format(undefined as any);
        return localised.indexOf(NaNString) > 0;
    }, [activeCurrency, bcp47Tag]);

    // Get the currency symbol
    const currencySymbol = useMemo(() => {
        if (!activeCurrency) return '';
        const parts = new Intl.NumberFormat(bcp47Tag, {
            style: 'currency',
            currency: activeCurrency,
            currencyDisplay: 'symbol',
        }).formatToParts();
        return parts.find(p => p.type === 'currency')?.value ?? activeCurrency;
    }, [activeCurrency, bcp47Tag]);

    if (zeroDecimalUi) {
        return (
            <AffixedInput
                type="text"
                inputMode="numeric"
                className="bg-background"
                value={displayValue}
                disabled={readOnly}
                placeholder="0"
                {...rest}
                onFocus={e => {
                    isFocused.current = true;
                    e.target.select();
                }}
                onChange={e => {
                    const digits = e.target.value.replace(/[^0-9]/g, '');
                    if (digits === '') {
                        setDisplayValue('');
                        onChange(0);
                        return;
                    }
                    const major = Number(digits);
                    setDisplayValue(major.toLocaleString('es-CO'));
                    onChange(toMinorUnits(major));
                }}
                onBlur={() => {
                    isFocused.current = false;
                    const digits = displayValue.replace(/[^0-9]/g, '');
                    if (digits === '') {
                        onChange(0);
                        setDisplayValue('');
                        return;
                    }
                    const major = Number(digits);
                    onChange(toMinorUnits(major));
                    setDisplayValue(major.toLocaleString('es-CO'));
                }}
                min="0"
                prefix={shouldPrefix ? currencySymbol : undefined}
                suffix={!shouldPrefix ? currencySymbol : undefined}
            />
        );
    }

    return (
        <AffixedInput
            type="text"
            className="bg-background"
            value={displayValue}
            disabled={readOnly}
            {...rest}
            onFocus={() => {
                isFocused.current = true;
            }}
            onChange={e => {
                const inputValue = e.target.value;
                // Allow empty input
                if (inputValue === '') {
                    setDisplayValue('');
                    onChange(0);
                    return;
                }
                // Only allow numbers and one decimal point
                if (!/^[0-9.]*$/.test(inputValue)) {
                    return;
                }
                setDisplayValue(inputValue);
                const parsed = parseFloat(inputValue);
                if (!isNaN(parsed)) {
                    onChange(toMinorUnits(parsed));
                }
            }}
            onKeyDown={e => {
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    const currentValue = parseFloat(displayValue) || 0;
                    const step = e.key === 'ArrowUp' ? 0.01 : -0.01;
                    const newValue = currentValue + step;
                    if (newValue >= 0) {
                        onChange(toMinorUnits(newValue));
                        setDisplayValue(newValue.toString());
                    }
                }
            }}
            onBlur={() => {
                isFocused.current = false;
                const inputValue = displayValue;
                if (inputValue === '') {
                    onChange(0);
                    setDisplayValue('0.00');
                    return;
                }
                const newValue = parseFloat(inputValue);
                if (!isNaN(newValue)) {
                    onChange(toMinorUnits(newValue));
                    setDisplayValue(newValue.toFixed(2));
                }
            }}
            step="0.01"
            min="0"
            prefix={shouldPrefix ? currencySymbol : undefined}
            suffix={!shouldPrefix ? currencySymbol : undefined}
        />
    );
}
