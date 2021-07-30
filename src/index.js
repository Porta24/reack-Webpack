const aztecSoup = {
    tomatos: 8,
    onions: 6,
    garlic: 6,
    celery: 1,
    coriander: 2,
    avocado: 3,
    chips: 2,
    cheese: 2,
}

const aztecSpicySoup = {
    ...aztecSoup,
    spicy: 2,
    garlic: 8,
}

console.log(aztecSoup);
console.log(aztecSpicySoup);