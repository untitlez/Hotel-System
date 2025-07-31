"use client";

import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const inputItems = {
  payments: {
    name: "creditCard",
    label: "Credit or Bank transfer or QR Code",
    placeholder: "Credit or Bank transfer or QR Code",
    options: [
      { value: "Credit Card" },
      { value: "Bank transfer" },
      { value: "QR Code" },
    ],
  },

  CreditCard: [
    {
      name: "cardNumber",
      type: "number",
      label: "Card Number",
      placeholder: "XXXX-XXXX-XXXX-XXXX",
    },
    {
      name: "expiryDate",
      type: "text",
      label: "Expiry Date(MM/YY)",
      placeholder: "MM/YY",
    },
    {
      name: "cvv",
      type: "password",
      label: "CVV",
      placeholder: "***",
    },
  ],

  BankTransfer: [
    {
      name: "bank",
      label: "Bank",
      placeholder: "Select your bank",
      type: "radio",
      options: [
        { label: "Bangkok Bank", value: "bbl" },
        { label: "Kasikorn Bank", value: "kbank" },
        { label: "SCB", value: "scb" },
        { label: "Krungthai", value: "ktb" },
        { label: "Krungsri", value: "bay" },
      ],
      condition: "bank",
    },
    {
      type: "text",
      label: "Account Holder Name",
      placeholder: "Name as shown on the slip",
    },
  ],

  QRCode: {
    src: "/QR.webp",
    label:
      "Please scan this QR code with your banking app. And Upload Payment Slip",
    type: "file",
  },
  
};

interface BookingPaymentProps {
  payment: string;
  setPayment: React.Dispatch<React.SetStateAction<string>>;
}

export const BookingPayment = ({
  payment,
  setPayment,
}: BookingPaymentProps) => {
  return (
    <div className="bg-card p-6 rounded-xl space-y-6">
      <p>Pay with</p>

      <Select
        onValueChange={(value) => setPayment(value)}
        defaultValue={payment}
      >
        <SelectTrigger className="w-full cursor-pointer">
          <SelectValue placeholder={inputItems.payments.placeholder} />
        </SelectTrigger>
        <SelectContent>
          {inputItems.payments.options.map((value, i) => (
            <SelectItem key={i} className="cursor-pointer" value={value.value}>
              {value.value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {payment === "Credit Card" &&
        inputItems.CreditCard.map((item, i) => (
          <div key={i} className="space-y-2">
            <Label>{item.label}</Label>
            <Input type={item.type} placeholder={item.placeholder} />
          </div>
        ))}

      {payment === "Bank transfer" &&
        inputItems.BankTransfer.map((item, index) => (
          <div key={index}>
            {item.type === "radio" ? (
              <RadioGroup className="flex items-center gap-6 py-2 text-secondary-foreground/80">
                {item.options?.map((value, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <RadioGroupItem
                      className="cursor-pointer"
                      value={value.value}
                      id={value.value}
                    />
                    <Label
                      className="cursor-pointer hover:text-secondary-foreground"
                      htmlFor={value.value}
                    >
                      {value.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <div className="space-y-2">
                <Label>{item.label}</Label>
                <Input type={item.type} placeholder={item.placeholder} />
              </div>
            )}
          </div>
        ))}

      {payment === "QR Code" && (
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <div className="relative w-full max-w-xs aspect-square bg-muted">
            <Image
              src={inputItems.QRCode.src}
              alt="QR Code"
              className="object-contain"
              sizes="50vw"
              fill
            />
          </div>
          <div className="space-y-4 max-w-xs text-center">
            <p>{inputItems.QRCode.label}</p>
            <Input type={inputItems.QRCode.type} />
          </div>
        </div>
      )}
    </div>
  );
};
