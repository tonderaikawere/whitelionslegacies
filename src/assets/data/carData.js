import nissanOffer from "../all-images/cars-img/nissan-offer.png";
import toyotaOffer from "../all-images/cars-img/offer-toyota.png";
import bmwOffer from "../all-images/cars-img/bmw-offer.png";
import mercedesOffer from "../all-images/cars-img/mercedes-offer.png";
import toyotaOffer2 from "../all-images/cars-img/toyota-offer-2.png";
import teslaOffer from "../all-images/cars-img/tesla-removebg-preview.png";

import products from "./products.json";

const imagesByKey = {
  "nissan-offer": nissanOffer,
  "offer-toyota": toyotaOffer,
  "bmw-offer": bmwOffer,
  "mercedes-offer": mercedesOffer,
  "toyota-offer-2": toyotaOffer2,
  tesla: teslaOffer,
};

const carData = (products || []).map((p) => ({
  ...p,
  imgUrl: p.imageUrl || imagesByKey[p.imageKey] || toyotaOffer,
}));

export default carData;
