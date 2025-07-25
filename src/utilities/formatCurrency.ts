// using undefined so that it can be basedon the country you live in
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: "USD", style: "currency"})

export function formatCurrency (number: number) {
    // to use the format
    return CURRENCY_FORMATTER.format(number)
}