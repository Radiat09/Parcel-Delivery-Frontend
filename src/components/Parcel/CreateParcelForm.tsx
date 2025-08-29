// components/dashboard/sender/CreateParcelForm.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateParcelMutation } from "@/redux/features/parcel/parcel.api";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const parcelSchema = z.object({
  receiverName: z.string().min(1, "Receiver name is required"),
  receiverAddress: z.string().min(1, "Receiver address is required"),
  receiverPhone: z.string().min(1, "Receiver phone is required"),
  weight: z.number().min(0.1, "Weight must be at least 0.1 kg"),
  description: z.string().optional(),
});

type ParcelFormData = z.infer<typeof parcelSchema>;

const CreateParcelForm: React.FC = () => {
  const [createParcel, { isLoading }] = useCreateParcelMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ParcelFormData>({
    resolver: zodResolver(parcelSchema),
  });

  const onSubmit = async (data: ParcelFormData) => {
    try {
      await createParcel(data).unwrap();
      toast.success("Parcel created successfully!");
      reset();
    } catch (error: any) {
      toast.error(error.data?.message || "Failed to create parcel");
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create New Parcel</CardTitle>
        <CardDescription>
          Fill in the details to create a new parcel delivery request
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="receiverName">Receiver Name</Label>
            <Input
              {...register("receiverName")}
              className={errors.receiverName ? "border-destructive" : ""}
            />
            {errors.receiverName && (
              <p className="text-sm text-destructive">
                {errors.receiverName.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="receiverAddress">Receiver Address</Label>
            <Textarea
              {...register("receiverAddress")}
              rows={3}
              className={errors.receiverAddress ? "border-destructive" : ""}
            />
            {errors.receiverAddress && (
              <p className="text-sm text-destructive">
                {errors.receiverAddress.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="receiverPhone">Receiver Phone</Label>
            <Input
              {...register("receiverPhone")}
              className={errors.receiverPhone ? "border-destructive" : ""}
            />
            {errors.receiverPhone && (
              <p className="text-sm text-destructive">
                {errors.receiverPhone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              type="number"
              step="0.1"
              {...register("weight", { valueAsNumber: true })}
              className={errors.weight ? "border-destructive" : ""}
            />
            {errors.weight && (
              <p className="text-sm text-destructive">
                {errors.weight.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea {...register("description")} rows={2} />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Creating..." : "Create Parcel"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateParcelForm;
