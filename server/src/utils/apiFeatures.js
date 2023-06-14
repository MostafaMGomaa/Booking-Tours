class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filter() {
    const queryObj = { ...this.queryString };
    if (queryObj['takeOff'])
      queryObj['takeOff'] = { gte: new Date(queryObj['takeOff']) };
    if (queryObj['endDate'])
      queryObj['endDate'] = { lte: new Date(queryObj['endDate']) };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    if (queryStr) {
      queryStr = queryStr.replace(
        /\b(gte|gt|lte|lt)\b/g,
        (match) => `$${match}`
      );
    }
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    /* if no sort in query string tours 'll sorted by defualt by takeOff */
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('takeOff');
    }
    return this;
  }

  limit() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  pagnation() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 400;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
