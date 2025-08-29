// components/parcels/ParcelDetails.tsx
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Parcel } from "@/types";
import { Calendar, MapPin, Package, Phone, User } from "lucide-react";
import React from "react";

interface ParcelDetailsProps {
  parcel: Parcel;
}

const ParcelDetails: React.FC<ParcelDetailsProps> = ({ parcel }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "in_transit":
        return "bg-blue-100 text-blue-800";
      case "out_for_delivery":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Parcel Details</CardTitle>
          <Badge variant="outline" className={getStatusColor(parcel.status)}>
            {parcel.status.replace("_", " ").toUpperCase()}
          </Badge>
        </div>
        <CardDescription>Tracking ID: {parcel.trackingId}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-medium flex items-center">
              <User className="mr-2 h-4 w-4" />
              Receiver Information
            </h3>
            <p>{parcel.receiverName}</p>
            <p className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-2 h-4 w-4" />
              {parcel.receiverAddress}
            </p>
            <p className="flex items-center text-sm text-muted-foreground">
              <Phone className="mr-2 h-4 w-4" />
              {parcel.receiverPhone}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium flex items-center">
              <Package className="mr-2 h-4 w-4" />
              Parcel Information
            </h3>
            <p>Weight: {parcel.weight} kg</p>
            {parcel.description && (
              <p className="text-sm text-muted-foreground">
                {parcel.description}
              </p>
            )}
            <p className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              Created: {new Date(parcel.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-medium mb-2">Status History</h3>
          <div className="space-y-2">
            {parcel.statusHistory.map((status, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mr-3"></div>
                <div>
                  <p className="text-sm font-medium">
                    {status.status.replace("_", " ").toUpperCase()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(status.timestamp).toLocaleString()}
                    {status.note && ` • ${status.note}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ParcelDetails;
