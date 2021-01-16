const message = require('../config/message');
const recordService = require('../services/recordService');
const TYPE_NUMBER = "number";

async function getRecords(req, res) {
    try {

        let startDate = new Date(req.body.startDate);
        let endDate = new Date(req.body.endDate);
        let minCount = req.body.minCount;
        let maxCount = req.body.maxCount;

        //validate inputs
        if ( req.body.startDate && !startDate instanceof Date && isNaN(startDate)) {
            res.status(422).send({
                code: 422,
                message: message.INVALID_VALUE,
                field: "startDate"
            });
        }

        if ( req.body.endDate &&!endDate instanceof Date && isNaN(endDate)) {
            res.status(422).send({
                code: 422,
                message: message.INVALID_VALUE,
                field: "endDate"
            });
        }

        if (typeof minCount !== TYPE_NUMBER) {
            res.status(500).send({
                code: 500,
                message: message.INVALID_VALUE,
                field: "minCount"
            });
        }

        if (typeof maxCount !== TYPE_NUMBER) {
            res.status(500).send({
                code: 500,
                message: message.INVALID_VALUE,
                field: "maxCount"

            });
        }
        //create filter
        let filter = {
            createdAt: {
                $gte: startDate ? startDate : 0,
                $lte: endDate ? endDate : Date.now(),
            }
        }

        const records = await recordService.listRecords(filter);
        const result = await recordService.filterCounts(minCount, maxCount, records);

        return res.status(200).send({
            code: 0,
            msg: "success",
            records: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            code: 500,
            message: message.INTERNAL_SERVER_ERROR
        });
    }
}

module.exports = {
    getRecords
};