const axios = require("axios");
const Enum = require("../helpers/Enum");

class TravelAPI {
  constructor(region) {
    this.imagesNotFound =
      "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
    this.region = region;
    this.data = [];
    this.cleanHotelData;
    this.cleanRestaurantData;
    this.cleanAttractionData;
  }

  callAPI = async (url) => {
    const tr_longitude =
      parseFloat(this.region.longitude) +
      parseFloat(this.region.longitudeDelta);
    const tr_latitude =
      parseFloat(this.region.latitude) + parseFloat(this.region.latitudeDelta);
    const bl_longitude =
      parseFloat(this.region.longitude) -
      parseFloat(this.region.longitudeDelta);
    const bl_latitude =
      parseFloat(this.region.latitude) - parseFloat(this.region.latitudeDelta);

    const options = {
      method: "GET",
      url: url,
      params: {
        tr_longitude: tr_longitude,
        tr_latitude: tr_latitude,
        bl_longitude: bl_longitude,
        bl_latitude: bl_latitude,
        limit: "10",
        // limit: "30",
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": process.env.TRAVELADVISOR_API_KEY,
        "X-RapidAPI-Host": process.env.TRAVELADVISOR_API_HOST,
      },
    };

    await axios
      .request(options)
      .then((res) => {
        this.data = res.data.data;
      })
      .catch((err) => {
        console.error(err);
        this.data = [];
      });
  };

  cleanAttractionData = () => {
    return this.data
      .filter(
        (data) =>
          "location_id" in data &&
          "name" in data &&
          "latitude" in data &&
          "longitude" in data &&
          "distance" in data
      )
      .map((data) => {
        return {
          locationId: data.location_id,
          name: data.name,
          latitude: data.latitude,
          longitude: data.longitude,
          numReviews: "num_reviews" in data ? data.num_reviews : "0",
          address: "address" in data ? data.address : "no location found",
          photo:
            "photo" in data
              ? data.photo.images.medium.url
              : this.imagesNotFound,
          ranking: "ranking" in data ? data.ranking : "no ranking found",
          rating: "rating" in data ? data.rating : "0.0",
          distance: "distance" in data ? data.distance : "-1000",
          isClosed: "is_closed" in data ? data.is_closed : false,
          price: undefined,
          hotelClass: undefined,
          subtype:
            "subtype" in data ? data.subtype[0].name : "no subtype found",
          phone: "phone" in data ? data.phone : "no phone number found",
          website:
            "website" in data ? data.website : "https://www.tripadvisor.com/",
          description:
            "description" in data ? data.description : "no description found",
        };
      });
  };

  cleanRestaurantData = () => {
    return this.data
      .filter(
        (data) =>
          "location_id" in data &&
          "name" in data &&
          "latitude" in data &&
          "longitude" in data &&
          "distance" in data &&
          "cuisine" in data &&
          data.cuisine.length >= 1
      )
      .map((data) => {
        return {
          locationId: data.location_id,
          name: data.name,
          latitude: data.latitude,
          longitude: data.longitude,
          numReviews: "num_reviews" in data ? data.num_reviews : "0",
          address: "address" in data ? data.address : "no location found",
          photo:
            "photo" in data
              ? data.photo.images.medium.url
              : this.imagesNotFound,
          ranking: "ranking" in data ? data.ranking : "no ranking found",
          rating: "rating" in data ? data.rating : "0.0",
          distance: "distance" in data ? data.distance : "-1000",
          isClosed: "is_closed" in data ? data.is_closed : false,
          price: "price" in data ? data.price : "no price found",
          hotelClass: undefined,
          subtype:
            "cuisine" in data ? data.cuisine[0].name : "no cuisine found",
          phone: "phone" in data ? data.phone : "no phone number found",
          website:
            "website" in data ? data.website : "https://www.tripadvisor.com/",
          description:
            "description" in data ? data.description : "no description found",
        };
      });
  };

  cleanHotelData = () => {
    return this.data
      .filter(
        (data) =>
          "location_id" in data &&
          "name" in data &&
          "latitude" in data &&
          "longitude" in data &&
          "distance" in data &&
          "rating" in data
      )
      .map((data) => {
        return {
          locationId: data.location_id,
          name: data.name,
          latitude: data.latitude,
          longitude: data.longitude,
          numReviews: "num_reviews" in data ? data.num_reviews : "0",
          address:
            "location_string" in data
              ? data.location_string
              : "no location found",
          photo:
            "photo" in data
              ? data.photo.images.medium.url
              : this.imagesNotFound,
          ranking: "ranking" in data ? data.ranking : "no ranking found",
          rating: "rating" in data ? data.rating : "0.0",
          distance: "distance" in data ? data.distance : "-1000",
          isClosed: "is_closed" in data ? data.is_closed : false,
          price: "price" in data ? data.price : "no price found",
          hotelClass: "hotel_class" in data ? data.hotel_class : "0.0",
          subtype: undefined,
          phone: "phone" in data ? data.phone : "no phone number found",
          website:
            "website" in data ? data.website : "https://www.tripadvisor.com/",
          description:
            "description" in data ? data.description : "no description found",
        };
      });
  };
}

module.exports = {
  TravelAPI,
};
