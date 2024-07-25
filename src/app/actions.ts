'use server'

import { User } from "@/models/auth";
import { BaseResponse } from "@/models/response";

export async function createUser(values: User): Promise<BaseResponse<string | null>> {
  const nickname = values?.nickname
  const isValid = nickname?.length < 2 || nickname?.length > 20

  if (!nickname || isValid) {
    return {
      data: null,
      isSuccess: false,
      message: `${
        isValid
          ? "El apodo debe tener entre 2 y 20 caracteres."
          : "El apodo es requerido."
      }`,
    };
  };

  const response = {
    data: nickname as string,
    isSuccess: true,
    message: "Inicio exitoso!",
  }

  return response
}