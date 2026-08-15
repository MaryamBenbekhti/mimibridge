"use client";

import React from "react";
import CityGuidePage from "@/components/CityGuidePage";
import { CITIES_DATA } from "@/data/citiesData";

export default function TrabzonCityPage() {
  return <CityGuidePage data={CITIES_DATA.trabzon} />;
}
