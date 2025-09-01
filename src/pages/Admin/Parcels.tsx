import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MoreHorizontal,
  Package,
  PackageCheck,
  Search,
  Table,
  Truck,
  UserCheck,
  UserX,
} from "lucide-react";

export const Parcel: React.FC = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { data: parcels, isLoading, error, refetch } = useGetAllParcelsQuery();
  const [updateParcel] = useUpdateParcelMutation();

  const handleStatusChange = async (parcelId: string, status: string) => {
    try {
      await updateParcel({ id: parcelId, status }).unwrap();
      toast({
        title: "Status Updated",
        description: `Parcel status has been updated to ${status}.`,
      });
      refetch();
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to update parcel status.",
        variant: "destructive",
      });
    }
  };

  const handleBlockToggle = async (parcelId: string, isActive: boolean) => {
    try {
      await updateParcel({ id: parcelId, isActive }).unwrap();
      toast({
        title: isActive ? "Parcel Unblocked" : "Parcel Blocked",
        description: `Parcel has been ${
          isActive ? "unblocked" : "blocked"
        } successfully.`,
      });
      refetch();
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to update parcel status.",
        variant: "destructive",
      });
    }
  };

  const filteredParcels = parcels?.filter((parcel) => {
    const matchesSearch =
      parcel.trackingNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      parcel.recipientName?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || parcel.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (isLoading) return <div>Loading parcels...</div>;
  if (error) return <div>Error loading parcels</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Parcel Management</CardTitle>
        <CardDescription>
          Manage all parcels and their delivery status
        </CardDescription>
        <div className="flex items-center gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search parcels..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="in_transit">In Transit</SelectItem>
              <SelectItem value="out_for_delivery">Out for Delivery</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tracking #</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Delivery Personnel</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredParcels?.map((parcel) => (
              <TableRow key={parcel._id}>
                <TableCell className="font-medium">
                  {parcel.trackingNumber}
                </TableCell>
                <TableCell>{parcel.recipientName}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      parcel.status === "delivered"
                        ? "default"
                        : parcel.status === "cancelled"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {parcel.status.replace("_", " ")}
                  </Badge>
                </TableCell>
                <TableCell>
                  {parcel.deliveryPersonnel ? (
                    <span>{parcel.deliveryPersonnel.name}</span>
                  ) : (
                    <span className="text-muted-foreground">Not assigned</span>
                  )}
                </TableCell>
                <TableCell>
                  {new Date(parcel.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() =>
                          handleStatusChange(parcel._id, "processing")
                        }
                      >
                        <Package className="mr-2 h-4 w-4" />
                        Mark as Processing
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          handleStatusChange(parcel._id, "in_transit")
                        }
                      >
                        <Truck className="mr-2 h-4 w-4" />
                        Mark as In Transit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          handleStatusChange(parcel._id, "out_for_delivery")
                        }
                      >
                        <Truck className="mr-2 h-4 w-4" />
                        Mark as Out for Delivery
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          handleStatusChange(parcel._id, "delivered")
                        }
                      >
                        <PackageCheck className="mr-2 h-4 w-4" />
                        Mark as Delivered
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {parcel.isActive ? (
                        <DropdownMenuItem
                          onClick={() => handleBlockToggle(parcel._id, false)}
                          className="text-destructive"
                        >
                          <UserX className="mr-2 h-4 w-4" />
                          Block Parcel
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem
                          onClick={() => handleBlockToggle(parcel._id, true)}
                          className="text-green-600"
                        >
                          <UserCheck className="mr-2 h-4 w-4" />
                          Unblock Parcel
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
