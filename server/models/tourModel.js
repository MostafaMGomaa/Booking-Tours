const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Tour must have a name'],
        unique: [true, 'Tour name must be unique'],
        maxlength: [70, 'the name must be less or equal then 40 characters'],
        minlength: [10, 'the name must be more or equal then 10 characters'],
    },
    fromCountry: {
        type: String,
        required: [true, 'the tour must have from country property'],
    },
    toCountry: {
        type: String,
        required: [true, 'the tour must have destination country '],
    },
    fromCity: {
        type: String,
        required: [true, 'the tour must have from City property'],
    },
    toCity: {
        type: String,
        required: [true, 'the tour must have destination City '],
    },
    fromSite: {
        type: String,
        required: [true, 'the tour must have Airport/Station'],
    },
    toSite: {
        type: String,
        required: [true, 'the tour must have Airport/Station'],
    },
    description: {
        type: String,
        require: [true, 'must add tour description'],
        trim: true,
    },
    summary: {
        type: String,
        require: [true, 'must add tour summary'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'the tour must have price'],
    },
    startDates: [Date],
    duration: {
        type: Number,
        required: [true, 'must add tour duration time'],
    },
    rating: {
        type: Number,
        default: 4.5,
        max: [5, 'must be less or equal to 5'],
        min: [1, 'must be more or equal to 1'],
    },
    priceDiscount: {
        type: Number,
        validate: {
            validator: function(val) {
                return this.price > val;
            },
            message: 'discount price must be less than price',
        },
    },
    transportation: {
        type: String,
        trim: true,
        enum: {
            values: ['Plan', 'Bus', 'Car'],
            message: 'invalid input, must be one of [Plan, Bus, Car]',
        },
        default: 'Plan',
    },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;