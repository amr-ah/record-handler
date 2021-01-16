const recordService = require('../../services/recordService');

let mockRecords = [
    {
        key: "TAK87c6Jr4i8Z487",
        counts: [0],
        value: "Getir Task"
    },
    {
        key: "TA87Gc6Jr4i8Z487",
        counts: [1, 2],
        value: "Getir Task"
    },
    {
        key: "TAKwGc6J87i8Z487",
        counts: [100],
        value: "Getir Task"
    },
    {
        key: "TAKwGc6Jr4i88787",
        counts: [200, 200],
        value: "Getir Task"
    },
    {
        key: "TAKwGc6Jr4i8Z487",
        counts: [],
        value: "Getir Task"
    },
];
it('test zeros', async () => {

    //i made an assumption here that we dont make counts with zeros because it doesnt make sense
    await expect(await recordService.filterCounts(0, 0, mockRecords)).toEqual([]);


});

it('test valid values 1', async () => {
    await expect(await recordService.filterCounts(399, 411, mockRecords)).toEqual([{
        createdAt: undefined,
        key: "TAKwGc6Jr4i88787",
        totalCount: 400,
    },]);
});

it('test valid values 2', async () => {
    await expect(await recordService.filterCounts(0, 100, mockRecords)).toEqual([{
        createdAt: undefined,
        key: "TA87Gc6Jr4i8Z487",
        totalCount: 3,
    },]);
});
