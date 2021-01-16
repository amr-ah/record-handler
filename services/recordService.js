"use strict"
const Record = require('../models/Record');
// const async = require('async')
// const record = require("async");


async function listRecords(filters) {
    return await Record.find(filters).exec();
}

async function filterCounts(minCount, maxCount, records) {
    return records.map(record => {
        return {
            key: record.key,
            createdAt: record.createdAt,
            totalCount: record.counts ? record.counts.reduce(function (a, b) {
                return a + b;
            }, 0) : 0,
        };
    }).filter(function (record) {
        return record.totalCount > minCount && record.totalCount < maxCount;
    });
}

module.exports = {
    listRecords,
    filterCounts
};