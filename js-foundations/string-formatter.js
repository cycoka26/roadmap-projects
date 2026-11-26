function cleanText(text) {
    return text.trim();
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function formatDisplayName(firstName, lastName) {
    const cleanFirstName = capitalize(cleanText(firstName));
    const cleanLastName = capitalize(cleanText(lastName));

    return cleanFirstName + " " + cleanLastName;
}

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));