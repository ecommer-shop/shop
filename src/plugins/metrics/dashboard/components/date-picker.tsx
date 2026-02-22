import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@vendure/dashboard';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

interface DatePickerProps {
    value: Date;
    onChange: (date: Date) => void;
    placeholder?: string;
    disabled?: boolean;
}

/**
 * @example
 * export function MyComponent() {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <label>Pick a date:</label>
            <DatePicker 
                value={date} 
                onChange={setDate}
            />
        </div>
    );
}
 */
export function DatePicker({
    value,
    onChange,
    placeholder = 'Select date',
    disabled = false
}: DatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);

    const formatDate = (date: Date): string => {
        return date.toISOString().split('T')[0];
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dateString = e.target.value;
        if (dateString) {
            const newDate = new Date(dateString + 'T00:00:00');
            onChange(newDate);
            setIsOpen(false);
        }
    };

    const displayValue = formatDate(value);

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                    disabled={disabled}
                >
                    <Calendar className="mr-2 h-4 w-4" />
                    {displayValue}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-3" align="start">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Select Date</label>
                    <Input
                        type="date"
                        value={displayValue}
                        onChange={handleDateChange}
                        className="w-full"
                    />
                    <div className="flex gap-2 pt-2 border-t">
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                                const today = new Date();
                                onChange(today);
                                setIsOpen(false);
                            }}
                        >
                            Today
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                                const lastMonth = new Date();
                                lastMonth.setMonth(lastMonth.getMonth() - 1);
                                onChange(lastMonth);
                                setIsOpen(false);
                            }}
                        >
                            -1 Month
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
