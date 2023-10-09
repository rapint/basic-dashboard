"use client";
import React, { useMemo, useState, useRef } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Map, {
  MapRef,
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";

import Pointer from "@/assets/point.svg";

import { LocationProps } from "@/types";

export default function MapBox({ data }: { data: LocationProps[] }) {
  const mapRef = useRef<MapRef>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [popupInfo, setPopupInfo] = useState<LocationProps>();
  const markers = useMemo(() => {
    return data.map((item: LocationProps, index: number) => {
      return (
        <Marker
          key={`marker_${index}`}
          longitude={item.longitude}
          latitude={item.latitude}
          anchor={"right"}
          style={{ cursor: "pointer", zIndex: 2 }}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo({ ...item });
            setCurrentIndex(index);
          }}
        >
          <div className={"flex items-center justify-center"}>
            <Image src={Pointer} width={15} height={30} alt={"pointer"} />
          </div>
        </Marker>
      );
    });
  }, [data]);
  return (
    <Card className="p-1 sm:p-4 w-full">
      <CardHeader>
        <div>Real-Time MapBox</div>
      </CardHeader>
      <CardBody className="p-0 sm:p-4">
        <Map
          ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
          initialViewState={{
            longitude: data[0].longitude,
            latitude: data[0].latitude,
            zoom: 5,
          }}
          doubleClickZoom={false}
          style={{
            width: "100%",
            height: 500,
            outline: "none",
            borderRadius: 10,
          }}
          mapStyle={"mapbox://styles/bohusbiogas/clcthxwdi000v15p3v6h29can"}
        >
          {markers}
          <div className="z-30">
            <GeolocateControl position="top-left" />
            <FullscreenControl position="top-left" />
            <NavigationControl position="top-left" />
          </div>
          {popupInfo && (
            <Popup
              anchor="bottom"
              longitude={popupInfo.longitude}
              latitude={popupInfo.latitude}
              maxWidth="235px"
              offset={20}
              closeButton={false}
              onClose={() => setPopupInfo(undefined)}
            >
              <div
                className={
                  "flex flex-col items-center justify-center gap-1 font-opensans"
                }
              >
                <h2 className={"font-semibold text-gray-800"}>
                  {popupInfo.label}
                </h2>
              </div>
            </Popup>
          )}
        </Map>
      </CardBody>
    </Card>
  );
}
