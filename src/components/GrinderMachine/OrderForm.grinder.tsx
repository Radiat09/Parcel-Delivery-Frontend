// <section
//   ref={orderRef as RefObject<HTMLDivElement>}
//   className="py-16 px-6 lg:px-20"
// >
//   <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
//     {/* Billing Form */}
//     <div className=" p-6 rounded-xl shadow">
//       <h2 className="text-xl font-bold text-gray-800 mb-4">
//         Billing Details
//       </h2>
//       <form className="space-y-4">
//         <div className="flex gap-4">
//           <input
//             type="text"
//             placeholder="First Name"
//             className="w-1/2 border p-3 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="w-1/2 border p-3 rounded"
//           />
//         </div>
//         <input
//           type="text"
//           placeholder="Street Address"
//           className="w-full border p-3 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Town / City"
//           className="w-full border p-3 rounded"
//         />
//         <input
//           type="text"
//           placeholder="State / Province"
//           className="w-full border p-3 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Postcode / ZIP"
//           className="w-full border p-3 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Phone"
//           className="w-full border p-3 rounded"
//         />
//         <input
//           type="email"
//           placeholder="Email Address"
//           className="w-full border p-3 rounded"
//         />
//       </form>
//     </div>

//     {/* Order Summary */}
//     <div className=" p-6 rounded-xl shadow">
//       <h2 className="text-xl font-bold text-gray-800 mb-4">Your Order</h2>
//       <div className="flex justify-between py-2 border-b">
//         <span>Product</span>
//         <span>৳1999</span>
//       </div>
//       <div className="flex justify-between py-2 font-semibold">
//         <span>Total</span>
//         <span>৳1999</span>
//       </div>

//       {/* Payment */}
//       <div className="mt-6">
//         <h3 className="font-semibold mb-2">বিকাশ পেমেন্ট</h3>
//         <img src="/images/bkash.png" alt="Bkash QR" className="w-60 mb-3" />
//         <input
//           type="text"
//           placeholder="Transaction ID"
//           className="w-full border p-3 rounded"
//         />
//         <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
//           Place Order
//         </button>
//       </div>
//     </div>
//   </div>
// </section>

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const checkoutSchema = z.object({
  email: z.email("Invalid email"),
  name: z.string().min(2, "Name is too short"),
  address: z.string().min(3, "Address is required"),
  phone: z.string().min(11, "Phone number is required"),
  shipping: z.enum(["outside-dhaka", "inside-dhaka"]),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function OrderForm() {
  const productPrice = 1999;

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: "",
      name: "",
      address: "",
      phone: "",
      shipping: "outside-dhaka",
    },
  });

  const shippingValue = form.watch("shipping");
  const shippingCharge = shippingValue === "outside-dhaka" ? 120 : 80;
  // 👇 calculate total
  const total = productPrice + shippingCharge;

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Checkout Data:", data);
    toast.success("Order placed successfully!");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
      {/* Left Section - Form */}
      <div className="lg:col-span-2 space-y-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Customer Info */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-green-600">
                Customer information
              </h2>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email Address *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Billing Details */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-green-600">
                Billing details
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="নাম লিখুন *" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="জেলা , সিটি, বাসা *" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="মোবাইল নাম্বার লিখুন *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Shipping */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-green-600">Shipping</h2>
              {/* <FormField
                control={form.control}
                name="shipping"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        onChange={(e) => {
                          console.log(field.value);
                        }}
                        defaultValue={field.value}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between border rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem
                              value="outside-dhaka"
                              id="outside-dhaka"
                            />
                            <Label htmlFor="outside-dhaka">ঢাকার বাইরে:</Label>
                          </div>
                          <span>120.00 ৳</span>
                        </div>
                        <div className="flex items-center justify-between border rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem
                              value="inside-dhaka"
                              id="inside-dhaka"
                            />
                            <Label htmlFor="inside-dhaka">ঢাকার ভিতরে:</Label>
                          </div>
                          <span>80.00 ৳</span>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <FormField
                control={form.control}
                name="shipping"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="space-y-4"
                      >
                        {/* Outside Dhaka */}
                        <FormItem>
                          <Label
                            htmlFor="outside-dhaka"
                            className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer transition ${
                              field.value === "outside-dhaka"
                                ? "border-chart-1 bg-foreground/10"
                                : "hover:bg-muted"
                            }`}
                          >
                            <RadioGroupItem
                              value="outside-dhaka"
                              id="outside-dhaka"
                              className="hidden"
                            />
                            <span>ঢাকার বাইরে:</span>
                            <span>120.00 ৳</span>
                          </Label>
                        </FormItem>

                        {/* Inside Dhaka */}
                        <FormItem>
                          <Label
                            htmlFor="inside-dhaka"
                            className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer transition ${
                              field.value === "inside-dhaka"
                                ? "border-chart-1 bg-foreground/10"
                                : "hover:bg-muted"
                            }`}
                          >
                            <RadioGroupItem
                              value="inside-dhaka"
                              id="inside-dhaka"
                              className="hidden"
                            />
                            <span>ঢাকার ভিতরে:</span>
                            <span>80.00 ৳</span>
                          </Label>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full">
              Place Order
            </Button>
          </form>
        </Form>
      </div>

      {/* Right Section - Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-600">Your order</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="w-full flex items-center justify-between border-b pb-3">
            <span className="w-[80%] ">
              মাল্টি ফাংশনাল স্মার্ট ইলেকট্রিক গ্রাইন্ডার মেশিন
            </span>
            <span className="text-sm flex items-center break-words">
              {productPrice}.00
              <span className="text-lg font-bold ml-0.5">৳</span>
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium">Shipping Charge</span>
            <span className="text-sm">
              {shippingCharge}.00
              <span className="text-lg font-bold ml-0.5">৳</span>
            </span>
          </div>

          <div className="flex items-center justify-between border-t pt-3 font-bold">
            <span>Total</span>
            <span className="text-sm">
              {total}.00
              <span className="text-lg font-bold ml-0.5">৳</span>
            </span>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
