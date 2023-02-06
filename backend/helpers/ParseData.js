class ParseData {
  constructor(data) {
    this.data = data;
    this.mappedData = null;
    this.cleanData();
  }

  cleanData() {
    this.mappedData = this.data.data
      .filter(
        (ele) =>
          "name" in ele &&
          "latitude" in ele &&
          "longitude" in ele &&
          "num_reviews" in ele &&
          "photo" in ele &&
          "awards" in ele &&
          "distance" in ele &&
          "is_closed" in ele &&
          "address_obj" in ele &&
          "subtype" in ele
      )
      .map((ele) => {
        return {
          name: ele.name,
          latitude: ele.latitude,
          longitude: ele.longitude,
          numReviews: ele.num_reviews,
          photoUrl: ele.photo.images.medium.url,
          awards: ele.awards,
          distance: ele.distance,
          isClosed: ele.is_closed,
          addressObj: ele.address_obj,
          subtype: ele.subtype.name,
        };
      });
  }

  getCleanData() {
    return this.mappedData;
  }
}

module.exports = {
  ParseData,
};
