"use client";
import { EMAIL_REGEX } from "@/constants";
import { useState } from "react";
import { toast } from "react-toastify";

const useSubscribeForm = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions
    if (!EMAIL_REGEX.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/v1/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data?.error) {
          toast.error(
            data.error +
              ' Remove this error message and replace it with "Something went wrong." in production.',
          );
        } else {
          toast.success("Thank you for signing up!");
        }
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (error) {
      toast.warn("Something went wrong.");
    } finally {
      setEmail(""); // Clear the email input
      setIsSubmitting(false);
    }
  };

  return {
    email,
    setEmail: handleEmailChange,
    handleSubmit,
    isSubmitting,
  };
};

export default useSubscribeForm;
